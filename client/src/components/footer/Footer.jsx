import "./footer.css";
import {Container, Typography, Box} from "@mui/material";
import instagram from "../../assets/Instagram.svg";
import linkedin from "../../assets/linkedin.svg";
const Footer = () => {
  return (
    <Container
      maxWidth={"100%"}
      height={{xs: "409px", md: "320px"}}
      sx={{padding: {xs: "3.2rem", md: "6.4rem"}, backgroundColor: "#f2f2f2"}}>
      <Box
        sx={{
          color: "black",
          display: "flex",
          justifyContent: "start",
          width: "100%",
          flexDirection: {xs: "column", md: "row"},
        }}>
        <Typography
          variant="div"
          sx={{margin: {md: "0 90px 0 160px", lg: "0 155px 0 230px"}}}>
          <Typography
            variant="h6"
            className="fontRoboto font_size_16"
            sx={{
              fontWeight: 500,
              marginBottom: "4rem",
            }}>
            CONTACT DETAILS
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 300,
              marginBottom: "2rem",
            }}
            className="fontRoboto font_size_16">
            Amsterdam
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 300,
              marginBottom: "2rem",
            }}
            className="fontRoboto font_size_16">
           info@benco.me
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 300,
              marginBottom: "6.2rem",
            }}
            className="fontRoboto font_size_16">
           +31 6 177 46 103
          </Typography>
        </Typography>
        <Typography variant="div">
          {" "}
          <Typography
            variant="h6"
            className="fontRoboto font_size_16"
            sx={{
              fontWeight: 500,
              marginBottom: "1.6rem",
            }}>
            CONTACT US
          </Typography>
          <Typography variant="h6">
            <img
              className="footer_logo"
              style={{marginRight: "1.6rem"}}
              src={instagram}
              alt="instagram"
            />{" "}
            <img className="footer_logo" src={linkedin} alt="linkedin" />
          </Typography>
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 300,
          margin: {xs: "6rem 0 0 0", md: "0 0 60px 160px", lg: "0 0 0 230px"},
        }}
        className="fontRoboto font_size_16">
        Copyright © Temma 2023
      </Typography>
    </Container>
  );
};

export default Footer;
