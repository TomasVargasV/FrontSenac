let banners = ["./img/1.png", "./img/2.png", "./img/3.png"]
let cont = 0

function contador() {
    if(cont < banners.length - 1){
        cont += 1
    } else {
        cont = 0
    }
    document.querySelector("#imgbanner").src = banners[cont]
}

setInterval(contador, 500)