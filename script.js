const heart = document.getElementsByClassName("heart")
const changeColor = document.getElementsByClassName("change-color")[0];
const dialog = document.getElementsByClassName("dialog");
const note = document.getElementsByClassName("dialog-message")[0];
const color_note = document.getElementsByClassName("little-note")[0];

let currColor = "red";



const blue_heart = "#000053"
const blue_heart_shadow = "rgba(0, 0, 83, 0.6)"

const red_heart = "#b30000"
const red_heart_shadow = "rgba(179, 0, 0, 0.6)"


const notes = [
    "You are so perfect",
    "You are so precious",
    "You are so beautiful",
    "You are so amazing and you are doing so so great, keep it up!! I am so so proud of you!",
    "I love you so much <3",
    "You are my princess",
    "I love your beautiful green eyes",
    "I love your perfect brown hair",
    "I love your nose",
    "I know everything is hard Zozo, but I promise you everything will be easier and everything will come your way and every piece will fall in place.",
    "You will be an amazing mom",
    "Everything you wanna achieve will come true bum bum",
    "Every dream is a step away bum bum",
    "Your skin, oh yeah, your skin and bones, turn into something beautiful and you know, you know I love you so, you know I love you so - Coldplay :)",
    "I can’t believe I found someone as amazing as you.",
    "I love the way you make me feel safe and secure.",
    "I love you more than words can express.",
    "Listen to 'Green Eyes', that's how I feel - Coldplay :)",
    "Don't worry, I would never leave you, I want us forever",
    "Don't worry, I'll stay by your side forever and ever",
    "You and me forever",
    "You and me against the world",
    "I can’t imagine life without you by my side.",
    "I appreciate all that you do for me, no matter how small.",
    "I am blessed to have you in my life and I will never take it for granted.",
    "I find myself smiling just thinking about you.",
    "\"Doubt kills more dreams than failure ever will.\" -- Suzy Kassem, never forget that bum bum",
    "My beautiful, perfect, sexy girl. Forever and ever baby",
    "I will always take care of you, no matter what",
    "People are jealous of your perfectness, Zozo",
    "You are the most amazing person on earth",
    "You are hot heheh",
    "You are so, so, so, so, so, so, so beautiful", "I love how you always know how to cheer me up.",
  "Your confidence is inspiring.",
  "I appreciate how you listen to me.",
  "You are my best friend and soulmate.",
  "I love the way you care for others.",
  "You make life so much more fun and exciting.",
  "I can't wait to see what the future holds for us.",
  "You are my forever and always.",
  "Every day with you is a blessing.",
  "Baby you light up my world like nobody else, the way you flip your hair gets me overwhelmed hehehe if you know you know hehe",
  "You have the most beautiful soul.",
  "You make me want to be a better person.",
  "Your voice is the sweetest sound I've ever heard Zozo.",
  "Every moment spent with you is a treasure Zozo.",
  "You have a heart of gold bum bum.",
  "I love the way we can just be silly together.",
  "You are my favorite adventure.",
  "Your love is my safe haven.",
  "I am always here for you, no matter what.",
  "You are more than I ever dreamed of finding in a partner baby.",
  "I love our silly moments",
  "I love how I can be so crazy and you will be even more crazy",
  "I love playing copter with you",
  "I love playing Roblox with you and hear you laughing",
  "I love seeing you smile",
  "I love seeing your beautiful teeth",
  "Dont give up",
  "Keep it up, I am so so proud of you for everything you do",
  "It will get easier, I promise you",
  "I am your best friend, boyfriend forever and ever"
  ];


changeColor.addEventListener("click", function() {
    if (currColor === "red") {
        document.documentElement.style.setProperty('--heart-red', '#000053');
        document.documentElement.style.setProperty('--shadow-color-red', 'rgba(0, 0, 83, 0.6)');
        currColor = "blue";
        color_note.innerHTML = "NAVY BLUE :)"
    } else {
        document.documentElement.style.setProperty('--heart-red', '#b30000');
        document.documentElement.style.setProperty('--shadow-color-red', 'rgba(179, 0, 0, 0.6)');
        currColor = "red";
          color_note.innerHTML = ""
    }
})

heart[0].addEventListener("click", () => {

    dialog[0].showModal();
    note.innerHTML = notes[Math.floor(Math.random() * (notes.length - 0 + 1)) + 0]
})


dialog[0].addEventListener("click", (event) => {
    if (event.target === dialog[0]) {
        dialog[0].close();
    }
  });