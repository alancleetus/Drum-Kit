const allButtons = document.querySelectorAll("button");

var audioArr = [new Audio('./sounds/crash.mp3'),
            new Audio('./sounds/kick-bass.mp3'),
            new Audio('./sounds/snare.mp3'),
            new Audio('./sounds/tom-1.mp3'),
            new Audio('./sounds/tom-2.mp3'),
            new Audio('./sounds/tom-3.mp3'),
            new Audio('./sounds/tom-4.mp3'),
            ];

allButtons.forEach((button)  => {
    button.addEventListener("click", function (e){
        
        //console.log(e.target.className);
        audioArr[e.target.id].play();

        } 
    )
});

document.addEventListener("keydown",(e)=>{
    //console.log(e.key);
    const button = document.getElementsByClassName(e.key);
    if(button[0]){
        audioArr[button[0].id].play();
    }    

})