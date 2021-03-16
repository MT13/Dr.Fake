import React from "react";
import i18n from "../i18n";
import q1_1 from "../images/harry2.gif";
import q1_2 from "../images/harry1.gif";
import q2_1 from "../images/94.png";
import q2_2 from "../images/95.png";
import q3_2 from "../images/100.webp";
import q3_1 from "../images/101.webp";
import q4_1 from "../images/99.jpg";
import q4_2 from "../images/93.png";
import q5 from "../images/5.jpg";
import q6 from "../images/6.jpg";
import q7 from "../images/7.jpg";
import q8 from "../images/8.jpg";
import q9 from "../images/92.png";
import q10 from "../images/96.png";
import q10_1 from "../images/96-1.png";
import q12 from "../images/91.png";
import q13 from "../images/98.gif";
import q14 from "../images/97.png";
import blueHappy from "../images/blueHappy.png";
import blueSad from "../images/blueSad.png";
import purpleHappy from "../images/purpleHappy.png";
import purpleSad from "../images/purpleSad.png";
import greenHappy from "../images/greenHappy.png";
import greenSad from "../images/greenSad.png";
import yellowHappy from "../images/yellowHappy.png";
import yellowSad from "../images/yellowSad.png";
import deepfakeBg from "../images/DR_FAKE_Stills-12.png";
import trollBg from "../images/DR_FAKE_Stills-13.png";
import cloneBg from "../images/DR_FAKE_Stills-14.png";
import phisherBg from "../images/DR_FAKE_Stills-15.png";
import deepfakeWinImg from "../images/DR_FAKE_W&L-16.png";
import trollWinImg from "../images/DR_FAKE_W&L-15.png";
import cloneWinImg from "../images/DR_FAKE_W&L-17.png";
import phisherWinImg from "../images/DR_FAKE_W&L-18.png";
import deepfakeDefeatImg from "../images/DR_FAKE_W&L-12.png";
import trollDefeatImg from "../images/DR_FAKE_W&L-11.png";
import cloneDefeatImg from "../images/DR_FAKE_W&L-13.png";
import phisherDefeatImg from "../images/DR_FAKE_W&L-14.png";
import deepfakeWinTextEn from "../images/deepfake_eng_win.png";
import deepfakeLoseTextEn from "../images/deepfake_eng_lose.png";
import deepfakeWinTextGe from "../images/deepfake_geo_win.png";
import deepfakeLoseTextGe from "../images/deepfake_geo_lose.png";
import trollWinTextEn from "../images/troll_eng_win.png";
import trollLoseTextEn from "../images/troll_eng_lose.png";
import trollWinTextGe from "../images/troll_geo_win.png";
import trollLoseTextGe from "../images/troll_geo_lose.png";
import cloneWinTextEn from "../images/clone_eng_win.png";
import cloneLoseTextEn from "../images/clone_eng_lose.png";
import cloneWinTextGe from "../images/clone_geo_win.png";
import cloneLoseTextGe from "../images/clone_geo_lose.png";
import phisherWinTextEn from "../images/phisher_eng_win.png";
import phisherLoseTextEn from "../images/phisher_eng_lose.png";
import phisherWinTextGe from "../images/phisher_geo_win.png";
import phisherLoseTextGe from "../images/phisher_geo_lose.png";
import deepfakeStart from "../assets/idle-deepfake-2.webm";
import trollStart from "../assets/idle-troll-2.webm";
import cloneStart from "../assets/idle-clone-2.webm";
import phisherStart from "../assets/idle-phisher-2.webm";
import deepfakeHealth0 from "../images/healthbars/deepfake5.png";
import deepfakeHealth1 from "../images/healthbars/deepfake4.png";
import deepfakeHealth2 from "../images/healthbars/deepfake3.png";
import deepfakeHealth3 from "../images/healthbars/deepfake2.png";
import deepfakeHealth4 from "../images/healthbars/deepfake1.png";
import trollHealth0 from "../images/healthbars/troll5.png";
import trollHealth1 from "../images/healthbars/troll4.png";
import trollHealth2 from "../images/healthbars/troll3.png";
import trollHealth3 from "../images/healthbars/troll2.png";
import trollHealth4 from "../images/healthbars/troll1.png";
import cloneHealth0 from "../images/healthbars/clone5.png";
import cloneHealth1 from "../images/healthbars/clone4.png";
import cloneHealth2 from "../images/healthbars/clone3.png";
import cloneHealth3 from "../images/healthbars/clone2.png";
import cloneHealth4 from "../images/healthbars/clone1.png";
import phisherHealth0 from "../images/healthbars/phisher5.png";
import phisherHealth1 from "../images/healthbars/phisher4.png";
import phisherHealth2 from "../images/healthbars/phisher3.png";
import phisherHealth3 from "../images/healthbars/phisher2.png";
import phisherHealth4 from "../images/healthbars/phisher1.png";
import deepfakeWin1 from "../assets/deepfake-right-1.webm";
import deepfakeWin2 from "../assets/deepfake-right-2.webm";
import deepfakeWin3 from "../assets/deepfake-right-3.webm";
import deepfakeLose1 from "../assets/deepfake-false-1.webm";
import deepfakeLose2 from "../assets/deepfake-false-2.webm";
import deepfakeLose3 from "../assets/deepfake-false-3.webm";
import trollWin1 from "../assets/troll-right-1.webm";
import trollWin2 from "../assets/troll-right-2.webm";
import trollWin3 from "../assets/troll-right-3.webm";
import trollLose1 from "../assets/troll-false-1.webm";
import trollLose2 from "../assets/troll-false-2.webm";
import trollLose3 from "../assets/troll-false-3.webm";
import cloneWin1 from "../assets/clone-right-1.webm";
import cloneWin2 from "../assets/clone-right-2.webm";
import cloneWin3 from "../assets/clone-right-3.webm";
import cloneLose1 from "../assets/clone-false-1.webm";
import cloneLose2 from "../assets/clone-false-2.webm";
import cloneLose3 from "../assets/clone-false-3.webm";
import phisherWin1 from "../assets/phisher-right-1.webm";
import phisherWin2 from "../assets/phisher-right-2.webm";
import phisherWin3 from "../assets/phisher-right-3.webm";
import phisherLose1 from "../assets/phisher-false-1.webm";
import phisherLose2 from "../assets/phisher-false-2.webm";
import phisherLose3 from "../assets/phisher-false-3.webm";



