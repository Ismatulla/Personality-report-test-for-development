import { useState } from "react";
import { Box, Typography, Button, List, ListItem } from "@mui/material";
import searchicon from "../../assets/search-icon.svg";
import personalityColor from "../../assets/personality-indicator-color.svg";
import smallArrow from "../../assets/sm-arrow.svg";
import "../../components/../pages/report/report.css";
const Contacts = () => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <>
      {/* for mobile device */}
      <Box
        sx={{
          padding: "2.4rem 0",
          display: { xs: "flex", md: "none" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: "4px", md: 0 },
        }}>
        <Typography
          variant="h6"
          className="fontPrompt font_weight_700 font_size_16 "
          sx={{ color: "#1a73e8", marginBottom: { xs: 0, md: "2.4rem" } }}>
          Contacts
        </Typography>
        <Typography
          variant="div"
          component="div"
          sx={{
            background: "#fff",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            padding: "1.2rem",
          }}>
          <input
            type="text"
            name="contacts"
            placeholder="Search"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            style={{
              width: "100%",
              background: "#fff",
              border: "none",
              outline: "none",
            }}
          />{" "}
          <Button sx={{ minWidth: "0 !important", padding: "0 !important" }}>
            {" "}
            <img src={searchicon} alt="search icon" />
          </Button>
        </Typography>
      </Box>
      {/* end of mobile device  */}
      <Box
        sx={{
          borderRadius: "6px",
          border: "1px solid #e0e0e0",
          paddingBottom: "2px",
          width: { sm: "100%", md: "284px" },
          marginTop: { md: "4rem" },
          maxHeight: { xs: "614px", md: "840px" },
          overflowY: "auto",
        }}>
        <Box
          sx={{
            padding: "2.4rem",
            backgroundColor: "#f2f2f2",
            display: { xs: "none", md: "block" },
            gap: { xs: "4px", md: 0 },
          }}>
          <Typography
            variant="h6"
            className="fontPrompt font_weight_700 font_size_16"
            sx={{ color: "#1a73e8", marginBottom: { xs: 0, md: "2.4rem" } }}>
            Contacts
          </Typography>
          <Typography
            variant="div"
            component="div"
            sx={{
              background: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              padding: "1.2rem",
            }}>
            <input
              type="text"
              name="contacts"
              placeholder="Search"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              style={{
                width: "100%",
                background: "#fff",
                border: "none",
                outline: "none",
              }}
            />{" "}
            <Button sx={{ minWidth: "0 !important", padding: "0 !important" }}>
              {" "}
              <img src={searchicon} alt="search icon" />
            </Button>
          </Typography>
        </Box>
        <Box sx={{ padding: "0 !important" }}>
          {/* one profile  */}
          <List
            sx={{
              padding: "13px 24px !important",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              borderBottom: "1px solid #e0e0e0",
              cursor: "pointer",
            }}>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "sapace-between",
                alignItems: "center",
                padding: "0 !important",
                width: "100%",
                gap: "1.2rem",
                flex: 2,
              }}>
              <img src={personalityColor} alt="img" />{" "}
              <Typography
                variant="p"
                className="fontRoboto font_weight_400  font_size_16">
                Patrick Ryan
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                padding: "0 !important",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                flex: 1,
              }}>
              {" "}
              <img src={smallArrow} alt="arrow" />
            </ListItem>
          </List>
          {/* end of one profile */}
          <List
            sx={{
              padding: "13px 24px !important",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              borderBottom: "1px solid #e0e0e0",
              cursor: "pointer",
            }}>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "sapace-between",
                alignItems: "center",
                padding: "0 !important",
                width: "100%",
                gap: "1.2rem",
                flex: 2,
              }}>
              <img src={personalityColor} alt="img" />{" "}
              <Typography
                variant="p"
                className="fontRoboto font_weight_400  font_size_16">
                Patrick Ryan
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                padding: "0 !important",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                flex: 1,
              }}>
              {" "}
              <img src={smallArrow} alt="arrow" />
            </ListItem>
          </List>
          <List
            sx={{
              padding: "13px 24px !important",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              borderBottom: "1px solid #e0e0e0",
              cursor: "pointer",
            }}>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "sapace-between",
                alignItems: "center",
                padding: "0 !important",
                width: "100%",
                gap: "1.2rem",
                flex: 2,
              }}>
              <img src={personalityColor} alt="img" />{" "}
              <Typography
                variant="p"
                className="fontRoboto font_weight_400  font_size_16">
                Patrick Ryan
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                padding: "0 !important",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                flex: 1,
              }}>
              {" "}
              <img src={smallArrow} alt="arrow" />
            </ListItem>
          </List>
          <List
            sx={{
              padding: "13px 24px !important",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              borderBottom: "1px solid #e0e0e0",
              cursor: "pointer",
            }}>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "sapace-between",
                alignItems: "center",
                padding: "0 !important",
                width: "100%",
                gap: "1.2rem",
                flex: 2,
              }}>
              <img src={personalityColor} alt="img" />{" "}
              <Typography
                variant="p"
                className="fontRoboto font_weight_400  font_size_16">
                Patrick Ryan
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                padding: "0 !important",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                flex: 1,
              }}>
              {" "}
              <img src={smallArrow} alt="arrow" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Contacts;
