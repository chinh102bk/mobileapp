const yes = document.getElementById("yes");
const no = document.getElementById("no");
const msg = document.getElementById("message");


let count = 0;



// Sakura rơi

function createSakura(){

    const flower = document.createElement("div");

    flower.className="sakura";

    flower.innerHTML="🌸";


    flower.style.left =
    Math.random()*100+"vw";


    flower.style.fontSize =
    (Math.random()*20+15)+"px";


    flower.style.animationDuration =
    (Math.random()*5+5)+"s";


    document.body.appendChild(flower);


    setTimeout(()=>{
        flower.remove();
    },10000);

}


setInterval(createSakura,250);





// Nút NO

no.onclick=function(){


    count++;


    document.body.classList.add("shake");


    setTimeout(()=>{

        document.body.classList.remove("shake");

    },400);



    let text=[

        "😂 You have no choice!",

        "🌸 Nice try Misa.",

        "😏 Nope.",

        "🚫 Home is unavailable.",

        "💀 System denied."

    ];


    msg.innerHTML =
    text[Math.min(count-1,4)];



    if(count>=5){

        no.style.display="none";

        msg.innerHTML=
        "🌸 You have no choice hahaa.";

    }

};





/// Nút YES chạy trốn 😈

yes.onmouseover = function(){

    const x = Math.random() * (window.innerWidth - yes.offsetWidth);
    const y = Math.random() * (window.innerHeight - yes.offsetHeight);

    yes.style.position = "absolute";
    yes.style.left = x + "px";
    yes.style.top = y + "px";

};


// Nếu vẫn bắt được YES

yes.onclick=function(){

    document.body.innerHTML=`

    <div class="container">

    <h1>
    🌸 Congratulations Misa 🌸
    </h1>

    <h2>
    You chose the only option 😂
    </h2>

    </div>

    `;

};