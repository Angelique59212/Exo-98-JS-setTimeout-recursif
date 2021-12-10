let divTime = document.getElementById("timeout-div");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let compteur = 0;


let timeout = ()=> {
    let timeoutId = setTimeout(() => {
        if (compteur <= 10 ) {
            divTime.innerHTML = "Cela fait " + compteur + " minutes";
            compteur++;
            timeout();
        }
    },600000);
    stop.addEventListener("click", ()=> {
        clearTimeout(timeoutId);
    });
};

start.addEventListener("click", timeout);

