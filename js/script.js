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
        answer:
          "I can't find the thimble(fimbel) that was in my sewing box.", 
      },
      {
        id: 151,
        question:
        "[Translate in Jap] : Baby/infant.",
        answer:　
        "あかんぼう.",
      },
      {
        id: 152,
        question:
        "[Translate in Jap] : peace of mind(tranquillite de l'esprit).",
        answer:　
        "安心（・あんしん）.",
      },
      {
        id: 153,
        question:
        "[Translate in Jap] : safe.",
        answer:　
        "あんぜん.",
      },
      {
        id: 154,
        question:
        "[Translate in Jap] : to apologize.",
        answer:　
        "あやまる.",
      },
      {
        id: 155,
        question:
        "[Translate in Jap] : program TV.",
        answer:　
        "ばんぐみ",
      },
      {
        id: 156,
        question:
        "[Translate in Jap] : bell.",
        answer:　
        "ベル",
      },
      {
        id: 157,
        question:
        "[Translate in Jap] : trade(commerce international).",
        answer:　
        "ぼうえき",
      },
      {
        id: 158,
        question:
        "[Translate in Jap] : grapes.",
        answer:　
        "ぶどう",
      },
      {
        id: 159,
        question:
        "[Translate in Jap] : literature.",
        answer:　
        "ぶんがく",
      },
      {
        id: 160,
        question:
        "[Translate in Jap] : strength/force.",
        answer:　
        "ちから",
      },
      {
        id: 161,
        question:
        "[Translate in Jap] : I became unable to read small letters.",
        answer:　
        "小さい字が読めなくなりました。",
      },
      {
        id: 162,
        question:
        "[Translate in Jap] : I try to not eat sweet things.",
        answer:　
        "甘い（・あまい）物を食べないようにしています。",
      },
      {
        id: 163,
        question:
        "[Translate in Jap] : Please try to not smoke here at all.",
        answer:　
        "ここでは絶対（・ぜったい）に煙草（・たばこ）を吸わない（・すわない）ようにしてください。",
      },
      {
        id: 164,
        question:
        "[Translate in Jap] : I was scolded by the manager.",
        answer:　
        "私は部長に𠮟れました（・しかれました）。",
      },
      {
        id: 165,
        question:
        "[Translate in Jap] : The teacher praised me.",
        answer:　
        "先生は私を褒めました（・ほめる）。",
      },
      {
        id: 166,
        question:
        "[Translate in Jap] : I was stepped on by a woman.",
        answer:　
        "私は女の人に足を踏まれました（・ふむ）。",
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
        question:
        "[Translate in Jap] : Beer is made from wheat/oat.",
        answer:　
        "ビールは麦（・むぎ）から作られます。",
      },
      {
        id: 169,
        question:
        "[Translate in Jap] : Beer is made from wheat.",
        answer:　
        "ビールは麦（・むぎ）から作られます。(We use から cuz of raw material.",
      },
      {
        id: 170,
        question:
        "[Translate in Jap] : This desk was made of wood.",
        answer:　
        "この机は木で作られました。(We use で cuz Wood is a material.",
      },
      {
        id: 171,
        question:
        "[Translate in Jap] : Geography.",
        answer:　
        "ちり",
      },
      {
        id: 172,
        question:
        "[Translate in Jap] : Caution.",
        answer:　
        "ちゅうい",
      },
      {
        id: 173,
        question:
        "[Translate in Jap] : Injection.",
        answer:　
        "ちゅうしゃ",
      },
      {
        id: 174,
        question:
        "[Translate in Jap] : Considerably, a lot.",
        answer:　
        "だいぶ",
      },
      {
        id: 175,
        question:
        "[Translate in Jap] : roughly/(a peu pres).",
        answer:　
        "だいたい",
      },
      {
        id: 176,
        question:
        "[Translate in Jap] : Heating(chauffage).",
        answer:　
        "だんぼう",
      },
      {
        id: 177,
        question:
        "[Translate in Jap] : man/male.",
        answer:　
        "だんせい",
      },
      {
        id: 178,
        question:
        "[Translate in Jap] : telegram.",
        answer:　
        "でんぽう",
      },
      {
        id: 179,
        question:
        "[Translate in Jap] : electric light.",
        answer:　
        "でんとう",
      },
      {
        id: 180,
        question:
        "[Translate in Jap] : more and more.",
        answer:　
        "どんどん",
      },
      {
        id: 181,
        question:
          "Traduis la phrase suivante : Après la pluie, il y avait plusieurs flaques d'eau le long de la rue.",
        answer:
          "After the rain, there were several puddles along the street.", 
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
        answer:
          "You can find a matchbox next to the stove.", 
      },
      {
        id: 184,
        question:
          "Traduis la phrase suivante : Henry a mis la bouilloire sur la cuisinière pour chauffer l'eau.",
        answer:
          "Henry put the kettle(kedel) on the stove to heat(hiit) the water.", 
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
        answer:
          "You would have to wear dolls clothes.", 
      },
      {
        id: 187,
        question:
          "Traduis la phrase suivante : Je préfère les moufles aux gants car elles sont plus chaudes.",
        answer:
          "I prefer mittens to gloves because they are warmer.", 
      },
      {
        id: 188,
        question:
          "Traduis la phrase suivante : Une soudaine rafale/coup de vent a presque arraché Katy de ses pieds.",
        answer:
          "A sudden gust of wind almost kocked Katy off her feet.", 
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
        answer:
          "I can't be sure the rumour is true, as I heard it secondhand.", 
      },
      {
        id: 191,
        question:
        "[Coding] : What's the meaning ? highScores.splice(5);",
        answer:　
        "Imagine that we have an array named highScores, so here at the 5th position in this array highScores we start cutting of evertying after that.",
      },
      {
        id: 192,
        question:
        "[Coding] : What will console.log(nLs) give us in that case ? let nLs= array.map(function(item, index, array){ return item.length;});",
        answer:　
        "It will give all the item's length one by one inside the array.",
      },
      {
        id: 193,
        question:
        "[Coding] : What does the map() function do ?",
        answer:　
        "We are able to map(loop) each item in the array  and change to something else inside a new array.",
      },
      {
        id: 194,
        question:
        "[Coding] : What does the function sort() do ?",
        answer:　
        "Like the function name, its sorts the items of an array.",
      },
      {
        id: 195,
        question:
        "[Coding] : Meaning ? \nconst classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';",
        answer:　
        "If sA equal cQ.a then is correct otherwise is incorrect.",
      },
      {
        id: 196,
        question:
        "[Coding] : Convert this function into an arrow function. function getQuestion(){};",
        answer:　
        "getQuestion = () => {};",
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
        question:
        "[Coding] : What is the meaning of JASON ?",
        answer:　
        "JavaScript Object Notation (is a format for storing data)",
      },
      {
        id: 201,
        question:
        "[Translate in Jap] : French is also spoken in South-Africa.",
        answer:　
        "フランス語は南アフリカでも話されています。",
      },
      {
        id: 202,
        question:
        "[Translate in Jap] : English is spoken in various countries.",
        answer:　
        "英語はいろいろな国で話されています。",
      },
      {
        id: 203,
        question:
        "[Translate in Jap] : The light bulb was invented by Mr. Edison.",
        answer:　
        "電球(・でんきゅう) はエジソンさんによって発明されました。(はつめいする・to invent)",
      },
      {
        id: 204,
        question:
        "[Translate in Jap] : Getting up early in the morning it's hard.",
        answer:　
        "朝早く起きるのは大変です(・たいへん）。",
      },
      {
        id: 205,
        question:
        "[Translate in Jap] : I'm not good at dancing.",
        answer:　
        "ダンスをするのが下手です。",
      },
      {
        id: 206,
        question:
        "[Translate in Jap] : Do you know that Yoshida left the company ?",
        answer:　
        "よしださんが会社を辞めた（やめる）のを知っていますか。",
      },
      {
        id: 207,
        question:
        "[Translate in Jap] : I forgot to lock my house.",
        answer:　
        "家の鍵（・かぎ）をかける（-to secure/lock)のを忘れました。",
      },
      {
        id: 208,
        question:
        "[Translate in Jap] : It is Mr. Yamada that I will meet tomorrow.",
        answer:　
        "私が明日会おうのは山田さんです。",
      },
      {
        id: 209,
        question:
        "[Translate in Jap] : When is the teacher going to see Mr Tanaka?",
        answer:　
        "先生が田中さん会おうのはいつですか。",
      },
      {
        id: 210,
        question:
        "[Translate in Jap] : It's hard to pronounce well.",
        answer:　
        "上手に発音（・はつおん）できなくて大変です。",
      },
      {
        id: 211,
        question:
        "[Translate in Jap] : Tool.",
        answer:　
        "どうぐ。",
      },
      {
        id: 212,
        question:
        "[Translate in Jap] : Branch.",
        answer:　
        "えだ",
      },
      {
        id: 213,
        question:
        "[Translate in Jap] : declining, refraining​, holding back",
        answer:　
        "えんりょ",
      },
      {
        id: 214,
        question:
        "[Translate in Jap] : fax",
        answer:　
        "ファックス",
      },
      {
        id: 215,
        question:
        "[Translate in Jap] : deep",
        answer:　
        "ふかい",
      },
      {
        id: 216,
        question:
        "[Translate in Jap] : review/revision",
        answer:　
        "ふくしゅう",
      },
      {
        id: 217,
        question:
        "[Translate in Jap] : complex,complicated",
        answer:　
        "ふくざつ",
      },
      {
        id: 218,
        question:
        "[Translate in Jap] : to begin to rain/snow",
        answer:　
        "ふりだす",
      },
      {
        id: 219,
        question:
        "[Translate in Jap] : usually",
        answer:　
        "ふつう",
      },
      {
        id: 220,
        question:
        "[Translate in Jap] : petrol station",
        answer:　
        "ガソリンスタンド",
      },
      {
        id: 221,
        question:
          "Traduis la phrase suivante : Il etait assis à table et m'a lu des extraits du journal.",
        answer:
          "He sat at the table and read me snippets from the paper.", 
      },
      {
        id: 222,
        question:
          "Traduis la phrase suivante : Martin a travaillé environ huit heures aujourd'hui.",
        answer:
          "Martin has done roughly eight hours work today.", 
      },
      {
        id: 223,
        question:
          "Traduis la phrase suivante : Elle était considérablement bouleversée par les nouvelles.",
        answer:
          "She was considerably(kensidrebli) upset by the news.", 
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
        answer:
          "Use extreme caution(kachen) when you cross a busy street.", 
      },
      {
        id: 226,
        question:
          "Traduis la phrase suivante : L'enfant etait etendu dans le berceau.",
        answer:
          "The infant lay in the crib.", 
      },
      {
        id: 227,
        question:
          "Traduis la phrase suivante : Ils s'assoient dans la cour (jardin de derriere) et lisent tout l'été.",
        answer:
          "They sit in the backyard and read all summer.", 
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
        answer:
          "I would like pie, mashed(mëcht) potatoes, and vegetables.", 
      },
      {
        id: 231,
        question:
        "[Coding] : What is the button.addEventListener(keyup) do ?",
        answer:　
        "Is an event listener that will react instantly when you release a key from your keyboard.",
      },
      {
        id: 232,
        question:
        "[Coding] : What is the function sort() do ?",
        answer:　
        "It will sorts an array alphabetically.",
      },
      {
        id: 233,
        question:
        "[Coding] : What does this CSS do ? button:active {transform: scale(0.98);}",
        answer:　
        "It means when we clik on the btn it will decrease the zoom. ",
      },
      {
        id: 234,
        question:
        "[Coding] : What is the difference between let and const ?",
        answer:　
        "let we can owerwrite it & const not.",
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
        question:
        "[Coding] : How does the function forEach() work? ",
        answer:　
        "It will call a callback function once for each element inside an array. The callback f has 3param:item,index,array. item for the element, index for the number and array for that array.",
      },
      {
        id: 238,
        question:
        "[Coding] : What is an argument in an function ?",
        answer:　
        "It is the same as an params .",
      },
      {
        id: 239,
        question:
        "[Translate in Jap] : In Japan's Summer it's also hot at night that's difficult.",
        answer:　
        "日本の夏は夜も熱くて大変です。",
      },
      {
        id: 240,
        question:
        "[Translate in Jap] :　Many houses were destroyed/broken by the earthquake.",
        answer:　
        "地震で(じしん）たくさんの家が壊れました。（・こわれる）",
      },
      {
        id: 241,
        question:
        "[Translate in Jap] :　I have a promise today so i can't go.",
        answer:　
        "今日は約束（・やくそく）があるのでいけません。",
      },
      {
        id: 242,
        question:
        "[Translate in Jap] :　It's already 11pm, so can you keep quiet ?",
        answer:　
        "もう夜（よる）11時なので静か（・しずか）にしていただけませんか。",
      },
      {
        id: 242,
        question:
        "[Translate in Jap] :　I don't know how much these shoes are.",
        answer:　
        "この靴はいくらかわかりません。",
      },
      {
        id: 243,
        question:
        "[Translate in Jap] :　If i can do anything for my little brother, ask me please.",
        answer:　
        "私が弟のためにできることがあれば、いつでも言ってくださいね。",
      },
      {
        id: 244,
        question:
        "[Translate in Jap] :　Please tell me if Yuri is cute or not.",
        answer:　
        "ゆりさんは可愛い（・かわいい）かどうか教えて（・おしえる）ください。",
      },
      {
        id: 245,
        question:
        "[Translate in Jap] :　cause; origin; source​.",
        answer:　
        "げんいん",
      },
      {
        id: 246,
        question:
        "[Translate in Jap] :　lodging(hebergement/logement).",
        answer:　
        "げしゅく",
      },
      {
        id: 247,
        question:
        "[Translate in Jap] : technique, skill",
        answer:　
        "ぎじゅつ",
      },
      {
        id: 248,
        question:
        "[Translate in Jap] : a feast",
        answer:　
        "ごちそう",
      },
      {
        id: 249,
        question:
        "[Translate in Jap] : rubbish/garbage",
        answer:　
        "ごみ",
      },
      {
        id: 250,
        question:
        "[Translate in Jap] : your husband/her husband",
        answer:　
        "ごしゅじん",
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
        answer:
          "Pull over to the right if you hear a siren(sairen).", 
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
        answer:
          "They aren't receiving a fair share of the profits.", 
      },
      {
        id: 256,
        question:
          "Traduis la phrase suivante : La beauté est superficielle.",
        answer:
          "Beauty is skin deep.", 
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
        answer:
          "This new washing-powder is making me itchy all over.", 
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
const questionNumber = document.querySelector('.question-number');


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
    questionNumber.textContent = 'No. ' + fullReview.id ;
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





