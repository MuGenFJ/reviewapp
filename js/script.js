// reviewsBoxes.forEach(function(reviewBox){
//     const btn = reviewBox.querySelector(".btns");
//     btn.addEventListener('click', function(){
//         reviewsBoxes.forEach(function(item){
//             if(item !== reviewBox){
//                 item.classList.remove("show-answer");
//             };
//         });

//         reviewBox.classList.toggle("show-answer");
//     });
// });
//----------------------------------------------------------------------------------


// ReviewQuestions
const reviewArray = [
    {
      id: 1,
      question:
        "[No1]. What is the Kanji of to carry ?",
      answer:
        "持つ",
    },
    {
      id: 2,
      question:
        "[No2]. [Translate in Jap] : This kid looks like Will Smith daughter isn't it ?",
      answer:
        "あの子はウィルスミスさんの娘・(むすめ)さんみたいだね.",
    },
    {
      id: 3,
      question:
        "[No3]. [Translate in Jap] : If you often study you will improve your Japanese.",
      answer:
        "よく勉強すれば日本語が上手になりますよ.",
    },
    {
      id: 4,
      question:
        "[No4]. What is the Kanji of umbrella ?",
      answer:
        "傘",
    },
    {
      id: 5,
      question:
        "[No5]. [Translate in Jap] : During Summer Luxembourg will become chiller then Japan.",
      answer:
        "夏の時、ルクセンブルクは日本より涼しくなります。",
    },
    {
      id: 6,
      question:
      "[No6]. [Translate in Jap] : Tomorrow we planned to do a study trip with the pupil students.",
      answer:
        "明日生徒・(せいと) と見学会・(けんがくかい)　をするよていでした。",
    },
    {
      id: 7,
      question:
        "[No7]. What is the Kanji of older sister & older brother ?",
      answer:
        "姉・お兄さん",
    },
    {
      id: 8,
      question:
        "[No8]. What is the Kanji of little brother & little sister ?",
      answer:
        "弟・妹",
    },
    {
        id: 9,
        question:
        "[No9]. [Translate in Jap] : Did you already eat something? - No, but i'm on my way to eat something now.",
        answer:
          "もう何か食べましたか。 - いいえ、まだ食べていませんですが、今何かたべるところです。",
      },
    {
        id: 10,
        question:
        "[No10]. [Translate in Jap] : What are you searching exactly ?",
        answer:
          "せいかくに何を探して・(さがす)いるんですか。",
      },
    {
        id: 11,
        question:
        "[No11]. [Translate in Jap] : [I know this person taking classes] : Since when did you take Spanish classes ? - I started 1year ago!",
        answer:
          "いつからスペイン語を習っているんですか。- 一年前に始めました！",
      },
    {
        id: 12,
        question:
          "[No12]. What is the Kanji of spring, fall, winter and summer ?",
        answer:
          "春・秋・冬・夏",
      },
    {
        id: 13,
        question:
          "[No13]. What is the Kanji of bicycle ?",
        answer:
          "自転車",
      },
      {
        id: 14,
        question:
        "[No14]. [Translate in Jap] : I can't do this because i'm busy tomorrow morning. ",
        answer:
          "明日の朝は忙しくてできません。",
      },
      {
        id: 15,
        question:
        "[No15]. [Translate in Jap] : I can't do this because i'm busy tomorrow morning. ",
        answer:
          "明日の朝は忙しくてできません。",
      },
      {
        id: 16,
        question:
        "[No16]. [Translate in Jap] : Are you able to listen music inside your house ? ",
        answer:
          "家の中で音楽を聞こえられますか",
      },
      {
        id: 17,
        question:
        "[No17]. [Translate in Jap] : I'm just able to speak 3 foreign languages fluently. ",
        answer:
          "三つの外国語しかペラペラ話せません。",
      },
      {
        id: 18,
        question:
          "[No18]. What is the Kanji of begin & finish ?",
        answer:
          "始める・終わる",
      },
      {
        id: 19,
        question:
          "[No19]. What is the Kanji of water, fire, wind & earth ?",
        answer:
          "水・火・風・地",
      },
      {
        id: 20,
        question:
        "[No20]. [Translate in Jap] : There is a new Flower Shop who opened near the Post Office. ",
        answer:
          "郵便局の近くに新しい花屋開いていました。",
      },
      {
        id: 21,
        question:
        "[No21]. [Translate in Jap] : I can eat Sushis but i cannot eat porc meat. ",
        answer:
          "寿司を食べられますが豚肉は食べられません。",
      },
      {
        id: 22,
        question:
        "[No22]. [Translate in Jap] : In the company i'm working for, there is a fridge and in my house also. ",
        answer:
          "僕の働いている会社に冷蔵庫があります。家にもあります。",
      },
      {
        id: 23,
        question:
        "[No23]. [Translate in Jap] : In Osaka the food is delicious, the town is everytime busy and there's a lot of people. ",
        answer:
          "大阪は食べ物が美味しいし、町がいつも賑やかだし、人が多いです。",
      },
      {
        id: 24,
        question:
        "[No24]. [Translate in Jap] : This woman is beautiful, speak well english and she's good at cooking. ",
        answer:
          "あの女は綺麗だし、英語もできるしそれに料理を作るのは上手です。",
      },
      {
        id: 25,
        question:
        "[No25]. [Translate in Jap] : Why do you like Kyoto ? Um... Kyoto is close to Osaka, there's a lot of thing to watch and people are kind. ",
        answer:
          "どうして京都が好きですか。・えっと、京都は大阪から近いし、見えることもたくさんあるし、　　それに人も親切ですから。",
      },
      {
        id: 26,
        question:
          "[No26]. What is the Kanji of convenient & inconvenience ?",
        answer:
          "便利・不便",
      },
      {
        id: 27,
        question:
          "[No27]. What is the Kanji of world/society ?",
        answer:
          "世界",
      },
      {
        id: 28,
        question:
          "[No28]. What is the Kanji of ride/get on ?",
        answer:
          "乗る",
      },
      {
        id: 29,
        question:
          "[No29]. What is the Kanji of work, fire and meal (they have all one kanji in common) ?",
        answer:
          "仕事・火事・食事",
      },
      {
        id: 30,
        question:
          "[No30]. What is the Kanji of short and little ?",
        answer:
          "低い・小さい",
      },
      {
        id: 31,
        question:
          "[No31]. Traduis la phrase suivante : Le politicien a mis sa carriere en danger en ayant une affaire avec cette femme.",
        answer:
          "The politician took his career in jeopardy by having an affair with this woman.",
      },
      {
        id: 32,
        question:
          "[No32]. Traduis la phrase suivante : Tom a remis la lettre à sa mère que sa tante lui avait donnée.",
        answer:
          "Tom handed over the letter that his aunt gaved him to his mother.",
      },
      {
        id: 33,
        question:
          "[No33]. Traduis la phrase suivante : Si tu éternues sans mettre la main devant la bouche, tes germes seront projetés dans l'air.",
        answer:
          "If you sneeze without covering your mouth, your germs may become airborne.",
      },
      {
        id: 34,
        question:
          "[No34]. Traduis la phrase suivante : Le fleuriste locale a fourni toutes les fleurs gratuitement.",
        answer:
          "The local florist supplied all the flowers for free.",
      },
      {
        id: 35,
        question:
          "[No35]. Traduis la phrase suivante : Earl a achete une caisse d'orange au marche.",
        answer:
          "Earl bought a crate(kreit) of oranges at the market.",
      },
      {
        id: 36,
        question:
          "[No36]. Traduis la phrase suivante : Earl a achete une caisse d'orange au marche.",
        answer:
          "Earl bought a crate(kreit) of oranges at the market.",
      },
      {
        id: 37,
        question:
          "[No37]. Traduis la phrase suivante : L'avion a accelere sur la piste et s'est envole dans les airs.",
        answer:
          "The aircraft sped down the runway and soared(sort*s'envoler) into the air.",
      },
      {
        id: 38,
        question:
          "[No38]. Traduis la phrase suivante : Il y a eu beaucoup de plaintes au sujet de la série télévisée, qui contenait des niveaux de violence sans précédent.",
        answer:
          "There were a lot of complaints about the TV drama, which contained unprecedented levels of violence.",
      },
      {
        id: 39,
        question:
          "[No39]. Traduis la phrase suivante : La police a dévié la circulation le temps de remettre la route en état suite à l'accident.",
        answer:
          "Police diverted(daiverted) traffic while they cleared the road after the accident.",
      },
      {
        id: 40,
        question:
          "[No40]. Traduis la phrase suivante : La police a dévié la circulation le temps de remettre la route en état suite à l'accident.",
        answer:
          "Police diverted(daiverted-dévier) traffic while they cleared the road after the accident.",
      },
      {
        id: 41,
        question:
          "[No41]. Traduis la phrase suivante : Microsoft a vu sa part de marché diminuer avec la popularité croissante d'Appel.",
        answer:
          "Microsoft has seen its market share decrease with Appel's increasing popularity.",
      },
      {
        id: 42,
        question:
          "[No42]. Traduis la phrase suivante : Son attitude domoralise le moral au reste d'entre nous.",
        answer:
          "His attitude is dragging the rest of us down.",
      },
      {
        id: 43,
        question:
          "[No43]. Traduis la phrase suivante : J'ai commencé à descendre la colline et j'ai découvert que je n'avais pas de freins.",
        answer:
          "I began to descend(dicent) the hill and discovered i had no brakes.",
      },
      {
        id: 44,
        question:
          "[No44]. Traduis la phrase suivante : Tim a saisi la rampe et a commence a monter les escaliers.",
        answer:
          "Tim grasped the rail and starded up the stairs.",
      },
      {
        id: 45,
        question:
          "[No45]. Traduis la phrase suivante : C'est indéniable maintenant que la glace polaire se rétrécit chaque année.",
        answer:
          "It's undeniable(ande-nai-abel) now that polar ice is shrinking every year.",
      },
      {
        id: 46,
        question:
          "[No46]. Traduis la phrase suivante : Lorsque le policier s'est rendu compte qu'il ne pouvait pas gérer seul la situation, il a appelé assistance.",
        answer:
          "When the policemann realized he couldn't handle the situation alone, he called for backup.",
      },
      {
        id: 47,
        question:
          "[No47]. Traduis la phrase suivante : La clôture/barrière était attachée aux poteaux avec du fil electrique.",
        answer:
          "The fence was attached to the posts with wire.",
      },
      {
        id: 48,
        question:
          "[No48]. Traduis la phrase suivante : Le suspect a évité la police pendant trois jours.",
        answer:
          "The suspect evaded(iweided) the police for three days.",
      },
      {
        id: 49,
        question:
          "[No49]. Traduis la phrase suivante : La piqûre d'abeille a été une surprise totale pour Susan, qui ne l'avait pas remarqué ramper à l'intérieur de sa chemise.",
        answer:
          "The bee's sting came as a complete surprise to Susan, who hadn't noticed it crawl inside her shirt.",
      },
      {
        id: 50,
        question:
          "[No50]. Traduis la phrase suivante : Le boxeur a frappé son adversaire.",
        answer:
          "The boxer struck (verb:strike) his opponent.",
      },
      {
        id: 51,
        question:
        "[No51]. [Translate in Jap] : My clothess are torn(verb:tear). ",
        answer:
          "(服)・ふくが破れています。（やぶる）",
      },
      {
        id: 52,
        question:
        "[No52]. [Translate in Jap] : The electricity is lighted. ",
        answer:
          "電気が点きます(・つく）",
      },
      {
        id: 53,
        question:
        "[No53]. [Translate in Jap] : May i use this plastic bag ? This plastic bag is torn, please use this one. ",
        answer:　
        "このビニールぶくろを使ってもいいですか。 --このビニールぶくろはやぶれていますから、これを使ってください。",
      },
      {
        id: 54,
        question:
        "[No54]. [Translate in Jap] : I applied for the honeymoon. ",
        answer:　
        "新婚旅行（・しんこんりょこう）をも仕込んで（・もうしこむ）あります。",
      },
      {
        id: 55,
        question:
        "[No55]. [Translate in Jap] : I wrote my name on the note. ",
        answer:　
        " メモに名前が書いてあります。",
      },
      {
        id: 56,
        question:
        "[No56]. [Translate in Jap] : I put the battery in the flashlight. ",
        answer:　
        "懐中電灯（・かいちゅうでんとう）に電池（・でんち）を入れておきます。",
      },
      {
        id: 57,
        question:
        "[No57]. [Translate in Jap] : It's already 12 o'clock, let's hurry up sleeping. ",
        answer:　
        "もう12時だから、早寝よう（・ねよう）！",
      },
      {
        id: 58,
        question:
        "[No58]. [Translate in Jap] : I think to go to Osaka next week. ",
        answer:　
        "来週は大阪に行こうと思っています。",
      },
      {
        id: 59,
        question:
        "[No59]. [Translate in Jap] : This clothes looks fashionable, i think to buy it. ",
        answer:　
        "この服がお洒落（・しゃれ）ですね。買おうと思います。",
      },
      {
        id: 60,
        question:
        "[No60]. [Translate in Jap] : Did you already read the book ?. -- Not yet, i think to read it this weekend. ",
        answer:　
        "この本はもう読みましたか・いいえ、まだ読んでいません。今週、読もうと思っています。",
      },
      {
        id: 61,
        question:
          "[No61]. Traduis la phrase suivante : L'élève a été placé en retenue pour avoir perturbé la classe.",
        answer:
          "The student was given detention for disrupting the class.",
      },
      {
        id: 62,
        question:
          "[No62]. Traduis la phrase suivante : Si vous n'arrivez pas à dormir, retournez vous de l'autre côté et réessayez.",
        answer:
          "If you can't sleep turn over onto your other side and try again",
      },
      {
        id: 63,
        question:
          "[No63]. Traduis la phrase suivante : Pit se baissa pour donner une fleur à la petite fille.",
        answer:
          "Pit reached down to give the little girl a flower.",
      },
      {
        id: 64,
        question:
          "[No64]. Traduis la phrase suivante : Daniel a (re)tiré une épine de la patte du lion.",
        answer:
          "Daniel pulled a thorn from the lion's paw.",
      },
      {
        id: 65,
        question:
          "[No65]. Traduis la phrase suivante : Lorsque les randonneurs se sont réveillés, ils ont trouvé leur tente pleine de mille-pattes et de scarabées.",
        answer:
          "When the hikers woke up, they found their tent full of centipedes(centipids) and beetles.",
      },
      {
        id: 66,
        question:
          "[No66]. Traduis la phrase suivante : Le language d'Alif offense beaucoup de gens, mais il reste inconscient.",
        answer:
          "Alif's language offends many people, but he remains oblivious.",
      },
      {
        id: 67,
        question:
          "[No67]. Traduis la phrase suivante : Quand Gary s'est approche doucement et m'a tapé sur l'épaule, j'ai sauté.",
        answer:
          "When Gary crept up(verb: creep up) and tapped me on the shoulder, i jumped.",
      },
      {
        id: 68,
        question:
          "[No68]. Traduis la phrase suivante : Le lion s'approcha tout doucement sur le zebra inconscient et bondi.",
        answer:
          "The lion crept up on the oblivious zebra(sibra) and pounced.",
      },
      {
        id: 69,
        question:
          "[No69]. Traduis la phrase suivante : Le lion s'approcha tout doucement sur le zebra inconscient et bondi.",
        answer:
          "The lion crept up on the oblivious zebra(sibra) and pounced.",
      },
      {
        id: 70,
        question:
          "[No70]. Traduis la phrase suivante : Je me suis accroupis pour me cacher derrière le muret(petit mur).",
        answer:
          "I crouched down to hide behind the low wall.",      
      },
      {
        id: 71,
        question:
        "[No71]. [Translate in Jap] : In my planning/schedule i'll go with my family to the beach. ",
        answer:　
        "家族と海に行く予定（・よてい）。",
      },
      {
        id: 72,
        question:
        "[No71]. [Translate in Jap] : In my planning i'll have a lunch at 12pm. ",
        answer:　
        "12時に昼ご飯の予定です。",
      },
      {
        id: 73,
        question:
        "[No73]. [Translate in Jap] : It's better to stop smoking as soon as possible. ",
        answer:　
        "早くたばこを吸わない（・すう）方がいいですよ。",
      },
      {
        id: 74,
        question:
        "[No74]. [Translate in Jap] : You should eat more fruits during summer. ",
        answer:　
        "夏の時はもっと果物（・くだもの）を食べた方がいいですよ。",
      },
      {
        id: 75,
        question:
        "[No75]. [Translate in Jap] : You'll be probably able to see cleary the bridge tonight. ",
        answer:　
        "今夜は橋（・はし）がはっきり見えるでしょう。",
      },
      {
        id: 76,
        question:
        "[No76]. [Translate in Jap] : Since we may be late, let's hurry up ! ",
        answer:　
        "遅れるかもしれませんから、急ぎましょう。",
      },
      {
        id: 77,
        question:
        "[No77]. [Translate in Jap] : I may succeed, so i'll take part on the exam ! ",
        answer:　
        "合格（・ごうかく）するかもしれませんから、試験（・しけん）を受けます（うける）。",
      },
      {
        id: 78,
        question:
        "[No78]. [Translate in Jap] : Since the test tomorrow will may be difficult, you should study.  ",
        answer:　
        "明日のテストは難しいかもしれませんから、勉強した方がいいですよ。",
      },
      {
        id: 79,
        question:
        "[No79]. [Translate in Jap] : Don't buy chinese things !  ",
        answer:　
        "中国の物を買うな！",
      },
      {
        id: 80,
        question:
        "[No80]. [Translate in Jap] : Take out your money !  ",
        answer:　
        "金（・かね）を出せ（・だす）！",
      },
 
  ];



