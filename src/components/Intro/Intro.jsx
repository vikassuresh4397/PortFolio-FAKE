import React, { useContext } from "react";
import "./Intro.css";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import Resume from "./ResumeLatest/Vikas-Suresh-Resume.pdf";
import { Link } from "react-scroll";
const Intro = () => {

  const downloadResume = () => {

    const link = document.createElement("a");
    
    link.href = Resume;
    
    link.download = "Vikas-Suresh-Resume.pdf";
    
    link.click();
  };
 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (

    <div>
       <div className="Intro" id="Intro" >
      
    
      <div className="socialmedia" style={{position:"sticky"}}>
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "15.1px",
          }}
        >
          <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "15.1px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 1px",
                }}
              >
                <img
                  style={{
                    height: "33.8px",
                    width: "33.8px",
                    position: "relative",
                    filter: darkMode ? "invert(1)" : "none",
                  }}
                  loading="lazy"
                  alt=""
                  src="/facebook.svg"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 1px",
                }}
              >
                <img
                  style={{
                    height: "33.8px",
                    width: "33.8px",
                    position: "relative",
                    filter: darkMode ? "invert(1)" : "none",
                  }}
                  loading="lazy"
                  alt=""
                  src="/instagram.svg"
                />
              </div>
              <img
                style={{
                  width: "33.8px",
                  height: "33.8px",
                  position: "relative",
                  filter: darkMode ? "invert(1)" : "none",
                }}
                loading="lazy"
                alt=""
                src="/twitter.svg"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 3px",
                }}
              >
                <img
                  style={{
                    height: "30px",
                    width: "30px",
                    position: "relative",
                    filter: darkMode ? "invert(1)" : "none",
                   
                  }}
                  loading="lazy"
                  alt=""
                  src="/github.svg"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 1px 0px 1.1px",
                }}
              >
                <img
                  style={{
                    height: "33.8px",
                    width: "33.8px",
                    position: "relative",
                    filter: darkMode ? "invert(1)" : "none",
                  }}
                  loading="lazy"
                  alt=""
                  src="/linkedin.svg"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 0px 1px",
                }}
              >
                <img
                  style={{
                    height: "35px",
                    width: "35px",
                    position: "relative",
                    filter: darkMode ? "invert(1)" : "none",
                  }}
                  loading="lazy"
                  alt=""
                  src="/telegram.svg"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 3px",
                }}
              >
                <div
                  style={{
                    height: "30px",
                    width: "30px",
                    position: "relative",
                    filter: darkMode ? "invert(1)" : "none",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      borderRadius: "50%",
                      border: "0px solid #000",
                      boxSizing: "border-box",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <img
                    style={{
                      position: "absolute",
                      top: "1px",
                      left: "5px",
                      borderRadius: "12px",
                      width: "20px",
                      height: "28.1px",
                      objectFit: "contain",
                      zIndex: "1",
                    }}
                    loading="lazy"
                    alt=""
                    src="/koo-black@2x.png"
                  />
                </div>
              </div>
            </div>
          {/* Social media icons */}
        </div>
      
      </div>

      {/* left name side */}
      <div style={{paddingLeft:"20px"}} className="i-left">
        <div className="i-name">
        
          <button
                    style={{
                      cursor: "pointer",
                      border: "none",
                      padding: "1px 3px",

                      backgroundColor: "transparent",
                      width: "197px",
                      borderRadius: "50px 50px 50px 0px",
                      background: "linear-gradient(90deg, #32f6f6, #a6a79f)",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        height: "72px",
                        width: "197px",
                        position: "relative",
                        borderRadius: "50px 50px 50px 0px",
                        background: "linear-gradient(90deg, #32f6f6, #a6a79f)",
                        display: "none",
                      }}
                    />
                    <b
                      style={{
                        flex: "1",
                        position: "relative",
                        fontSize: "36px",
                        lineHeight: "44px",
                        fontFamily: "'Segoe UI'",
                        color: "#fff",
                        textAlign: "left",
                        zIndex: "1",
                        fontWeight:"bold"
                      }}
                    >
                      Hello!
                    </b>
                  </button>

          <span style={{ color: darkMode ? "white" : "black" }}>I Am Anish</span>
          
        </div>
        <h2 style={{marginTop:"-50px", width:"75%"}}>
          UI/UX Designer, Front-End Developer & Thinker. Based in India.
          </h2>
        <Link to="contact" smooth={true} spy={true}>
         
          <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "25px",
                    maxWidth: "90%",

                  }}
                >
                  <button
                    style={{
                      cursor: "pointer",
                      border: "0px solid #fff",
                      padding: "17px 19px 14px 20px",
                      backgroundColor: "transparent",
                      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.25)",
                      borderRadius: "10px",
                      background: "linear-gradient(90deg, #df580c, #fd993d)",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      whiteSpace: "nowrap",
                      transition: "background-color 0.3s, color 0.3s",
                    }}
                    onClick={downloadResume}
                  >
                    <img
                      style={{
                        height: "60px",
                        width: "175px",
                        position: "relative",
                        borderRadius: "10px",
                        display: "none",
                      }}
                      alt=""
                      src="/cv-button.svg"
                    />
                    <div
                      style={{
                        position: "relative",
                        fontSize: "20px",
                        fontWeight: "900",
                        fontFamily: "'Segoe UI'",
                        color: "#fefefe",
                        textAlign: "left",
                        zIndex: "1",
                      }}
                    >
                      Download CV
                    </div>
                  </button>
                  <button
                    style={{
                      cursor: "pointer",
                      border: "0px solid #fff",
                      padding: "17px 19px 14px 20px",
                      backgroundColor: "transparent",
                      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.25)",
                      borderRadius: "10px",
                      background: "linear-gradient(90deg, #434343, #000)",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <img
                      style={{
                        height: "60px",
                        width: "175px",
                        position: "relative",
                        borderRadius: "10px",
                        display: "none",
                      }}
                      alt=""
                      src="/cv-button.svg"
                    />
                    <div
                      style={{
                        position: "relative",
                        fontSize: "20px",
                        fontWeight: "900",
                        fontFamily: "'Segoe UI'",
                        color: "#fefefe",
                        textAlign: "left",
                        zIndex: "1",
                      }}
                    >
                      Get in Touch!
                    </div>
                  </button>
                </div>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          {/* <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" /> */}
        </div>
      </div>

      
      {/* right image side */}
      <div style={{paddingRight:"75px"}} className="i-right">
      <div
                style={{
                 
                  height: "712.4px",
                  flex: "1",
                  position: "relative",
                  flexShrink: "0",
                  debugCommit: "1de1738",
                  maxWidth: "100%",
                  marginLeft:"25%"
                }}
              >
              
               
                 <img
                  style={{
                    position: "absolute",
                    top: "-250px",

                    left: "-59px",
                    borderRadius: "170px 300px 300px 800px",
                    width: "900px",
                    height: "975.3px",

                    objectFit: "contain",
                    zIndex: "1",
                  }}
                  loading="lazy"
                  alt=""
                  src="/last.svg"

                />
              </div> 
  
        

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>




      
      
    </div>
      
      
    
    </div>
   
  );
};

export default Intro;
