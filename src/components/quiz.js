import React, { Component, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";

import Background2 from "../images/DR_FAKE_Stills-1.png";
import Background3 from "../images/DR_FAKE_Stills-2.png";
import Background4 from "../images/DR_FAKE_Stills-3.png";
import deepfakeBg from "../images/DR_FAKE_Stills-12.png";


import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import "./quiz.css";
import TextBox from "./TextBox";
import { withTranslation } from "react-i18next";
import Questions from "./questions";
import MainButton from "./MainButton";

const intro_states = [

  {
    image: `url(${Background2})`,
    state_num: 0,
    show_intro: true,
    show_qestions: false,
  },
  {
    image: `url(${Background3})`,
    state_num: 1,
    show_intro: true,
    show_qestions: false,
  },
  {
    image: `url(${Background4})`,
    state_num: 2,
    show_intro: true,
    show_qestions: false,
  },
];

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = intro_states[0];
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.state_num === 2) {
      this.setState((state) => ({show_intro: false, show_questions: true }));
    } else {
      this.setState((state) => intro_states[state.state_num + 1]);
    }
  }

  startOver(event) {
    this.setState((state) => ({show_intro: true, show_questions: false }));
    this.setState((state) => intro_states[0]);
    }

  titleScreen() {
    const { t } = this.props;
    return (
      <div style={{ backgroundImage: this.state.image }} className="background">
        <Grid
          container
          spacing={1}
          justify="space-between"
          direction="column"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <Box display="flex" height="10vh"></Box>
          </Grid>
          <Grid container direction="row" display="flex" spacing={1}>
            <Grid item xs={6} height="35vh">
              {this.state.state_num === 0 && (
                <TextBox
                  variant="h5"
                  style={{
                    marginLeft: "20%",
                    color: "#f24e33",
                    fontWeight: "bold",
                    width: "fit-content",
                  }}
                >
                  {t("media in trouble")}
                </TextBox>
              )}
              {this.state.state_num === 1 && (
                <TextBox
                  variant="h5"
                  style={{
                    marginLeft: "25%",
                    marginRight: "35%",
                    color: "#f24e33",
                    fontWeight: "bold",
                    width: "fit-content",
                    lineHeight: 2,
                    textAlign: "left",
                  }}
                >
                  {t("drFake and his associates")}

                  <div style={{ color: "black" }}>
                    {" "}
                    {t("concurred everything")}{" "}
                  </div>
                </TextBox>
              )}
            </Grid>
            <Grid item xs={6}>
              <Box
                display="flex"
                height="35vh"
                alignItems="flex-end"
                justifyContent="center"
              >
                {this.state.state_num === 1 && (
                  <TextBox
                    variant="h5"
                    style={{
                      marginLeft: "30%",
                      marginRight: "20%",
                      color: "#f24e33",
                      fontWeight: "bold",
                      width: "fit-content",
                      lineHeight: 2,
                      textAlign: "left",
                    }}
                  >
                    <span style={{ color: "#2BA3E0" }}> {t("only you")} </span>

                    <span style={{ color: "black" }}>
                      {" "}
                      {t("save the town")}{" "}
                    </span>
                  </TextBox>
                )}
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" height="39vh" alignItems="flex-end">
              {this.state.state_num === 2 && (
                <TextBox
                  variant="h5"
                  style={{
                    marginLeft: "20%",
                    marginRight: "20%",
                    color: "#f24e33",
                    width: "fit-content",
                    lineHeight: 1.7,
                    textAlign: "left",
                    borderRadius: 50,
                  }}
                >
                  <span style={{ color: "black" }}>
                    {" "}
                    {t("fight mr troll")}{" "}
                  </span>
                </TextBox>
              )}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <MainButton
              onClick={this.handleClick}
            >
              {t("next")}
            </MainButton>        //  {/* )} */}

          </Grid>
        </Grid>
        {/* )} */}
      </div>
    );
  }

  render() {
    let isFullScreen = this.props.fromParent.isFullScreen;
    let isPortrait = this.props.fromParent.isPortrait;
    return (
      <div style={{ position: "fixed", width: "100%" }}>
        {/* {isFullScreen && !isPortrait && this.state.show_intro && this.titleScreen()}
        {this.state.show_questions && ( */}
          <Questions playAgain={this.startOver.bind(this)} fromParent={{ isFullScreen: isFullScreen, isPortrait: isPortrait }} />
          {/* )}  */}
        <link rel="preload" href={Background2} as="image"></link>
        <link rel="preload" href={Background3} as="image"></link>
        <link rel="preload" href={Background4} as="image"></link>{" "}
        <link rel="preload" href={deepfakeBg} as="image"></link>{" "}

      </div>

      // <div style={{backgroundImage: this.state.image}} className="background">
      //   <button onClick={this.handleClick}>Change</button>
      //   <link rel="preload" href={Background2} as="image"></link>
      // </div>
    );
  }
}

export default withTranslation()(Quiz);
