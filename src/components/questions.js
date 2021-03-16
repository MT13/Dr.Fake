import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { questions, villains } from "./all_questions";
import Background from "../images/DR_FAKE_quizes-17.png";
import finalWinBg from "../images/DR_FAKE_W&L-22.png";
import finalLoseBg from "../images/DR_FAKE_W&L-23.png";
import hero from "../images/DR_FAKE_W&L-19.png";
import drFake from "../images/DR_FAKE_W&L-20.png";

import "./questions.css";
import { Box, Fab } from "@material-ui/core";
import QuizButton from "./QuizButton";
import TextBox from "./TextBox";
import i18n from "i18next";
import MainButton from "./MainButton";
import SecondaryButton from "./SecondaryButton";
import PlayAgainButton from "./PlayAgainButton";
import Link from "@material-ui/core/Link";
import loseEn from "../images/lose_eng.png";
import loseGe from "../images/lose_geo.png";
import winEn from "../images/win_eng.png";
import winGe from "../images/win_geo.png";
import Image from "react-graceful-image";
import heroHealth0 from "../images/healthbars/hero5.png";
import heroHealth1 from "../images/healthbars/hero4.png";
import heroHealth2 from "../images/healthbars/hero3.png";
import heroHealth3 from "../images/healthbars/hero2.png";
import heroHealth4 from "../images/healthbars/hero1.png";

const heroHealthbars = [
  heroHealth0,
  heroHealth1,
  heroHealth2,
  heroHealth3,
  heroHealth4,
];

export default class Questions extends Component {
  constructor(props) {
    super(props);
    var vid = document.getElementById("video");
    this.state = {
      showingVillainTitle: true,
      showingQuestion: false,
      showingAnimation: false,
      showingVillainAnswer: false,
      current_question: 0,
      current_animation: "",
      minionDefeatScreen: false,
      minionWinScreen: false,
      finalWinScreen: false,
      finalLoseScreen: false,
      health: 4,
      isNextQuestion: false,
      isCorrectAnswer: false,
      healthChanged: false,
      ...questions[0],
    };
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
  }

  handleNextQuestion() {
    let minionsLastQuestion = this.state.current_question % 4 === 3;
    let lastQuestion = this.state.current_question === 15;
    this.setState((state) => ({
      showingVillainAnswer: false,
      showingQuestion:
        !minionsLastQuestion && state.health !== 0 ? true : false,
      minionDefeatScreen:
        minionsLastQuestion && state.health > 0 ? true : false,
      minionWinScreen:
        state.health === 0 || (minionsLastQuestion && state.health === 0)
          ? true
          : false,
      current_question: !lastQuestion
        ? state.current_question + 1
        : state.current_question,
    }));
  }

  handleAnswer = (correct) => {
    let villain = villains[questions[this.state.current_question].villain];
    this.setState((state) => ({
      showingQuestion: false,
      correctAnswer: correct,
      showingAnimation: true,
      current_animation: correct
        ? villain.winAnimation[4-villain.health]
        : villain.defeatAnimation[4-this.state.health],
      isCorrectAnswer: correct ? true : false,
      isNextQuestion: false,
    }));
  };

  handleVillainTitle = () => {
    let villain = villains[questions[this.state.current_question].villain];
    this.setState((state) => ({
      showingVillainTitle: false,
      showingAnimation: true,
      current_animation: villain.startAnimation,
      isNextQuestion: true,
    }));
  };

  handleMinionDefeat = () => {
    let lastQuestion = this.state.current_question === 15;
    console.log(lastQuestion);
    this.setState((state) => ({
      showingVillainTitle: lastQuestion ? false : true,
      finalLoseScreen: lastQuestion && state.health === 0 ? true : false,
      finalWinScreen: lastQuestion && state.health > 0 ? true : false,
      minionDefeatScreen: false,
      minionWinScreen: false,
    }));
  };

  handleMinionWinPlayAgain = () => {
    let villain = villains[questions[this.state.current_question].villain];
    villain.health = 4
    this.setState((state) => ({
      showingVillainTitle: true,
      minionWinScreen: false,
      current_question:
        state.current_question % 4 === 0
          ? state.current_question - 4
          : state.current_question - (state.current_question % 4),
      health: 4,
    }));
  };

