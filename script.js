const gen_btn = document.getElementById("rand_word_btn");
const word_out = document.getElementById("word_out");
const emoji_out = document.getElementById("emoji_out");

const words = [
    "Elon Musk",
    ["car", "🚗"],
    ["engineer", ""],
    ["melon", "🍉🍈"],
    ["lemon", "🍋"],
    ["horny", ""],
    "meme",
    "skibidi toilet",
    ["puzzle", "🧩"],
    "action",

    // Words generated with randomwordgenerator.com
    "galaxy",
    "tired",
    "fight",
    ["blind", "🧑‍🦯👩‍🦯👨‍🦯🦯"],
    ["goat", "🐐"]

];

gen_btn.addEventListener("click", () => {
    const element = words[Math.floor( Math.random()*words.length )];
    let word, forbidden;
    if (typeof element == "string") {
        word = element;
        forbidden = "";

    }else {
        word = element[0];
        if(element.length == 2)
            forbidden = element[1];
        else
            forbidden = "";

    }

    forbidden = "" == forbidden ? "none" : forbidden;

    word_out.innerText = word;
    emoji_out.innerText = `Forbidden emojis: ${ forbidden }`;

});
