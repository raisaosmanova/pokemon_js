
const playBtn=document.querySelector("#playBtn")
const pointEl1=document.querySelector("#pointEl1")
const pointEl2=document.querySelector("#pointEl2")
const statusEl1=document.querySelector("#statusEl1")
const statusEl2=document.querySelector("#statusEl2")
const imgEl1=document.querySelector("#imgEl1")
const imgEl2=document.querySelector("#imgEl2")
// ! kim udursa reqem artmalidi.
let point1=0
let point2=0

// ! pokemonlari yerlesdirek:
const pokemons=["e", "w","f"]

// ! SEKIL UCUN OBYEKT
const images={
    "e":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfGiW5wtFeQyjqhKAo1gYPt78TkyLAG6ayLw&s",
    "w":"https://img-s2.onedio.com/id-5784f2503a2b388f5549ba57/rev-0/w-620/f-jpg/s-3ba128f3ef9aaa6744e4aebe8b114e19eb604a80.jpg",
    "f":"https://images.secretlab.co/theme/common/collab_pokemon_catalog_charizard-min.png"
}
console.log(images)
// ! random pokemon secimi:

function getRandomPokemon(){
   let randomPokemun=[Math.floor(Math.random() * pokemons.length)];
   return pokemons[randomPokemun]
}


// ! play butonuna klik edende funksiya cagrilacaq, ve oyun icra olunacaq
const showMe=()=>{

    point1+=1
        // ekranda gorunmesi ucun:
        pointEl1.innerHTML=point1

        statusEl1.innerHTML="Win"
         statusEl2.innerHTML="Lose"
          statusEl1.style.color="green"
         statusEl2.style.color="red"
}
function playGame(){
    const userMe=getRandomPokemon()
    const userComp=getRandomPokemon()
    const userImg=images[userMe]
    const userCompImg=images[userComp]
    if(userMe=="w" && userComp=="f"){
        imgEl1.src=userImg
        imgEl2.setAttribute("src",userCompImg)
       showMe()
console.log("Me")
    }else if(userMe=="w" && userComp=="f"){
        console.log("Me")
        imgEl1.src=userImg
        imgEl2.setAttribute("src",userCompImg)
        showMe()
    }
    else if(userMe=="f" && userComp=="e"){
        console.log("Me")
        imgEl1.src=userImg
        imgEl2.setAttribute("src",userCompImg)
        showMe()
    }
    else if(userMe==userComp){
        console.log("Drav")
        statusEl1.innerHTML="Draw"
         statusEl2.innerHTML="Draw"
         statusEl2.style.color="blue"
        statusEl1.style.color="blue"
        imgEl1.src=userImg
        imgEl2.setAttribute("src",userCompImg)

    }
    else{
        
        console.log("Comp")
        point2+=1
        imgEl2.src=userCompImg
        pointEl2.innerHTML=point2
        imgEl1.setAttribute("src",userImg)

        statusEl2.innerHTML="Win"
        statusEl1.innerHTML="Lose"
        statusEl2.style.color="green"
        statusEl1.style.color="red"
        
    }
    console.log("playing...")
    console.log("userMe:", userMe,point1)
    console.log("userComp:", userComp,point2)
}
// !  Play duymesine basanda prosesler icra olunmalidi
playBtn.onclick=()=>{
 playGame()
}

