console.log("Hallo Welt!")
/*
    //to select the Katze in Console with JS
    document.querySelector("#katze")

    //to select the Herz above the Katze and set the Style Display to block
    document.querySelector("#herz").style.display = "block"

*/
i = 0;
const zaehler = document.querySelector(".zaehler");
const katze = document.querySelector(".katze");
const herz = document.querySelector(".herz");
const besen = document.querySelector("#besen");

function zeigHerz() {
    miau();
    console.log("zeigHerz");
    herz.style.display = "block";
    i++;
    updateZaehler();
}

function verschwindeHerz(e){
    e.stopPropagation();
    console.log("verschwindeHerz");
    herz.style.display = "none";
}

function updateZaehler(){
    zaehler.textContent = i;
}

function miau(){
    new Audio("mp3/mew.mp3").play();
}

let delta = 10;

function bewegeBesen()
{
    const bpos = besen.getBoundingClientRect();
    console.log(bpos)
    besen.style.left = '$(rect.left + delta)px'
}

katze.addEventListener("click", zeigHerz);
herz.addEventListener("click", verschwindeHerz);
besen.addEventListener("click", bewegeBesen);