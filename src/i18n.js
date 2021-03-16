import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      next: "next",
      start: "start",
      drFake: "DR FAKE",
      "about the game": "About the game",

      about:
        "A player has to confront four of his companions: Mr. Deepfake, Mr. Troll, Mr. Clone and Mr. Phisher and answer their questions correctly.",

      instruction: "Instruction",

      "instruction description":
        "A player and an opponent have a 100-point lifeline. A villain loses 25 points \
        for each correct answer by the player, while incorrect answer weakens the player. \
        Once the player is defeated by any character, the game will resume from \
        the same character.",

      disclaimer:
        "The game was developed within the scope of Media Development Foundation’s (MDF) \
        international hackathon - Hacking the Fake News - by (Dr. Fake), with the \
        financial contribution of Zinc Network.",

      idea: "Authors of the concept: ",
      "Authors of concept":
        "Zizi Nishnianidze, Mariam Dangadze, Mariam Topchishvili, Ani Kistauri\n",

      illustrator: "Illustrator: ",

      "illustrator name": "Zizi Nishnianidze",

      webdev: "Developer: ",

      "webdev name": "Maria Tarielashvili",

      music: "Music: ",

      "music name": "Iva Shelia",

      continue: "continue",
      surrender: "surrender",
      startOver: "start over",
      finish: "finish",

      "media in trouble": "The Media Literacy City is in great danger!",
      "concurred everything": "have invaded everything",
      "drFake and his associates": "Dr. Fake and his supporters ",
      "only you": "Only you ",

      "save the town": "can save the city!",

      "fight mr troll":
        "Fight against Mr. Deepfake, Mr. Troll, Mr. Clone and Mr. Phisher, use critical \
        thinking, answer their questions correctly and restore peace in the Media \
        Literacy City.",

      "first mr deepfake": "First, you will have to confront Mr. Deepfake!",

      "won't be easy":
        "It will not be easy, be careful and pay attention to images and quotes.",

      //question 1
      "question 1 p1":
        "Do not think I have mercy! I will start with fabricating your favorite characters! \
        As you see, Harry Potter looks strange.",
      "question 1 p2": "Which one is real?",

      first: "First",
      second: "Second",

      "wow, you guessed right":
        "Wow, you guessed correctly!",
      "it was easy":
        "But it was simple. Have you ever seen Harry Potter with beard? I have seen only \
        the one I created myself.",

      "I knew it": "I believed so!",
      "pay attention to details":
        "You’d better pay more attention to details. When did Harry Potter grow a beard? \
        With this level of attention and knowledge, you will never be able to fly a hippogryph!",

      //question 2
      "question 2 p1":
        "I will spare you and send you a simple question. As you see, we have two Trumps. ",

      "question 2 p2": "Tell me, which one did I create?",

      "didn't expect": "I did not expect you catching me out",
      "lighted up your mind":
        "But, probably, controversial content has lightened up your mind.",

      "deepfake master": "I am not surprised, I am a real master of deepfakes",
      "who says what":
        "But pay attention to who is saying what. Try not to be deceived by images.",

      //question 3
      "question 3 p1":
        "Now, it’s Billie Eilish’s turn. I have slightly changed one of these two images.",

      "question 3 p2": "In your opinion, which one is fake?",

      "didn't expect 3": "I did not expect you guessing this!",
      "alicia silverstone":
        "Let me say that I replaced Alicia Silverstone from Clueless with Billie Eilish and\
         your sharp eyes noticed it.",

      haha: "Ha ha! You falsely thought it would be an easy task.",
      clueless:
        "Probably you have never watched the film Clueless and neither did you pay attention\
         to the face authenticity. The first fragment is from the film but I used \
         my magic hands to replace the main character’s face with Billie Eilish.",

      //question 4

      "question 4 p1":
        "And finally, I am offering you two quotes by Bill Gates and you need to say ",

      "question 4 p2": "which one was recently fabricated by me.",

      "I must say": "You really astonish me",
      "you already know":
        "You probably know that Bill Gates does not spread nanorobots and microchips \
        through vaccines. Besides conspiracy theories, I can share several ",
      q4_correct_3: "deepfake characteristics.",

      "I worked pretty well":
        "I am not surprised. I worked brilliantly to fabricate the quote.",
      "you really believed":
        "Did you really believe that Bill Gates is going to implant a chip in you? You \
        should know that ",
      q4_wrong_3: "we are not chipped",
      q4_wrong_4: " through vaccines. Let me share a couple of ",
      q4_wrong_5: "tricks to spot deepfakes.",

      deepfakeDefeat_p1: "You defeated Mr Deepfake!",
      deepfakeDefeat_p2: "Do not relax, 3 more enemies are waiting.",

      deepfakeWin_p1: "You call yourself a City Hero?",
      deepfakeWin_p2: "Don't give up! You still can defeat him!",

      //question 5
      mrTroll_p1: "Now, it’s time for Mr. Troll.",
      mrTroll_p2:
        "It’s not that easy to fight fake accounts. Who knows how many identities he has \
        stolen. Try not to fall into his trap!",

      "question 5 p1":
        "Time to try you out. Let’s begin with a simple question. As you see on the screen, \
        someone has sent you a friend request. I think you know her. ",

      "question 5 p2": "What will you do?",

      "2 mutual friends": "We have two mutual friends. I will add her",
      "view profile": "I will view her profile",
      "pretty girl": "She seems to be a beautiful girl, I will add her",

      "good you knew": "I am surprised, but you are right!",
      "whose profile it is":
        "Of course, in order to find out who is the owner of the account, you first need \
        to view her profile rather than promote the reliability growth through adding a \
        fake account (a troll) to Facebook.",

      "made me laugh": "You made me laugh so hard!",
      "don't you understand":
        "Don’t you understand that by adding someone to your friends’ list only because of\
         her appearance or having several mutual friends, you will promote the growth\
          of reliability of a fake account (troll)?!",

      //question 6

      "question 6 p1":
        "What are you waiting for, maybe this person has serious business,\
         are you still viewing her profile?",
      "question 6 p2": "Add her quickly!",

      q6_a1:
        "Profile and cover photos look suspicious, URL and its name do not match,\
         I will obtain additional information",
      q6_a2:
        "Tamuna is a Georgian name, but I know that trolls use foreign names",
      q6_a3:
        "I will add her, but if I do not like her behavior, I will delete her",

      q6_correct_1: "I am unpleasantly surprised.",
      q6_correct_2:
        "You seem to know that we should focus on the photos as well as the match \
        of the URL address and the name when analyzing the profile.",

      q6_wrong_1: "This is just as I assumed",
      q6_wrong_2:
        "You did not guess that trolls frequently use their own or others’ old accounts, \
        they change their own names, but their URL addresses remain unchanged, and therefore,\
         they do not match with the new ones. You should be more cautious when fighting with \
         me!",

      //question 7

      q7_p1: "As I see, you are viewing her photos, what are you thinking, ",
      q7_p2: "are you still hesitating?",

      q7_a1:
        "I like Adriana Lima too, we seem to have similar taste, I will add her",
      q7_a2: "She has impressive photos, I will add her",
      q7_a3:
        "It’s impossible to identify the person from the photos. I can't see her face,\
         I do not know who she is, I will not add her",

      q7_correct_1: "I am surprised, but I acknowledge that you are right! ",
      q7_correct_2:
        "There are very few photos on trolls' profiles which complicates the identification \
      of the person we see online. That's how you know they are fake.",

      q7_wrong_1: "You are wrong!",
      q7_wrong_2:
        "Good for me, but keep in mind that the amount of photos on the\
        trolls' profiles is very small, which complicates the identification of the \
       person we see online. You should not add fake accounts just because of Adriana \
       Lima’s impressive photos!",

      //question 8

      q8_p1: "Just stop keeping an eagle eye on it, ",
      q8_p2: "what’s wrong with the timeline?",

      q8_a1:
        "It seems my future friend is looking at everything critically and has good analytical\
         skills. I will add her",
      q8_a2:
        "She appears to be brave, free from Bill Gates' and the New World Order's dictatorship.\
         I will add her!",
      q8_a3:
        "I wonder why the post is blurred. It happened to be a disinformation. My relatives \
      share enough conspiracy theories, I will not add her",

      q8_correct_1: "I am surprised but you are right.",
      q8_correct_2:
        "Trolls frequently spread various conspiracy theories and doubtful information and \
        their materials are marked in the framework of Facebook’s fact-checking program. \
        Information verified by independent fact-checkers is yet another detail that will \
        help you suspect that the Facebook account might not be reliable.",

      q8_wrong_1: "Oh, wonderful!",
      q8_wrong_2:
        "But I warn you that along with identification marks, you need to analyze a timeline \
      to identify a troll. Fake accounts often virally spread specific narratives or \
      disinformation. Just read the ",
      q8_wrong_3: "Media Literacy Guide",
      q8_wrong_4:
        " once again about this and other \
      identification marks. Fake news spread by the army of my trolls is also flagged by \
      independent fact-checkers and their marks may also help you suspect that the Facebook \
      account might not be reliable.",

      trollDefeat_p1: "You Defeated Mr. Troll!",
      trollDefeat_p2: "2 enemies are left.",

      trollWin_p1: "Did you think you had a chance?!",
      trollWin_p2: "Don't give up! You still can defeat him.",

      //question 9

      mrClone_1: "Now, it’s Mr. Clone’s turn.",
      mrClone_2:
        "He can fabricate everything. Don’t be afraid, think well and pay attention\
         to details.",

      q9_p1:
        "Let's start with good news! I learned today that Harvard University Professor, \
        who created COVID-19, was arrested. Even CNN reports this. ",
      q9_p2: "Help me spread the news!",

      q9_a1:
        "Thank you, Mr. Clone for telling me the truth! I will share it immediately!",
      q9_a2:
        "CNN actually spreads reliable information and I will definitely share it",
      q9_a3:
        "I will check CNN’s website to see whether its Russian-language version is \
        available and whether it has such news. Only after that will I share it",

      q9_correct_1: "Hm, you are right!",
      q9_correct_2:
        "So, it’s difficult to mislead you with a cloned page. You are a skeptical reader. \
         You pay attention to the URL and check an official website. It’s not easy to mislead\
         you with the name of a Western media outlet. This time you escaped, but next time, \
         when you trust information without verification, I will definitely defeat you.",

      q9_wrong_1: "You took my bait!",
      q9_wrong_2:
        "You should pay attention to details: I frequently disguise myself as famous Western \
        media brands and people find it difficult to distinguish between cloned CNN and the \
        real one. If you had thought about it,  you’d have navigated to ",
        q9_wrong_3: "CNN’s official page,",
        q9_wrong_4: " examined its URL address, and seen whether CNN has a Russian-language \
        version.",

      //question 10

      q10_p1:
        "Do you too love Harry Potter? I have prepared a vicious surprise for all Potterheads\
         and ",
      q10_p2: "sent the coronavirus to Daniel Radcliffe! Ha ha ha…",

      q10_a1:
        "What a terrible news, I will immediately share this news with all Potterheads. What \
        if we plan a solidarity rally?",

      q10_a2:
        "If BBC reports it, it must be true, I will share it immediately.",
      q10_a3:
        "Is BBC’s Twitter account name BBC News Alerts? I will navigate to their \
        website and Twitter and check if it has any such information there. I will refrain \
        from sharing the news until then.",

      q10_correct_1: "Wow, you are right!",
      q10_correct_2:
        "But next time, when you trust any information without verification, I will definitely \
        defeat you.",

      q10_wrong_1: "I am glad that you are wrong!",
      q10_wrong_2:
        "But let me warn you to pay attention to the name of a media account on social \
        media, compare it to the official page, check how many subscribers it has and whether\
         it published any such information. You will easily become my victim unless you \
         verify all these!",

      //question 11

      q11_p1: "I have one more bad news for you.",
      q11_p2:
        "This time you will have to look closely at the headlines and select the real one. ",
      q11_p3:
        "My minions helped satirical editions fabricate two remaining headlines.",

      q11_a1: '"Top WHO official died after choking on broccoli"',
      q11_a2:
        '"A fisherman raped a fish in Florida, the fish did not resist and it was \
        completely naked."',
      q11_a3:
        '"The court in Peru found Bill Gates, George Soros and the Rockefellers guilty of \
        “creating” the coronavirus."',

      q11_correct_1:
        "Hm, I worked a lot, though you still guessed it correctly!",
      q11_correct_2: "The Chicha and Pisco Criminal Appeals Chamber in Peru ",
      q11_correct_3: "charged,",
      q11_correct_4:
        " Soros, Gates and \
      Rockefellers with responsibility for creating the coronavirus. However, the \
      allegations about the creation of the coronavirus are part of a conspiracy theory \
      and represent disinformation. If you continue this way, you will definitely defeat me.",

      q11_wrong_1: "I deceived you!",
      q11_wrong_2: "Let me tell you that the ",
      q11_wrong_3: "first",
      q11_wrong_4: " and the ",
      q11_wrong_5: "second",
      q11_wrong_6:
        " are fake stories and both were \
        fabricated by satirical editions and someone spread them as real facts. I use such \
        methods frequently, so you’d better not forget to look at ",
      q11_wrong_7:
        " the primary source and the website’s “About us” section.",

      //question 12

      q12_p1:
        "Lastly, I will reward you and share a very entertaining story. The canals of Venice\
         became so clean amid the quarantine that even dolphins returned there. Videos of this\
          have gone viral. ",
      q12_p2: "Let’s share this story.",

      q12_a1:
        "What a great news, I will definitely share it, especially because many people will \
        like it and this post will trigger hundreds of reactions and comments.",
      q12_a2:
        "Will dolphins be able to live in Venice canals? I will screenshot the video \
        footage and verify the location  through the Google image search engine. I will not \
        share it until then.",
      q12_a3:
        "Hm, Dr. Clone says that videos also went viral. It must be a real story and I will \
        share it.",

      q12_correct_1: "You guessed correctly!",
      q12_correct_2:
        "I fabricate not only websites, but videos too. You can learn more about visual \
        manipulations ",
      q12_correct_3: "here.",
      q12_correct_4:
        " Remember, I have hidden a lot of such fabrications on the \
        Internet.",

      q12_wrong_1: "Ha ha, how I deceived you!",
      q12_wrong_2:
        "The video footage showing dolphins was taken in the port of Sardinia, not Venice. \
        When you see a suspicious  post accompanied by a video, you can make several \
        screenshots from the video and verify them through Google image search engine. \
        Google will search for other similar footages and you will find a primary source \
        of the video. See detailed information about photo/video verification ",
      q12_wrong_3: "here.",

      cloneDefeat_p1: "You defeated Mr. Clone!",
      cloneDefeat_p2: "The end of fight is near. Only 1 minion is left.",

      cloneWin_p1: "Doctor will conquer you all!",
      cloneWin_p2: "Don't give up! You still can defeat him.",

      //question 13

      mrFisher_p1: "And finally, Mr. Phisher attacks you. ",
      mrFisher_p2:
        "Use your previously gained experience and return as a winner!",

      q13_p1:
        "Hello and congratulations! You have googled five billion times and won a prize.\
         I am sending you a photo, just select the prize and then I will need some of your personal\
          data.",
      q13_p2: "What will you do?",

      q13_a1: "Thank you, you are not evil at all",
      q13_a2: "It’s great, I am so happy!",
      q13_a3: "I will google the headline on the photo and verify it",

      q13_correct_1: "You surprised me!",
      q13_correct_2:
        "You happened to know that such surprise gifts on the Internet are suspicious and \
        while googling  you must have  found out  that you are dealing with scammers like \
        me who are trying to steal your data with phishing. Pay attention to the website’s \
        suspicious URL in the future.",

      q13_wrong_1: "Did you believe that I would reward you?!",
      q13_wrong_2:
        "It is one of my methods for obtaining your personal data. Learn more about other\
         methods and cybersecurity ",
      q13_wrong_3: "here.",
      //question 14

      q14_p1:
        "You may be surprised but I hacked you! I know everything about you, including your \
        passwords. Now it’s your turn, you should pay me 1,000$! ",
      q14_p2: "What are you going to do?",

      q14_a1:
        "I will transfer money immediately! He can steal my personal videos and publicly \
        disgrace me!",
      q14_a2: "I will report this message and will not answer you!",
      q14_a3: "I will write some threats and swear words!",

      q14_correct_1: "You seem prepared!",
      q14_correct_2:
        "I admit that you are right. Still, I suggest  you change your password and get \
        additional information about the rules of password security ",
      q14_correct_3: "here.",

      q14_wrong_1: "Hah, I deceived you quite well!",
      q14_wrong_2:
        "For  your own data security you should neither write back nor transfer any money. \
        I am trying to deceive you and you’d better be more careful when you ",
      q14_wrong_3: "choose your passwords.",

      //question 15

      q15_p1:
        "Urgent! Your grandma messaged me that she wants to transfer money from her \
        pension card to your account. ",
      q15_p2: "Quickly, write me your account number and send me card photos.",

      q15_a1: "I am so glad that you are trying to help my grandma",
      q15_a2: "It is personal information and I am not going to share it",
      q15_a3:
        "I will send photos immediately, but I cannot find my account number",
      q15_correct_1: "It seems you have heard about personal data",
      q15_correct_2:
        "You are right, you must not give out your financial information and it\
         will be better to check the information with your grandma.",

      q15_wrong_1: "You are wrong which makes me happy!",
      q15_wrong_2:
        "Keep in mind that with such inattentiveness you will easily become my victim and\
         lose money. You’d better verify such details with your family member and not give \
         out your personal data to suspicious people. In the end, take ",
      q15_wrong_3: "Lali’s experience",
      q15_wrong_4: " into consideration.",

      //question 16

      q16_p1:
        "Finally, I will be honest, I am a bankrupt Nigerian Prince, I joined Dr. \
        Fake because I need money. ",
      q16_p2:
        "If you help me and transfer a little bit of money, I will be grateful…",

      q16_a1:
        "You should have said that from the very beginning. Of course I will help you",
      q16_a2:
        "You can't deceive me, I do not know you and phishing is featured even in your name\
         I do not trust you.",
      q16_a3: "I will immediately bring my card",

      q16_correct_1: "What a pity but it is the correct answer!",
      q16_correct_2: "A “Nigerian prince” is one of the most popular ",
      q16_correct_3: "schemes",
      q16_correct_4:
        " of phishing and I suspect that you will never fall into this trap.",

      q16_wrong_1: "Thank you so much for your help!",
      q16_wrong_2:
        "However, I am not a Nigerian prince and I have justified my name – I made you\
         transfer money through phishing. Be careful in the future and ",
      q16_wrong_3: "do not fall into the trap",
      q16_wrong_4: " of either a Nigerian prince or others.",

      phisherDefeat_p1: "You defeated Mr. Phisher!",
      phisherDefeat_p2: "Doctor Fake is not a threat anymore.",

      phisherWin_p1: "You are pathetic.",
      phisherWin_p2: "Don't give up! You still can defeat him.",

      trueHero: "You are a true hero!",
      everyoneKnows: "Congratulations! You destroyed all the minions and now \
      powerless Dr. Fake runs away. You freed the Media Literacy City, so from now on \
       you must take care of its safety. Use your knowledge and skills wisely so that \
       falshood would never take over again!",

      share: "share",
      playAgain: "play again",

      cityIsMine: "City is mine!",
      itsOk: "It's OK, you can always try again",
    },
  },
  ka: {
    translation: {
      next: "შემდეგი",
      start: "დაწყება",
      drFake: "DR FAKE",
      "about the game": "თამაშის შესახებ",

      about:
        "მედიაწიგნიერების ქალაქი დოქტორ ფეიკმა დაიპყრო. მოთამაშე უნდა დაუპირისპირდეს \
        მის 4 თანამებრძოლს: მისტერ დიპფეიკს, მისტერ ტროლს, მისტერ კლონსა და მისტერ ფიშერს \
        და მათ შეკითხვებს თავი გაართვას.",

      instruction: "ინსტრუქცია",

      "instruction description":
        "მოთამაშესა და მოწინააღმდეგეს 100 ქულიანი სიცოცხლის ხაზი აქვთ.\
      მოთამაშის ერთი სწორი პასუხი ბოროტმოქმედს 25 ქულას აკლებს, არასწორი\
      კი თავად მოთამაშეს ასუსტებს. რომელიმე პერსონაჟთან დამარცხების\
      შემთხვევაში, თამაში იმავე პერსონაჟთან დაპირისპირებით ახლდება.",

      disclaimer: "თამაში შექმნიალია მედიის განვითარების ფონდის (MDF) საერთაშორისო ჰაკათონის\
       -  Hacking the Fake News - ფარგლებში, გუნდის (Dr. Fake) მიერ, რომელიც Zinc Network-ის\
        ფინანსური მხარდაჭერით ჩატარდა.",

      idea: "იდეის და კონცეფციის ავტორები: ",
      "Authors of concept":
        "ზიზი ნიშინანიძე, მარიამ დანგაძე,\
      მარიამ თოფჩიშვილი, ანი ქისტაური.\n",

      illustrator: "ილუსტრატორი: ",

      "illustrator name": "ზიზი ნიშნიანიძე",

      webdev: "დეველოპერი: ",

      "webdev name": "მარია ტარიელაშვილი",

      music: "მუსიკა: ",

      "music name": "ივა შელია",
      continue: "გაგრძელება",
      startOver: "ხელახლა დაწყება",
      finish: "დასრულება",

      "media in trouble": "მედიაწიგნიერების ქალაქი დიდ განსაცდელშია!",
      "concurred everything": "ყველაფერი დაიპყრეს",
      "drFake and his associates": "დოქტორ ფეიკმა და მისმა მხარდამჭერებმა ",
      "only you": "მხოლოდ შენ ",

      "save the town": "შეგიძლია ქალაქის გადარჩენა!",

      "fight mr troll":
        "შეებრძოლე მისტერ ტროლს, კლონს, დიფფეიქსა და ფიშერს,\
       გამოიყენე კრიტიკული აზროვნება, სწორად უპასუხე მათ შეკითხვებს და დააბრუნე\
        მშვიდობა მედიაწიგნიერების ქალაქში.",

      "first mr deepfake": "პირველად მისტერ დიპფეიკთან გამკლავება მოგიწევს!",

      "won't be easy":
        "მარტივი არ იქნება, ფრთხილად იყავი, გამოსახულებებსა და ციტატებს დააკვირდი.",

      //question 1
      "question 1 p1":
        "ლმობიერი არ გეგონო, შენი საყვარელი გმირების გაყალბებით დავიწყებ!\
      როგორც ხედავ, ჰარი პოტერი უცნაურად გამოიყურება, როგორ ფიქრობ,",
      "question 1 p2": "რომელია რეალური?",

      first: "პირველი",
      second: "მეორე",

      "wow, you guessed right":
        "ვაუ, სწორად მიხვდი, რომ პირველი ჰარი პოტერი ჩემი ნახელავია",

      "it was easy":
        "თუმცა მარტივი იყო, წვერიანი ჰარი პოტერი გინახავს?! მე მხოლოდ ის,\
      რომელიც თავად შევქმენი.",

      "I knew it": "ასეც ვიცოდი!",
      "pay attention to details":
        "იქნებ, დეტალებზე მეტი ყურადღება გაამახვილო,\
       ჰარი პოტერმა წვერი როდის მერე მოუშვა? ასეთი დაკვირვებითა და ცოდნით ჰიპოგრიფზე \
       ამხედრებული ნამდვილად ვერ გაფრინდები!",

      //question 2
      "question 2 p1":
        "ჯერ კიდევ გინდობ, მარტივ კითხვას გიგზავნი, როგორც ხედავ ორი ტრამპია,\
        ერთი ჩემი ნახელავია, მეორე - არა. ",

      "question 2 p2": "დამისახელე, რომელი შევქმენი:",

      "inauguration day": "“ინაუგურაციის დღეს შევხვდებით, მძინარე ჯო!”",
      "20th january":
        "“მათთვის, ვინც მკითხა, 20 იანვარს ინაუგურაციაზე არ მივდივარ.”",

      "didn't expect": "არ ველოდი, რომ გამომიჭერდი",
      "lighted up your mind":
        "თუმცა ალბათ წინააღმდეგობრივმა შინაარსმა გონება გაგინათა.",

      "deepfake master": "არ მიკვირს, deepfake-ების ნამდვილი ოსტატი ვარ",
      "who says what":
        "თუმცა დააკვირდი ხოლმე ვინ რას ამბობს, მხოლოდ გამოსახულებამ არ მოგატყუოს.",

      //question 3
      "question 3 p1":
        "ახლა კი ბილი აილიშის დრო დადგა. ცოტა ხელი შევავლე \
      ამ ორი გამოსახულებიდან ერთ-ერთს.",

      "question 3 p2": "შენი აზრით, რომელია ყალბი?",

      "didn't expect 3": "არ ველოდი, თუ მიხვდებოდი!",
      "alicia silverstone":
        "გეტყვი, რომ პირველ ფოტოზე ალისია სილვერსტოული\
       ფილმიდან “clueless” ბილი აილიშით ჩავანაცვლე და შენმა მახვილმა თვალმა ეს აშკარად\
        შეამჩნია.",

      haha: "ჰაჰა! სულ ტყუილად გეგონა მარტივი ამოცანა",
      clueless:
        "ალბათ ფილმი Clueless არასდროს გინახავს და არც სახის ავთენტურობას\
         ჩააკვირდი, პირველი კადრი სწორედ იქიდანაა, ჩემი ჯადოსნური ხელებით კი მთავარი\
          პერსონაჟის სახე ბილი აილიშით ჩავანაცვლე.",

      //question 4

      "question 4 p1":
        "და ბოლოს, ბილ გეითსის ორ ციტატას გთავაზობ, შენი მისიაა, მითხრა,\
      სულ ცოტა ხნის წინ ",

      "question 4 p2": "რომელი მათგანი გამოვიგონე და ბილ გეითს მივაწერე?",

      nanorobots:
        "“ვაქცინები ნანორობოტებს და მიკროჩიპებს შეიცავს, გთხოვ, მიიღე.”",

      "regarding microchips":
        "“მიკროჩიპებთან დაკავშირებულ რაიმე საქმეში მონაწილეობა არასდროს მიმიღია… \
        ამ სულელური და უცნაური ამბების უარყოფაც კი რთულია.”",

      "I must say": "უნდა აღვნიშნო, რომ მაოცებ",
      "you already know":
        "ალბათ უკვე იცი, რომ ბილ გეითსი ვაქცინებით ნანორობოტებს და\
        მიკროჩიპებს არ ავრცელებს. კონსპირაციის თეორიის გარდა, შემიძლია Deepfake-ის რამდენიმე\
       მახასიათებელი ",
      q4_correct_3: "გაგიზიარო.",

      "I worked pretty well":
        "სულაც არ მიკვირს, ციტატის გასაყალბებლად შესანიშნავად ვიმუშავე",
      "you really believed":
        "მართლა დაიჯერე, რომ ბილ გეითსი შენს დაჩიპვას აპირებს? \
       გირჩევ, გაიგო, რომ ვაქცინებით ",
      q4_wrong_3: "არ გვჩიპავენ ",
      q4_wrong_4: "და ბოლოს Deepfake-ის ამოსაცნობ 1-2 ნიშანსაც ",
      q4_wrong_5: "გიზიარებ.",

      deepfakeDefeat_p1: "მისტერ დიფფეიქი დამარცხებულია!",
      deepfakeDefeat_p2: "არ მოდუნდე, 3 მოწინააღმდეგე წინაა.",

      deepfakeWin_p1: "შენ თავს ქალაქის გმირს ეძახი?",
      deepfakeWin_p2: "არ დანებდე, ჯერ კიდევ შეგიძლია მისი დამარცხება.",

      surrender: "დანებება",

      //question 5
      mrTroll_p1: "მისტერ ტროლის დრო დადგა,",
      mrTroll_p2:
        "ყალბ ანგარიშებთან ბრძოლა ადვილი არ გეგონოს, ვინ მოსთვლის, რამდენი \
      იდენტობა მოიპარა. არ წამოეგო მის ხაფანგებს!",

      "question 5 p1":
        "დროა, გამოგცადო, მარტივით დავიწყოთ, როგორც სქრინზე ხედავ, ვიღაცამ\
         მოგწერა და გთხოვა, მეგობრებში დაიმატო. მგონი, იცნობ. ",

      "question 5 p2": "რას გააკეთებ?",

      "2 mutual friends": "2 საერთო მეგობარი გვყავს, დავიმატებ",
      "view profile": "პროფილს დავათვალიერებ",
      "pretty girl": "ლამაზი გოგო ჩანს, უნდა დავიმატო",

      "good you knew": "მიკვირს, თუმცა გცოდნია!",
      "whose profile it is":
        "რა თქმა უნდა, იმის გასაგებად, თუ ვის ეკუთვნის ანგარიში,\
       პირველ რიგში მისი პროფილი უნდა დაათვალიერო და ყალბი ანგარიშის (ტროლის) ფეისბუკზე \
       დამატებით მისი სანდოობის ზრდას ხელი არ შეუწყო.",

      "made me laugh": "ძალიან გამაცინე!",
      "don't you understand":
        "ნუთუ ვერ ხვდები, რომ ფიზიკური მონაცემების ან რამდენიმე\
        საერთო მეგობრის არსებობის გამო, რომელიმე ანგარიშის მეგობრებში დამატებით ყალბი \
        ანგარიშის (ტროლის) სანდოობის მოპოვებას შეუწყობ ხელს?!",

      //question 6

      "question 6 p1":
        "რას ელოდები, იქნებ რა საქმე აქვს ადამიანს,\
       კიდევ პროფილს ათვალიერებ?",
      "question 6 p2": "სწრაფად დაიმატე!",

      q6_a1:
        "პროფილის და გარეკანის ფოტოები საეჭვოდ გამოიყურება, URL მისამართი\
       და მისი სახელი ერთმანეთს არ ემთხევა, დამატებით ინფორმაციას მოვიპოვებ",
      q6_a2:
        "თამუნა ქართველი სახელია, მე კი გამიგია, რომ ტროლები უცხოურ სახელებს იყენებენ",
      q6_a3: "დავიმატებ და თუ არ მომეწონა მისი ქცევა, წავშლი",

      q6_correct_1: "უსიამოვნოდ გამაკვირვე, თუმცა ყოჩაღ!",
      q6_correct_2:
        "გცოდნია, რომ პროფილის შესწავლისას ფოტოებზე და URL მისამართისა და\
        სახელის თანხვედრაზე ყურადღება უნდა გავამახვილოთ.",

      q6_wrong_1: "ასეც ვვარაუდობდი",
      q6_wrong_2:
        "ვერ მიხვდი, რომ ტროლები ხშირად საკუთარ ან სხვა ადამიანების ძველ ანგარიშებს\
       იყენებენ, სახელს იცვლიან, თუმცა URL მისამართი უცვლელი რჩება და ახალს არ ემთხვევა,\
       უფრო ფრთხილად უნდა იყო და ისე მებრძოლო!",

      //question 7

      q7_p1: "როგორც ვხედავ, ფოტოებს ათვალიერებ, რას ფიქრობ, ",
      q7_p2: "ნუთუ კიდევ ყოყმანობ?",

      q7_a1: "ადრიანა ლიმა მეც მომწონს, ერთნაირი გემოვნება გვქონია, დავიმატებ",
      q7_a2: "შთამბეჭდავი ფოტოები აქვს, დავიმატებ",
      q7_a3:
        "ფოტოებით იდენტიფიცირება შეუძლებელია, არც ერთგან არ უჩანს სახე, არ ვიცნობ ვინაა,\
       არ დავიმატებ",

      q7_correct_1: "მიკვირს, თუმცა ვაღიარებ, რომ გცოდნია!",
      q7_correct_2:
        "ტროლების უმრავლესობის პროფილზე განთავსებული სურათების რაოდენობა ძალიან\
        მცირეა, რაც ართულებს იმის იდენტიფიცირებას, თუ რამდენად რეალურია პირი, რომელსაც\
         კიბერ სივრცეში ვხედავთ. სწორედ ამიტომ არიან ისინი ყალბი ანგარიშები.",

      q7_wrong_1: "შეცდი!",
      q7_wrong_2:
        "ჩემთვის უკეთესი, თუმცა მომავლში იცოდე, რომ ტროლების უმრავლესობის \
       პროფილზე განთავსებული სურათების რაოდენობა ძალიან მცირეა, რაც ართულებს იმის \
       იდენტიფიცირებას, თუ რამდენად რეალურია პირი, რომელსაც კიბერ სივრცეში ვხედავთ. \
       მხოლოდ ადრიანა ლიმას შთამბეჭდავი ფოტოს გამო ყალბი ანგარიშები არ უნდა დაიმატო!",

      //question 8

      q8_p1: "ბოლოს და ბოლოს მორჩი ამდენ კირკიტს, ",
      q8_p2: "თაიმლაინს მაინც რაღას უწუნებ?",

      q8_a1:
        "როგორც ჩანს, ჩემი მომავალი მეგობარი ყველაფერს კრიტიკულად უყურებს და ანალიტიკური\
        აზროვნების უნარი აქვს, დავიმატებ",
      q8_a2:
        "გამბედავი ყოფილა, ბილ გეიტსის და ახალი მსოფლიო წესრიგის დიქტატურისგან \
       თავისუფალი, დავიმატებ!",
      q8_a3:
        "საინტერესოა, პოსტი რატომაა დაბლარული. დეზინფორმაცია ყოფილა. კონსპირაციების\
        გამზიარებელი ჩემი ნათესავებიც მეყოფა, არ დავიმატებ",

      q8_correct_1: "მიკვირს, მაგრამ სწორია.",
      q8_correct_2:
        "ტროლები ხშირად სხვადასხვა კონსპირაციასა და საეჭვო ინფორმაციას\
        ავრცელებენ და მათი მასალები ფეისბუკის ფაქტების გადამოწმების პროგრამის ფარგლებშიც\
         ინიშნება. დამოუკიდებელი ფაქტჩეკერების მიერ გადამოწმებული ინფორმაცია კიდევ ერთი\
          დამატებითი დეტალია, რომელმაც ფბ ანგარიშის სანდოობაში შეიძლება დაგაეჭვოს",

      q8_wrong_1: "სულაც არ მწყინს",
      q8_wrong_2:
        "თუმცა გაფრთხილებ, რომ სხვა მაიდენტიფიცირებელ ნიშნებთან ერთად ტროლის\
        ამოსაცნობად, მისი თაიმლაინის შესწავლაც დაგეხმარება, ხშირად ყალბი ანგარიშები\
         კონკრეტულ ნარატივს ან დეზინფორმაციას ვირუსულად ავრცელებენ. ამ და სხვა\
          მაიდენტიფიცირებელი ნიშნების შესახებ მედიაწიგნიერების გზამკვლევი კიდევ ერთხელ ",
      q8_wrong_3: "გადაიკითხე.",
      q8_wrong_4:
        " ჩემი ტროლების არმიის მიერ გავრცელებულ ყალბ ცნობებს დამოუკიდებელი\
      ფაქტჩეკერებიც ნიშნავენ და შეიძლება ფეიბუკ ანგარიშის სანდოობაში მათმა მონიშვნამაც\
       დაგაეჭვოს.",

      trollDefeat_p1: "მისტერ ტროლი დამარცხებულია!",
      trollDefeat_p2: "დარჩა მხოლოდ ორი მოწინააღმდეგე.",

      trollWin_p1: "გეგონა მოგების შანსი გქონდა?!",
      trollWin_p2: "არ დანებდე! ჯერ კიდევ შეგიძლია მისი დამარცხება.",

      //question 9

      mrClone_1: "მისტერ კლონის დრო დადგა, ",
      mrClone_2:
        "ყველაფრის გაყალბება შეუძლია, არ შედრკე, კარგად დაფიქრდი და დეტალებს დააკვირდი.",

      q9_p1:
        "კარგი ამბით დავიწყებ! დღეს გავიგე რომ  COVID-19-ის შემქმნელი ჰარვარდის პროფესორი დააკავეს. ამის შესახებ CNN წერს, ",
      q9_p2: "დამეხმარე გავავრცელოთ ეს ინფორმაცია",

      q9_photo_footnote:
        "წარწერა ფოტოზე: აშშ-მ ჩინეთისთვის კოვიდ-19 ის შემქმნელი დააკავა (ვიდეო)",

      q9_a1:
        "მადლობა, დოქტორო კლონ, რომ სიმართლე გამაგებინე! ახლავე გავაზაირებ!",
      q9_a2:
        "CNN წესით სწორ ინფორმაციას უნდა ავრცელებდეს, ამიტომ აუცილებლად გავაზაირებ.",
      q9_a3:
        "CNN-ის  ვებ-გვერდს შევამოწმებ,  ვნახავ რუსულენოვანი ვერსია თუ არის \
       ხელმისაწვდომი და მსგავსი სიახლე თუ დევს, მანამდე კი, არ გავაზაირებ.",

      q9_correct_1: "ჰმ, სწორია!",
      q9_correct_2:
        "გამოდის, რომ კლონირებული გვერდით შენი ცდუნება რთულია. სკეპტიკოსი\
        მკითხველი ხარ და url-საც აკვირდები, ოფიციალურ ვებ-გვერდსაც ამოწმებ და დასავლური \
        მედიის სახელებით შენი ცდუნება მარტივი არ არის.  ამჯერად ხელიდან კი დამისხლტდი, თუმცა \
        შემდეგ ჯერზე, როცა ინფორმაციას გადაუმოწმებლად ენდობი, აუცილებლად დაგამარცხებ.",

      q9_wrong_1: "ჩემს ანკესს წამოეგე!",
      q9_wrong_2:
        "აუცილებლად უნდა დააკვირდე დეტალებს: ხშირად ცნობილი დასავლური\
        მედია ბრენდების ვიზუალით ვინიღბები და სიჩქარეში ადამიანებს კლონირებული და\
         რეალური CNN-ის ერთმანეთისგან გარჩევა უჭირთ. ჭკუა რომ გეხმარა, CNN-ის ოფიციალურ\
          გვერდზე ",
      q9_wrong_3: "გადახვიდოდი,",
      q9_wrong_4: " url მისამართსაც შეამოწმებდი და იმასაც ნახავდი, აქვს თუ არა\
           CNN-ს რუსულენოვანი ვრიკები მეწურება და სახალისო ამბავს გაგიზიარებ. კარანტინის შემდეგ ვენეციის არხები გასუფთავდა და დელფინები დაბრუნდნენ, ამის ამსახველი ვიდეოებიც გავრცელდაერსია.",

      //question 10

      q10_p1:
        "ჰარი პოტერი შენც გიყვარს? შენთვის და ფანებისთვის ასეთი ბოროტი სიურპრიზი მოვაწყვე და ",
      q10_p2: "დენიელ რედკლიფს დოქტორ ფეიკის ხელით კორონავირუსი გავუგზავნე!",

      q10_photo_footnote:
        "წარწერა ფოტოზე: საგანგებო ამბავი: დენიელ რედკლიფს კორონავირუსი \
      დაუდასტურდა. მსახიობი პირველი ცნობილი ადამიანია, რომელმაც ეს საჯაროდ დაადასტურა.",

      q10_a1:
        "რა საშინელი ახალი ამბავია, ახლავე გავუზიარებ ამ სიახლეს ყველა \
      პოტერჰედს, იქნებ დენიელის სოლიდარობის აქციაც  დავგეგმოთ?",
      q10_a2: "BBC-მ თუ გაავრცელა, ნამდვილად სწორი იქნება, ახლავე გავაზიარებ.",
      q10_a3:
        "BBC-ის თვითერის ანგარიშის სახელი BBC News Alerts არის? მათ ვებ-გვერდზე \
      და თვითერზე შევალ და გადავამოწმებ მსგავსი ინფორმაცია თუ წერია,  მანამდე კი არ \
      გავაზიარებ.",

      q10_correct_1: "ვაუ, სწორია!",
      q10_correct_2:
        "თუმცა შემდეგ ჯერზე, როცა ინფორმაციას გადაუმოწმებლად ენდობი, აუცილებლად \
      დაგამარცხებ. ",

      q10_wrong_1: "მიხარია, რომ შეცდი!",
      q10_wrong_2:
        "მაგრამ გაფრთხილებ, სოციალურ ქსელში მედიის ანგარიშის სახელს ყურადღებით \
      დააკვირდი, შეადარე ოფიციალურ გვერდს, ნახე რამდენი გამომწერი ჰყავს და გამოაქვეყნა თუ \
      არა ასეთი ინფორმაცია. ამ ყველაფრის გადამოწმების გარეშე, ჩემი მსხვერპლი მარტივად გახდები!",

      //question 11

      q11_p1: "შენთვის კიდევ ერთი ცუდი ამბავი მაქვს,",
      q11_p2:
        "ამჯერად მოგიწევს, მოცემულ სათაურებს კარგად დააკვირდე და მათგან რეალური შეარჩიო. ",
      q11_p3:
        "დანარჩენი ორი სათაურის გამოგონებაში  სატირულ-იუმორისტულ გამოცემებს ჩემი\
       მინიონები დაეხმარნენ, ჰა ჰაა…",

      q11_a1:
        '"ჯანდაცვის მსოფლიო ორგანიზაციის მაღალჩინოსანი ბროკოლის ჭამისას დაიხრჩო."',
      q11_a2:
        '"ფლორიდის შტატში მეთევზემ თევზი გააუპატიურა, თევზს უარი არ უთქვამს, \
      თანაც სრულიად შიშველი იყო."',
      q11_a3:
        '"პერუში სასამართლომ ბილ გეითსი, ჯორჯ სოროსი და როკფელერები კორონავირუსის \
      “შექმნისთვის” გაასამართლა."',

      q11_correct_1: "ჰმ, ბევრი ვიშრომე, თუმცა სწორად მიხვდი!",
      q11_correct_2:
        "პერუში, ჩინჩას და პისკოს პროვინციების სასამართლომ სოროსი, გეიტსი და \
      როკფელერები ",
      q11_correct_3: "გაასამართლა,",
      q11_correct_4:
        " თუმცა ბრალდება “კორონავირუსის შექმნის” შესახებ კონსპირაციის \
      თეორიის ნაწილია და დეზინფორმაციაა, ასე თუ გააგრძელებ ნამდვილად დამამარცხებ.",

      q11_wrong_1: "გაგაცურე! ",
      q11_wrong_2: "გეტყვი, რომ ",
      q11_wrong_3: "პირველი",
      q11_wrong_4: " და ",
      q11_wrong_5: "მეორე",
      q11_wrong_6:
        ' ამბავი ყალბია და სატირულმა გამოცემებმა \
        გამოიგონეს, ვიღაცამ კი რეალურ ფაქტად გაავრცელა. ასეთ ხერხებს ხშირად მივმართავ, შენ \
        კი გირჩევნია პირველწყაროს და საიტის "ჩვენს შესახებ" განყოფილებას ხშირად ',
      q11_wrong_7: "ჩახედო.",

      //question 12

      q12_p1:
        "ხრიკები მეწურება და სახალისო ამბავს გაგიზიარებ. კარანტინის შემდეგ ვენეციის არხები გასუფთავდა და დელფინები დაბრუნდნენ, ამის ამსახველი ფოტოებიც გავრცელდა. ",
      q12_p2: "გააზიარე ეს ამბავი.",

      q12_a1:
        "რა კარგი ამბავია, აუცილებლად გავაზიარებ, თან მართლა ბევრ ადამიანს \
     მოეწონება და ალბათ ამ პოსტს ასობით რეაქცია და კომენტარი მოჰყვება.",
      q12_a2:
        "ნეტავ ვენეციის არხებში დელფინები ცხოვრებას შეძლებენ? ვიდეოს კადრებს დავსქრინავ \
     და გუგლის ფოტოს ძიების ფუნქციით შევამოწმებ, სად არის გადაღებული, მანამდე კი  \
     არ გავაზიარებ. ",
      q12_a3:
        "ჰმ, თუ დოქტორი კლონი ამბობს, რომ ვიდეოებიც გავრცელდა, მაშინ ნამდვილი ამბავი \
     უნდა იყოს და გავაზიარებ.",

      q12_correct_1: "სწორად მიხვდი!",
      q12_correct_2:
        "ყოველთვის საიტებს კი არ ვაყალბებ, ვიდეოების ჯერიც დგება, შენ კი შეგიძლია \
     ვიზუალური მანიპულაციის შესახებ კიდევ უფრო მეტი ",
      q12_correct_3: "აქ",
      q12_correct_4:
        " გაიგო. გახსოვდეს, ინტერნეტში უამრავი ასეთი სიყალბე დავმალე.",

      q12_wrong_1: "ჰაჰა, როგორ გაგაცურე!",
      q12_wrong_2:
        "დელფინების კადრი სარდინიის პორტშია გადაღებული და არა ვენეციაში. როდესაც \
     საეჭვო პოსტს ნახულობ, რომელსაც თან ვიდეო ახლავს, შეგიძლია ვიდეოდან რამდენიმე სქრინი \
     გააკეთო და გუგლის ფოტოს ძიების ფუნქციითაც კი გადაამოწმო. გუგლი სხვა მსგავს კადრებსაც \
     მოიძიებს და ვიდეოს პირველწყაროსაც მიაგნებ. ფოტო-ვიდეო გადამოწმებაზე მეტის გაგება \
     შეგიძლია ",
      q12_wrong_3: "აქ.",

      cloneDefeat_p1: "მისტერ კლონი დამარცხებულია!",
      cloneDefeat_p2: "ბრძოლის დასასრული ახლოვდება. დარჩა 1 მინიონი.",

      cloneWin_p1: "დოქტორი ყველას დაგიპყრობთ!",
      cloneWin_p2: "არ დანებდე! ჯერ კიდევ შეგიძლია მისი დამარცხება.",

      //question 13

      mrFisher_p1: "და ბოლოს, მისტერ ფიშერმა შემოგიტია, ",
      mrFisher_p2:
        "გამოიყენე გამოცდილება, რომელიც აქამდე მიიღე და გამარჯვებული დაბრუნდი!",

      q13_p1:
        "მოგესალმები, არც თუ ისე საშიში ვარ, მოლოცვით დავიწყებ, შენ ინტერნეტში 5 \
      მილიარდჯერ დაგუგლე და პრიზიც დაიმსახურე, ფოტოსაც გიგზავნი, პრიზი აირჩიე, შემდეგ კი \
      რამდენიმე შენი პირადი მონაცემები დამჭირდება, ",
      q13_p2: "რას მოიმოქმედებ?",

      q13_a1: "მადლობა, ბოროტი სულაც არ ყოფილხარ",
      q13_a2: "რა მაგარიააააააა, ძალიან მიხარია!",
      q13_a3: "აქ დაწერილ სათაურს დავგუგლავ და გადავამოწმებ",

      q13_correct_1: "გამაკვირვე!",
      q13_correct_2:
        "თურმე გცოდნია, რომ ასეთი უეცარი საჩუქრები ინტერნეტში საეჭვოა და \
      დაგუგლვისას აუცილებლად აღმოაჩენდი, რომ საქმე ჩემნაირ თაღლითებთან გაქვს, რომლებიც \
      შენი მონაცემების მოპარვას ფიშინგის საშუალებით ცდილობენ. მომავალში საიტის საეჭვო \
      (URL) მისამართსაც დააკვირდი.",

      q13_wrong_1: "დაიჯერე, რომ დაგასაჩუქრებდი?!",
      q13_wrong_2:
        "ეს ჩემი, როგორც ინტერნეტ თაღლითის, ერთ-ერთი ხერხია იმისთვის, რომ შენი \
      პირადი მონაცემები მოვიპოვო. სხვა ხერხებსა და კიბერსივრცეში თავის დაცვაზე მეტის გაგება ",
      q13_wrong_3: "შეგიძლია აქ.",

      //question 14

      q14_p1:
        "გაგიკვირდება და დაგჰაკე! ყველაფერი ვიცი შენ შესახებ, მათ შორის შენი პაროლები. \
      ახლა შენი ჯერია, 1000 დოლარი უნდა გადამიხადო! ",
      q14_p2: "აბა, რას აპირებ?",

      q14_a1:
        "ახლავე გადმოვრიცხავ! კომპიუტერიდან  ჩემი პირადი ვიდეობი არ მოიპაროს და საჯაროდ \
      თავი არ მომჭრას!",
      q14_a2: "დავარეპორტებ ამ წერილს და არ გიპასუხებ!",
      q14_a3: "მუქარასა და გინებას მოგწერ!",

      q14_correct_1: "მომზადებული ჩანხარ!",
      q14_correct_2:
        "ვაღიარებ, მართალი ხარ, მაინც გირჩევ პაროლი შეცვალო და პაროლების \
      უსაფრთოხების წესებზე დამატებით ინფორმაციას ",
      q14_correct_3: "გაეცნო.",

      q14_wrong_1: "ჰაჰ, შესანიშანვად გაგაცურე!",
      q14_wrong_2:
        "შენივე მონაცემების უსაფრთხოებისთვის თანხა არც უნდა მომწერო და არც უნდა \
      გადმომირიცხო, შენს მოტყუებას ვცდილობ და მომავლისთვის იქნებ პაროლები ყურადღებით ",
      q14_wrong_3: "შეარჩიო.",

      //question 15

      q15_p1:
        "სასწრაფოდ! ბებიაშენმა მომწერა, თანხის გადმორიცხვა უნდა შენს ანგარიშზე \
          თავისი საპენსიო ბარათიდან, ",
      q15_p2: "უცებ მომწერე შენი ანგარიში და ჩამიგდე ბარათის ფოტოები.",

      q15_a1: "გაიხარე, რა კარგია, რომ ბებიაჩემს ეხმარები",
      q15_a2: "ეს პერსონალური ინფორმაციაა, გაზიარებას არ ვაპირებ!",
      q15_a3: "ფოტოებს ახლავე ჩაგიყრი, ანგარიშის ნომერს ვერ ვპოულობ.",

      q15_correct_1: "როგორც ჩანს, პირად ინფორმაციაზე გსმენია",
      q15_correct_2:
        "მართალი ხარ, შენი ფინანსური მონაცემები უყურადღებოდ არ უნდა გასცე \
          და ბებიასთან გადამოწმებაც არ იქნება ცუდი აზრი.",

      q15_wrong_1: "შეცდი, რაც მახარებს!",
      q15_wrong_2:
        "თუმცა გაითვალისწინე, რომ ასეთი დაუკვირვებლობით ჩემი მსხვერპლი მარტივად \
          გახდები და თანხასაც დაკარგავ, სჯობს ასეთი დეტალები ოჯახის წევრთან გადაამოწმო, პირადი \
          მონაცემები კი საეჭვო პირებს არ გაუზიარო, ბოლოს და ბოლოს ",
      q15_wrong_3: "ლალის გამოცდილებაც",
      q15_wrong_4: " გაითვალისწინე.",

      //question 16

      q16_p1:
        "ბოლოს გულახდილი ვიქნები, რეალურად მე გაკოტრებული ნიგერიელი პრინცი ვარ, დოქტორ\
        ფეიკსაც იმიტომ შევუერთდი, რომ ფული მჭირდება, ",
      q16_p2:
        "შენ თუ დამეხმარები და სუუულ ცოტა თანხას გადმომირიცხავ, მადლობელი ვიქნები...",

      q16_a1: "თავიდანვე ასე გეთქვა, რა თქმა უნდა, დაგეხმარები",
      q16_a2:
        "ვერ გამაცურებ, არ გიცნობ და შენ სახელშიც კი ფიშინგი ფიგურირებს, არ გენდობი!",
      q16_a3: "ბარათს მოვიტან ახლავე",

      q16_correct_1: "ჩემთვის სამწუხაროა, თუმცა სწორი პასუხია!",
      q16_correct_2:
        "“ნიგერიელი პრინცის” სქემა ფიშინგის ერთ-ერთი ყველაზე პოპულარული ",
      q16_correct_3: "გეგმაა",
      q16_correct_4: " და ვეჭვობ, შენ აღარასდროს წამოეგები",

      q16_wrong_1: "დიდი მადლობა დახმარებისთვის!",
      q16_wrong_2:
        "თუმცა ნიგერიელი პრინცი არ ვარ და ჩემი სახელი გავამართლე, ფიშინგის \
       საშუალებით თანხა გადმოგარიცხინე, მომავალში ფრთხილად იყავი და ნიგერიელი პრინცის თუ \
       სხვათა ხრიკებს ",
      q16_wrong_3: "ნუ წამოეგები.",
      q16_wrong_4: " ",

      phisherDefeat_p1: "მისტერ ფიშერი დამარცხებულია!",
      phisherDefeat_p2: "დოქტორ ფეიკი აღარ წარმოადგენს საფრთხეს ქალაქისთვის.",

      phisherWin_p1: "საცოდაობა ხარ მოკლედ.",
      phisherWin_p2: "არ დანებდე! ჯერ კიდევ შეგიძლია მისი დამარცხება.",

      trueHero: "ნამდვილი გმირი ხარ!",
      everyoneKnows: "გილოცავ! ყველა მხარდამჭერის განადგურებით დოქტორი \
      ფეიკი ძალაგამოცლილი დატოვე და უკვე გაიქცა კიდეც. მედიაწიგნიერების ქალაქი გაათავისუფლე, \
      ახლა მის დაცვაზეც უნდა იზრუნო, ცოდნა და უნარები სწორად გამოიყენე, თორემ კვლავ სიყალბე \
      გაბატონდება. ",

      share: "გაზიარება",
      playAgain: "თავიდან თამაში",

      cityIsMine: "ქალაქი ჩემს ხელშია!",
      itsOk: "არაუშავს, ყოველთვის შეგიძლია თავიდან სცადო",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ka",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
