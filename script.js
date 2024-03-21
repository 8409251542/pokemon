let cards =document.getElementById("card_container");
let fltBtn =document.getElementById("fltbtn");
let srcBtn =document.getElementById("srcBtn");

const objColor = {
    "grass": "teal",
    "normal": "gray",
    "poison": "purple",
    "ground": "stone",
    "rock": "zinc",
    "bug": "red",
    "fire": "orange",
    "water": "blue",
    "electric": "yellow",
    "psychic": "green",
    "ice": "cyan",
    "dragon": "emerald",
    "fairy": "pink",
    "fighting":"amber",
    "ghost":"fuchsia"
};
let pokeStore = [];
loadCard();
async function loadCard(){
    for (let i = 1; i <151; i++){
        let data=await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res=>res.json());
        //console.log(data);
        let spc=data.types[0].type.name;
        pokeStore.push(data);
        let div = document.createElement("div");
        div.className=`flex-shrink-0 m-6 relative overflow-hidden bg-${objColor[spc]}-500 rounded-lg max-w-xs shadow-lg`;
        div.innerHTML=`
        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
        style="transform: scale(1.5); opacity: 0.1;">
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
    </svg>
    <div class="relative pt-10 px-10 flex items-center justify-center">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
            style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
        </div>
        <img class="relative w-40 h-60" height="170px" width="160px" src=${data.sprites.other.dream_world.front_default}  alt="">
    </div>
    <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-90 -mb-1">${data.id}.</span>
        <div class="flex justify-between">
            <span class="block font-semibold text-xl">${data.name.charAt(0).toUpperCase()+data.name.substr(1).toLowerCase()}</span>
            <span class="block bg-white rounded-full text-${objColor[spc]}-500 text-xs font-bold px-3 py-2 leading-none flex items-center">${spc.toUpperCase()}</span>
        </div>
    </div>
        `
        cards.appendChild(div);
    } 
}
console.log(pokeStore);
fltBtn.addEventListener('click',byType);
async function byType(){
    cards.innerHTML=""
    let fltType = document.getElementById("type").value;
    pokeStore.forEach((e)=>{
        if(e.types[0].type.name===fltType){
            console.log("hello");
            let spc=e.types[0].type.name;
        //pokeStore.push(data);
        let div = document.createElement("div");
        div.className=`flex-shrink-0 m-6 relative overflow-hidden bg-${objColor[spc]}-500 rounded-lg max-w-xs shadow-lg`;
        div.innerHTML=`
            <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                style="transform: scale(1.5); opacity: 0.1;">
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
            </svg>
            <div class="relative pt-10 px-10 flex items-center justify-center">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                    style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
                </div>
                <img class="relative w-40 h-60" height="170px" width="160px" src=${e.sprites.other.dream_world.front_default}  alt="">
            </div>
            <div class="relative text-white px-6 pb-6 mt-6">
                <span class="block opacity-90 -mb-1">${e.id}.</span>
                <div class="flex justify-between">
                    <span class="block font-semibold text-xl">${e.name.charAt(0).toUpperCase()+e.name.substr(1).toLowerCase()}</span>
                    <span class="block bg-white rounded-full text-${objColor[spc]}-500 text-xs font-bold px-3 py-2 leading-none flex items-center">${spc.toUpperCase()}</span>
                </div>
            </div>
        `
        cards.appendChild(div);
        };
    })
    
    
}

function fltByName(){
    cards.innerHTML=""
    let nameType = srcBtn.value;
    console.log(nameType);
    pokeStore.forEach((e)=>{
        if(e.name==nameType){
            
            let spc=e.types[0].type.name;
        //pokeStore.push(data);
        let div = document.createElement("div");
        div.className=`flex-shrink-0 m-6 relative overflow-hidden bg-${objColor[spc]}-500 rounded-lg max-w-xs shadow-lg`;
        div.innerHTML=`
            <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                style="transform: scale(1.5); opacity: 0.1;">
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
            </svg>
            <div class="relative pt-10 px-10 flex items-center justify-center">
                <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                    style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
                </div>
                <img class="relative w-40 h-60" height="170px" width="160px" src=${e.sprites.other.dream_world.front_default}  alt="">
            </div>
            <div class="relative text-white px-6 pb-6 mt-6">
                <span class="block opacity-90 -mb-1">${e.id}.</span>
                <div class="flex justify-between">
                    <span class="block font-semibold text-xl">${e.name.charAt(0).toUpperCase()+e.name.substr(1).toLowerCase()}</span>
                    <span class="block bg-white rounded-full text-${objColor[spc]}-500 text-xs font-bold px-3 py-2 leading-none flex items-center">${spc.toUpperCase()}</span>
                </div>
            </div>
        `
        cards.appendChild(div);
        };
    })
}
function reset(){
    location.reload();
}