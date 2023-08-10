function sim() {
    alert("Apenas me escute, por favor!");
    changeDisplay();
    // redireciona para um URL após clicar no SIM
    // location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
}

function desvia(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

function changeDisplay(){
    var container = document.getElementById("conteudo");
    var my_div = document.getElementById("my_test");
    my_div.style.display = 'block';
    container.style.display = 'none';
}
/* Apague se quiser, isso apenas escreve MTHS1901 e o link para o tutorial no console */
const o = "MTHS1901", e = 90, l = "bold"; console.log(`%c${o}`, "font-size: 90px; font-weight: bold; background: linear-gradient(90deg, red, yellow);"), console.log("Tutorial: https://www.youtube.com/watch?v=zxxB9SFh9p4");

