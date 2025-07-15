let gambar = ["cocacola.png", "golda.png", "yogurt.png"];
let posisi = 0;

function tampilgambar() {
    document.getElementById("slider").src = gambar[posisi];
}

function sesudah() {
    if(posisi < gambar.length - 1){
        posisi++;
        tampilgambar();
    }
}

function sebelum() {
    if(posisi > 0){
        posisi--;
        tampilgambar();
    }
}