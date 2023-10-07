import { Container, Typography, Box } from "@mui/material";
import CharacterCards from "../characterCards/CharacterCards";

const PersonalityTraits = () => {
  return (
    <>
      <Container
        sx={{ padding: "0 32px !important", maxWidth: "893px !important" }}>
        <Typography
          className="fontPrompt font_weight_600 font_size_20"
          sx={{
            color: "#00ac4e",
            textAlign: "left",
            marginBottom: { md: "4rem" },
          }}>
          Personality traits
        </Typography>
        <Box
          sx={{
            maxWidth: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
          }}>
          {/* left side of flexbox */}
          <Box
            sx={{
              borderRight: "1px solid #e0e0e0",
              display: "block !important",
            }}>
            {/*  boxes with actual text and blue progress */}

            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
                padding: "37px 0",
              }}>
              <Typography
                sx={{
                  position: "absolute",
                  left: 0,
                  top: { xs: "0", md: "23px" },
                }}
                variant="h5"
                className="fontPrompt font_weight_400 font_size_20">
                Risk-tolerant
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  padding: "37px",
                  maxWidth: "276px",
                  width: "100%",
                  position: "absolute",
                  right: 0,
                }}>
                <Typography
                  sx={{
                    padding: "6px 28px 6px 28px",
                    backgroundColor: "#1a73e8",
                    borderRadius: "6px 0 0 6px",
                    position: "absolute",
                    right: 0,
                    top: "-6px",
                  }}></Typography>
              </Typography>
            </Typography>

            {/* 2nd one */}
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
                padding: "37px 0",
              }}>
              <Typography
                sx={{
                  position: "absolute",
                  left: 0,
                  top: { xs: "0", md: "23px" },
                }}
                variant="h5"
                className="fontPrompt font_weight_400 font_size_20">
                Trusting
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  padding: "37px",
                  maxWidth: "276px",
                  width: "100%",
                  position: "absolute",
                  right: 0,
                }}>
                <Typography
                  sx={{
                    padding: "0",
                    backgroundColor: "#1a73e8",
                    borderRadius: "6px 0 0 6px",
                    position: "absolute",
                    right: 0,
                    top: "-6px",
                  }}></Typography>
              </Typography>
            </Typography>
            {/* //////// */}
            {/* 3rd one */}
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
                padding: "37px 0",
              }}>
              <Typography
                sx={{
                  position: "absolute",
                  left: 0,
                  top: { xs: "0", md: "23px" },
                }}
                variant="h5"
                className="fontPrompt font_weight_400 font_size_20">
                Optimistic
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  padding: "37px",
                  maxWidth: "276px",
                  width: "100%",
                  position: "absolute",
                  right: 0,
                }}>
                <Typography
                  sx={{
                    padding: "6px 128.5px 6px 128.5px",
                    backgroundColor: "#1a73e8",
                    borderRadius: "6px 0 0 6px",
                    position: "absolute",
                    right: 0,
                    top: "-6px",
                  }}></Typography>
              </Typography>
            </Typography>
            {/* end  */}
            {/* 4rd one */}
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
                padding: "37px 0",
              }}>
              <Typography
                sx={{
                  position: "absolute",
                  left: 0,
                  top: { xs: "0", md: "23px" },
                }}
                variant="h5"
                className="fontPrompt font_weight_400 font_size_20">
                Delibrate
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  padding: "37px",
                  maxWidth: "276px",
                  width: "100%",
                  position: "absolute",
                  right: 0,
                }}>
                <Typography
                  sx={{
                    padding: 0,
                    backgroundColor: "#1a73e8",
                    borderRadius: "6px 0 0 6px",
                    position: "absolute",
                    right: 0,
                    top: "-6px",
                  }}></Typography>
              </Typography>
            </Typography>
            {/* end  */}
            {/* 5th one */}
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
                padding: "37px 0",
              }}>
              <Typography
                sx={{
                  position: "absolute",
                  left: 0,
                  top: { xs: "0", md: "23px" },
                }}
                variant="h5"
                className="fontPrompt font_weight_400 font_size_20">
                Matter-of-fact
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  padding: "37px",
                  maxWidth: "276px",
                  width: "100%",
                  position: "absolute",
                  right: 0,
                }}>
                <Typography
                  sx={{
                    padding: "6px 76.5px 6px 76.5px",
                    backgroundColor: "#1a73e8",
                    borderRadius: "6px 0 0 6px",
                    position: "absolute",
                    right: 0,
                    top: "-6px",
                  }}></Typography>
              </Typography>
            </Typography>
            {/* end  */}
            {/* 6th one */}
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
                padding: "37px 0",
              }}>
              <Typography
                sx={{
                  position: "absolute",
                  left: 0,
                  top: { xs: "0", md: "23px" },
                }}
                variant="h5"
                className="fontPrompt font_weight_400 font_size_20">
                Autonomous
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  padding: "37px",
                  maxWidth: "276px",
                  width: "100%",
                  position: "absolute",
                  right: 0,
                }}>
                <Typography
                  sx={{
                    padding: 0,
                    backgroundColor: "#1a73e8",
                    borderRadius: "6px 0 0 6px",
                    position: "absolute",
                    right: 0,
                    top: "-6px",
                  }}></Typography>
              </Typography>
            </Typography>
            {/* end  */}
            {/* 7th one */}
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
                padding: "37px 0",
              }}>
              <Typography
                sx={{
                  position: "absolute",
                  left: 0,
                  top: { xs: "0", md: "23px" },
                }}
                variant="h5"
                className="fontPrompt font_weight_400 font_size_20">
                Supporting
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  padding: "37px",
                  maxWidth: "276px",
                  width: "100%",
                  position: "absolute",
                  right: 0,
                }}>
                <Typography
                  sx={{
                    padding: 0,
                    backgroundColor: "#1a73e8",
                    borderRadius: "6px 0 0 6px",
                    position: "absolute",
                    right: 0,
                    top: "-6px",
                  }}></Typography>
              </Typography>
            </Typography>
            {/* end  */}
            {/* end of   */}
          </Box>
          {/* end of left side */}

          {/* Right side of flexbox */}
          <Box>
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
                padding: "37px 0",
              }}>
              <Typography
                variant="h5"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  padding: "37px",
                  maxWidth: "276px",
                  width: "100%",
                  position: "absolute",
                  left: 0,
                }}>
                <Typography
                  sx={{
                    padding: 0,
                    backgroundColor: "#1a73e8",
                    borderRadius: "0 6px 6px 0",
                    position: "absolute",
                    left: 0,
                    top: "-6px",
                  }}></Typography>
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  right: 0,
                  top: { xs: "0", md: "23px" },
                }}
                variant="h5"
                className="fontPrompt font_weight_400 font_size_20">
                Risk-averse
              </Typography>
            </Typography>
            {/* end of 1 */}
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
                padding: "37px 0",
              }}>
              <Typography
                variant="h5"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  padding: "37px",
                  maxWidth: "276px",
                  width: "100%",
                  position: "absolute",
                  left: 0,
                }}>
                <Typography
                  sx={{
                    padding: "6px 17.5px 6px 17.5px",
                    backgroundColor: "#1a73e8",
                    borderRadius: "0 6px 6px 0",
                    position: "absolute",
                    left: 0,
                    top: "-6px",
                  }}></Typography>
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  right: 0,
                  top: { xs: "0", md: "23px" },
                }}
                variant="h5"
                className="fontPrompt font_weight_400 font_size_20">
                Skeptical
              </Typography>
            </Typography>
            {/* end of 2 */}
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
                padding: "37px 0",
              }}>
              <Typography
                variant="h5"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  padding: "37px",
                  maxWidth: "276px",
                  width: "100%",
                  position: "absolute",
                  left: 0,
                }}>
                <Typography
                  sx={{
                    padding: 0,
                    borderRadius: "0 6px 6px 0",
                    backgroundColor: "#1a73e8",

                    position: "absolute",
                    left: 0,
                    top: "-6px",
                  }}></Typography>
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  right: 0,
                  top: { xs: "0", md: "23px" },
                }}
                variant="h5"
                className="fontPrompt font_weight_400 font_size_20">
                Progmatic
              </Typography>
            </Typography>
            {/* end of 3 */}
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
                padding: "37px 0",
              }}>
              <Typography
                variant="h5"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  padding: "37px",
                  maxWidth: "276px",
                  width: "100%",
                  position: "absolute",
                  left: 0,
                }}>
                <Typography
                  sx={{
                    padding: "6px 55.5px 6px 55.5px",
                    borderRadius: "0 6px 6px 0",
                    backgroundColor: "#1a73e8",

                    position: "absolute",
                    left: 0,
                    top: "-6px",
                  }}></Typography>
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  right: 0,
                  top: { xs: "0", md: "23px" },
                }}
                variant="h5"
                className="fontPrompt font_weight_400 font_size_20">
                Fast-paced
              </Typography>
            </Typography>
            {/* end of 4 */}
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
                padding: "37px 0",
              }}>
              <Typography
                variant="h5"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  padding: "37px",
                  maxWidth: "276px",
                  width: "100%",
                  position: "absolute",
                  left: 0,
                }}>
                <Typography
                  sx={{
                    padding: 0,
                    borderRadius: "0 6px 6px 0",
                    backgroundColor: "#1a73e8",

                    position: "absolute",
                    left: 0,
                    top: "-6px",
                  }}></Typography>
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  right: 0,
                  top: { xs: "0", md: "23px" },
                }}
                variant="h5"
                className="fontPrompt font_weight_400 font_size_20">
                Expressive
              </Typography>
            </Typography>
            {/* end of 5 */}
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
                padding: "37px 0",
              }}>
              <Typography
                variant="h5"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  padding: "37px",
                  maxWidth: "276px",
                  width: "100%",
                  position: "absolute",
                  left: 0,
                }}>
                <Typography
                  sx={{
                    padding: "6px 47px 6px 47px",
                    borderRadius: "0 6px 6px 0",
                    backgroundColor: "#1a73e8",

                    position: "absolute",
                    left: 0,
                    top: "-6px",
                  }}></Typography>
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  right: 0,
                  top: { xs: "0", md: "23px" },
                }}
                variant="h5"
                className="fontPrompt font_weight_400 font_size_20">
                Collaborative
              </Typography>
            </Typography>
            {/* end of 6 */}
            <Typography
              component="div"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "relative",
                padding: "37px 0",
              }}>
              <Typography
                variant="h5"
                sx={{
                  borderTop: "1px solid #e0e0e0",
                  padding: "37px",
                  maxWidth: "276px",
                  width: "100%",
                  position: "absolute",
                  left: 0,
                }}>
                <Typography
                  sx={{
                    padding: "6px 92.5px 6px 92.5px",
                    borderRadius: "0 6px 6px 0",
                    backgroundColor: "#1a73e8",

                    position: "absolute",
                    left: 0,
                    top: "-6px",
                  }}></Typography>
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  right: 0,
                  top: { xs: "0", md: "23px" },
                }}
                variant="h5"
                className="fontPrompt font_weight_400 font_size_20">
                Dominant
              </Typography>
            </Typography>
            {/* end of 7 */}
          </Box>
          {/*  */}
        </Box>
      </Container>
      <Typography
        component="div"
        sx={{
          padding: "2rem 0",
          borderBottom: "1px solid #e0e0e0",
          maxWidth: "970px",
          margin: "0 auto",
          width: "100%",
        }}></Typography>

      {/* CARDS !!!!! */}
      <Container sx={{ maxWidth: "893px", margin: "0 auto" }}>
        <CharacterCards />
      </Container>
      {/* END OF CARDS !!! */}
    </>
  );
};

export default PersonalityTraits;