export const questions = [
  //question 1
  {
    question_text: [i18n.t("question 1 p1"), i18n.t("question 1 p2")],
    answers: [
      {
        text: i18n.t("first"),
        correct: false,
      },
      {
        text: i18n.t("second"),
        correct: true,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: true,
    images: [
      { img: q1_1, translation: "" },
      { img: q1_2, translation: "" },
    ],
    villain: "deepfake",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("wow, you guessed right"),
            isLink: false,
          },
          { text: i18n.t("it was easy"), isLink: false },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: purpleSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("I knew it"),
            isLink: false,
          },
          { text: i18n.t("pay attention to details"), isLink: false },
        ],
        backgroundColor: "#000000",
        villainPng: purpleHappy,
      },
    },
  },
  //question 2
  {
    question_text: [i18n.t("question 2 p1"), i18n.t("question 2 p2")],
    answers: [
      {
        text: i18n.t("first"),
        correct: true,
      },
      {
        text: i18n.t("second"),
        correct: false,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: true,
    images: [
      {
        img: q2_1,
        translation: i18n.language === "en" ? "" : i18n.t("inauguration day"),
      },
      {
        img: q2_2,
        translation: i18n.language === "en" ? "" : i18n.t("20th january"),
      },
    ],
    villain: "deepfake",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("didn't expect"),
            isLink: false,
          },
          { text: i18n.t("lighted up your mind"), isLink: false },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: purpleSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("deepfake master"),
            isLink: false,
          },
          { text: i18n.t("who says what"), isLink: false },
        ],
        backgroundColor: "#000000",
        villainPng: purpleHappy,
      },
    },
  },

  //question 3
  {
    question_text: [i18n.t("question 3 p1"), i18n.t("question 3 p2")],
    answers: [
      {
        text: i18n.t("first"),
        correct: true,
      },
      {
        text: i18n.t("second"),
        correct: false,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: true,
    images: [
      { img: q3_1, translation: "" },
      { img: q3_2, translation: "" },
    ],
    villain: "deepfake",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("didn't expect 3"),
            isLink: false,
          },
          { text: i18n.t("alicia silverstone"), isLink: false },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: purpleSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("haha"),
            isLink: false,
          },
          { text: i18n.t("clueless"), isLink: false },
        ],
        backgroundColor: "#000000",
        villainPng: purpleHappy,
      },
    },
  },

  //question 4
  {
    question_text: [i18n.t("question 4 p1"), i18n.t("question 4 p2")],
    answers: [
      {
        text: i18n.t("first"),
        correct: true,
      },
      {
        text: i18n.t("second"),
        correct: false,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: true,
    images: [
      {
        img: q4_1,
        translation: i18n.language === "en" ? "" : i18n.t("nanorobots"),
      },
      {
        img: q4_2,
        translation:
          i18n.language === "en" ? "" : i18n.t("regarding microchips"),
      },
    ],
    villain: "deepfake",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("I must say"),
            isLink: false,
          },
          { text: i18n.t("you already know"), isLink: false },
          {
            text: i18n.t("q4_correct_3"),
            isLink: true,
            linkGe:
              "http://mythdetector.ge/ka/myth/sakhelisuplebo-blogeri-giorgi-aghapishvili-khelovnuri-intelektis-generirebuli-potoa",
            linkEn:
              "http://mythdetector.ge/en/myth/pro-governmental-blogger-giorgi-aghapishvili-actually-ai-generated-photo",
          },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: purpleSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("I worked pretty well"),
            isLink: false,
          },
          { text: i18n.t("you really believed"), isLink: false },
          {
            text: i18n.t("q4_wrong_3"),
            isLink: true,
            linkGe:
              "http://mythdetector.ge/ka/myth/vaktsinashi-nanorobotebis-shesakheb-konspiratsias-geitsi-sulelurs-da-utsnaurs-ucodebs",
            linkEn:
              "http://mythdetector.ge/en/myth/gates-labels-conspiracy-about-nanorobots-vaccine-stupid-and-strange",
          },
          { text: i18n.t("q4_wrong_4"), isLink: false },
          {
            text: i18n.t("q4_wrong_5"),
            isLink: true,
            linkGe:
              "http://mythdetector.ge/ka/myth/sakhelisuplebo-blogeri-giorgi-aghapishvili-khelovnuri-intelektis-generirebuli-potoa",
            linkEn:
              "http://mythdetector.ge/en/myth/pro-governmental-blogger-giorgi-aghapishvili-actually-ai-generated-photo",
          },
        ],
        backgroundColor: "#000000",
        villainPng: purpleHappy,
      },
    },
  },
  //question 5
  {
    question_text: [i18n.t("question 5 p1"), i18n.t("question 5 p2")],
    answers: [
      {
        text: i18n.t("2 mutual friends"),
        correct: false,
      },
      {
        text: i18n.t("view profile"),
        correct: true,
      },
      {
        text: i18n.t("pretty girl"),
        correct: false,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: true,
    images: [{ img: q5, translation: "" }],
    villain: "troll",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("good you knew"),
            isLink: false,
          },
          { text: i18n.t("whose profile it is"), isLink: false },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: greenSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("made me laugh"),
            isLink: false,
          },
          { text: i18n.t("don't you understand"), isLink: false },
        ],
        backgroundColor: "#000000",
        villainPng: greenHappy,
      },
    },
  },
  //question 6
  {
    question_text: [i18n.t("question 6 p1"), i18n.t("question 6 p2")],
    answers: [
      {
        text: i18n.t("q6_a1"),
        correct: true,
      },
      {
        text: i18n.t("q6_a2"),
        correct: false,
      },
      {
        text: i18n.t("q6_a3"),
        correct: false,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: true,
    images: [{ img: q6, translation: "" }],
    villain: "troll",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("q6_correct_1"),
            isLink: false,
          },
          { text: i18n.t("q6_correct_2"), isLink: false },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: greenSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("q6_wrong_1"),
            isLink: false,
          },
          { text: i18n.t("q6_wrong_2"), isLink: false },
        ],
        backgroundColor: "#000000",
        villainPng: greenHappy,
      },
    },
  },
  //question 7
  {
    question_text: [i18n.t("q7_p1"), i18n.t("q7_p2")],
    answers: [
      {
        text: i18n.t("q7_a1"),
        correct: false,
      },
      {
        text: i18n.t("q7_a2"),
        correct: false,
      },
      {
        text: i18n.t("q7_a3"),
        correct: true,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: true,
    images: [{ img: q7, translation: "" }],
    villain: "troll",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("q7_correct_1"),
            isLink: false,
          },
          { text: i18n.t("q7_correct_2"), isLink: false },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: greenSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("q7_wrong_1"),
            isLink: false,
          },
          { text: i18n.t("q7_wrong_2"), isLink: false },
        ],
        backgroundColor: "#000000",
        villainPng: greenHappy,
      },
    },
  },

  //question 8
  {
    question_text: [i18n.t("q8_p1"), i18n.t("q8_p2")],
    answers: [
      {
        text: i18n.t("q8_a1"),
        correct: false,
      },
      {
        text: i18n.t("q8_a2"),
        correct: false,
      },
      {
        text: i18n.t("q8_a3"),
        correct: true,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: true,
    images: [{ img: q8, translation: "" }],
    villain: "troll",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("q8_correct_1"),
            isLink: false,
          },
          { text: i18n.t("q8_correct_2"), isLink: false },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: greenSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("q8_wrong_1"),
            isLink: false,
          },
          { text: i18n.t("q8_wrong_2"), isLink: false },
          {
            text: i18n.t("q8_wrong_3"),
            isLink: true,
            linkGe: "http://millab.ge/ka/mil-resources/any/29/any/",
            linkEn: "http://millab.ge/en/mil-resources/any/29/any/any/1/",
          },
          { text: i18n.t("q8_wrong_4"), isLink: false },
        ],
        backgroundColor: "#000000",
        villainPng: greenHappy,
      },
    },
  },
  //question 9
  {
    question_text: [i18n.t("q9_p1"), i18n.t("q9_p2")],
    answers: [
      {
        text: i18n.t("q9_a1"),
        correct: false,
      },
      {
        text: i18n.t("q9_a2"),
        correct: false,
      },
      {
        text: i18n.t("q9_a3"),
        correct: true,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: true,
    images: [{ img: q9, translation: "" }],
    villain: "clone",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("q9_correct_1"),
            isLink: false,
          },
          { text: i18n.t("q9_correct_2"), isLink: false },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: blueSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("q9_wrong_1"),
            isLink: false,
          },
          { text: i18n.t("q9_wrong_2"), isLink: false },
          {
            text: i18n.t("q9_wrong_3"),
            isLink: true,
            linkGe:
              "https://www.facebook.com/mythdetector/videos/660889134791994",
            linkEn: "https://www.facebook.com/watch/?v=2735215626791346",
          },
          { text: i18n.t("q9_wrong_4"), isLink: false },
        ],
        backgroundColor: "#000000",
        villainPng: blueHappy,
      },
    },
  },
  //question 10
  {
    question_text: [i18n.t("q10_p1"), i18n.t("q10_p2")],
    answers: [
      {
        text: i18n.t("q10_a1"),
        correct: false,
      },
      {
        text: i18n.t("q10_a2"),
        correct: false,
      },
      {
        text: i18n.t("q10_a3"),
        correct: true,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: true,
    images: [{ img: i18n.language === "en" ? q10 : q10_1, translation: "" }],
    villain: "clone",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("q10_correct_1"),
            isLink: false,
          },
          { text: i18n.t("q10_correct_2"), isLink: false },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: blueSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("q10_wrong_1"),
            isLink: false,
          },
          { text: i18n.t("q10_wrong_2"), isLink: false },
        ],
        backgroundColor: "#000000",
        villainPng: blueHappy,
      },
    },
  },
  //question 11
  {
    question_text: [i18n.t("q11_p1"), i18n.t("q11_p2"), i18n.t("q11_p3")],
    answers: [
      {
        text: i18n.t("q11_a1"),
        correct: false,
      },
      {
        text: i18n.t("q11_a2"),
        correct: false,
      },
      {
        text: i18n.t("q11_a3"),
        correct: true,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: false,
    images: [],
    villain: "clone",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("q11_correct_1"),
            isLink: false,
          },
          { text: i18n.t("q11_correct_2"), isLink: false },
          {
            text: i18n.t("q11_correct_3"),
            isLink: true,
            linkGe:
              "https://verietyinfo.com/argentinaeng/peruvian-court-ruling-pandemic-created-by-bill-gates-george-soros-and-rockefeller-family/",
            linkEn:
              "https://verietyinfo.com/argentinaeng/peruvian-court-ruling-pandemic-created-by-bill-gates-george-soros-and-rockefeller-family/",
          },
          { text: i18n.t("q11_correct_4"), isLink: false },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: blueSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("q11_wrong_1"),
            isLink: false,
          },
          { text: i18n.t("q11_wrong_2"), isLink: false },
          {
            text: i18n.t("q11_wrong_3"),
            isLink: true,
            linkGe:
              "https://www.mythdetector.ge/ka/myth/daikhrcho-tu-ara-janmos-maghalchinosani-brokolit",
            linkEn:
              "https://www.mythdetector.ge/en/myth/did-who-top-official-die-after-choking-broccoli",
          },
          { text: i18n.t("q11_wrong_4"), isLink: false },
          {
            text: i18n.t("q11_wrong_5"),
            isLink: true,
            linkGe:
              "http://www.mythdetector.ge/ka/myth/praimtaimi-tevzis-gaupatiurebis-gamogonil-ambavs-realur-inpormatsiad-ashukebs",
            linkEn:
              "http://www.mythdetector.ge/en/myth/primetime-covers-satire-raped-fish-real-news",
          },
          { text: i18n.t("q11_wrong_6"), isLink: false },
          {
            text: i18n.t("q11_wrong_7"),
            isLink: true,
            linkGe: "http://millab.ge/ka/mil-resources/any/21/any/",
            linkEn: "http://millab.ge/en/mil-resources/any/21/any/any/1/",
          },
        ],
        backgroundColor: "#000000",
        villainPng: blueHappy,
      },
    },
  },
  //question 12
  {
    question_text: [i18n.t("q12_p1"), i18n.t("q12_p2")],
    answers: [
      {
        text: i18n.t("q12_a1"),
        correct: false,
      },
      {
        text: i18n.t("q12_a2"),
        correct: true,
      },
      {
        text: i18n.t("q12_a3"),
        correct: false,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: true,
    images: [{ img: q12, translation: "" }],
    villain: "clone",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("q12_correct_1"),
            isLink: false,
          },
          { text: i18n.t("q12_correct_2"), isLink: false },
          {
            text: i18n.t("q12_correct_3"),
            isLink: true,
            linkGe: "http://millab.ge/ka/mil-resources/exercises/18/any/any/0/",
            linkEn: "http://millab.ge/en/mil-resources/exercises/18/any/any/0/",
          },
          { text: i18n.t("q12_correct_4"), isLink: false },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: blueSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("q12_wrong_1"),
            isLink: false,
          },
          { text: i18n.t("q12_wrong_2"), isLink: false },
          {
            text: i18n.t("q12_wrong_3"),
            isLink: true,
            linkGe:
              "https://www.facebook.com/mythdetector/videos/2753171248259278",
            linkEn: "https://www.facebook.com/watch/?v=156092272769744",
          },
        ],
        backgroundColor: "#000000",
        villainPng: blueHappy,
      },
    },
  },

  //question 13
  {
    question_text: [i18n.t("q13_p1"), i18n.t("q13_p2")],
    answers: [
      {
        text: i18n.t("q13_a1"),
        correct: false,
      },
      {
        text: i18n.t("q13_a2"),
        correct: false,
      },
      {
        text: i18n.t("q13_a3"),
        correct: true,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: true,
    images: [{ img: q13, translation: "" }],
    villain: "phisher",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("q13_correct_1"),
            isLink: false,
          },
          { text: i18n.t("q13_correct_2"), isLink: false },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: yellowSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("q13_wrong_1"),
            isLink: false,
          },
          { text: i18n.t("q13_wrong_2"), isLink: false },
          {
            text: i18n.t("q13_wrong_3"),
            isLink: true,
            linkGe: "http://millab.ge/ka/mil-resources/any/27/any/",
            linkEn: "http://millab.ge/en/mil-resources/any/27/any/any/1/",
          },
        ],
        backgroundColor: "#000000",
        villainPng: yellowHappy,
      },
    },
  },

  //question 14
  {
    question_text: [i18n.t("q14_p1"), i18n.t("q14_p2")],
    answers: [
      {
        text: i18n.t("q14_a1"),
        correct: false,
      },
      {
        text: i18n.t("q14_a2"),
        correct: true,
      },
      {
        text: i18n.t("q14_a3"),
        correct: false,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: true,
    images: [{ img: q14, translation: "" }],
    villain: "phisher",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("q14_correct_1"),
            isLink: false,
          },
          { text: i18n.t("q14_correct_2"), isLink: false },
          {
            text: i18n.t("q14_correct_3"),
            isLink: true,
            linkGe: "http://millab.ge/ka/mil-resources/any/27/any/",
            linkEn: "http://millab.ge/en/mil-resources/any/27/any/any/1/",
          },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: yellowSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("q14_wrong_1"),
            isLink: false,
          },
          { text: i18n.t("q14_wrong_2"), isLink: false },
          {
            text: i18n.t("q14_wrong_3"),
            isLink: true,
            linkGe: "http://millab.ge/ka/mil-resources/any/27/any/",
            linkEn: "http://millab.ge/en/mil-resources/any/27/any/any/1/",
          },
        ],
        backgroundColor: "#000000",
        villainPng: yellowHappy,
      },
    },
  },
  //question 15

  {
    question_text: [i18n.t("q15_p1"), i18n.t("q15_p2")],
    answers: [
      {
        text: i18n.t("q15_a1"),
        correct: false,
      },
      {
        text: i18n.t("q15_a2"),
        correct: true,
      },
      {
        text: i18n.t("q15_a3"),
        correct: false,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: false,
    images: [],
    villain: "phisher",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("q15_correct_1"),
            isLink: false,
          },
          { text: i18n.t("q15_correct_2"), isLink: false },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: yellowSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("q15_wrong_1"),
            isLink: false,
          },
          { text: i18n.t("q15_wrong_2"), isLink: false },
          {
            text: i18n.t("q15_wrong_3"),
            isLink: true,
            linkGe:
              "https://www.facebook.com/437569923010130/videos/743120606321176",
            linkEn:
              "https://www.facebook.com/437569923010130/videos/743120606321176",
          },
          { text: i18n.t("q15_wrong_4"), isLink: false },
        ],
        backgroundColor: "#000000",
        villainPng: yellowHappy,
      },
    },
  },

  //question 16text: [

  {
    question_text: [i18n.t("q16_p1"), i18n.t("q16_p2")],
    answers: [
      {
        text: i18n.t("q16_a1"),
        correct: false,
      },
      {
        text: i18n.t("q16_a2"),
        correct: true,
      },
      {
        text: i18n.t("q16_a3"),
        correct: false,
      },
    ],
    correct_animation: "",
    false_animation: "",
    has_images: false,
    images: [],
    villain: "phisher",
    villainAnswer: {
      correct: {
        texts: [
          {
            text: i18n.t("q16_correct_1"),
            isLink: false,
          },
          { text: i18n.t("q16_correct_2"), isLink: false },
          {
            text: i18n.t("q16_correct_3"),
            isLink: true,
            linkGe:
              "https://www.cnbc.com/2019/04/18/nigerian-prince-scams-still-rake-in-over-700000-dollars-a-year.html",
            linkEn:
              "https://www.cnbc.com/2019/04/18/nigerian-prince-scams-still-rake-in-over-700000-dollars-a-year.html",
          },
          { text: i18n.t("q16_correct_4"), isLink: false },
        ],
        backgroundColor: "#E0FFFF",
        villainPng: yellowSad,
      },
      incorrect: {
        texts: [
          {
            text: i18n.t("q16_wrong_1"),
            isLink: false,
          },
          { text: i18n.t("q16_wrong_2"), isLink: false },
          {
            text: i18n.t("q16_wrong_3"),
            isLink: true,
            linkGe: "http://millab.ge/ka/mil-resources/any/27/any/",
            linkEn: "http://millab.ge/en/mil-resources/any/27/any/any/1/",
          },
          { text: i18n.t("q16_wrong_4"), isLink: false },
        ],
        backgroundColor: "#000000",
        villainPng: yellowHappy,
      },
    },
  },
];

