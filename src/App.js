import "./App.css";
import Quiz from "./components/";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Typography from "@material-ui/core/Typography";
import "./i18n";
import CssBaseline from "@material-ui/core/CssBaseline";
import soundOn from "./images/soundon.png";
import soundOff from "./images/soundoff.png";
import fullScreenOff from "./images/fullscreenoff.png";
import { useCallback, useState, useEffect, useRef } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import React from "react";
import Grid from "@material-ui/core/Grid";
import i18n from "./i18n";
import Background1 from "./images/DR_FAKE_Stills-7.png";
import music from "./assets/music.mp3";
import pauseScreenBg from "./images/DR_FAKE_Stills-continue.png";
import MainButton from "./components/MainButton";
import turnOver from "./images/DR_FAKE_2-5.png";
import rotate from "./images/rotate_to_play.png";
import header from "./images/header.png";
import { Helmet } from "react-helmet";
import mdf from "./images/logos/mdf.png";
import mdeng from "./images/logos/md-eng.png";
import mdgeo from "./images/logos/md-geo.png";
import oip from "./images/logos/oip.png";

function pauseScreen(screen) {
  return (
    <div
      style={{
        backgroundImage: `url(${pauseScreenBg})`,
        position: "fixed",
        width: "100%",
      }}
      className="background"
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={6}>
          <MainButton style={{ marginLeft: "10%" }} onClick={screen.enter}>
            {i18n.t("continue")}
          </MainButton>{" "}
        </Grid>
      </Grid>
    </div>
  );
}

function handleTitle(screen, firstPage) {
  firstPage.current = false;
  screen.enter();
}

