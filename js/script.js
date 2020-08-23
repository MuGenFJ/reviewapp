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
  // {
  //   id: 1,
  //   question:
  //     "What is the Kanji of to carry ?",
  //   answer:
  //     "持つ",
  // },
  // {
  //   id: 2,
  //   question:
  //     "[Translate in Jap] : This kid looks like Will Smith daughter isn't it ?",
  //   answer:
  //     "あの子はウィルスミスさんの娘・(むすめ)さんみたいだね.",
  // },
  // {
  //   id: 3,
  //   question:
  //     "[Translate in Jap] : If you often study you will improve your Japanese.",
  //   answer:
  //     "よく勉強すれば日本語が上手になりますよ.",
  // },
  // {
  //   id: 4,
  //   question:
  //     "What is the Kanji of umbrella ?",
  //   answer:
  //     "傘",
  // },
  // {
  //   id: 5,
  //   question:
  //     "[Translate in Jap] : During Summer Luxembourg will become chiller then Japan.",
  //   answer:
  //     "夏の時、ルクセンブルクは日本より涼しくなります。",
  // },
  // {
  //   id: 6,
  //   question:
  //   "[Translate in Jap] : Tomorrow we planned to do a study trip with the pupil students.",
  //   answer:
  //     "明日生徒・(せいと) と見学会・(けんがくかい)　をするよていでした。",
  // },
  // {
  //   id: 7,
  //   question:
  //     "What is the Kanji of older sister & older brother ?",
  //   answer:
  //     "姉・お兄さん",
  // },
  // {
  //   id: 8,
  //   question:
  //     "What is the Kanji of little brother & little sister ?",
  //   answer:
  //     "弟・妹",
  // },
  // {
  //     id: 9,
  //     question:
  //     "[Translate in Jap] : Did you already eat something? - No, but i'm on my way to eat something now.",
  //     answer:
  //       "もう何か食べましたか。 - いいえ、まだ食べていませんですが、今何かたべるところです。",
  //   },
  // {
  //     id: 10,
  //     question:
  //     "[Translate in Jap] : What are you searching exactly ?",
  //     answer:
  //       "せいかくに何を探して・(さがす)いるんですか。",
  //   },
  // {
  //     id: 11,
  //     question:
  //     "[Translate in Jap] : [I know this person taking classes] : Since when did you take Spanish classes ? - I started 1year ago!",
  //     answer:
  //       "いつからスペイン語を習っているんですか。- 一年前に始めました！",
  //   },
  // {
  //     id: 12,
  //     question:
  //       "What is the Kanji of spring, fall, winter and summer ?",
  //     answer:
  //       "春・秋・冬・夏",
  //   },
  // {
  //     id: 13,
  //     question:
  //       "What is the Kanji of bicycle ?",
  //     answer:
  //       "自転車",
  //   },
  //   {
  //     id: 14,
  //     question:
  //     "[Translate in Jap] : I can't do this because i'm busy tomorrow morning. ",
  //     answer:
  //       "明日の朝は忙しくてできません。",
  //   },
  //   {
  //     id: 15,
  //     question:
  //     "[Translate in Jap] : I can't do this because i'm busy tomorrow morning. ",
  //     answer:
  //       "明日の朝は忙しくてできません。",
  //   },
  //   {
  //     id: 16,
  //     question:
  //     "[Translate in Jap] : Are you able to listen music inside your house ? ",
  //     answer:
  //       "家の中で音楽を聞こえられますか",
  //   },
  //   {
  //     id: 17,
  //     question:
  //     "[Translate in Jap] : I'm just able to speak 3 foreign languages fluently. ",
  //     answer:
  //       "三つの外国語しかペラペラ話せません。",
  //   },
  //   {
  //     id: 18,
  //     question:
  //       "What is the Kanji of begin & finish ?",
  //     answer:
  //       "始める・終わる",
  //   },
  //   {
  //     id: 19,
  //     question:
  //       "What is the Kanji of water, fire, wind & earth ?",
  //     answer:
  //       "水・火・風・地",
  //   },
  //   {
  //     id: 20,
  //     question:
  //     "[Translate in Jap] : There is a new Flower Shop who opened near the Post Office. ",
  //     answer:
  //       "郵便局の近くに新しい花屋開いていました。",
  //   },
  //   {
  //     id: 21,
  //     question:
  //     "[Translate in Jap] : I can eat Sushis but i cannot eat porc meat. ",
  //     answer:
  //       "寿司を食べられますが豚肉は食べられません。",
  //   },
  //   {
  //     id: 22,
  //     question:
  //     "[Translate in Jap] : In the company i'm working for, there is a fridge and in my house also. ",
  //     answer:
  //       "僕の働いている会社に冷蔵庫があります。家にもあります。",
  //   },
  //   {
  //     id: 23,
  //     question:
  //     "[Translate in Jap] : In Osaka the food is delicious, the town is everytime busy and there's a lot of people. ",
  //     answer:
  //       "大阪は食べ物が美味しいし、町がいつも賑やかだし、人が多いです。",
  //   },
  //   {
  //     id: 24,
  //     question:
  //     "[Translate in Jap] : This woman is beautiful, speak well english and she's good at cooking. ",
  //     answer:
  //       "あの女は綺麗だし、英語もできるしそれに料理を作るのは上手です。",
  //   },
  //   {
  //     id: 25,
  //     question:
  //     "[Translate in Jap] : Why do you like Kyoto ? Um... Kyoto is close to Osaka, there's a lot of thing to watch and people are kind. ",
  //     answer:
  //       "どうして京都が好きですか。・えっと、京都は大阪から近いし、見えることもたくさんあるし、　　それに人も親切ですから。",
  //   },
  //   {
  //     id: 26,
  //     question:
  //       "What is the Kanji of convenient & inconvenience ?",
  //     answer:
  //       "便利・不便",
  //   },
  //   {
  //     id: 27,
  //     question:
  //       "What is the Kanji of world/society ?",
  //     answer:
  //       "世界",
  //   },
  //   {
  //     id: 28,
  //     question:
  //       "What is the Kanji of ride/get on ?",
  //     answer:
  //       "乗る",
  //   },
  //   {
  //     id: 29,
  //     question:
  //       "What is the Kanji of work, fire and meal (they have all one kanji in common) ?",
  //     answer:
  //       "仕事・火事・食事",
  //   },
  //   {
  //     id: 30,
  //     question:
  //       "What is the Kanji of short and little ?",
  //     answer:
  //       "低い・小さい",
  //   },
  //   {
  //     id: 31,
  //     question:
  //       "Traduis la phrase suivante : Le politicien a mis sa carriere en danger en ayant une affaire avec cette femme.",
  //     answer:
  //       "The politician took his career in jeopardy by having an affair with this woman.",
  //   },
  //   {
  //     id: 32,
  //     question:
  //       "Traduis la phrase suivante : Tom a remis la lettre à sa mère que sa tante lui avait donnée.",
  //     answer:
  //       "Tom handed over the letter that his aunt gaved him to his mother.",
  //   },
  //   {
  //     id: 33,
  //     question:
  //       "Traduis la phrase suivante : Si tu éternues sans mettre la main devant la bouche, tes germes seront projetés dans l'air.",
  //     answer:
  //       "If you sneeze without covering your mouth, your germs may become airborne.",
  //   },
  //   {
  //     id: 34,
  //     question:
  //       "Traduis la phrase suivante : Le fleuriste locale a fourni toutes les fleurs gratuitement.",
  //     answer:
  //       "The local florist supplied all the flowers for free.",
  //   },
  //   {
  //     id: 35,
  //     question:
  //       "Traduis la phrase suivante : Earl a achete une caisse d'orange au marche.",
  //     answer:
  //       "Earl bought a crate(kreit) of oranges at the market.",
  //   },
  //   {
  //     id: 36,
  //     question:
  //       "Traduis la phrase suivante : Earl a achete une caisse d'orange au marche.",
  //     answer:
  //       "Earl bought a crate(kreit) of oranges at the market.",
  //   },
  //   {
  //     id: 37,
  //     question:
  //       "Traduis la phrase suivante : L'avion a accelere sur la piste et s'est envole dans les airs.",
  //     answer:
  //       "The aircraft sped down the runway and soared(sort*s'envoler) into the air.",
  //   },
  //   {
  //     id: 38,
  //     question:
  //       "Traduis la phrase suivante : Il y a eu beaucoup de plaintes au sujet de la série télévisée, qui contenait des niveaux de violence sans précédent.",
  //     answer:
  //       "There were a lot of complaints about the TV drama, which contained unprecedented levels of violence.",
  //   },
  //   {
  //     id: 39,
  //     question:
  //       "Traduis la phrase suivante : La police a dévié la circulation le temps de remettre la route en état suite à l'accident.",
  //     answer:
  //       "Police diverted(daiverted) traffic while they cleared the road after the accident.",
  //   },
  //   {
  //     id: 40,
  //     question:
  //       "Traduis la phrase suivante : La police a dévié la circulation le temps de remettre la route en état suite à l'accident.",
  //     answer:
  //       "Police diverted(daiverted-dévier) traffic while they cleared the road after the accident.",
  //   },
  //   {
  //     id: 41,
  //     question:
  //       "Traduis la phrase suivante : Microsoft a vu sa part de marché diminuer avec la popularité croissante d'Appel.",
  //     answer:
  //       "Microsoft has seen its market share decrease with Appel's increasing popularity.",
  //   },
  //   {
  //     id: 42,
  //     question:
  //       "Traduis la phrase suivante : Son attitude domoralise le moral au reste d'entre nous.",
  //     answer:
  //       "His attitude is dragging the rest of us down.",
  //   },
  //   {
  //     id: 43,
  //     question:
  //       "Traduis la phrase suivante : J'ai commencé à descendre la colline et j'ai découvert que je n'avais pas de freins.",
  //     answer:
  //       "I began to descend(dicent) the hill and discovered i had no brakes.",
  //   },
  //   {
  //     id: 44,
  //     question:
  //       "Traduis la phrase suivante : Tim a saisi la rampe et a commence a monter les escaliers.",
  //     answer:
  //       "Tim grasped the rail and starded up the stairs.",
  //   },
  //   {
  //     id: 45,
  //     question:
  //       "Traduis la phrase suivante : C'est indéniable maintenant que la glace polaire se rétrécit chaque année.",
  //     answer:
  //       "It's undeniable(ande-nai-abel) now that polar ice is shrinking every year.",
  //   },
  //   {
  //     id: 46,
  //     question:
  //       "Traduis la phrase suivante : Lorsque le policier s'est rendu compte qu'il ne pouvait pas gérer seul la situation, il a appelé assistance.",
  //     answer:
  //       "When the policemann realized he couldn't handle the situation alone, he called for backup.",
  //   },
  //   {
  //     id: 47,
  //     question:
  //       "Traduis la phrase suivante : La clôture/barrière était attachée aux poteaux avec du fil electrique.",
  //     answer:
  //       "The fence was attached to the posts with wire.",
  //   },
  //   {
  //     id: 48,
  //     question:
  //       "Traduis la phrase suivante : Le suspect a évité la police pendant trois jours.",
  //     answer:
  //       "The suspect evaded(iweided) the police for three days.",
  //   },
  //   {
  //     id: 49,
  //     question:
  //       "Traduis la phrase suivante : La piqûre d'abeille a été une surprise totale pour Susan, qui ne l'avait pas remarqué ramper à l'intérieur de sa chemise.",
  //     answer:
  //       "The bee's sting came as a complete surprise to Susan, who hadn't noticed it crawl inside her shirt.",
  //   },
  //   {
  //     id: 50,
  //     question:
  //       "Traduis la phrase suivante : Le boxeur a frappé son adversaire.",
  //     answer:
  //       "The boxer struck (verb:strike) his opponent.",
  //   },
  //   {
  //     id: 51,
  //     question:
  //     "[Translate in Jap] : My clothess are torn(verb:tear). ",
  //     answer:
  //       "(服)・ふくが破れています。（やぶる）",
  //   },
  //   {
  //     id: 52,
  //     question:
  //     "[Translate in Jap] : The electricity is lighted. ",
  //     answer:
  //       "電気が点きます(・つく）",
  //   },
  //   {
  //     id: 53,
  //     question:
  //     "[Translate in Jap] : May i use this plastic bag ? This plastic bag is torn, please use this one. ",
  //     answer:
  //     "このビニールぶくろを使ってもいいですか。 --このビニールぶくろはやぶれていますから、これを使ってください。",
  //   },
  //   {
  //     id: 54,
  //     question:
  //     "[Translate in Jap] : I applied for the honeymoon. ",
  //     answer:
  //     "新婚旅行（・しんこんりょこう）をも仕込んで（・もうしこむ）あります。",
  //   },
  //   {
  //     id: 55,
  //     question:
  //     "[Translate in Jap] : I wrote my name on the note. ",
  //     answer:
  //     " メモに名前が書いてあります。",
  //   },
  //   {
  //     id: 56,
  //     question:
  //     "[Translate in Jap] : I put the battery in the flashlight. ",
  //     answer:
  //     "懐中電灯（・かいちゅうでんとう）に電池（・でんち）を入れておきます。",
  //   },
  //   {
  //     id: 57,
  //     question:
  //     "[Translate in Jap] : It's already 12 o'clock, let's hurry up sleeping. ",
  //     answer:
  //     "もう12時だから、早寝よう（・ねよう）！",
  //   },
  //   {
  //     id: 58,
  //     question:
  //     "[Translate in Jap] : I think to go to Osaka next week. ",
  //     answer:
  //     "来週は大阪に行こうと思っています。",
  //   },
  //   {
  //     id: 59,
  //     question:
  //     "[Translate in Jap] : This clothes looks fashionable, i think to buy it. ",
  //     answer:
  //     "この服がお洒落（・しゃれ）ですね。買おうと思います。",
  //   },
  //   {
  //     id: 60,
  //     question:
  //     "[Translate in Jap] : Did you already read the book ?. -- Not yet, i think to read it this weekend. ",
  //     answer:
  //     "この本はもう読みましたか・いいえ、まだ読んでいません。今週、読もうと思っています。",
  //   },
  //   {
  //     id: 61,
  //     question:
  //       "Traduis la phrase suivante : L'élève a été placé en retenue pour avoir perturbé la classe.",
  //     answer:
  //       "The student was given detention for disrupting the class.",
  //   },
  //   {
  //     id: 62,
  //     question:
  //       "Traduis la phrase suivante : Si vous n'arrivez pas à dormir, retournez vous de l'autre côté et réessayez.",
  //     answer:
  //       "If you can't sleep turn over onto your other side and try again",
  //   },
  //   {
  //     id: 63,
  //     question:
  //       "Traduis la phrase suivante : Pit se baissa pour donner une fleur à la petite fille.",
  //     answer:
  //       "Pit reached down to give the little girl a flower.",
  //   },
  //   {
  //     id: 64,
  //     question:
  //       "Traduis la phrase suivante : Daniel a (re)tiré une épine de la patte du lion.",
  //     answer:
  //       "Daniel pulled a thorn from the lion's paw.",
  //   },
  //   {
  //     id: 65,
  //     question:
  //       "Traduis la phrase suivante : Lorsque les randonneurs se sont réveillés, ils ont trouvé leur tente pleine de mille-pattes et de scarabées.",
  //     answer:
  //       "When the hikers woke up, they found their tent full of centipedes(centipids) and beetles.",
  //   },
  //   {
  //     id: 66,
  //     question:
  //       "Traduis la phrase suivante : Le language d'Alif offense beaucoup de gens, mais il reste inconscient.",
  //     answer:
  //       "Alif's language offends many people, but he remains oblivious.",
  //   },
  //   {
  //     id: 67,
  //     question:
  //       "Traduis la phrase suivante : Quand Gary s'est approche doucement et m'a tapé sur l'épaule, j'ai sauté.",
  //     answer:
  //       "When Gary crept up(verb: creep up) and tapped me on the shoulder, i jumped.",
  //   },
  //   {
  //     id: 68,
  //     question:
  //       "Traduis la phrase suivante : Le lion s'approcha tout doucement sur le zebra inconscient et bondi.",
  //     answer:
  //       "The lion crept up on the oblivious zebra(sibra) and pounced.",
  //   },
  //   {
  //     id: 69,
  //     question:
  //       "Traduis la phrase suivante : Le lion s'approcha tout doucement sur le zebra inconscient et bondi.",
  //     answer:
  //       "The lion crept up on the oblivious zebra(sibra) and pounced.",
  //   },
  //   {
  //     id: 70,
  //     question:
  //       "Traduis la phrase suivante : Je me suis accroupis pour me cacher derrière le muret(petit mur).",
  //     answer:
  //       "I crouched down to hide behind the low wall.",
  //   },
  //   {
  //     id: 71,
  //     question:
  //     "[Translate in Jap] : In my planning/schedule i'll go with my family to the beach. ",
  //     answer:
  //     "家族と海に行く予定（・よてい）。",
  //   },
  //   {
  //     id: 72,
  //     question:
  //     "[Translate in Jap] : In my planning i'll have a lunch at 12pm. ",
  //     answer:
  //     "12時に昼ご飯の予定です。",
  //   },
  //   {
  //     id: 73,
  //     question:
  //     "[Translate in Jap] : It's better to stop smoking as soon as possible. ",
  //     answer:
  //     "早くたばこを吸わない（・すう）方がいいですよ。",
  //   },
  //   {
  //     id: 74,
  //     question:
  //     "[Translate in Jap] : You should eat more fruits during summer. ",
  //     answer:
  //     "夏の時はもっと果物（・くだもの）を食べた方がいいですよ。",
  //   },
  //   {
  //     id: 75,
  //     question:
  //     "[Translate in Jap] : You'll be probably able to see cleary the bridge tonight. ",
  //     answer:
  //     "今夜は橋（・はし）がはっきり見えるでしょう。",
  //   },
  //   {
  //     id: 76,
  //     question:
  //     "[Translate in Jap] : Since we may be late, let's hurry up ! ",
  //     answer:
  //     "遅れるかもしれませんから、急ぎましょう。",
  //   },
  //   {
  //     id: 77,
  //     question:
  //     "[Translate in Jap] : I may succeed, so i'll take part on the exam ! ",
  //     answer:
  //     "合格（・ごうかく）するかもしれませんから、試験（・しけん）を受けます（うける）。",
  //   },
  //   {
  //     id: 78,
  //     question:
  //     "[Translate in Jap] : Since the test tomorrow will may be difficult, you should study.  ",
  //     answer:
  //     "明日のテストは難しいかもしれませんから、勉強した方がいいですよ。",
  //   },
  //   {
  //     id: 79,
  //     question:
  //     "[Translate in Jap] : Don't buy chinese things !  ",
  //     answer:
  //     "中国の物を買うな！",
  //   },
  //   {
  //     id: 80,
  //     question:
  //     "[Translate in Jap] : Take out your money !  ",
  //     answer:
  //     "金（・かね）を出せ（・だす）！",
  //   },
  //   {
  //     id: 81,
  //     question:
  //       "Traduis la phrase suivante : La valeur de cette maison a ete reduite a cause du bruit des travaux.",
  //     answer:
  //       "The worth of the house has been reduced by the construction noise.",
  //   },
  //   {
  //     id: 82,
  //     question:
  //       "Traduis la phrase suivante : Est-ce que ca vaut le coup de le faire ?",
  //     answer:
  //       "Is it even worth doing ?",
  //   },
  //   {
  //     id: 83,
  //     question:
  //       "Traduis la phrase suivante : La respiration du patient est tres faible ?",
  //     answer:
  //       "The patient's breathing is very faint.",
  //   },
  //   {
  //     id: 84,
  //     question:
  //       "Traduis la phrase suivante : Cette article sur les droits de la femme a beaucoup de merite, mais tu dois changer quelques passages.",
  //     answer:
  //       "This article about woman's rights has a lot of worth, but you need to change a few things.",
  //   },
  //   {
  //     id: 85,
  //     question:
  //       "Traduis la phrase suivante :Les ailes du moulin tournoyaient lentement sous le vent.",
  //     answer:
  //       "The windmill's blades twirled(tuerlt) slowy in the breeze.",
  //   },
  //   {
  //     id: 86,
  //     question:
  //       "Traduis la phrase suivante : Mélanie est descendu du trottoir, pour se rendre sur la route.",
  //     answer:
  //       "Melanie stepped off the sidewalk, into the road",
  //   },
  //   {
  //     id: 87,
  //     question:
  //       "Traduis la phrase suivante : J'ai attrapé le ballon avec une main.",
  //     answer:
  //       "I caught the ball with one hand.",
  //   },
  //   {
  //     id: 88,
  //     question:
  //       "Traduis la phrase suivante : Il y avait un vent fort et les arbres se balançaient.",
  //     answer:
  //       "There was a strong wind and the trees were swaying.",
  //   },
  //   {
  //     id: 89,
  //     question:
  //       "Traduis la phrase suivante : Elle chercha desesperement ses clés à l'approche de l'homme.",
  //     answer:
  //       "She searched frantically(frentikli) for her keys as the man approached.",
  //   },
  //   {
  //     id: 90,
  //     question:
  //       "Traduis la phrase suivante : Le cheval a réagit instantanément au bruissement/sifflement du fouet.",
  //     answer:
  //       "The horse reacted instantly to the swish of the whip.",
  //   },
  //   {
  //     id: 91,
  //     question:
  //     "[Translate in Jap] : What's the meaning of this ? It means -Don't smoke-, -Go straight ahead- ",
  //     answer:
  //     "これはどういう意味（・いみ）ですか.　吸う（・すう）なという意味です, まっすぐ行けという意味です。",
  //   },
  //   {
  //     id: 92,
  //     question:
  //     "[Translate in Jap] : What is written on the bulletin board(panneau d'affichage) ? -Notifications are marked-",
  //     answer:
  //     "掲示板（・けいじばん）に何と書いてありますか。お知らせと書いてあります。",
  //   },
  //   {
  //     id: 93,
  //     question:
  //     "[Translate in Jap] : Over there how do you read that ?  しようちゅう. What does that mean ?　It means that now is in use.",
  //     answer:
  //     "あれは何と読みますか。・しようちゅうと読みます。・どういう意味ですか。・今使って(・つかう）いるという意味です。",
  //   },
  //   {
  //     id: 94,
  //     question:
  //     "[Translate in Jap] : He said that he won't be able to go to the party.",
  //     answer:
  //     "パーティーに行けないと言っていました。",
  //   },
  //   {
  //     id: 95,
  //     question:
  //     "[Translate in Jap] : Could you please transmit to the head chief of department that i will be 30minutes late ?",
  //     answer:
  //     "部長（・ぶちょう）に30分遅れる（・おくれる）つたえていただけませんか。",
  //   },
  //   {
  //     id: 96,
  //     question:
  //     "[Translate in Jap] : Could you drew it exactly as the picture ?",
  //     answer:
  //     "えのとおりに書けましたか 。",
  //   },
  //   {
  //     id: 97,
  //     question:
  //     "[Translate in Jap] : I brush my teeth after eating breakfast",
  //     answer:
  //     "朝ごはんを食べた後で歯（・は）を磨きます（・みがく）。",
  //   },
  //   {
  //     id: 98,
  //     question:
  //     "[Translate in Jap] : I brush my teeth after eating breakfast",
  //     answer:
  //     "朝ごはんを食べた後で歯（・は）を磨きます（・みがく）。",
  //   },
  //   {
  //     id: 99,
  //     question:
  //     "[Translate in Jap] : After i finished my homework i'll go meet my friends.",
  //     answer:
  //     "仕事を終わった後で友達に会います。",
  //   },
  //   {
  //     id: 100,
  //     question:
  //     "[Translate in Jap] : The exam was difficult, just as the teacher said would be.",
  //     answer:
  //     "先生が言ったとおりに、試験（・しけん）が難しかった（・むずかしい）。",
  //   },
  //   {
  //     id: 101,
  //     question:
  //     "[Coding] : What is an element ?",
  //     answer:
  //     "Is somthing like div etc ...",
  //   },
  //   {
  //     id: 102,
  //     question:
  //     "[Coding] : What mean -this- ?",
  //     answer:
  //     "This will give us the current object that excuting the function !",
  //   },
  //   {
  //     id: 103,
  //     question:
  //     "[Coding] : What is the method -toFixed(2)- do.",
  //     answer:
  //     "Rounding the number to keep only two decimals according to this case.",
  //   },
  //   {
  //     id: 104,
  //     question:
  //     "[Coding] : What is the method push() do.",
  //     answer:
  //     "Is for Add a new item into an array.",
  //   },
  //   {
  //     id: 105,
  //     question:
  //     "[Coding] : What does the method Math.floor() & Math.random() do ?",
  //     answer:
  //     "Math.random will give us a decimal number between 0,00 & 0,99 and we use Math.floor to convert the number into an integer(nombre sans decimal). Ex: Math.floor(Math.random()). Now we when we combine the both we'll get a random number between 0 & 1.",
  //   },
  //   {
  //     id: 106,
  //     question:
  //     "[Coding] : What does the method indexof() do ?",
  //     answer:
  //     "We can obtain the right position/index of an item/element in an array.",
  //   },
  //   {
  //     id: 107,
  //     question:
  //     "[Coding] : What does the method splice() do ?",
  //     answer:
  //     "It adds/removes items to/from an array, and returns the removed item(s).Ex : splice(2, 1, 'Lemon', 'Kiwi'). We say here at position 2 from our array fruits, add Lemon & Kiwi and remove just 1 item.",
  //   },
  //   {
  //     id: 108,
  //     question:
  //     "[Coding] : Which method could we use for transform our string, boolean etc into an array ?",
  //     answer:
  //     "We can use the function/method -Array.from()",
  //   },
  //   {
  //     id: 109,
  //     question:
  //     "[Coding] : What is a spreadOperator or also named ...Operator ?",
  //     answer:
  //     "He spread all the individual item contained in an array for instance so that we can grasp it.",
  //   },
  //   {
  //     id: 110,
  //     question:
  //     "[Coding] : Which function can we use to make a delay ?",
  //     answer:
  //     "setTimeout()",
  //   },
  //   {
  //     id: 111,
  //     question:
  //       "Traduis la phrase suivante : Morceaux de papiers",
  //     answer:
  //       "Bits of paper ",
  //   },
  //   {
  //     id: 112,
  //     question:
  //       "Traduis la phrase suivante : Tim a tiré le couvercle du récipient.",
  //     answer:
  //       "Tim pulled the lid of the container",
  //   },
  //   {
  //     id: 113,
  //     question:
  //       "Traduis la phrase suivante : Il a tendu sa main au chien pour qu'il la sente",
  //     answer:
  //       "He held out(pastForm)(verb: hold out) his hand for the dog to sniff it",
  //   },
  //   {
  //     id: 114,
  //     question:
  //       "Traduis la phrase suivante : Il riait si fort que des larmes coulaient sur ses joues.",
  //     answer:
  //       "He was laughing so hard that tears were rolling down his cheeks.",
  //   },
  //   {
  //     id: 115,
  //     question:
  //       "Traduis la phrase suivante : Si vous passez dix minutes par jour à apprendre une langue étrangère, vous en recoltez bientôt les benefices.",
  //     answer:
  //       "If you spend ten minutes a day learning a foreign language, you'll soon reap(riip) the benefits.",
  //   },
  //   {
  //     id: 116,
  //     question:
  //       "Traduis la phrase suivante : Oliver a seme le doute dans l'esprit de Rachel.",
  //     answer:
  //       "Oliver sowed(seuwt) doubt in Rachel's mind.",
  //   },
  //   {
  //     id: 117,
  //     question:
  //       "Traduis la phrase suivante : Les fauteurs de troubles ont semé le mécontentement parmi les villageois.",
  //     answer:
  //       "The troublemakers sowed discontent among the villagers.",
  //   },
  //   {
  //     id: 118,
  //     question:
  //       "Traduis la phrase suivante : Tu recoltes ce que tu seme.",
  //     answer:
  //       "You reap what you sow.",
  //   },
  //   {
  //     id: 119,
  //     question:
  //       "Traduis la phrase suivante : J'ai mauvaise conscience d'avoir abime le livre de la biblio.",
  //     answer:
  //       "My conscience(konshens) is bothering me about damaging that library book.",
  //   },
  //   {
  //     id: 120,
  //     question:
  //       "Traduis la phrase suivante : Si vous avez fait de votre mieux, c'est tout ce qui compte.",
  //     answer:
  //       "If you've done your best, then is all that matters.",
  //   },
  //   {
  //     id: 121,
  //     question:
  //     "[Translate in Jap] : I drink cofee without sugar.",
  //     answer:
  //     "砂糖（・さとう）を入れないで、コーヒーを飲みます。",
  //   },
  //   {
  //     id: 122,
  //     question:
  //     "[Translate in Jap] : If is autumn/fall, the colors of the leaves change.",
  //     answer:
  //     "秋になれば木の葉（・は）の色（いろ）が変わります（かわる）。",
  //   },
  //   {
  //     id: 123,
  //     question:
  //     "[Translate in Jap] : If you change the battery, this car will probably move.",
  //     answer:
  //     "バッテリーを変えれば（・かえる-to change）、この車は動くでしょう。",
  //   },
  //   {
  //     id: 123,
  //     question:
  //     "[Translate in Jap] : If you go to Japan in winter, you should buy an umbrella.",
  //     answer:
  //     "冬、日本へ行くなら傘を買ったほうがいいですよ。",
  //   },
  //   {
  //     id: 124,
  //     question:
  //     "[Translate in Jap] : The fresher/newest the vegetables, the better is.",
  //     answer:
  //     "野菜（・やさい）は新しければ新しいほど美味しい（・おいしい）です。",
  //   },
  //   {
  //     id: 125,
  //     question:
  //     "[Translate in Jap] : The quieter the cat, the better.",
  //     answer:
  //     "猫は静か（しずか）なら静かなほどいいです。",
  //   },
  //   {
  //     id: 126,
  //     question:
  //     "[Translate in Jap] : For Hot Springs, Odaiba is really good.",
  //     answer:
  //     "温泉（・おんせん）ならお台場（おだいば）がすごくいいですよ。",
  //   },
  //   {
  //     id: 127,
  //     question:
  //     "[Translate in Jap] : Where is Mr. Yamada ? Mr. Yamada, is at the conference room.",
  //     answer:
  //     "山田さんはどこですか。　山田さんなら、会議室(かいぎしつ）ですよ。",
  //   },
  //   {
  //     id: 128,
  //     question:
  //     "[Translate in Jap] : When should I climb Mt. Fuji ?",
  //     answer:
  //     "いつから富士山に登れば（・のぼる）いいですか。",
  //   },
  //   {
  //     id: 129,
  //     question:
  //     "[Translate in Jap] : For running faster, I practice every day.",
  //     answer:
  //     "早く走れる（はしれる）ように毎日練習（・れんしゅう）しています。",
  //   },
  //   {
  //     id: 130,
  //     question:
  //     "[Translate in Jap] : PCs became cheaper, so many people became capable to buy them.",
  //     answer:
  //     "パソコンは安くなりましたから、たくさんの人が買えるようになりました。",
  //   },
  //   {
  //     id: 131,
  //     question:
  //     "[Coding] : What does this function means ? return window.locaction.assign(newpage.html).",
  //     answer:
  //     "It means that when we clik on the button which have this function we will be redirected to the newpage.html.",
  //   },
  //   {
  //     id: 132,
  //     question:
  //     "[Coding] : How to add with javascript a background color to my body ?",
  //     answer:
  //     "body.style.backgroundColor = blue;",
  //   },
  //   {
  //     id: 133,
  //     question:
  //     "[Coding] : How can we select & change the text color of a placeholder in an input in CSS ?",
  //     answer:
  //     "input::placeholder { color : red }",
  //   },
  //   {
  //     id: 134,
  //     question:
  //     "[Coding] : What does the preventDefault() function do ?",
  //     answer:
  //     "The preventDefault() method, cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.",
  //   },
  //   {
  //     id: 135,
  //     question:
  //     "[Coding] : What does localStorage.setItem() do ?",
  //     answer:
  //     "setItem is the method that allows us to store a data into the localStorage. It has a (key, value) as params. Have to know that localStorage can just store strings.",
  //   },
  //   {
  //     id: 136,
  //     question:
  //     "[Coding] : What would be the properties/method here in that case ? myObject{name: John, age: 28} ?",
  //     answer:
  //     "myObject.name & myObject.age",
  //   },
  //   {
  //     id: 137,
  //     question:
  //     "[Coding] :  Explain: 1. var= user{name: John, age: 28} localStorage.setItem(id, JSON.stringify(user)); 2. JSON.parse(localstorage.getItem(user))",
  //     answer:
  //     "1. We have an object named user and we want to store it, we setItem with a key of id and a value of JSON... but since we know that localStorage can only store strings we convert the user object into a string with method stringify(). 2. Then we convert again this string to an readable object for the localStorage.",
  //   },
  //   {
  //     id: 138,
  //     question:
  //       "Traduis la phrase suivante : Peu m'importe qu'il fasse beau ou non. Je veux toujours aller à la plage.",
  //     answer:
  //       "It doesn't matter to me if it's sunny or not. I still want to go to the beach.",
  //   },
  //   {
  //     id: 139,
  //     question:
  //       "Traduis la phrase suivante : C'est un homme instruit, mais il n'a pas beaucoup de bon sens.",
  //     answer:
  //       "He's an educated man, but he doesn't have much common sense.",
  //   },
  //   {
  //     id: 140,
  //     question:
  //       "Traduis la phrase suivante : Mason a eu ses amygdales enlevées chirurgicalement quand il était enfant.",
  //     answer:
  //       "Mason had his tonsils(tansels) surgically(serdjikeli) removed when he was a kid.",
  //   },
  //   {
  //     id: 141,
  //     question:
  //       "Traduis la phrase suivante : Aie! Ne touchez pas le bleu sur mon bras. C'est vraiment douloureux.",
  //     answer:
  //       "Ouch! Don't touch the bruise(bruus) on my arm. It's really sore (sor).",
  //   },
  //   {
  //     id: 142,
  //     question:
  //       "Traduis la phrase suivante : Barry a une méchante infection de la gorge.",
  //     answer:
  //       "Barry's got a nasty throat(tuert) infection.",
  //   },
  //   {
  //     id: 143,
  //     question:
  //       "Traduis la phrase suivante : Le médecin a demandé au patient de se déshabiller et de mettre une blouse avant la chirurgie.",
  //     answer:
  //       "The doctor asked the patient to undress and put on a gown(gawn) before surgery.",
  //   },
  //   {
  //     id: 144,
  //     question:
  //       "Traduis la phrase suivante : Brent fit signe à ses fils en s'approchant de la maison.",
  //     answer:
  //       "Brent waved at his sons as he approached the house.",
  //   },
  //   {
  //     id: 145,
  //     question:
  //       "Traduis la phrase suivante : Il m'a dit de compter en arriere/a contre-courant à partir de dix.",
  //     answer:
  //       "He told me to count backwards from ten.",
  //   },
  //   {
  //     id: 146,
  //     question:
  //       "Traduis la phrase suivante : Leur chat peut manger et ronronner en même temps.",
  //     answer:
  //       "Their cat can eat an purr(peurr) at the same time.",
  //   },
  //   {
  //     id: 147,
  //     question:
  //       "Traduis la phrase suivante : Nous étions assis tranquillement là quand tout à coup mon chat s'est levé.",
  //     answer:
  //       "We were sitting there quietly when suddenly my cat stood up.",
  //   },
  //   {
  //     id: 148,
  //     question:
  //       "Traduis la phrase suivante : Cette voiture était une bonne affaire à seulement 5000 $.",
  //     answer:
  //       "This car was a bargain(bargen) at only 5000$.",
  //   },
  //   {
  //     id: 149,
  //     question:
  //       "Traduis la phrase suivante : Les enfants ont jeté des miettes aux oiseaux.",
  //     answer:
  //       "The children threw crumbs to the birds.",
  //   },
  {
    id: 150,
    question:
      "Traduis la phrase suivante : Je ne trouve pas le dé à coudre qui était dans ma boîte à couture.",
    answer: "I can't find the thimble(fimbel) that was in my sewing box.",
  },
  {
    id: 151,
    question: "[Translate in Jap] : Baby/infant.",
    answer: "あかんぼう.",
  },
  {
    id: 152,
    question: "[Translate in Jap] : peace of mind(tranquillite de l'esprit).",
    answer: "安心（・あんしん）.",
  },
  {
    id: 153,
    question: "[Translate in Jap] : safe.",
    answer: "あんぜん.",
  },
  {
    id: 154,
    question: "[Translate in Jap] : to apologize.",
    answer: "あやまる.",
  },
  {
    id: 155,
    question: "[Translate in Jap] : program TV.",
    answer: "ばんぐみ",
  },
  {
    id: 156,
    question: "[Translate in Jap] : bell.",
    answer: "ベル",
  },
  {
    id: 157,
    question: "[Translate in Jap] : trade(commerce international).",
    answer: "ぼうえき",
  },
  {
    id: 158,
    question: "[Translate in Jap] : grapes.",
    answer: "ぶどう",
  },
  {
    id: 159,
    question: "[Translate in Jap] : literature.",
    answer: "ぶんがく",
  },
  {
    id: 160,
    question: "[Translate in Jap] : strength/force.",
    answer: "ちから",
  },
  {
    id: 161,
    question: "[Translate in Jap] : I became unable to read small letters.",
    answer: "小さい字が読めなくなりました。",
  },
  {
    id: 162,
    question: "[Translate in Jap] : I try to not eat sweet things.",
    answer: "甘い（・あまい）物を食べないようにしています。",
  },
  {
    id: 163,
    question: "[Translate in Jap] : Please try to not smoke here at all.",
    answer:
      "ここでは絶対（・ぜったい）に煙草（・たばこ）を吸わない（・すわない）ようにしてください。",
  },
  {
    id: 164,
    question: "[Translate in Jap] : I was scolded by the manager.",
    answer: "私は部長に𠮟れました（・しかれました）。",
  },
  {
    id: 165,
    question: "[Translate in Jap] : The teacher praised me.",
    answer: "先生は私を褒めました（・ほめる）。",
  },
  {
    id: 166,
    question: "[Translate in Jap] : I was stepped on by a woman.",
    answer: "私は女の人に足を踏まれました（・ふむ）。",
  },
  {
    id: 167,
    question:
      "[Translate in Jap] : The Olympics will be held in Tokyo in 2020.",
    answer:
      "2020年東京でオリンピックが開かれる（・ひらかれる -to be held/to open)。",
  },
  {
    id: 168,
    question: "[Translate in Jap] : Beer is made from wheat/oat.",
    answer: "ビールは麦（・むぎ）から作られます。",
  },
  {
    id: 169,
    question: "[Translate in Jap] : Beer is made from wheat.",
    answer:
      "ビールは麦（・むぎ）から作られます。(We use から cuz of raw material.",
  },
  {
    id: 170,
    question: "[Translate in Jap] : This desk was made of wood.",
    answer: "この机は木で作られました。(We use で cuz Wood is a material.",
  },
  {
    id: 171,
    question: "[Translate in Jap] : Geography.",
    answer: "ちり",
  },
  {
    id: 172,
    question: "[Translate in Jap] : Caution.",
    answer: "ちゅうい",
  },
  {
    id: 173,
    question: "[Translate in Jap] : Injection.",
    answer: "ちゅうしゃ",
  },
  {
    id: 174,
    question: "[Translate in Jap] : Considerably, a lot.",
    answer: "だいぶ",
  },
  {
    id: 175,
    question: "[Translate in Jap] : roughly/(a peu pres).",
    answer: "だいたい",
  },
  {
    id: 176,
    question: "[Translate in Jap] : Heating(chauffage).",
    answer: "だんぼう",
  },
  {
    id: 177,
    question: "[Translate in Jap] : man/male.",
    answer: "だんせい",
  },
  {
    id: 178,
    question: "[Translate in Jap] : telegram.",
    answer: "でんぽう",
  },
  {
    id: 179,
    question: "[Translate in Jap] : electric light.",
    answer: "でんとう",
  },
  {
    id: 180,
    question: "[Translate in Jap] : more and more.",
    answer: "どんどん",
  },
  {
    id: 181,
    question:
      "Traduis la phrase suivante : Après la pluie, il y avait plusieurs flaques d'eau le long de la rue.",
    answer: "After the rain, there were several puddles along the street.",
  },
  {
    id: 182,
    question:
      "Traduis la phrase suivante : La barque avait deux rames qui ont été utilisées pour ramer dans l'eau.",
    answer:
      "The rowboat had two oars(ors) that were used to row it through the water.",
  },
  {
    id: 183,
    question:
      "Traduis la phrase suivante : Vous pouvez trouver une boîte d'allumettes à côté de la cuisinière.",
    answer: "You can find a matchbox next to the stove.",
  },
  {
    id: 184,
    question:
      "Traduis la phrase suivante : Henry a mis la bouilloire sur la cuisinière pour chauffer l'eau.",
    answer: "Henry put the kettle(kedel) on the stove to heat(hiit) the water.",
  },
  {
    id: 185,
    question:
      "Traduis la phrase suivante : Mina se réveilla en frissonnant et réalisa que le couvre-lit était tombé.",
    answer:
      "Mina woke up shivering and realised that the bedspread had fallen off.",
  },
  {
    id: 186,
    question:
      "Traduis la phrase suivante : Tu aurais besoin d'habiller des vetements de poupees.",
    answer: "You would have to wear dolls clothes.",
  },
  {
    id: 187,
    question:
      "Traduis la phrase suivante : Je préfère les moufles aux gants car elles sont plus chaudes.",
    answer: "I prefer mittens to gloves because they are warmer.",
  },
  {
    id: 188,
    question:
      "Traduis la phrase suivante : Une soudaine rafale/coup de vent a presque arraché Katy de ses pieds.",
    answer: "A sudden gust of wind almost kocked Katy off her feet.",
  },
  {
    id: 189,
    question:
      "Traduis la phrase suivante : La nourriture de l'école n'était pas mauvaise, mais Kevin avait une folle envie de cuisine de sa mère.",
    answer:
      "The school food wasn't bad, but Kevin craved his mother's cooking.",
  },
  {
    id: 190,
    question:
      "Traduis la phrase suivante : Je ne peux pas être sûr que la rumeur soit vraie, comme je l'ai entendue indirectement.",
    answer: "I can't be sure the rumour is true, as I heard it secondhand.",
  },
  {
    id: 191,
    question: "[Coding] : What's the meaning ? highScores.splice(5);",
    answer:
      "Imagine that we have an array named highScores, so here at the 5th position in this array highScores we start cutting of evertying after that.",
  },
  {
    id: 192,
    question:
      "[Coding] : What will console.log(nLs) give us in that case ? let nLs= array.map(function(item, index, array){ return item.length;});",
    answer: "It will give all the item's length one by one inside the array.",
  },
  {
    id: 193,
    question: "[Coding] : What does the map() function do ?",
    answer:
      "We are able to map(loop) each item in the array  and change to something else inside a new array.",
  },
  {
    id: 194,
    question: "[Coding] : What does the function sort() do ?",
    answer: "Like the function name, its sorts the items of an array.",
  },
  {
    id: 195,
    question:
      "[Coding] : Meaning ? \nconst classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';",
    answer: "If sA equal cQ.a then is correct otherwise is incorrect.",
  },
  {
    id: 196,
    question:
      "[Coding] : Convert this function into an arrow function. function getQuestion(){};",
    answer: "getQuestion = () => {};",
  },
  {
    id: 197,
    question:
      "[Coding] : What does this in javascript mean ? let q = [{item:1,item:2etc}] avQ = [...q]",
    answer:
      "Take the array from q and spread all the item inside it then create a new array named avQ ",
  },
  {
    id: 198,
    question:
      "[Coding] : What does this CSS mean ? .btn[disabled]:hover {cursor: not-allowed}",
    answer:
      "It means to all btn which have the atrribute of disabled, in hover they will have this style.",
  },
  {
    id: 199,
    question:
      "[Coding] : What does that mean in CSS ? .container > * { width:100%;}",
    answer:
      "It means that any child which has as direct parent of container will have a width of 100%",
  },
  {
    id: 200,
    question: "[Coding] : What is the meaning of JASON ?",
    answer: "JavaScript Object Notation (is a format for storing data)",
  },
  {
    id: 201,
    question: "[Translate in Jap] : French is also spoken in South-Africa.",
    answer: "フランス語は南アフリカでも話されています。",
  },
  {
    id: 202,
    question: "[Translate in Jap] : English is spoken in various countries.",
    answer: "英語はいろいろな国で話されています。",
  },
  {
    id: 203,
    question: "[Translate in Jap] : The light bulb was invented by Mr. Edison.",
    answer:
      "電球(・でんきゅう) はエジソンさんによって発明されました。(はつめいする・to invent)",
  },
  {
    id: 204,
    question: "[Translate in Jap] : Getting up early in the morning it's hard.",
    answer: "朝早く起きるのは大変です(・たいへん）。",
  },
  {
    id: 205,
    question: "[Translate in Jap] : I'm not good at dancing.",
    answer: "ダンスをするのが下手です。",
  },
  {
    id: 206,
    question:
      "[Translate in Jap] : Do you know that Yoshida left the company ?",
    answer: "よしださんが会社を辞めた（やめる）のを知っていますか。",
  },
  {
    id: 207,
    question: "[Translate in Jap] : I forgot to lock my house.",
    answer: "家の鍵（・かぎ）をかける（-to secure/lock)のを忘れました。",
  },
  {
    id: 208,
    question:
      "[Translate in Jap] : It is Mr. Yamada that I will meet tomorrow.",
    answer: "私が明日会おうのは山田さんです。",
  },
  {
    id: 209,
    question:
      "[Translate in Jap] : When is the teacher going to see Mr Tanaka?",
    answer: "先生が田中さん会おうのはいつですか。",
  },
  {
    id: 210,
    question: "[Translate in Jap] : It's hard to pronounce well.",
    answer: "上手に発音（・はつおん）できなくて大変です。",
  },
  {
    id: 211,
    question: "[Translate in Jap] : Tool.",
    answer: "どうぐ。",
  },
  {
    id: 212,
    question: "[Translate in Jap] : Branch.",
    answer: "えだ",
  },
  {
    id: 213,
    question: "[Translate in Jap] : declining, refraining​, holding back",
    answer: "えんりょ",
  },
  {
    id: 214,
    question: "[Translate in Jap] : fax",
    answer: "ファックス",
  },
  {
    id: 215,
    question: "[Translate in Jap] : deep",
    answer: "ふかい",
  },
  {
    id: 216,
    question: "[Translate in Jap] : review/revision",
    answer: "ふくしゅう",
  },
  {
    id: 217,
    question: "[Translate in Jap] : complex,complicated",
    answer: "ふくざつ",
  },
  {
    id: 218,
    question: "[Translate in Jap] : to begin to rain/snow",
    answer: "ふりだす",
  },
  {
    id: 219,
    question: "[Translate in Jap] : usually",
    answer: "ふつう",
  },
  {
    id: 220,
    question: "[Translate in Jap] : petrol station",
    answer: "ガソリンスタンド",
  },
  {
    id: 221,
    question:
      "Traduis la phrase suivante : Il etait assis à table et m'a lu des extraits du journal.",
    answer: "He sat at the table and read me snippets from the paper.",
  },
  {
    id: 222,
    question:
      "Traduis la phrase suivante : Martin a travaillé environ huit heures aujourd'hui.",
    answer: "Martin has done roughly eight hours work today.",
  },
  {
    id: 223,
    question:
      "Traduis la phrase suivante : Elle était considérablement bouleversée par les nouvelles.",
    answer: "She was considerably(kensidrebli) upset by the news.",
  },
  {
    id: 224,
    question:
      "Traduis la phrase suivante : La géographie de la région la rend presque inaccessible en voiture.",
    answer:
      "The geography(djiografi) of the region(riijen) makes it nearly inaccessible(inex-cessebel) by car.",
  },
  {
    id: 225,
    question:
      "Traduis la phrase suivante : Soyez extrêmement prudent lorsque vous traversez une rue très fréquentée.",
    answer: "Use extreme caution(kachen) when you cross a busy street.",
  },
  {
    id: 226,
    question:
      "Traduis la phrase suivante : L'enfant etait etendu dans le berceau.",
    answer: "The infant lay in the crib.",
  },
  {
    id: 227,
    question:
      "Traduis la phrase suivante : Ils s'assoient dans la cour (jardin de derriere) et lisent tout l'été.",
    answer: "They sit in the backyard and read all summer.",
  },
  {
    id: 228,
    question:
      "Traduis la phrase suivante : Des couples valsaient sur la musique d'un petit orchestre.",
    answer:
      "Couples were waltzing(ualsing) to the music of a small orchestra.(okestra)",
  },
  {
    id: 229,
    question:
      "Traduis la phrase suivante : Jake est tellement maladroit qu'il se heurte toujours à des choses et laisse tomber des choses.",
    answer:
      "Jake is so clumsy(klamsi) he's always running into things and dropping things.",
  },
  {
    id: 230,
    question:
      "Traduis la phrase suivante : Je voudrais une tarte, une purée de pommes de terre et des légumes.",
    answer: "I would like pie, mashed(mëcht) potatoes, and vegetables.",
  },
  {
    id: 231,
    question: "[Coding] : What is the button.addEventListener(keyup) do ?",
    answer:
      "Is an event listener that will react instantly when you release a key from your keyboard.",
  },
  {
    id: 232,
    question: "[Coding] : What is the function sort() do ?",
    answer: "It will sorts an array alphabetically.",
  },
  {
    id: 233,
    question:
      "[Coding] : What does this CSS do ? button:active {transform: scale(0.98);}",
    answer: "It means when we clik on the btn it will decrease the zoom. ",
  },
  {
    id: 234,
    question: "[Coding] : What is the difference between let and const ?",
    answer: "let we can owerwrite it & const not.",
  },
  {
    id: 235,
    question:
      "[Coding] : What does the function filter() do? const filtered = num.filter(function(value){return value >= 0;}) ?",
    answer:
      "Imagine that we have an array with + and - numbers. \nIts filter the array on the criteria. \nThe function have an callback function with 3 params: value,index,array. \nIt will loop through the array and will excecute the callback function for each number. \nIf the element inside the array match the criteria it will add the element according the criteria to a new array.",
  },
  {
    id: 236,
    question:
      "[Coding] : What does the join() do ? var fruits=[banana,orange...]; var ener= fruits.join();",
    answer:
      "This function will tranform the array into a string. banana,orange ...",
  },
  {
    id: 237,
    question: "[Coding] : How does the function forEach() work? ",
    answer:
      "It will call a callback function once for each element inside an array. The callback f has 3param:item,index,array. item for the element, index for the number and array for that array.",
  },
  {
    id: 238,
    question: "[Coding] : What is an argument in an function ?",
    answer: "It is the same as an params .",
  },
  {
    id: 239,
    question:
      "[Translate in Jap] : In Japan's Summer it's also hot at night that's difficult.",
    answer: "日本の夏は夜も熱くて大変です。",
  },
  {
    id: 240,
    question:
      "[Translate in Jap] :　Many houses were destroyed/broken by the earthquake.",
    answer: "地震で(じしん）たくさんの家が壊れました。（・こわれる）",
  },
  {
    id: 241,
    question: "[Translate in Jap] :　I have a promise today so i can't go.",
    answer: "今日は約束（・やくそく）があるのでいけません。",
  },
  {
    id: 242,
    question:
      "[Translate in Jap] :　It's already 11pm, so can you keep quiet ?",
    answer: "もう夜（よる）11時なので静か（・しずか）にしていただけませんか。",
  },
  {
    id: 242,
    question: "[Translate in Jap] :　I don't know how much these shoes are.",
    answer: "この靴はいくらかわかりません。",
  },
  {
    id: 243,
    question:
      "[Translate in Jap] :　If i can do anything for my little brother, ask me please.",
    answer: "私が弟のためにできることがあれば、いつでも言ってくださいね。",
  },
  {
    id: 244,
    question: "[Translate in Jap] :　Please tell me if Yuri is cute or not.",
    answer:
      "ゆりさんは可愛い（・かわいい）かどうか教えて（・おしえる）ください。",
  },
  {
    id: 245,
    question: "[Translate in Jap] :　cause; origin; source​.",
    answer: "げんいん",
  },
  {
    id: 246,
    question: "[Translate in Jap] :　lodging(hebergement/logement).",
    answer: "げしゅく",
  },
  {
    id: 247,
    question: "[Translate in Jap] : technique, skill",
    answer: "ぎじゅつ",
  },
  {
    id: 248,
    question: "[Translate in Jap] : a feast",
    answer: "ごちそう",
  },
  {
    id: 249,
    question: "[Translate in Jap] : rubbish/garbage",
    answer: "ごみ",
  },
  {
    id: 250,
    question: "[Translate in Jap] : your husband/her husband",
    answer: "ごしゅじん",
  },
  {
    id: 251,
    question:
      "Traduis la phrase suivante : Vous devez attendre que les prunes soient mûres avant de les cueillir.",
    answer:
      "You need to wait until the plums(plams) are ripe(raip) before you pick them.",
  },
  {
    id: 252,
    question:
      "Traduis la phrase suivante : Au-delà du potager se trouve un verger(terrain planté d'arbre fruitiers) avec une variété d'arbres fruitiers.",
    answer:
      "Beyond the vegetable garden is an orchard(orched) with a variety(vewa-yeti) of fruit trees.",
  },
  {
    id: 253,
    question:
      "Traduis la phrase suivante : Rangez-vous vers la droite si vous entendez une sirène.",
    answer: "Pull over to the right if you hear a siren(sairen).",
  },
  {
    id: 254,
    question:
      "Traduis la phrase suivante : Vous serez payé lorsque vous aurez rempli vos obligations contractuelles.",
    answer:
      "You will be paid when you've fulfilled your contractual obligations.",
  },
  {
    id: 255,
    question:
      "Traduis la phrase suivante : Ils ne reçoivent pas une part équitable des bénéfices.",
    answer: "They aren't receiving a fair share of the profits.",
  },
  {
    id: 256,
    question: "Traduis la phrase suivante : La beauté est superficielle.",
    answer: "Beauty is skin deep.",
  },
  {
    id: 257,
    question:
      "Traduis la phrase suivante : Le juge a accordé au plaignant le droit de voir les documents.",
    answer:
      "The Judge granted(grënted) the plaintiff(plëintiff) the right to see the documents.",
  },
  {
    id: 258,
    question:
      "Traduis la phrase suivante : Les enfants se sont faufilés en bas, tôt le matin de Noël, pour voir si le Père Noël avait été.",
    answer:
      "The children snuck(past form - to sneak) downstairs, early on Christmas morning, to see if Santa had been.",
  },
  {
    id: 259,
    question:
      "Traduis la phrase suivante : Becky a une forte croyance en la superstition, et elle a paniqué quand elle a vu un chat noir sur le trottoir devant elle.",
    answer:
      "Becky has a strong belief in superstition(superstichen), and she panicked when she saw a black cat on the sidewalk ahead of her.",
  },
  {
    id: 260,
    question:
      "Traduis la phrase suivante : Cette nouvelle lessive me fait des démangeaisons partout.",
    answer: "This new washing-powder is making me itchy all over.",
  },
  {
    id: 261,
    question: "[Coding] : What is dataset property ?",
    answer:
      "Dataset property allows us to set and get the values of data attributes of an html element. myDiv.dataset.name=Bob. This for ex will modifiy the value to bob.",
  },
  {
    id: 263,
    question:
      "[Coding] : What is the difference between map() and filter() functions ?",
    answer:
      "With map we can loop through all item inside an array and modify it and filter we loop through all item with a search criteria based on the callback function that will go through each item.",
  },
  {
    id: 264,
    question:
      "[Coding] : Translate thoses signs: -, _, :, ;, virgule, (), {}, [], double gimets, ', `, <, >, !, ?,",
    answer:
      "hyphen/dash, underscore, colon, semi-colon, comma, paranthesis, curly bracesbrackets, double quotes, single-quotes, backticks/template-strings, less then, greater then, exclamation mark, question-mark.",
  },
  {
    id: 265,
    question:
      "[Coding] : The differences about the event: target and currentTarget.",
    answer:
      "The event target gives us whatever you click on!  And currentTarget the parent element of what we clicked on.",
  },
  {
    id: 266,
    question: "[Coding] : What is the function pause() & play() do ?",
    answer: "Starts playing or pausing the current audio or video.",
  },
  {
    id: 267,
    question:
      "[Coding] : What is the method contains() do ? Ex: element.classList.contains(active).",
    answer:
      "The contains() method returns a Boolean value true/false indicating whether a node(html-tags) is a descendant of a specified node. Here in this ex. we want to know if in the element contains a node with a class of (active)",
  },
  {
    id: 268,
    question: "[Coding] : What is a node in javascript ?",
    answer: "A node is simply an html element in the DOM.",
  },
  {
    id: 269,
    question: "[Coding] : What does the includes() function do?",
    answer:
      "The includes() method determines whether an array contains a specified element.",
  },
  {
    id: 270,
    question:
      "[Coding] : What does the function reduce() do? numb=[1,2,3,4] const total=numb.reduce(sum,0).",
    answer:
      " Its excecutes a callback function here -sum- which can have 4 params(accumlator,value,index,array), the accumlator will be the intial value, here is 0, if we don't push a intial value it will take the first value from the array.",
  },
  {
    id: 271,
    question: "[Translate in Jap] : I want to try to dance.",
    answer: "ダンスをやってみたいです。",
  },
  {
    id: 271,
    question: "[Translate in Jap] : I don't know the goodness of natto.",
    answer: "納豆（・なっと）の美味し（おいしい）さがわかりません。",
  },
  {
    id: 272,
    question:
      "[Translate in Jap] : Do you know how to measure the height of a mountain?",
    answer: "山の高さはどうやって計る（・はかる)か、知っていますか。",
  },
  {
    id: 273,
    question: "[Translate in Jap] : Miss Abe got a ring from her boyfriend.",
    answer:
      "あべさんは彼氏（・かれし）に指輪（・ゆびわ）を貰いました(・もらう）。",
  },
  {
    id: 274,
    question:
      "[Translate in Jap] : Miss Abe got a watch from her superior/older person.",
    answer:
      "あべさんは先輩（・せんぱい）に時計をいただきました。（いただく-to kindly receive/to get）",
  },
  {
    id: 275,
    question:
      "[Translate in Jap] : I got a T-shirt from my superior/older person.",
    answer: "先生は私にTシャツをくださいました。",
  },
  {
    id: 276,
    question:
      "[Translate in Jap] : Thank you! I got from my big brother during this time.",
    answer: "ありがとう。この間兄に貰いました。（もらう）",
  },
  {
    id: 277,
    question: "[Translate in Jap] : Miss Abe gave her younger sister a hat.",
    answer: "あべさんは妹に帽子（・ぼうし）をやりました。",
  },
  {
    id: 278,
    question: "[Translate in Jap] : Miss Abe gave a bag to her senior.",
    answer:
      "あべさんは先輩（・せんぱい）に鞄（・かばん）をさしあげました（・to kindly give (superior))。",
  },
  {
    id: 279,
    question: "[Translate in Jap] : The teacher taught me hiragana.",
    answer: "先生は私にひらがなを教えてくださいました。",
  },
  {
    id: 280,
    question:
      "[Translate in Jap] : The older sister washed her little brother's clothes.",
    answer: "お姉さんは弟の服を洗濯（せんたく）してやりました。",
  },
  {
    id: 281,
    question: "[Translate in Jap] : knowing",
    answer: "ごぞんじ",
  },
  {
    id: 282,
    question: "[Translate in Jap] : condition, health",
    answer: "ぐあい",
  },
  {
    id: 283,
    question: "[Translate in Jap] : to carry/transport",
    answer: "はこぶ",
  },
  {
    id: 284,
    question: "[Translate in Jap] : opposition",
    answer: "はんたい",
  },
  {
    id: 285,
    question: "[Translate in Jap] : to pay",
    answer: "はらう",
  },
  {
    id: 286,
    question: "[Translate in Jap] : forest",
    answer: "はやし",
  },
  {
    id: 287,
    question: "[Translate in Jap] : embarrassed",
    answer: "はずかしい",
  },
  {
    id: 288,
    question: "[Translate in Jap] : strange, weird",
    answer: "へん",
  },
  {
    id: 289,
    question: "[Translate in Jap] : awful, terrible, cruel, hearthless",
    answer: "ひどい",
  },
  {
    id: 290,
    question:
      "[Translate in Jap] : to grow cold, to get chilly (etre rafraichit-chambre par ex.)",
    answer: "ひえる",
  },
  {
    id: 291,
    question:
      "Traduis la phrase suivante : Jeanette est très agile pour une personne de 80 ans car elle fait du yoga tous les jours.",
    answer:
      "Jeanette is very agile(ĕjail) for an 80 year old because she does yoga every day.",
  },
  {
    id: 292,
    question:
      "Traduis la phrase suivante : Le professeur de natation a appris aux élèves à flotter sur l'eau.",
    answer: "The swimming teacher taught the students how to float on water.",
  },
  {
    id: 293,
    question:
      "Traduis la phrase suivante : Quelqu'un aide cet homme, il s'étouffe.",
    answer: "Someone help that man, he's choking.(cheuking)",
  },
  {
    id: 294,
    question: "Traduis la phrase suivante : L'eau est peu profonde ici.",
    answer: "The water is shallow here.",
  },
  {
    id: 295,
    question: "Traduis la phrase suivante : Ray passa devant avec son camion.",
    answer: "Ray drove by in his truck.",
  },
  {
    id: 295,
    question:
      "Traduis la phrase suivante : Mai passe chaque dimanche matin à faire des corvées.",
    answer: "Mai spends every Sunday morning doing chores(chors).",
  },
  {
    id: 296,
    question:
      "Traduis la phrase suivante : Cela ma demangeais de venir vous voir.",
    answer: "It was itching to come and see you.",
  },
  {
    id: 297,
    question:
      "Traduis la phrase suivante : John a utilisé l'échelle pour monter sur le toit pour nettoyer les gouttières.",
    answer:
      "John used the ladder(lĕder) to climb onto the roof to clean out the gutters.(gaders)",
  },
  {
    id: 298,
    question:
      "Traduis la phrase suivante : Je ne peux pas porter le nouveau pull car il me démange trop.",
    answer: "I can't wear the new sweater beacuse it's too itchy.",
  },
  {
    id: 299,
    question:
      "Traduis la phrase suivante : La plupart des religions anciennes sont désormais traitées comme une mythologie superstitieuse.",
    answer:
      "Most ancient religions are treated as superstitious(superstichious) mythologiy now.",
  },
  {
    id: 300,
    question:
      "Traduis la phrase suivante : Je sors au pub pour étancher ma soif.",
    answer: "I'm going out to the pub to quench my thirst(ferst).",
  },
  {
    id: 301,
    question: "[Coding] : What is the modulus operator ?",
    answer:
      " It is represented with the sign of % and It will see what is the reminder of a number. Ex : 9 % 2 = 1",
  },
  {
    id: 302,
    question: "[Coding] : How does clearInterval() function do?",
    answer:
      " The clearInterval() method clears a timer set with the setInterval() method.",
  },
  {
    id: 303,
    question: "[Coding] : How does setInterval() function works?",
    answer:
      "Calls a function or evaluates an expression at specified intervals (in milliseconds).",
  },
  {
    id: 304,
    question: "[Coding] : How does the function getTime() works?",
    answer:
      "it's a function that will give us the current or specific time in ms from the method new Date();",
  },
  {
    id: 305,
    question:
      "[Coding] : What does the function getFullYear(), getMonth, getDate(), getDay(), getHours(), getMinutes() do ?",
    answer:
      "getFullYear will give us the current year or the secific one that we had add in new Date, same for month, day, minutes and getDate we will obtain the days of the week.",
  },
  {
    id: 306,
    question: "[Coding] : What gives us this function new Date() ?",
    answer:
      "It will give us the current date or the specific date depends if we marked something in the callback function. the function has 7params(year,month,date,hours,min,sec,ms).",
  },
  {
    id: 307,
    question:
      "[Translate in Jap] : I'm studying hard to enter the University of Tokyo。",
    answer: "東京大学に入るために、一生懸命勉強しています。",
  },
  {
    id: 308,
    question:
      "[Translate in Jap] : I'm going to Germany to attend an international conference。",
    answer:
      "国際会議（・こくさいかいぎ）に出席（しゅっせき）のためドイツに行きます。",
  },
  {
    id: 309,
    question:
      "[Translate in Jap] : The place where I live next time has a supermarket nearby and is convenient for shopping。",
    answer:
      "今度住むところは、近くにスーパーがあって、買い物するのに便利です。",
  },
  {
    id: 310,
    question:
      "[Translate in Jap] : It has a large garden, is good for keeping dogs。",
    answer: "大きい庭（・にわ）があって、犬を飼うのにいいです。",
  },
  {
    id: 311,
    question:
      "[Translate in Jap] : It takes 24 hours to come from Belgium to Japan。",
    answer: "ベルギーから日本まで来るのに24時間は掛かります（かかります）。",
  },
  {
    id: 313,
    question:
      "[Translate in Jap] : It costs 2 million yen for a marriage ceremony at the hotel. It's also cost 2 million yen that's hard.",
    answer:
      "ホテルで結婚式（・けっこんしき）をするのに200万円掛かります。200万円も掛かるんですか。大変ですね。",
  },
  {
    id: 314,
    question: "[Translate in Jap] :　It's going to rain.",
    answer: "雨が降りそうです。",
  },
  {
    id: 315,
    question: "[Translate in Jap] :　I ate too much ice cream.",
    answer: "アイスクリームを食べすぎました。",
  },
  {
    id: 316,
    question: "[Translate in Jap] :　Too much alcohol is bad for the body.",
    answer: "お酒の飲みすぎは体に悪いよ。",
  },
  {
    id: 317,
    question:
      "[Translate in Jap] :　The teacher's talk was too long and the students fell asleep.",
    answer: "先生の話かたが長すぎて、学生が倒れました。（・たおれました）",
  },
  {
    id: 318,
    question: "[Translate in Jap] :　This clothes is too big.",
    answer: "この服は大きすぎます。",
  },
  {
    id: 318,
    question: "[Translate in Jap] :　This shoes are easy to walk.",
    answer: "この靴は歩きやすいです。",
  },
  {
    id: 319,
    question: "[Translate in Jap] :　This shoes are difficult to walk.",
    answer: "この靴は歩き難い(・にくい）です。",
  },
  {
    id: 320,
    question:
      "[Translate in Jap] :　It is easy to dry the laundry on a sunny day.",
    answer:
      "晴れ（・はれ）の日は洗濯物（せんたくもの）が乾き（・かわく）やすいです。",
  },
  {
    id: 321,
    question: "[Translate in Jap] :　Beard",
    answer: "ひげ",
  },
  {
    id: 322,
    question: "[Translate in Jap] : Extremely",
    answer: "ひじょうに",
  },
  {
    id: 323,
    question: "[Translate in Jap] : Light",
    answer: "ひかり",
  },
  {
    id: 324,
    question: "[Translate in Jap] : drawer",
    answer: "ひきだし",
  },
  {
    id: 325,
    question: "[Translate in Jap] : withdraw",
    answer: "ひきだす",
  },
  {
    id: 326,
    question: "[Translate in Jap] : to move (house) ",
    answer: "ひっこす",
  },
  {
    id: 327,
    question: "[Translate in Jap] : airport/airflield ",
    answer: "くうこう・ひこうじょう",
  },
  {
    id: 328,
    question: "[Translate in Jap] : open/unseal ",
    answer: "ひらく",
  },
  {
    id: 329,
    question: "[Translate in Jap] : to pick up ",
    answer: "ひろう",
  },
  {
    id: 330,
    question: "[Translate in Jap] : daytime/ during the day ",
    answer: "ひるま",
  },
  {
    id: 331,
    question:
      "Traduis la phrase suivante : Le coût d'un gallon (= 3,5 l) d'essence a de nouveau augmenté.",
    answer:
      "The cost of a gallon(=3.5l)(gaellen) of gas(gaes) just went up again.",
  },
  {
    id: 332,
    question:
      "Traduis la phrase suivante : Le dîner est au four et sera prêt dans une heure.",
    answer: "The dinner is in the oven(aven) and will be ready in an hour.",
  },
  {
    id: 333,
    question:
      "Traduis la phrase suivante : En hiver, Daphné aime s'asseoir et coudre au coin du feu.",
    answer: "In the winter, Daphne likes to sit and sew by the fire.",
  },
  {
    id: 334,
    question:
      "Traduis la phrase suivante : Utilisez un fil pour attacher les pièces ensemble.",
    answer: "Use a thread(fred) to tie the pieces together.",
  },
  {
    id: 335,
    question:
      "Traduis la phrase suivante : Le médecin a injecté le vaccin avec une aiguille.",
    answer: "The doctor injected the vaccine(vëksin) with a needle.",
  },
  {
    id: 336,
    question:
      "Traduis la phrase suivante : Le plafond dans la chambre était peint en bleu.",
    answer: "The ceiling(ciling) in the bedroom was painted blue.",
  },
  {
    id: 337,
    question:
      "Traduis la phrase suivante : Lorsqu'elle a sorti une cigarette et qu'elle s'est allumée, plusieurs personnes ont quitté la pièce.",
    answer:
      "When she pulled out a cigarette and lit up(light up), several people left the room.",
  },
  {
    id: 338,
    question:
      "Traduis la phrase suivante : Louis a parlé severement a l'employé de bureau debutant quand il est arrivé en retard au travail à nouveau.",
    answer:
      "Louis spoke sharply to the office junior when he arrived late at work again.",
  },
  {
    id: 339,
    question:
      "Traduis la phrase suivante : Le dîner était ennuyeux/penible, il n'y avait personne d'intéressant à qui parler.",
    answer:
      "The dinner party was tedious, there was no one at all interesting to talk to.",
  },
  {
    id: 340,
    question:
      "Traduis la phrase suivante : Je suis terriblement gêné mais j'ai oublié votre nom.",
    answer: "I'm terribly embarrassed(imbaerest) but I've forgotton your name.",
  },
  {
    id: 341,
    question: "[Coding] : What is the function parseInt() ?",
    answer:
      "parses (analyse) a string and returns an integer (chiffre entier).",
  },
  {
    id: 342,
    question:
      "[Coding] : explain? if(isNan(value) || value < 0 || value > 9) { result.innerHTML = ...} ",
    answer:
      "if the value is not a number or value is less then 0 or value is greater then 9 then condition.",
  },
  {
    id: 343,
    question: "[Coding] : What is the slice() method do ?",
    answer:
      "Have 2 params for indicate when begin to take the item and the second params when it should stop. The it will create a new array with those values selected.",
  },
  {
    id: 344,
    question: "[Coding] : What is the value proprety do ?",
    answer:
      "We can catch the value from a input from a form or we can sets or returns the value of an attribute. ",
  },
  {
    id: 345,
    question: "[Coding] : What does document.createElement() do ?",
    answer:
      "It will create an new element(node) for instance here a <button> and with document.body.appendChild.btn we will add that btn as a child in the body. ",
  },
  {
    id: 346,
    question: "[Coding] : What does document.createElement() do ?",
    answer:
      "It will create an new element(node) for instance here a <button> and with document.body.appendChild.btn we will add that btn as a child in the body. ",
  },
  {
    id: 347,
    question: "[Coding] : What are the element.setAttributNode() do?",
    answer: "Add a specified attribute node to an element.",
  },
  {
    id: 348,
    question: "[Coding] : What is previousElementSibling do ?",
    answer:
      "Returns the previous element of the specified element, in the same tree level.",
  },
  {
    id: 349,
    question: "[Coding] : What is difference about textContent and innerHtml ?",
    answer:
      "The innerHTML property sets or returns the HTML content (inner HTML) of an element and what we pass in this element will be html support. However textContent is almost the same but it won't return the text as a html.",
  },
  {
    id: 350,
    question: "[Translate in Jap] : I increase the letters.",
    answer: "字を大きくします。",
  },
  {
    id: 351,
    question: "[Translate in Jap] : I clean the room.",
    answer: "部屋を綺麗（・きれい）にします。",
  },
  {
    id: 352,
    question: "[Translate in Jap] : I'm halving the rice.",
    answer: "ご飯を半分にしています。",
  },
  {
    id: 353,
    question:
      "[Translate in Jap] : Because white sweaters are easy to get dirty, i'll choose the pink one.",
    answer: "白いセーターは汚れ(・よごれる）やすいので、ビンクにします。",
  },
  {
    id: 354,
    question: "[Translate in Jap] : I cut the vegetables into small pieces.",
    answer: "野菜(・やさい）を細く（こまかい）切ります（・きる）。",
  },
  {
    id: 355,
    question: "[Translate in Jap] : I use the toilet cleanly.",
    answer: "トイレを綺麗（・きれい）に使います。",
  },
  {
    id: 356,
    question:
      "[Translate in Jap] : In case you can't participate, please tell me.",
    answer: "参加(・さんか）できないばあい（場合）は、言ってください。",
  },
  {
    id: 357,
    question: "[Translate in Jap] : In case of fire call 119 please.",
    answer: "火事（・かじ）のばあいは119番（・ばん）に電話してください。",
  },
  {
    id: 358,
    question:
      "[Translate in Jap] : Even this restaurant is expensive, it is not delicious. (criticism,surprise)　",
    answer: "このレストランは高いのに、美味しくないです。",
  },
  {
    id: 358,
    question:
      "[Translate in Jap] : Even though today is Sunday, I have to work.",
    answer: "今日日曜日なのには働かなければなりません。",
  },
  {
    id: 359,
    question: "[Translate in Jap] : Even though she promised, she didn't come.",
    answer: "約束をしたのに来ませんでした。",
  },
  {
    id: 360,
    question:
      "[Translate in Jap46] : Have you already decided which university to go to　? No, I am in the process of consulting with my teacher.",
    answer:
      "どの大学に行くか、もう決めましたか（・きめる）。いいえ、今先生と相談（・そうだん）しているところです。",
  },
  {
    id: 361,
    question: "[Translate in Jap] : Lunch Break",
    answer: "昼休み（・ひるやすみ）。",
  },
  {
    id: 362,
    question: "[Translate in Jap] : after a long time",
    answer: "久しぶり（・ひさしぶり）。",
  },
  {
    id: 363,
    question: "[Translate in Jap] : to praise.",
    answer: "ほめる。",
  },
  {
    id: 364,
    question: "[Translate in Jap] : translation",
    answer: "ほんやく",
  },
  {
    id: 365,
    question: "[Translate in Jap] : mostly",
    answer: "ほとんど",
  },
  {
    id: 366,
    question: "[Translate in Jap] : law",
    answer: "ほうりつ",
  },
  {
    id: 367,
    question: "[Translate in Jap] : to broadcast (diffuser)",
    answer: "ほうそう",
  },
  {
    id: 368,
    question:
      "[Translate in Jap] : with the exception of / (en dehors de, sauf, excepté)",
    answer: "いがい",
  },
  {
    id: 369,
    question: "[Translate in Jap] : medicine",
    answer: "いがく",
  },
  {
    id: 370,
    question: "[Translate in Jap] : to tease sb. (se moquer/taquiner qqn)",
    answer: "いじめる",
  },
  {
    id: 371,
    question:
      "Traduis la phrase suivante : Benjamin est connu pour sa générosité et sa gentillesse.",
    answer:
      "Benjamin is known for his generosity(djenorositi) and frendliness.",
  },
  {
    id: 372,
    question:
      "Traduis la phrase suivante : Tous les vieux vêtements de ma grand-mère sont stockés dans des malles/coffre dans le grenier.",
    answer:
      "All my Grandmother's old clothes are stores in trunks in the attic(aedig).",
  },
  {
    id: 373,
    question:
      "Traduis la phrase suivante : Robert a mis les sacs de coures dans le coffre.",
    answer: "Robert put the groceries(gruewceris) in the trunk.",
  },
  {
    id: 374,
    question:
      "Traduis la phrase suivante : Un nuage de poussière s'éleva dans l'air quand la femme battait le tapis .",
    answer: "A cloud of dust rose into the air as the woman beat the rug(rag).",
  },
  {
    id: 375,
    question:
      "Traduis la phrase suivante : Un tapis couvrait la majeure partie du sol",
    answer: "A rug covered most of the floor.",
  },
  {
    id: 376,
    question:
      "Traduis la phrase suivante : Adam a sorti l'aspirateur pour nettoyer apres la fete.",
    answer: "Adam got the vacuum(vaekium) out to clear up after the party.",
  },
  {
    id: 377,
    question:
      "Traduis la phrase suivante : Earl a acheté une caisse d'oranges au marché.",
    answer: "Earl bought a crate of oranges at the market.",
  },
  {
    id: 378,
    question: "Traduis la phrase suivante : Kyle ouvrit le loquet de la porte.",
    answer: "Kyle opened the latch(laetch) on the door.",
  },
  {
    id: 379,
    question:
      "Traduis la phrase suivante : Wendy détestait la façon dont sa mère se meler/etre indiscret toujours de sa vie amoureuse. C'est impoli de se mêler des affaires des autres.",
    answer:
      "Wendy hated the way her mother was always prying into her love life. It's rude to pry into others business.",
  },
  {
    id: 380,
    question: "Traduis la phrase suivante : Le velours est un tissu doux.",
    answer: "Velvet(vaelvit) is soft fabric.",
  },
  {
    id: 381,
    question:
      "[Translate in Jap] : Has the Baby already slept ? Yes he just slept.",
    answer: "赤ちゃんもう寝ましたか。はい、たった今寝たところです。",
  },
  {
    id: 382,
    question: "[Translate in Jap] : This room has just been cleaned.",
    answer: "この部屋は掃除したばかりです。",
  },
  {
    id: 383,
    question:
      "[Translate in Jap] : The room is clean because i just clean it up.",
    answer: "掃除したばかりなので部屋は綺麗です。",
  },
  {
    id: 384,
    question:
      "[Translate in Jap] : The cat got the room dirty even though i just cleaned it.",
    answer: "掃除したばかりなのに猫が汚しました。",
  },
  {
    id: 385,
    question: "[Translate in Jap] : Indonesia should still be very hot.",
    answer: "インドネシアは今もすごく熱いはずです。",
  },
  {
    id: 386,
    question: "[Translate in Jap] : I had lunch only a while ago.",
    answer: "さっき昼ごはんを食べたばかりです。",
  },
  {
    id: 387,
    question:
      "[Translate in Jap] : Kimura just joined this company last month.",
    answer: "きむらさんは先月この会社に入ったばかりです。",
  },
  {
    id: 388,
    question:
      "[Translate in Jap] : Although I bought this video only a week ago, it isn't working well(wieird,strange).",
    answer:
      "このビデオは先週買ったばかりなのに、調子（・ちょうし）がおかしいです。",
  },
  {
    id: 389,
    question:
      "[Translate in Jap] : Will Mira come today? She should come because i had a phone call yesterday.",
    answer:
      "ミラさんは今日来るでしょうか。来るはずですよ、昨日電話がありましたから。",
  },
  {
    id: 390,
    question:
      "[Translate in Jap] : According to the weather forecast, it will be sunny tomorrow.",
    answer: "天気予報によると明日は晴れだそうです。",
  },
  {
    id: 391,
    question: "[Translate in Jap] : Not les than, minimum",
    answer: "いじょう",
  },
  {
    id: 392,
    question: "[Translate in Jap] : not exceeding, maximum",
    answer: "いか",
  },
  {
    id: 393,
    question: "[Translate in Jap] : opinion",
    answer: "いけん",
  },
  {
    id: 394,
    question: "[Translate in Jap] : living thing/creature",
    answer: "いきもの",
  },
  {
    id: 395,
    question: "[Translate in Jap] : to live",
    answer: "いきる",
  },
  {
    id: 396,
    question: "[Translate in Jap] : within (au sein de)",
    answer: "いない",
  },
  {
    id: 397,
    question: "[Translate in Jap] : stone",
    answer: "いし",
  },
  {
    id: 398,
    question: "[Translate in Jap] : to do (humble)",
    answer: "いたす",
  },
  {
    id: 399,
    question: "[Translate in Jap] : period",
    answer: "じだい",
  },
  {
    id: 400,
    question: "[Translate in Jap] : jam",
    answer: "ジャム",
  },
  {
    id: 401,
    question:
      "Traduis la phrase suivante : Je me suis fait taquiner à l'école parce que mes cheveux avaient l'air drôle.",
    answer: "I got teased at school because my hair locked funny.",
  },
  {
    id: 402,
    question:
      "Traduis la phrase suivante : L'ancienne station de radio ne diffuse plus.",
    answer: "The old radio station isn't broadcasting anymore.",
  },
  {
    id: 403,
    question: "Traduis la phrase suivante : Elle decelle la porte magique.",
    answer: "She unseals the magic door.",
  },
  {
    id: 404,
    question:
      "Traduis la phrase suivante : Les notes sur son bulletin étaient excellentes.",
    answer: "The grades on his report card were excellent.",
  },
  {
    id: 405,
    question:
      "Traduis la phrase suivante : Dans les années 80, les pantalons à pattes d'elephant étaient une tendance.",
    answer: "In the 80's bell-bottom slacks was a trend.",
  },
  {
    id: 406,
    question:
      "Traduis la phrase suivante : Il y avait une odeur repugante/degoutante provenant des égouts.",
    answer: "There was a gross smell coming from the drains.",
  },
  {
    id: 407,
    question:
      "Traduis la phrase suivante : Jenny pense que les papillions de nuits sont repugnants/degoutants.",
    answer: "Jenny thinks that moths(mofs) are gross.",
  },
  {
    id: 408,
    question: "Traduis la phrase suivante : Joe a acheté un canapé en tissu.",
    answer: "Joe bought a fabric couch.",
  },
  {
    id: 409,
    question:
      "Traduis la phrase suivante :Le patron de Tim a toujours voulu savoir tout ce que Tim faisait en dehors du travail. Il était toujours indiscret et Tim détestait ça..",
    answer:
      "Tim's boss always wanted to know everything Tim got up to outside of work. He always prying and Tim hated it.",
  },
  {
    id: 410,
    question:
      "Traduis la phrase suivante : Quelqu'un a laissé la fenêtre ouverte et la maison est pleine d'insectes maintenant!",
    answer: "Someone left the window open and now the house is full of bugs!",
  },
  {
    id: 411,
    question: "[Coding] : What does the function insertAdjacentHTML() do ?",
    answer:
      "Inserts a text as HTML, into a specified position. ex: element.insertAdjacentHTML(afterend, <p>My new paragraph</p>) 1st params the position and 2nd what we want to insert ; ",
  },
  {
    id: 412,
    question: "[Coding] : What does the function toLocalDateString() do ?",
    answer: "converts the date of a Date object into a readable string ; ",
  },
  {
    id: 413,
    question: "[Coding] : What does the function switch do ?",
    answer:
      "The switch statement is used to perform different actions based on different conditions. (Case1, Case2..) ; ",
  },
  {
    id: 414,
    question: "[Translate in Jap] : I suppose that there was an accident.",
    answer: "じこがあったようです。",
  },
  {
    id: 415,
    question: "[Translate in Jap] : I suppose that this animal is a dog.",
    answer: "この動物は犬ようです。",
  },
  {
    id: 416,
    question:
      "[Translate in Jap] : The mom allowed her daughter to go shopping.",
    answer: "お母さんは娘を買い物に行かせました。",
  },
  {
    id: 417,
    question:
      "[Translate in Jap] : The department manager makes Mr. Kato go to Osaka on business trip.",
    answer: "部長はかとさんを大阪へ出張（・しゅっちょう）させます。 ",
  },
  {
    id: 418,
    question:
      "[Translate in Jap] : I am busy in the morning, so I make my daughter help prepare breakfast.",
    answer:
      "朝は忙しいですから、娘に朝ごはんの準備（・じゅんび）を手伝わせます。",
  },
  {
    id: 419,
    question:
      "[Translate in Jap] : The teacher let the schoolchild freely give their opinions.",
    answer: "先生は生徒に自由に意見を言わせました。",
  },
  {
    id: 420,
    question: "[Translate in Jap] : Mom made his daughter open the window.",
    answer: "お母さんは娘にまどを開けさせました。",
  },
  {
    id: 421,
    question: "[Translate in Jap] : accident",
    answer: "じこ",
  },
  {
    id: 422,
    question: "[Translate in Jap] : office",
    answer: "じむしょ",
  },
  {
    id: 423,
    question: "[Translate in Jap] : shinto shrine",
    answer: "じんじゃ",
  },
  {
    id: 424,
    question: "[Translate in Jap] : human life",
    answer: "じんせい",
  },
  {
    id: 425,
    question: "[Translate in Jap] : dictionary",
    answer: "じてん、じしょ",
  },
  {
    id: 426,
    question: "[Translate in Jap] : woman/female",
    answer: "じょせい",
  },
  {
    id: 427,
    question: "[Translate in Jap] : enough/sufficient",
    answer: "じゅうぶん",
  },
  {
    id: 428,
    question: "[Translate in Jap] : address",
    answer: "じゅうしょ",
  },
  {
    id: 429,
    question: "[Translate in Jap] : wall",
    answer: "かべ",
  },
  {
    id: 430,
    question: "[Translate in Jap] : to change/transform",
    answer: "かえる",
  },
  {
    id: 431,
    question:
      "Traduis la phrase suivante :Les cartes à jouer sont constituées de papier recouvert d'une couche de plastique pour les protéger.",
    answer:
      "The playing cards are made of paper with a layer of plastic to protect them.",
  },
  {
    id: 432,
    question:
      "Traduis la phrase suivante : Après s'être cassé le dos, les jambes de Kate étaient definitivement paralysées.",
    answer:
      "After she broke her back Kate's legs were permanently(perme-naentli) numb.",
  },
  {
    id: 433,
    question:
      "Traduis la phrase suivante : Quand Kate s'est reveille sa main etait paralyse car elle a dormi dessus.",
    answer:
      "When Kate woke up, her arm was completely numb(nam) because she had slept on it.",
  },
  {
    id: 434,
    question:
      "Traduis la phrase suivante : Les dents de Martha claquait à cause du froid.",
    answer: "Martha's teeth chattered because of the cold.",
  },
  {
    id: 435,
    question:
      "Traduis la phrase suivante : Ici, la profondeur de la rivière dépasse les cent mètres.",
    answer: "The river's depth(daept) in this spot is over one hundred metres.",
  },
  {
    id: 436,
    question:
      "Traduis la phrase suivante : Le chevalier parta dans sa quete avec sa fidele epouse pour compagnon.",
    answer:
      "The knight(nait) set out on his quest with only his faithful wife for company.",
  },
  {
    id: 437,
    question:
      "Traduis la phrase suivante : Ils sont partis pour Londres tôt le lendemain matin.",
    answer: "They set out for London early the following day.",
  },
  {
    id: 438,
    question:
      "Traduis la phrase suivante : Nous avons tous subi des répercussions suite à l'accident.",
    answer:
      "Every single one of us is feeling the repercussions(ri-peka-chens) of the crash.",
  },
  {
    id: 439,
    question:
      "Traduis la phrase suivante : Cette émission de télé permet à des gens de retrouver des membres de leur famille qu'ils n'avaient pas vus depuis des décennies.",
    answer:
      "This TV show reunites(riyunaits) relatives who haven't seen each other for decades.",
  },
  {
    id: 440,
    question:
      "Traduis la phrase suivante : Après une longue dispute/debat avec ma fille, j'ai finalement consenti et je l'ai laissée faire ce qu'elle voulait.",
    answer:
      "After a long argument with my daughter, i finally acquiesced(ae-kwi-st) and let her have her way.",
  },
  {
    id: 441,
    question: "[Translate in Jap] : The father allowed his son to go play.",
    answer: "お父さんは息子に遊びに行かせました。",
  },
  {
    id: 442,
    question: "[Translate in Jap] : The chef of department went home.",
    answer: "部長は帰られました。",
  },
  {
    id: 443,
    question:
      "[Translate in Jap] : Teacher, have you stopped drinking alcohol ? ",
    answer: "先生、お酒をやめられたんですか？（止める）",
  },
  {
    id: 444,
    question: "[Translate in Jap] : The teacher will come at 7am. ",
    answer: "先生は7時に来られます。",
  },
  {
    id: 445,
    question:
      "[Translate in Jap 49] : The president of the company has already left for home. ",
    answer: "社長はもうお帰りになりました。(very polite form)",
  },
  {
    id: 446,
    question:
      "[Translate in Jap 49] : Salary: Boss are you drinking coffee? Boss: Yes, i drink. ",
    answer: "コーヒーをお飲みになりましたか。・ええ、飲みます。",
  },
  {
    id: 447,
    question: "[Translate in Jap 49] : The professor is in the office.",
    answer: "先生は事務所にいらっしゃいます。",
  },
  {
    id: 448,
    question: "[Translate in Jap 49] : Please eat as much you need.",
    answer: "どうぞうめしあがってください。",
  },
  {
    id: 449,
    question:
      "[Translate in Jap 49] : Is the professor play tennis? No, i think he doesn't.",
    answer: "先生はテニスをなさいますか。　いいえ、なさらないと思います。",
  },
  {
    id: 450,
    question: "[Translate in Jap 49] : Please wait over there. (very polite)",
    answer: "あちらでお待ちください。(very polite)",
  },
  {
    id: 451,
    question: "[Translate in Jap] : science",
    answer: "かがく",
  },
  {
    id: 452,
    question: "[Translate in Jap] : coast(cote,bord de la mer)",
    answer: "かいがん",
  },
  {
    id: 453,
    question:
      "[Translate in Jap] : assembly hall, meeting place (lieu de reunion)",
    answer: "かいじょう",
  },
  {
    id: 454,
    question: "[Translate in Jap] : fire",
    answer: "かじ",
  },
  {
    id: 454,
    question: "[Translate in Jap] : to bite/ to chew",
    answer: "かむ",
  },
  {
    id: 455,
    question: "[Translate in Jap] : always/certainly/without exception",
    answer: "かならず",
  },
  {
    id: 456,
    question: "[Translate in Jap] : to think",
    answer: "かんがえる",
  },
  {
    id: 457,
    question: "[Translate in Jap] : relationship",
    answer: "かんけい",
  },
  {
    id: 457,
    question: "[Translate in Jap] : they, them",
    answer: "かれら",
  },
  {
    id: 458,
    question:
      "[Translate in Jap] : to tidy up, to put in order (ranger,ordonner)",
    answer: "かたづける",
  },
  {
    id: 459,
    question: "[Translate in Jap] : to get dry",
    answer: "かわく",
  },
  {
    id: 460,
    question: "[Translate in Jap] : instead/ in place",
    answer: "かわり",
  },
  {
    id: 461,
    question:
      "Traduis la phrase suivante : Je ne connais quoi que ce soit a propos d'histoire grecque.",
    answer: "I don't know anything whatsoever about Greek history.",
  },
  {
    id: 462,
    question:
      "Traduis la phrase suivante : Ces plantes ont besoin d'une terre riche qui conserve l'hydradation.",
    answer: "These plants need a rich soil that retains moisture.(moischia)",
  },
  {
    id: 463,
    question:
      "Traduis la phrase suivante : John est né et a été élevé dans une ferme ; c'est un véritable homme de la terre.",
    answer:
      "John was born and brought up on a farm, he's a real man of the soil.",
  },
  {
    id: 464,
    question:
      "Traduis la phrase suivante : Irene a gardé/conserve la clé au cas où elle en aurait besoin de nouveau à l'avenir.",
    answer: "Irene retained the key in case she needed it again in the future.",
  },
  {
    id: 465,
    question:
      "Traduis la phrase suivante : Ce restaurant offre aussi un service de plats à emporter mais ne fait pas traiteur.",
    answer:
      "That restaurant also offers a take-out service, but they don't cater(kaeide)",
  },
  {
    id: 466,
    question:
      "Traduis la phrase suivante : Le pont doit supporter le poids des voitures et des camions.",
    answer: "The bridge must bear the weight of the cars and trucks.",
  },
  {
    id: 467,
    question:
      "Traduis la phrase suivante : Ted travaille comme ouvrier agricole dans les champs et passe toute sa journée au soleil.",
    answer:
      "Ted works as a laborer(laeibore) in the field and spends all day in the sun.",
  },
  {
    id: 468,
    question:
      "Traduis la phrase suivante : Ils ont démarré dans la vente en gros, mais depuis peu, ils ont ouvert une boutique de vente au détail.",
    answer:
      "They started out in wholesale, but recently they opened a retail store.",
  },
  {
    id: 469,
    question:
      "Traduis la phrase suivante : Oliver a servi des coquilles Saint Jacques comme entrée à ses invités.",
    answer: "Oliver served his guests scallops as a starter.",
  },
  {
    id: 470,
    question:
      "Traduis la phrase suivante : J'ai commandé des escargots au beurre ailé en entrée.",
    answer: "I ordered snails in garlic butter for my starter.",
  },
  {
    id: 471,
    question:
      "Traduis la phrase suivante : Je ne connais quoi que ce soit a propos d'histoire grecque.",
    answer: "I don't know anything whatsoever about Greek history.",
  },
  {
    id: 472,
    question:
      "[Translate in Jap 49] : Dear Customers, please be carful of lost items.",
    answer: "おきゃくさま、忘れ物にごちゅういください。",
  },
  {
    id: 473,
    question:
      "[Translate in Jap 49] : The wife of the manager will also go golf together.",
    answer: "部長のおくさまもご一緒にゴルフに行かれます。",
  },
  {
    id: 474,
    question:
      "[Translate in Jap 49] : Last night Hans got a fever, and this morning it still hasn't gone down.",
    answer:
      "ハンスさんがゆうべねつを出しまして、けさもまださがらないんです。（さがる・to drop down)",
  },
  {
    id: 475,
    question:
      "[Translate in Jap 50] : It looks so heavy. Shall I carry it for your? (polite form for helping)",
    answer: "おもいそうですね。おもちしましょうか。",
  },
  {
    id: 476,
    question:
      "[Translate in Jap 50] : I will inform/notify the president the schedule. (very polite form)",
    answer: "私が社長にスケジュールをおしらせします。",
  },
  {
    id: 477,
    question:
      "[Translate in Jap 50] : My elder brother will escort you in his car. (very polite)",
    answer: "あにが車でおくりします。（送る・escort/send)",
  },
  {
    id: 478,
    question:
      "[Translate in Jap 50] : The phone is next to the stairs. (very polite form to customers)",
    answer: "電話はかいだんのよこにございます。",
  },
  {
    id: 479,
    question:
      "[Translate in Jap 50] : This is Schimdt of PowerElectric. May I speak to Mr. Miller ?",
    answer: "パワー電気のシュミットですが、みらーさん、おねがいします。",
  },
  {
    id: 480,
    question:
      "[Translate in Jap 50] : What do you want to drink ? (very polite form)",
    answer: "お飲み物は何がよろしいでしょうか。",
  },
  {
    id: 481,
    question: "[Translate in Jap] : to change",
    answer: "かわる",
  },
  {
    id: 482,
    question:
      "[Translate in Jap] :　to commute (faire la navette de son domicile au travail).",
    answer: "かよう",
  },
  {
    id: 483,
    question: "[Translate in Jap] :　to decorate",
    answer: "かざる",
  },
  {
    id: 484,
    question: "[Translate in Jap] :　hair / fur(fourure, pelage)",
    answer: "け",
  },
  {
    id: 485,
    question: "[Translate in Jap] :　project/plan",
    answer: "けいかく",
  },
  {
    id: 486,
    question: "[Translate in Jap] :　experience",
    answer: "けいけん",
  },
  {
    id: 487,
    question: "[Translate in Jap] : finance/economy",
    answer: "けいざい",
  },
  {
    id: 488,
    question: "[Translate in Jap] : sightseeing, visit",
    answer: "けんぶつ",
  },
  {
    id: 489,
    question: "[Translate in Jap] : to quarrel, fight",
    answer: "けんか",
  },
  {
    id: 490,
    question: "[Translate in Jap] : eraser",
    answer: "けしごむ",
  },
  {
    id: 491,
    question:
      "Traduis la phrase suivante : Notre fils dort dans le berceau dans lequel j'ai dormi quand j'étais bébé.",
    answer:
      "Our son sleeps in the cradle(creadel) that I slept in when I was a baby.",
  },
  {
    id: 492,
    question: "Traduis la phrase suivante : La petite fille bercait le chat.",
    answer: "The little girl cradled the kitten in her arms.",
  },
  {
    id: 493,
    question:
      "Traduis la phrase suivante : L'enseignant a dit à Bobby de s'arrêter de faire l'imbécile (or: l'idiot) en classe.",
    answer: "The teacher told Bobby to stop fooling around in class.",
  },
  {
    id: 494,
    question:
      "Traduis la phrase suivante : Elle a joué une pièce bouffonne dans laquelle elle tombait d'une chaise.",
    answer:
      "She did a slapstick(slaepstick) piece in which she fell over a chair.",
  },
  {
    id: 495,
    question:
      "Traduis la phrase suivante : L'avocate a utilisé des arguments subtils pour influencer/se balancer le jury de prendre le parti en faveur de son client.",
    answer:
      "The lawyer used subtle(sadel) arguments to sway the jury in her client's favour.",
  },
  {
    id: 496,
    question:
      "Traduis la phrase suivante : Jessica était certaine d'avoir raison, mais au bout du compte, les arguments de Dawn l'ont influencée et elle a changé d'avis.",
    answer:
      "Jessica was sure she was right but in the end, Dawn's arguments swayed her and she changed her mind.",
  },
  {
    id: 497,
    question:
      "Traduis la phrase suivante : Vous devrez adapter/orienter ces publicités à une cible plus jeune.",
    answer:
      "You should gear the advertissements to a younger demographic/target.",
  },
  {
    id: 498,
    question:
      "Traduis la phrase suivante : Comme ces 2 livres diffèrent l'un de l'autre, tu devrais absolument lire les deux.",
    answer:
      "As the two books on this subject differ so much, you should definitely read them both.",
  },
  {
    id: 499,
    question:
      "Des problèmes avec vos ados ? Je peux comprendre/m'idendtifier complètement a ca.",
    answer:
      "Problems with your teenage children ? - I can certainly relate to that.",
  },
  {
    id: 500,
    question: "L'enfant ne peut ni causer le divorce ou l'empecher.",
    answer: "Children neither cause the divorce, nor can they prevent it.",
  },
  {
    id: 501,
    question:
      "[Translate in Jap] : This work, after 1hour will you finish it soon? - No, it will still not finish in 1hour",
    answer:
      "その仕事、あと一時間で終わりそうですか。(smth will happen soon)・いいえ、一時間では終わりそうもありません。",
  },
  {
    id: 502,
    question:
      "[Translate in Jap] : What is the 3 honorific form and give some short details?",
    answer:
      "ていねいご（・ます form), そんけいご（・られる or very polite お帰りなります), けんじょうご・お手伝いします (use to humble yourself or lower your rank)",
  },
  {
    id: 503,
    question:
      "[Translate in Jap] : How do you give an order ex: please wait over there, to a customer in a very polite form?",
    answer: "あちらでお待ちください。",
  },
  {
    id: 504,
    question:
      "[Translate in Jap] : The manager won't participate the meeting. (polite form)",
    answer: "部長はさんかされません。",
  },
  {
    id: 505,
    question:
      "[Translate in Jap] : The manager didn't drink alcohol. (polite form)",
    answer: "部長はお酒飲まれませんでした。",
  },
  {
    id: 506,
    question:
      "[Translate in Jap] : What Time will you take the shinkansen. (very polite).",
    answer: "何時間のしんかんせんにお乗りになりますか。",
  },
  {
    id: 507,
    question:
      "[Translate in Jap] : Where did you bought your shoes? (very polite).",
    answer: "どちらでくつをお買いになりましたか。",
  },
  {
    id: 508,
    question:
      "[Translate in Jap] : 部長は何を食べますか。(translate in very polite).",
    answer: "部長は何をめしあがりますか。",
  },
  {
    id: 509,
    question:
      "[Translate in Jap] : 部長はゴルフをしますか。(translate in very polite).",
    answer: "部長はゴルフをなさいますか。",
  },
  {
    id: 510,
    question:
      "[Translate in Jap] :（行きます、来ます、います）、いいます、知っています、見ます、します、くれます、（食べます、飲みます）、あります、何がほしい。(in very polite form).",
    answer:
      "(いらっしゃいます)、おっしゃいます、ごぞんじです、ごらんになります、なさいます、くださいます、（めいしあがります、ございます、何がよろしいでしょうか",
  },
  {
    id: 511,
    question: "[Translate in Jap] : scenery",
    answer: "けしき",
  },
  {
    id: 512,
    question: "[Translate in Jap] : spirit",
    answer: "き",
  },
  {
    id: 513,
    question: "[Translate in Jap] : strict",
    answer: "きびしい",
  },
  {
    id: 514,
    question: "[Translate in Jap] : chance, opportunity",
    answer: "きかい",
  },
  {
    id: 515,
    question: "[Translate in Jap] : danger",
    answer: "きけん",
  },
  {
    id: 516,
    question: "[Translate in Jap] : to be heard, to be audible",
    answer: "きこえる",
  },
  {
    id: 517,
    question: "[Translate in Jap] : to be decided",
    answer: "きまる",
  },
  {
    id: 518,
    question: "[Translate in Jap] : to decide",
    answer: "きめる",
  },
  {
    id: 519,
    question: "[Translate in Jap] : feeling",
    answer: "きもち",
  },
  {
    id: 520,
    question: "[Translate in Jap] : neighbourhood",
    answer: "きんじょ",
  },
  {
    id: 521,
    question:
      "Il y a beaucoup de rebondissements dans le roman policier que je suis en train de lire.",
    answer:
      "There are a lot of twists and turns in the crime novel i'm reading.",
  },
  {
    id: 522,
    question:
      "La famille avait un réservoir d'eau qui durerait jusqu'à ce que la principale source soit reconnectée.",
    answer:
      "The family had a tank of water to last them until the mains supply was reconnected.",
  },
  {
    id: 523,
    question:
      "Les plantes ne peuvent pas pousser dans les profondeurs de l'ocean car il n'a pas de rayon solaire.",
    answer: "Plants cannot grow in the deep sea because there is no sunlight.",
  },
  {
    id: 524,
    question: "Ma nouvelle voiture est spacieuse pour une très petite voiture.",
    answer: "My new car is roomy for subcompact.",
  },
  {
    id: 525,
    question: "Il y a une tache de ketchup sur ta chemise.",
    answer: "There is a ketchup spot on your shirt.",
  },
  {
    id: 526,
    question:
      "Le poisson avait une nageoire endommagée et ne pouvait pas nager aussi vite que les autres.",
    answer: "The fish had damaged fin and couldn't swim as fast as the others.",
  },
  {
    id: 527,
    question:
      "Les couleurs vives du coucher de soleil étaient belles à contempler.",
    answer: "The vivid colours of the sunset were beautiful to behold.",
  },
  {
    id: 528,
    question:
      "Nous avons été emerveilles quand nous avons contemplé les montagnes pour la première fois.",
    answer: "We were in awe when we first beheld the Mountains.",
  },
  {
    id: 529,
    question: "Les enfants fixaient le paysage magnifique avec émerveillement.",
    answer: "The children stared at the beautiful scenery with awe.",
  },
  {
    id: 530,
    question: "Nous apportons des nouvelles pour le roi.",
    answer: "We bring tidings for the king.",
  },
  {
    id: 531,
    question:
      "[Coding] : What is a props/properties within a component in React?",
    answer:
      "It's like an attribute in html tags, we add to the parent and grap it to the childrens function.",
  },
  {
    id: 532,
    question: "[Coding] : What is JSX in React ?",
    answer:
      "Is the html code inside the () after the return. Means we are able to code html inside javascript.",
  },
  {
    id: 554,
    question:
      "[Translate in Jap] : If it become interrupted because of the rain i will call you. (けんじょうご-to customers)",
    answer: "雨でちゅうしになったばあいは、ごれんらくします。",
  },
  {
    id: 555,
    question:
      "[Translate in Jap] : I will introduce Mr. Santos to Mr. Katou. （けんじょうご・to customers)",
    answer: "かとうさんにサントスさんをごしょうかいします。",
  },
  {
    id: 556,
    question:
      "[Translate in Jap] : I will arrange/getting ready here the lunch bento.",
    answer: "こちらでお昼のおべんとうをごよういします。",
  },
  {
    id: 556,
    question:
      "[Translate in Jap] : Afternoon(pm) i will guide the KinKaku. (けんじょうご・customers)",
    answer: "ごごはきんかくじをごあんないします。",
  },
  {
    id: 557,
    question:
      "[Translate in Jap] : I invite the teacher in my house. (けんじょうご・customers)",
    answer: "先生を私の家にごしょうたいします。",
  },
  {
    id: 558,
    question:
      "[Translate in Jap] : I will explain to the customer the way to use the copy machine. (けんじょうご・customers)",
    answer: "おきゃくさまにコピーきの使い方をごせつめいします。",
  },
  {
    id: 559,
    question:
      "[Translate in Jap] : Did you visit the Osaka's Castle? (Question in the very polite way) , Yes i did. (standard respons since he's the person who got the respect).",
    answer: "大阪じょうはけんがくなさいましたか。・はい、けんがくしました。",
  },
  {
    id: 560,
    question:
      "[Translate in Jap] : I will explain about meals and baths. (very polite, to a customer)",
    answer: "おしょくじとおふろについてごせつめいします。",
  },
  {
    id: 561,
    question: "[Translate in Jap] : silk",
    answer: "きぬ。",
  },
  {
    id: 562,
    question: "[Translate in Jap] : season",
    answer: "きせつ",
  },
  {
    id: 563,
    question: "[Translate in Jap] : train(locomotive)",
    answer: "きしゃ",
  },
  {
    id: 564,
    question: "[Translate in Jap] : rule",
    answer: "きそく",
  },
  {
    id: 565,
    question: "[Translate in Jap] : international",
    answer: "こくさい",
  },
  {
    id: 566,
    question: "[Translate in Jap] : (husked gains of) rice",
    answer: "こめ",
  },
  {
    id: 567,
    question: "[Translate in Jap] : to be crowded",
    answer: "こむ",
  },
  {
    id: 568,
    question: "[Translate in Jap] : the other day, recently",
    answer: "このあいだ",
  },
  {
    id: 569,
    question: "[Translate in Jap] : these days, nowadays",
    answer: "このごろ",
  },
  {
    id: 570,
    question: "[Translate in Jap] : after this",
    answer: "これから",
  },
  {
    id: 571,
    question:
      "La mère s'est fâchée contre son ado insolent et ne l'a pas autorisé à sortir avec ses amis.",
    answer:
      "The mother got cross with her insolent(incolent) teenage son and didn't allow him to go out with his friends.",
  },
  {
    id: 572,
    question:
      "Maman s'est fâchée quand elle a découvert mes frères et moi en train de glisser sur la rampe de l'escalier.",
    answer:
      "Mum got cross when she found my brothers and me sliding down the banister(baenister).",
  },
  {
    id: 573,
    question: "Patricia a vérifié minutieusement tous les détails.",
    answer: "Patricia checked all the details thoroughly(fureli).",
  },
  {
    id: 574,
    question:
      "Lavez vos mains minutieusement avec du savon et de l'eau pour vous debarrassez des microbes.",
    answer:
      "Wash your hands thoroughly(fureli) with soap and water to get rid of germs.",
  },
  {
    id: 575,
    question:
      "La maison était restée fermée pendant des années et l'air a l'interieur etait renfermes.",
    answer:
      "The house had been closed up for years and air inside was stale(staeil)",
  },
  {
    id: 576,
    question:
      "Ajoutez un mix de lait et de la crème à quantité égale (or: équivalente).",
    answer: "Add an even mixture of milk and cream.",
  },
  {
    id: 577,
    question: "Le fermier a tondu la laine du mouton.",
    answer: "The farmer sheared(shiert) the wool off the sheep.",
  },
  {
    id: 578,
    question:
      "Elisa déteste sa jupe en laine parce qu'elle la gratte et lui cause des démangeaisons dans les jambes.",
    answer:
      "Elisa hates her wool skirt because it's scratchy and makes her legs itch.",
  },
  {
    id: 579,
    question:
      "Tu pouvais dire/deviner que la petite fille etait entrain de pleurer a cause des ses reniflement.",
    answer: "You could tell the little girl was crying from her sniffles.",
  },
  {
    id: 580,
    question: "Le professeur a enseigne un cour d'histoire fasciant.",
    answer: "The professor taught a fascinating(facenaeiding) history course.",
  },
  {
    id: 581,
    question: "[Coding] : What is state in React ?",
    answer: "Is an object that describes your app.",
  },
  {
    id: 582,
    question: "[Coding] : What is the method this.setState() in react ?",
    answer: "You use that method if you want to change the current state.",
  },
  {
    id: 583,
    question: "[Coding] : What is a smart component in react ?",
    answer:
      "Is a component that has a state. If they don't have a state we call them standard component.",
  },
  {
    id: 584,
    question: "[Coding] : What is children in react ?",
    answer:
      "Children is the component that is wrapped by a parent component. Means that with props.children we have acces to the children props.",
  },
  {
    id: 585,
    question:
      "[Translate in Jap] : Before it was always with car but now i tought about my health, i walk become to walk a lot. ",
    answer:
      "前はいつも車でしたが、今はけんこうのことを考えて（・かんがえて）、よく歩くようになりました。",
  },
  {
    id: 586,
    question:
      "[Translate in Jap] : Sunday i cleaning and laundry usw... at home. ",
    answer: "日曜日は家で掃除（そうじ）とか洗濯（せんたく）とかをします。",
  },
  {
    id: 587,
    question:
      "[Translate in Jap] : Next week there's a test, that's  why i plan this week take a rest from my part time job and study.",
    answer:
      "来週は試験（・しけん）があります。だから、今週はアルバイトを休んで勉強するつもりです。",
  },
  {
    id: 588,
    question:
      "[Translate in Jap] : Because i'm tired, i go early home and think to go sleep.",
    answer:
      "疲れた（・つかれた）から、早く家に帰って寝よう（ねよう）と思います。",
  },
  {
    id: 589,
    question:
      "[Translate in Jap] : I was thinking to come here again next week.",
    answer: "来週はまたここに来ようと思っていました。",
  },
  {
    id: 590,
    question:
      "[Translate in Jap] : Do you like french cuisine. Yes but i don't think to eat it everyday. Sometimes i become wanted to eat it tho.",
    answer:
      "フランス料理（・りょうり）は好きですか。ええ、でも毎日食べようとは思いません。",
  },
  {
    id: 591,
    question: "[Translate in Jap] : This dish is easy, everybody can make it.",
    answer: "この料理（りょうり）は簡単 （かんたん）だから、だれでも作れます。",
  },
  {
    id: 592,
    question: "[Translate in Jap] : Before i used to read this book once.",
    answer: "この本は前に一度読んだことがあります。",
  },
  {
    id: 593,
    question:
      "[Translate in Jap] : Osaka's population are not as many as tokyo.",
    answer: "大阪の人口（じんこう）は東京ほど多くありません。",
  },
  {
    id: 594,
    question:
      "[Translate in Jap] : Your face color are bad isn't it. Today it's better to go home early.",
    answer:
      "かおいろが悪い（わるい）ですね。今日は早く帰ったほうがいいですよ。",
  },
  {
    id: 595,
    question:
      "[Translate in Jap] : Your face color are bad isn't it. Today it's better to go home early.",
    answer: "このボールペンは書きにくいから、もう使いたくありません。",
  },
  {
    id: 596,
    question: "[Translate in Jap] : a breakdown(une panne).",
    answer: "こしょう",
  },
  {
    id: 597,
    question: "[Translate in Jap] : small bird.",
    answer: "ことり",
  },
  {
    id: 598,
    question: "[Translate in Jap] : this way",
    answer: "こう",
  },
  {
    id: 599,
    question: "[Translate in Jap] : princial,headmaster(directeur d'ecole)",
    answer: "こうちょう",
  },
  {
    id: 600,
    question: "[Translate in Jap] : auditorium",
    answer: "こうどう",
  },
  {
    id: 601,
    question:
      "Toute sa vie, on lui a dit qu'il était un bon a rien mais il a prouvé le contraire.",
    answer:
      "His entire life he was told that he's a deadbeat but he proved the opposite.",
  },
  {
    id: 602,
    question:
      "Kevin est prétentieux/trop sur de soi, mais il fait trop d'erreurs.",
    answer: "Kevin is cocky(kaki), but he makes a lot of mistakes.",
  },
  {
    id: 603,
    question: "Après le dîner, James a essuyé la table.",
    answer: "After dinner, James wiped the table.",
  },
  {
    id: 604,
    question: "Wendy s'est essuyé le nez avec un mouchoir en papier.",
    answer: "Wendy wiped her nose with a tissue(tichiu)",
  },
  {
    id: 605,
    question:
      "Fred a dû faire face à plusieurs obstacles pour acheter sa maison.",
    answer: "Fred had to go over a lot of hurdles(herdels) to buy his house.",
  },
  {
    id: 606,
    question: "Le policier pourchassait le voleur dans la rue.",
    answer: "The police officer pursues(persuus) the thief along the street.",
  },
  {
    id: 607,
    question: "Mélanie poursuit des études de médecine.",
    answer: "Melanie is pursuing(perse-ing) a career in medecine.",
  },
  {
    id: 608,
    question:
      "Cette thèse est si ennuyeuse que je me suis endormi en la lisant.",
    answer: "The thesis was so dull(dall) that i fell asleep reading it.",
  },
  {
    id: 609,
    question:
      "Contemplez/Regardez! Je vous apporte des nouvelles de grande joie.",
    answer: "Behold! I bring you tidings of great joy.",
  },
  {
    id: 610,
    question:
      "Peter a mis ses sacs de course sur le siège arrière de la voiture.",
    answer: "Peter put his shopping bags on the rear(rier) seat of the car.",
  },
  {
    id: 611,
    question:
      "[Translate in Jap] : Even tough i ran till the station, i missed the 8am train.",
    answer: "駅まで走った（・はしる）のに8時の電車に間に合いませんでした。",
  },
  {
    id: 612,
    question: "[Translate in Jap] : Do you know where Mr.Tanaka lives?",
    answer: "田中さんがどこに住んでいますか知っていますか。",
  },
  {
    id: 613,
    question:
      "[Translate in Jap] : I'm worried if it will be sunny or not tomorrow.",
    answer: "明日晴れる（・はれる）かどうか、心配です。",
  },
  {
    id: 614,
    question:
      "[Translate in Jap] : This flower is famous because of its smell.",
    answer:
      "この花はとてもいい匂い（・におい）がするので、人気（・にんき）があります。",
  },
  {
    id: 615,
    question: "[Translate in Jap] : When it's good? / Any time is good.",
    answer: "いつがいいですか。・いつでもいいです。",
  },
  {
    id: 616,
    question:
      "[Translate in Jap] : Did you had been once in a foreign country?",
    answer: "一度でも外国へ行ったことがありますか。",
  },
  {
    id: 617,
    question: "[Translate in Jap] : I haven't been yet in a foreign country.",
    answer: "私はまだ一度も外国へ行ったことがありません。",
  },
  {
    id: 618,
    question:
      "[Translate in Jap] : According to my friend, this shop's cake is tasty.",
    answer: "友達の話によると、あの店のケーキは美味しいそうです。",
  },
  {
    id: 619,
    question:
      "[Translate in Jap] : What is the difference between 美味しいそうです・美味しそうです。",
    answer:
      "The first meaning means: I heard that is good, Second is it seems good。",
  },
  {
    id: 620,
    question:
      "[Translate in Jap] : Did the manager come to the party hall ? / Yes i think he came. / No i think he didn't come yet. (very polite)",
    answer:
      "部長はパーティー会場（かいじょう）にいらっしゃいましたか。・はい、いらっしゃたと思います。・いいえ、まだいらしゃっていないと思います。",
  },
  {
    id: 621,
    question: "[Translate in Jap] : suburb(banlieue)",
    answer: "こうがい",
  },
  {
    id: 622,
    question: "[Translate in Jap] : lecture",
    answer: "こうぎ",
  },
  {
    id: 623,
    question: "[Translate in Jap] : industry",
    answer: "こうぎょう",
  },
  {
    id: 624,
    question: "[Translate in Jap] : factory",
    answer: "こうじょう",
  },
  {
    id: 625,
    question: "[Translate in Jap] : government worker",
    answer: "こうむいん",
  },
  {
    id: 626,
    question: "[Translate in Jap] : traffic",
    answer: "こうつ",
  },
  {
    id: 627,
    question: "[Translate in Jap] : to be broken",
    answer: "こわれる",
  },
  {
    id: 628,
    question: "[Translate in Jap] : to break",
    answer: "こわす",
  },
  {
    id: 629,
    question: "[Translate in Jap] : to give (respectful)",
    answer: "くださる",
  },
  {
    id: 630,
    question: "[Translate in Jap] : suffix for familiar young male",
    answer: "くん",
  },
  {
    id: 631,
    question:
      "La pauvreté du garçon etait evident par ses cheveux sales et ses vêtements en piteux etat.",
    answer:
      "The boy's poverty was obvious by his dirty hair and tattered clothing",
  },
  {
    id: 632,
    question: "Ben a essuyé la fenêtre avec un chiffon.",
    answer: "Ben wiped the window with a rag. (reak)",
  },
  {
    id: 633,
    question: "Ben a crie des insultes a Gary.",
    answer: "Rachel shouted insults(insalts) at Gary.",
  },
  {
    id: 634,
    question: "Sarah a senti une agiation d'excitation.",
    answer: "Sarah felt a flutter of excitement.",
  },
  {
    id: 635,
    question: "Sarah a senti une agiation d'excitation.",
    answer: "Sarah felt a flutter of excitement.",
  },
  {
    id: 636,
    question: "L'oiseau a battu des ailes pour essayer de s'envoler.",
    answer: "The bird fluttered its wings in an attempt to fly away.",
  },
  {
    id: 637,
    question:
      "La paume du gant s'ajustait bien à la paume de la main de kevin.",
    answer:
      "The palm of the glove fitted well against the palm of kevin's hand.",
  },
  {
    id: 638,
    question: "J'ai besoin d'acheter deux nouveaux pneus pour ma voiture.",
    answer: "I need to buy 2 new tyres(tai-res) for my car.",
  },
  {
    id: 639,
    question: "Les pneus sont fabriqués avec du caoutchouc.",
    answer: "Tyres are made of rubber.",
  },
  {
    id: 640,
    question:
      "Nous avons pris des coupes glacées pour célébrer la victoire de l'équipe.",
    answer: "We had sundaes(sundays) to celebrate the team's victory.",
  },
];