export const villains = {
  deepfake: {
    bg: deepfakeBg,
    text: [i18n.t("first mr deepfake"), i18n.t("won't be easy")],
    colorDark: "#9A3CDD",
    colorLight: "#9A3CDD",
    winImg: deepfakeWinImg,
    defeatImg: deepfakeDefeatImg,
    defeatText: [
      i18n.language === "en" ? deepfakeWinTextEn : deepfakeWinTextGe,
      i18n.t("deepfakeDefeat_p2"),
    ],
    winText: [
      i18n.language === "en" ? deepfakeLoseTextEn : deepfakeLoseTextGe,
      i18n.t("deepfakeWin_p2"),
    ],
    startAnimation: deepfakeStart,
    winAnimation: [deepfakeWin1, deepfakeWin2, deepfakeWin1, deepfakeWin3],
    defeatAnimation: [deepfakeLose1, deepfakeLose2, deepfakeLose1, deepfakeLose3],
    health: 4,
    healthImgs: [
      deepfakeHealth0,
      deepfakeHealth1,
      deepfakeHealth2,
      deepfakeHealth3,
      deepfakeHealth4,
    ],
  },
  troll: {
    bg: trollBg,
    text: [i18n.t("mrTroll_p1"), i18n.t("mrTroll_p2")],
    colorDark: "#39E269",
    colorLight: "#1E9B3E",
    winImg: trollWinImg,
    defeatImg: trollDefeatImg,
    defeatText: [
      i18n.language === "en" ? trollWinTextEn : trollWinTextGe,
      i18n.t("trollDefeat_p2"),
    ],
    winText: [
      i18n.language === "en" ? trollLoseTextEn : trollLoseTextGe,
      i18n.t("trollWin_p2"),
    ],
    startAnimation: trollStart,
    winAnimation: [trollWin1, trollWin2, trollWin1, trollWin3],
    defeatAnimation: [trollLose1, trollLose2, trollLose1, trollLose3],
    health: 4,
    healthImgs: [
      trollHealth0,
      trollHealth1,
      trollHealth2,
      trollHealth3,
      trollHealth4,
    ],
  },
  clone: {
    bg: cloneBg,
    text: [i18n.t("mrClone_1"), i18n.t("mrClone_2")],
    colorDark: "#3E3BE0",
    colorLight: "#3E3BE0",
    winImg: cloneWinImg,
    defeatImg: cloneDefeatImg,
    defeatText: [
      i18n.language === "en" ? cloneWinTextEn : cloneWinTextGe,
      i18n.t("cloneDefeat_p2"),
    ],
    winText: [
      i18n.language === "en" ? cloneLoseTextEn : cloneLoseTextGe,
      i18n.t("cloneWin_p2"),
    ],
    startAnimation: cloneStart,
    winAnimation: [cloneWin1, cloneWin2, cloneWin1, cloneWin3],
    defeatAnimation: [cloneLose1, cloneLose2, cloneLose1, cloneLose3],
    health: 4,
    healthImgs: [
      cloneHealth0,
      cloneHealth1,
      cloneHealth2,
      cloneHealth3,
      cloneHealth4,
    ],
  },
  phisher: {
    bg: phisherBg,
    text: [i18n.t("mrFisher_p1"), i18n.t("mrFisher_p2")],
    colorDark: "#E0D43B",
    colorLight: "#ED7C00",
    winImg: phisherWinImg,
    defeatImg: phisherDefeatImg,
    defeatText: [
      i18n.language === "en" ? phisherWinTextEn : phisherWinTextGe,
      i18n.t("phisherDefeat_p2"),
    ],
    winText: [
      i18n.language === "en" ? phisherLoseTextEn : phisherLoseTextGe,
      i18n.t("phisherWin_p2"),
    ],
    startAnimation: phisherStart,
    winAnimation: [phisherWin1, phisherWin2, phisherWin1, phisherWin3],
    defeatAnimation: [phisherLose1, phisherLose2, phisherLose1, phisherLose3],
    health: 4,
    healthImgs: [
      phisherHealth0,
      phisherHealth1,
      phisherHealth2,
      phisherHealth3,
      phisherHealth4,
    ],
  },
};