function title(screen, firstPage) {
  const { detect } = require("detect-browser");
  const browser = detect();
  let topText, bottomText, disclaimerText;
  if (i18n.language === "en") {
    topText = "1.2rem";
    bottomText = "1.05rem";
    disclaimerText = "0.9rem";
  } else {
    topText = "1.05rem";
    bottomText = "0.9rem";
    disclaimerText = "0.8rem";
  }
  switch (browser && browser.name) {
    case "opera":
    case "firefox":
      console.log("FIREFOX")
      if (i18n.language === "en") {
        topText = "1.05rem";
        bottomText = "0.9rem";
        disclaimerText = "0.8rem";
      } else {
        topText = "0.95rem";
        bottomText = "0.8rem";
        disclaimerText = "0.7rem";
      }
    default:

  }

  return (
    <div
      style={{
        backgroundImage: `url(${Background1})`,
        position: "fixed",
        width: "100%",
      }}
      className="background"
    >
      <Grid container spacing={1} justify="space-between" alignItems="stretch">
        <Grid
          container
          style={{ marginLeft: "5%", maxWidth: "50vw", maxHeigh: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={7}
            style={{
              maxHeight: "10vh",
              marginBottom: "3%",
              marginTop: "5%",
              textAlign: "left",
            }}
          >
            <img
              src={header}
              style={{
                padding: "4px",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid item xs={12} style={{ maxHeight: "20vh" }}>
            <Typography
              style={{
                color: "#f24e33",
                textAlign: "left",
                fontWeight: "bold",
                letterSpacing: 2,
                fontFamily: 'RobotoMt'
              }}
              className="title"
              display="initial"
              variant="h5"
              paragraph={true}
            >
              {" "}
              {i18n.t("about the game")}
            </Typography>
            <Typography
              style={{
                color: "white",
                textAlign: "left",
                fontSize: topText,
                marginBottom: "3%",
              }}
              display="initial"
            >
              {" "}
              {i18n.t("about")}
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ maxHeight: "25vh" }}>
            <Typography
              style={{
                color: "#f24e33",
                textAlign: "left",
                fontWeight: "bold",
                letterSpacing: 2,
                fontFamily: 'RobotoMt'
              }}
              display="initial"
              variant="h5"
              paragraph={true}
            >
              {" "}
              {i18n.t("instruction")}
            </Typography>
            <Typography
              style={{
                color: "white",
                textAlign: "left",
                fontSize: topText,
                marginBottom: "3%",
              }}
              display="initial"
            >
              {" "}
              {i18n.t("instruction description")}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          style={{
            marginLeft: "5%",
            marginTop: "1%",
            maxHeight: "40vh",
          }}
          alignItems="flex-end"
        >
          <Grid item xs={7}>
            <Typography
              style={{
                color: "#f24e33",
                textAlign: "left",
                fontSize: bottomText,
                maxWidth: "60%",
              }}
              display="initial"
            >
              {i18n.t("idea")}
              <span style={{ color: "white" }}> {i18n.t("Authors of concept")}</span>
            </Typography>
            <Typography
              style={{
                color: "#f24e33",
                textAlign: "left",
                fontSize: bottomText,
              }}
            >
              {i18n.t("illustrator")}
              <span style={{ color: "white" }}>
                {" "}
                {i18n.t("illustrator name")}
              </span>
            </Typography>
            <Typography
              style={{
                color: "#f24e33",
                textAlign: "left",
                fontSize: bottomText,
              }}
            >
              {i18n.t("webdev")}
              <span style={{ color: "white" }}> {i18n.t("webdev name")}</span>
            </Typography>
            <Typography
              style={{
                color: "#f24e33",
                textAlign: "left",
                fontSize: bottomText,
              }}
            >
              {i18n.t("music")}
              <span style={{ color: "white" }}> {i18n.t("music name")}</span>
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid
            item
            xs={7}
            style={{
              maxWidth: "38%",
              maxHeight: "15vh",
              marginLeft: "5%",
              marginTop: "2%",
            }}
          >
            <Typography
              style={{
                color: "white",
                textAlign: "left",
                fontSize: disclaimerText,
                fontStyle: "italic",
              }}
              display="initial"
              paragraph={true}
            >
              {" "}
              {i18n.t("disclaimer")}
            </Typography>
            <Grid container direction="row" style={{ maxHeight: "10vh" }}>
              <img
                src={mdf}
                style={{
                  maxWidth: "100px",
                  height: "25px",
                  paddingRight: "8px",
                }}
              />
              <img
                src={oip}
                style={{
                  maxWidth: "100px",
                  height: "25px",
                  paddingRight: "8px",
                }}
              />
              <img
                src={i18n.language === "en" ? mdeng : mdgeo}
                style={{
                  maxWidth: "100px",
                  height: "25px",
                  paddingRight: "8px",
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={5}
            justify="flex-start"
            alignContent="flex-end"
            style={{ marginBottom: "2%", marginTop: ( i18n.language === "en" ?
              (browser.name==="chrome"? "3%" : "3%") : browser.name==="chrome"? "3%" : "2%")}}
          >
            <MainButton onClick={() => handleTitle(screen, firstPage)}>
              {i18n.t("start")}
            </MainButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

function App() {
  const size = useWindowSize();
  const isPortrait = size.width / size.height < 1.25;

  const screen = useFullScreenHandle();

  const reportChange = useCallback(
    (state, handle) => {
      setFullScreen(state);
      const audioEl = document.getElementsByClassName("audio-element")[0];

      if (state && isSoundOn) {
        audioEl.play();
      } else {
        audioEl.pause();
      }
    },
    [screen]
  );

  const [isFullScreen, setFullScreen] = useState(false);
  const [isSoundOn, setSound] = useState(true);
  const [soundImg, setSoundImage] = useState(soundOn);
  const firstPage = useRef(true);

  function showTitleScreen() {
    if (firstPage.current) {
      return title(screen, firstPage);
    } else return pauseScreen(screen);
  }

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
  }

  useEffect(() => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    if (isFullScreen) {
      if (isSoundOn) {
        setSoundImage(soundOn);
        audioEl.play();
      } else {
        setSoundImage(soundOff);
        audioEl.pause();
      }
    }
  }, [isSoundOn]);

  function handleSound(e) {
    setSound(!isSoundOn);
  }

  function topButtons() {
    return (
      <div>
        <button
          style={{
            width: "50px",
            height: "50px",
            border: "none",
            borderRadius: "50%",
            backgroundColor: "transparent",
            position: "absolute",
            objectFit: "contain",
            right: 80,
            top: 20,
            outline: "none",
            cursor: "pointer",
          }}
        >
          <img
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            src={soundImg}
            onClick={handleSound}
          />
        </button>
        <button
          style={{
            width: "50px",
            height: "50px",
            border: "none",
            borderRadius: "50%",
            backgroundColor: "transparent",
            position: "absolute",
            objectFit: "contain",
            right: 20,
            top: 20,
            outline: "none",
            cursor: "pointer",
          }}
        >
          <img
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            src={fullScreenOff}
            onClick={screen.exit}
          />
        </button>
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="App">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="canonical"
            href="https://necolas.github.io/normalize.css/8.0.1/normalize.css?fbclid=IwAR2dWbllH9bo6Ah8V0jOaFJgOftVwVuUtdriXUjOqh2D3m6y8bTEVpl9zg0"
          />
        </Helmet>
        {isPortrait && (
          <div
            className="background"
            style={{
              backgroundImage:
                i18n.language === "en" ? `url(${rotate})` : `url(${turnOver})`,
            }}
          ></div>
        )}
        {
          <FullScreen handle={screen} onChange={reportChange}>
            {isPortrait && (
              <div
                className="background"
                style={{
                  backgroundImage:
                    i18n.language === "en"
                      ? `url(${rotate})`
                      : `url(${turnOver})`,
                }}
              ></div>
            )}
            <Quiz
              fromParent={{
                isFullScreen: isFullScreen,
                isPortrait: isPortrait,
              }}
            />
            {!isPortrait && topButtons()}
            <audio className="audio-element" loop>
              <source src={music}></source>
            </audio>
          </FullScreen>
        }

        {!isPortrait && !isFullScreen && showTitleScreen(screen)}

        <link rel="preload" href={Background1} as="image"></link>
      </div>
    </ThemeProvider>
  );
}

export default App;
