const heart = document.getElementById("heart");
const card = document.getElementById("card");
const typing = document.getElementById("typing");
const enterBtn = document.getElementById("enterBtn");
const tip = document.querySelector(".tip");

const text = `Hello ♡
你好呀

Thank you for finding this place. ♡
謝謝你找到這邊.

I'm Xin. ♡
我是欣欣.

It's nice to meet you. ♡
很高興認識你壓 ~ `;

let index = 0;
let played = false;

heart.addEventListener("click", () => {

    if(played) return;

    played = true;

    tip.classList.add("hide");   // 👈 讓 Touch 消失

    card.classList.remove("hidden");

    typeWriter();

});

function typeWriter(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,45);

    }else{

        enterBtn.classList.remove("hidden");

    }

}
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    window.open(
        "https://www.youtube.com/watch?v=RMzwZZXt2co",
        "_blank"
    );
});

// ==========================
// About Page
// ==========================

const about = document.getElementById("about");

enterBtn.addEventListener("click", () => {

    // 第一頁淡出
    document.querySelector(".container").style.opacity = "0";
    document.querySelector(".container").style.transition = ".8s";

    // 0.8 秒後切換
    setTimeout(() => {

        document.querySelector(".container").style.display = "none";

        about.classList.add("show");

         setTimeout(() => {

        document.querySelector(".logo").classList.add("show");

    },300);

    },800);

});

// ==========================
// 點頭像
// ==========================

const photo = document.getElementById("photo");
const avatar = document.querySelector(".avatar");
const introPanel = document.getElementById("introPanel");
const content = document.getElementById("content");
const titleBox = document.getElementById("titleBox");


photo.addEventListener("click", () => {

    titleBox.classList.add("fade");

    avatar.classList.add("move");

    setTimeout(() => {

        introPanel.classList.add("show");   // 👈 打開介紹

        

        showIntro();                        // 👈 開始一句一句動畫

    },400);

});

const fadeItems = document.querySelectorAll(".fade-item");

function showIntro(){

    fadeItems.forEach((item,index)=>{

        setTimeout(()=>{

            item.classList.add("show");

        },index*650);

    });

}