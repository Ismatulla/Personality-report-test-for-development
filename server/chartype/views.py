from rest_framework import views, response
from .serializers import LinkedinUrlSerializer
from .utils import predictions_dict
import joblib
import requests
import pandas as pd
import spacy
import pickle
from rest_framework.permissions import IsAuthenticated
from users.serializers import LinkedinSerializer
from users.models import Linkedin_data, User
from rest_framework.authentication import TokenAuthentication

def tokenize_text(text):
    nlp = spacy.load("en_core_web_sm")
    doc = nlp(text)
    return " ".join([token.text for token in doc])

def model_link(link):
    id = link.split('/')[4]
    url = "https://api.iscraper.io/v2/profile-details"

    payload = {
        'profile_id': id,
    }
    headers = {
        'X-API-KEY': 'hVSqiv11cY1W5YUawXUDLBn0jb4G5W44',
    }

    response = requests.post(url, json=payload, headers=headers)
    res=response.json()
    positions0=[]
    positions1=[]
    skills=[]
    field_of_studies0=[]
    field_of_studies1=[]
    degrees0=[]
    degrees1=[]
    industries=[]
    summaries=[]
    
    try:
        skills.append(res['skills'])
    except:
        skills.append("Nan")
    try:
        position0=res['position_groups'][0]['profile_positions'][0]['title']
        positions0.append(position0)
    except:
        positions0.append("Nan")

    try:
        position1=res['position_groups'][1]['profile_positions'][0]['title']
        positions1.append(position1)
    except:
        positions1.append("Nan")

    field_of_study0=""
    try:
        field_of_study0=res['education'][0]['field_of_study']
        field_of_studies0.append(field_of_study0)
    except:
        field_of_study0="Nan"
        field_of_studies0.append(field_of_study0)

    try:
        field_of_study1=res['education'][1]['field_of_study']
        field_of_studies1.append(field_of_study1)
    except:
        field_of_study1="Nan"
        field_of_studies1.append(field_of_study1)
    try:
        degree_name0=res['education'][0]['degree_name']
        degrees0.append(degree_name0)
    except:
        degree_name0="Nan"
        degrees0.append(degree_name0)
    try:
        degree_name1=res['education'][1]['degree_name']
        degrees1.append(degree_name1)
    except:
        degree_name1="Nan"
        degrees1.append(degree_name1)
    try:
        summaries.append(res['summary'])
    except:
        summaries.append("Nan")
    try:
        industries.append(res['industry'])
    except:
        industries.append("Nan")

    
    user_input = pd.DataFrame({
        'position 1': positions0[0],
        'position 2': positions1[0],
        'field of studies 1': field_of_studies0[0],

        'field of studies 2': field_of_studies1[0],
        'degree 1':degrees0[0],
        'degree 2':degrees1[0],
        'industry': industries[0],
        'skills': skills[0],
    })
    user_input=user_input.fillna("Nan")
    first_name=res['first_name']
    last_name=res['last_name']

    prof_pic="Nan"
    if res['profile_picture']:
        prof_pic=res['profile_picture']
        
    return user_input, first_name, last_name, prof_pic 

class LinkedinUrl(views.APIView):

    tfidf_vectorizer = pickle.load(open("./chartype/vectorizer.pickle", 'rb'))
    model = joblib.load('./chartype/XGBoost_1st_attempt_60k.joblib')
    
    def post(self, request):
        serializer=LinkedinUrlSerializer(data=request.data)
        if serializer.is_valid():
            link = serializer.validated_data['link']
            username=serializer.validated_data['username']
            user=User.objects.filter(username=username).first()
            try:
                user_input, first_name, last_name, prof_pic=model_link(link)

                user_input['tokenized_text'] = user_input.apply(lambda row: tokenize_text(" ".join(row.astype(str))), axis=1)
                user_input_tfidf = self.tfidf_vectorizer.transform(user_input['tokenized_text'])
                predicted_character = self.model.predict(user_input_tfidf)
                responses={"chartype":predictions_dict[predicted_character[0]],
                            "first_name":first_name,
                            "last_name":last_name, "prof_pic":prof_pic}
                
                user_linkedin_data = {
                                    'user': user,
                                    'linkedin_url': link,
                                    'first_name': first_name,
                                    'last_name': last_name,
                                    'chartype': predicted_character,
                                    'prof_pic': prof_pic}
                serializer_linkedin = LinkedinSerializer(data=user_linkedin_data)
                if serializer_linkedin.is_valid():
                    serializer_linkedin.save()

                return response.Response(responses)
            except:
                return response.Response(serializer.errors, status=400)
        return response.Response(serializer.errors, status=400)
    