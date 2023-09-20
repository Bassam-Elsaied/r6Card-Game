
let yourName = document.querySelector(".name span");

document.querySelector(".controlButton span").onclick = function(){

    let playerName = prompt("Enter Your Name!")
   
    if(playerName == null || playerName == ""){
        yourName.innerHTML="Unknown Player"
    }else{
        yourName.innerHTML = playerName
    }

    document.querySelector(".controlButton").remove();

};

let duration = 1000;

let blocksContainer = document.querySelector(".Memory-blocks");
let blocks = Array.from(blocksContainer.children);

let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);


blocks.forEach((block , index)=>{
    block.style.order = orderRange[index];

    block.addEventListener("click", function(){
        flibBlock(block);
    });

});

function flibBlock(selectedCard){

    selectedCard.classList.add("is-Flipped");

    let numbreOfBlocks = blocks.filter((flibbedBlocks) =>flibbedBlocks.classList.contains("is-Flipped"));

    if(numbreOfBlocks.length == 2){
        
        stopClicking()

        matchedBlocks(numbreOfBlocks[0] , numbreOfBlocks[1]);
    }
}

function stopClicking(){
    blocksContainer.classList.add("noClicking")

    setTimeout(()=>{
        blocksContainer.classList.remove("noClicking");
    },duration)
}


function matchedBlocks(firstcard, secondcard){

    let trieElement = document.querySelector('.tries span')

    if(firstcard.dataset.operations == secondcard.dataset.operations){
        firstcard.classList.remove("is-Flipped");
        secondcard.classList.remove("is-Flipped");

        firstcard.classList.add("hasMatched");
        secondcard.classList.add("hasMatched");

        document.getElementById("succes").play();
    }else{

        trieElement.innerHTML = parseInt(trieElement.innerHTML)+1;

        setTimeout(()=>{
            firstcard.classList.remove("is-Flipped");
            secondcard.classList.remove("is-Flipped");
        },duration);

        document.getElementById("wrong").play();
    }

}

function shuffle(array){
    let current = array.length,
    temp,
    random;
    while(current > 0){
        random = Math.floor(Math.random() * current);
        current--;

        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }
    return array;
    
};