const reviewBox = document.getElementById('review-box');
const reviewText = document.querySelector(".thequestion");
const answerText = document.querySelector(".theanswer");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const randomBtn = document.getElementById("random");


//add or remove Class on ReviewBox
plusBtn.addEventListener("click", function(){
    reviewBox.classList.add("show-answer");
});
minusBtn.addEventListener("click", function(){
    reviewBox.classList.remove("show-answer");
});


// set starting quote
let currentReview = 0;

// load initial FullQuote
window.addEventListener('DOMContentLoaded', function(){
    showFullReview();
});

// showReview
function showFullReview(){
    const fullReview = reviewArray[currentReview];
    reviewText.textContent = fullReview.question;
    answerText.textContent = fullReview.answer;
};

  // show next review
  nextBtn.addEventListener('click', function(){
    currentReview++;
    if(currentReview > reviewArray.length -1) {
        currentReview = 0;
    }
    showFullReview(currentReview);
});

// show prev review
prevBtn.addEventListener('click', function(){
    currentReview--;
    if(currentReview < 0) {
        currentReview = reviewArray.length -1;
    }
    showFullReview(currentReview);
});

  // show random review
  randomBtn.addEventListener('click', function(){
    currentReview = Math.floor(Math.random() * reviewArray.length);
    showFullReview();
});