const reviewBox = document.getElementById("review-box");
const reviewText = document.querySelector(".thequestion");
const answerText = document.querySelector(".theanswer");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const randomBtn = document.getElementById("random");
const questionNumber = document.querySelector(".question-number");

//add or remove Class on ReviewBox
plusBtn.addEventListener("click", function () {
  reviewBox.classList.add("show-answer");
});
minusBtn.addEventListener("click", function () {
  reviewBox.classList.remove("show-answer");
});

// set starting quote
let currentReview = 0;

// load initial FullQuote
window.addEventListener("DOMContentLoaded", function () {
  showFullReview();
});

// showReview
function showFullReview() {
  const fullReview = reviewArray[currentReview];
  reviewText.textContent = fullReview.question;
  answerText.textContent = fullReview.answer;
  questionNumber.textContent = "No. " + fullReview.id;
}

// show next review
nextBtn.addEventListener("click", function () {
  currentReview++;
  if (currentReview > reviewArray.length - 1) {
    currentReview = 0;
  }
  showFullReview(currentReview);
});

// show prev review
prevBtn.addEventListener("click", function () {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviewArray.length - 1;
  }
  showFullReview(currentReview);
});

// show random review
randomBtn.addEventListener("click", function () {
  currentReview = Math.floor(Math.random() * reviewArray.length);
  showFullReview();
});