  handleMinionWinSurrender = () => {

    this.setState((state) => ({
      minionWinScreen: false,
      finalLoseScreen: true,
    }));
  };

  handleHealthbars = () => {
    let video = document.getElementById("video");
    console.log("in handle healthbars");


    console.log(video.currentTime);
    console.log(this.state.healthChanged);

    if (video && !this.state.healthChanged && video.currentTime > 1.5) {
      let villain = villains[questions[this.state.current_question].villain];
      if(this.state.isCorrectAnswer) villain.health--
      this.setState((state) => ({
        health: this.state.isCorrectAnswer ? state.health: state.health-1,
        healthChanged: true,
      }));
    }
  }

  animationCallback = () =>
    this.state.isNextQuestion
      ? this.setState((state) => ({
          showingAnimation: false,
          showingQuestion: true,
        }))
      : this.setState((state) => ({
          showingAnimation: false,
          showingVillainAnswer: true,
          healthChanged: false,
        }));

  showAnimation() {
    console.log("in showAnimation");
    console.log(this.state.current_animation);
    let villain = villains[questions[this.state.current_question].villain];
    return (
      <div className="Container">
        <video
          autoPlay
          id="video"
          src={this.state.current_animation}
          className="animation"
          type="video/mp4"
          onEnded={() => this.animationCallback()}
          onTimeUpdate={
            !this.state.isNextQuestion ? () => this.handleHealthbars() : null
          }
          muted
        ></video>{" "}
        <div className="Content">
          <Grid container direction="row">
            <Grid item xs={6}>
              <img
                id="1"
                src={villain.healthImgs[villain.health]}
                className="SubContent"
              />
            </Grid>
            <Grid item xs={6}>
              <img
                id="2"
                src={heroHealthbars[this.state.health]}
                className="SubContent"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }

  finalWinScreen() {
    return (
      <div
        style={{ backgroundImage: `url(${finalWinBg})` }}
        className="background"
      >
        <Grid container>
          <Box
            display="flex"
            style={{
              height: "100vh",
              width: "100%",
              backgroundImage: `url(${hero})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Grid container alignItems="center" style={{ marginTop: "5%" }}>
              <Grid
                item
                xs={7}
                style={{ height: "25vh", marginLeft: "5%", textAlign: "left" }}
              >
                {" "}
                <img
                  key={this.state.current_question - 1}
                  src={i18n.language === "en" ? winEn : winGe}
                  style={{
                    padding: "4px",
                    objectFit: "contain",
                    height: "100%",
                  }}
                />
                <Typography
                  style={{
                    marginTop: "5%",
                    fontWeight: "bold",
                    width: "80%",
                    fontSize: "1.15rem",
                  }}
                >
                  {i18n.t("everyoneKnows")}
                </Typography>
              </Grid>
              <Grid
                container
                xs={7}
                direction="column"
                alignContent="center"
                style={{ marginBottom: "20vh", marginTop: "5%" }}
              >
                <PlayAgainButton onClick={this.props.playAgain}>
                  {i18n.t("playAgain")}
                </PlayAgainButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </div>
    );
  }

  finalLoseScreen() {
    return (
      <div
        style={{ backgroundImage: `url(${finalLoseBg})` }}
        className="background"
      >
        <Grid container>
          <Box
            display="flex"
            style={{
              height: "100vh",
              width: "100%",
              backgroundImage: `url(${drFake})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Grid container alignItems="center" style={{ marginTop: "5%" }}>
              <Grid
                item
                xs={7}
                style={{ height: "25vh", marginLeft: "5%", textAlign: "left" }}
              >
                {" "}
                <img
                  key={this.state.current_question - 1}
                  src={i18n.language === "en" ? loseEn : loseGe}
                  style={{
                    padding: "4px",
                    objectFit: "contain",
                    height: "100%",
                  }}
                />
                <Typography
                  variant="h5"
                  style={{
                    marginTop: "5%",
                    fontWeight: "bold",
                    width: "80%",
                    fontSize: "1.15rem",

                    color: "white",
                  }}
                >
                  {i18n.t("itsOk")}
                </Typography>
              </Grid>
              <Grid
                container
                xs={7}
                direction="column"
                alignContent="center"
                style={{ marginBottom: "20vh" }}
              >
                <MainButton onClick={this.props.playAgain}>
                  {i18n.t("playAgain")}
                </MainButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </div>
    );
  }

  minionDefeatScreen() {
    let villain = villains[questions[this.state.current_question - 1].villain];
    console.log(villain.defeatText[0]);
    return (
      <div
        style={{ backgroundImage: `url(${villain.defeatImg})` }}
        className="background"
      >
        <Grid container>
          <Box
            display="flex"
            style={{
              height: "100vh",
              width: "100%",
            }}
          >
            <Grid container alignItems="center" style={{ marginTop: "5%" }}>
              <Grid
                item
                xs={7}
                style={{ height: "20vh", marginLeft: "5%", textAlign: "left" }}
              >
                {" "}
                <img
                  key={this.state.current_question - 1}
                  src={villain.defeatText[0]}
                  style={{
                    padding: "4px",
                    objectFit: "contain",
                    height: "100%",
                  }}
                />
                <Typography
                  variant="h5"
                  style={{ fontWeight: "bold", marginTop: "5%" }}
                >
                  {villain.defeatText[1]}
                </Typography>
              </Grid>
              <Grid item xs={7} style={{ marginBottom: "35vh" }}>
                <MainButton onClick={this.handleMinionDefeat}>
                  {villain === "phisher"
                    ? i18n.t("finish")
                    : i18n.t("continue")}
                </MainButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </div>
    );
  }

  minionWinScreen() {
    let villain = villains[questions[this.state.current_question - 1].villain];
    return (
      <div
        style={{ backgroundImage: `url(${villain.winImg})` }}
        className="background"
      >
        <Grid container>
          <Box
            display="flex"
            style={{
              height: "100vh",
              width: "100%",
            }}
          >
            <Grid container alignItems="center" style={{ marginTop: "5%" }}>
              <Grid
                item
                xs={7}
                style={{ height: "20vh", marginLeft: "5%", textAlign: "left" }}
              >
                {" "}
                <img
                  key={this.state.current_question - 1}
                  src={villain.winText[0]}
                  style={{
                    padding: "4px",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
                <Typography
                  variant="h5"
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    marginTop: "5%",
                  }}
                >
                  {villain.winText[1]}
                </Typography>
              </Grid>
              <Grid
                container
                xs={7}
                direction="column"
                alignContent="center"
                style={{ marginBottom: "25vh" }}
              >
                <MainButton onClick={this.handleMinionWinPlayAgain}>
                  {i18n.t("startOver")}
                </MainButton>
                <SecondaryButton onClick={this.handleMinionWinSurrender}>
                  {i18n.t("surrender")}
                </SecondaryButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </div>
    );
  }

  villainTitleScreen() {
    let villain = villains[questions[this.state.current_question].villain];
    return (
      <div
        style={{ backgroundImage: `url(${villain.bg})` }}
        className="background"
      >
        <Grid
          container
          spacing={1}
          justify="space-between"
          direction="column"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <Box display="flex" height="45vh"></Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" height="40vh" alignItems="flex-end">
              <TextBox
                variant="h5"
                style={{
                  marginLeft: "20%",
                  marginRight: "20%",
                  color: "#f24e33",
                  width: "fit-content",
                  lineHeight: 1.7,
                  textAlign: "center",
                  borderRadius: 50,
                  fontWeight: "bold",
                }}
              >
                <span style={{ color: villain.colorLight }}>
                  {" "}
                  {villain.text[0]}{" "}
                </span>
                <span style={{ color: "black" }}> {villain.text[1]} </span>
              </TextBox>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <MainButton onClick={this.handleVillainTitle}>
              {i18n.t("start")}
            </MainButton>
          </Grid>
        </Grid>
      </div>
    );
  }

  renderImages() {
    if (questions[this.state.current_question].has_images) {
      return (
        <Grid container justify="center">
          <Box
            height="50vh"
            maxHeight="50vh"
            display="flex"
            alignItems="center"
            border={3}
            borderColor={
              villains[questions[this.state.current_question].villain]
                .colorLight
            }
            justify="center"
            direction="row"
            spacing={2}
          >
            {questions[this.state.current_question].images.map(
              (image, index) => {
                if (image.translation === "") {
                  return (
                    <Image
                      key={index}
                      style={{
                        padding: "4px",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src={image.img}
                    />
                  );
                } else {
                  return (
                    <Box
                      key={index}
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-start"
                      style={{ padding: "4px", height: "100%" }}
                    >
                      <Image
                        style={{
                          padding: "4px",
                          maxHeight:
                            this.state.current_question === 1 ? "40vh" : "35vh",
                          objectFit: "contain",
                        }}
                        src={image.img}
                      />
                      <Typography
                        style={{
                          padding: "2px",
                          maxHeight: "30%",
                          maxWidth: "38vh",
                          fontSize: "0.8rem",
                          fontWeight: "bold",
                          textAlign: "left",
                        }}
                      >
                        {image.translation}
                      </Typography>
                    </Box>
                  );
                }
              }
            )}
          </Box>
        </Grid>
      );
    }

    return null;
  }

  renderAnswers() {
    const { detect } = require("detect-browser");
    const browser = detect();
    let lotOfText = false;
    let charCount = 0;

    for (
      let i = 0;
      i < questions[this.state.current_question].answers.length;
      i++
    ) {
      charCount += questions[this.state.current_question].answers[i].length;
    }

    if (charCount > 170) lotOfText = true;

    if (questions[this.state.current_question].has_images) {
      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-end"
          height="20vh"
          style={{ marginTop: "5%" }}
        >
          {questions[this.state.current_question].answers.map(
            (answer, index) => {
              if (
                questions[this.state.current_question].villain === "deepfake"
              ) {
                return (
                  <QuizButton
                    key={index}
                    variant="extended"
                    onClick={this.handleAnswer.bind(this, answer.correct)}
                  >
                    {answer.text}
                  </QuizButton>
                );
              } else {
                return (
                  <QuizButton
                    key={index}
                    variant="extended"
                    onClick={this.handleAnswer.bind(this, answer.correct)}
                    style={{
                      minHeight: "15vh",
                      fontSize:
                        browser.name === "firefox" || browser.name === "opera"
                          ? "0.8rem"
                          : "0.9rem",
                    }}
                  >
                    {answer.text}
                  </QuizButton>
                );
              }
            }
          )}
        </Grid>
      );
    } else {
      return (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ marginLeft: "20%", marginRight: "20%" }}
        >
          {questions[this.state.current_question].answers.map(
            (answer, index) => {
              return (
                <QuizButton
                  key={index}
                  variant="extended"
                  onClick={this.handleAnswer.bind(this, answer.correct)}
                  style={{
                    minWidth: "100%",
                    marginTop: "2%",
                    height: "10vh",
                    fontSize: "0.9rem",
                    textAlign: "center",
                  }}
                >
                  {answer.text}
                </QuizButton>
              );
            }
          )}
        </Grid>
      );
    }
  }

  styles = (theme) => ({
    root: {},
    question: {},
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    buttons: {},
  });

  questionScreen() {
    console.log("in questionScreen");
    let lotOfText = false;
    let charCount = 0;

    for (
      let i = 0;
      i < questions[this.state.current_question].question_text.length;
      i++
    ) {
      charCount +=
        questions[this.state.current_question].question_text[i].length;
    }

    if (charCount > 170) lotOfText = true;

    return (
      <div
        style={{ backgroundImage: `url(${Background})` }}
        className="background"
      >
        <Grid container justify="center" alignItems="center">
          <Grid
            item
            xs={12}
            style={{
              marginTop: questions[this.state.current_question].has_images
                ? "5%"
                : "10%",
              marginBottom: "2%",
              maxWidth: "70%",
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: lotOfText ? "1.1rem" : "1.3rem",
                fontStyle: "italic",
              }}
            >
              <span>
                {questions[this.state.current_question].question_text[0]}
              </span>
              <span
                style={{
                  color:
                    villains[questions[this.state.current_question].villain]
                      .colorLight,
                }}
              >
                {" "}
                {questions[this.state.current_question].question_text[1]}
              </span>
              <span>
                {questions[this.state.current_question].question_text.length > 2
                  ? questions[this.state.current_question].question_text[2]
                  : ""}
              </span>
            </Typography>
          </Grid>

          {this.renderImages()}
          {this.renderAnswers()}
        </Grid>
      </div>
    );
  }

  villainAnswerScreen() {
    let data = this.state.correctAnswer
      ? questions[this.state.current_question].villainAnswer.correct
      : questions[this.state.current_question].villainAnswer.incorrect;
    return (
      <div
        className="background"
        style={{ backgroundColor: data.backgroundColor }}
      >
        <Grid
          container
          justify="space-between"
          direction="column"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <Box display="flex" height="12vh"></Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              height="30vh"
              maxHeight="30vh"
              display="flex"
              justifyContent="center"
              direction="row"
            >
              <img
                style={{
                  height: "100%",
                  objectFit: "contain",
                }}
                src={data.villainPng}
              />
            </Box>
          </Grid>
          <Grid item xs={12} display="flex">
            <Box display="flex" height="10vh">
              <TextBox
                variant="h5"
                style={{
                  marginLeft: "15%",
                  marginRight: "15%",
                  color: "#f24e33",
                  width: "100%",
                  lineHeight: 2,
                  textAlign: "center",
                  borderRadius: 50,
                  fontWeight: "bold",
                  backgroundColor: data.backgroundColor,
                  borderColor: this.state.correctAnswer ? "black" : "white",
                }}
              >
                <span
                  style={{
                    color: this.state.correctAnswer
                      ? villains[questions[this.state.current_question].villain]
                          .colorLight
                      : villains[questions[this.state.current_question].villain]
                          .colorDark,
                  }}
                >
                  {" "}
                  {data.texts[0].text}{" "}
                </span>
              </TextBox>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Typography
                style={{
                  marginTop: "16px",
                  marginLeft: "15%",
                  marginRight: "15%",
                  marginBottom: "24px",
                  color: this.state.correctAnswer ? "black" : "white",
                  maxWidth: "60%",
                  lineHeight: 2,
                  textAlign: "left",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                {data.texts.slice(1).map((element) => {
                  if (element.isLink) {
                    return (
                      <Link
                        href={
                          i18n.language === "en"
                            ? element.linkEn
                            : element.linkGe
                        }
                        color="inherit"
                        underline="always"
                        target="_blank"
                      >
                        {element.text}
                      </Link>
                    );
                  } else {
                    return <span>{element.text}</span>;
                  }
                })}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "auto" }}>
            <MainButton onClick={this.handleNextQuestion}>
              {i18n.t("next")}
            </MainButton>
          </Grid>
        </Grid>
        {/* )} */}
      </div>
    );
  }

  render() {
    let isFullScreen = this.props.fromParent.isFullScreen;
    let isPortrait = this.props.fromParent.isPortrait;
    let villain = villains[questions[this.state.current_question].villain];
    return (
      <div>
        {isFullScreen && !isPortrait && (
          <div>
            {this.state.showingVillainTitle && this.villainTitleScreen()}
            {this.state.showingQuestion && this.questionScreen()}
            {this.state.showingAnimation && <div></div>}
            {this.state.showingVillainAnswer && this.villainAnswerScreen()}
            {this.state.minionDefeatScreen && this.minionDefeatScreen()}
            {this.state.minionWinScreen && this.minionWinScreen()}
            {this.state.finalWinScreen && this.finalWinScreen()}
            {this.state.finalLoseScreen && this.finalLoseScreen()}
            {this.state.showingAnimation && this.showAnimation()}
            <link rel="preload" href={Background} as="image"></link>{" "}
            <link rel="preload" href={villain.bg} as="image"></link>
            {this.state.current_question !== 15 &&
              questions[this.state.current_question + 1].images.map((image) => {
                <link rel="preload" href={image.img} as="image"></link>;
              })}
            <link rel="preload" href={villain.defeatImg} as="image"></link>
            <link rel="preload" href={villain.winImg} as="image"></link>
            <link rel="preload" href={villain.defeatText[0]} as="image"></link>
            <link rel="preload" href={villain.winText[0]} as="image"></link>
            {this.state.health === 0 && (
              <link rel="preload" href={finalLoseBg} as="image"></link>
            )}
            {this.state.health === 0 && (
              <link
                rel="preload"
                href={i18n.language === "en" ? loseEn : loseGe}
                as="image"
              ></link>
            )}
            {questions[this.state.current_question].villain === "phisher" && (
              <link rel="preload" href={finalWinBg} as="image"></link>
            )}
            {questions[this.state.current_question].villain === "phisher" && (
              <link
                rel="preload"
                href={i18n.language === "en" ? winEn : winGe}
                as="image"
              ></link>
            )}
          </div>
        )}
      </div>
    );
  }
}
