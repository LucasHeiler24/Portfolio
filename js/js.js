const nome = document.getElementById("nome"); //crio uma constante pegando meu nome

(function () { //crio uma função anonima
    const texto = nome.textContent; //pego a constante nome feita e armazeno em uma nova constante para poder modificala

    const letras = texto.split(""); //divido meu nome em partes, dividindo uma por uma as letras do meu nome, usando o split() feito para separar em um array

    nome.textContent = ""; //limpo meu h1 para não aparecer de primeiro momento

    letras.forEach((ltr, i) => { //uso um foreach que vai interar sobre cada letra criando uma função anonima sendo o ltr as minhas letras e o i que é a posição da letra
        setTimeout(() => { //utilizo o comando setTimeout() que serve para intervalo de tempo 
            nome.textContent += ltr; //aqui eu pego meu h1 e mostro a letra, sendo uma concatenação
        }, 100 * i); //o 100 é o intervalo de tempo que quero que dura a palavra vezes o i sendo a posição de cada caractere
    });
})();

function html() {
    var tituloHab = "HTML5";
    var textoHab = "/*Ela é linguagem de marcação de hipertexto, usada para estruturar sites utilizando tags." + "\n" + "Comas tags eu organizo os conteúdos que são inseridos no site, que podem ser palavras, imagens,vídeos, etc. Ou seja, ela não é uma linguagem de programação, pois ela é estática e não consegue-se criar funcionalidades dinâmicas, como fazemos com JavaScript, por exemplo.*/";

    document.getElementById("js-titulo").textContent = tituloHab;
    document.getElementById("js-texto").textContent = textoHab;
}
function css() {
    var tituloHab = "CSS3";
    var textoHab = "/*Ela é linguagem de estilo em cascata, usada para deixar o HTML mais bonito."+ "\n" + "Assim como o HTML5 ela possui elementos para estilizar o site, onde faz a representação visual da página, sendo cores, posicionamento, tamanhos, etc." + "\n" + "Ela também não é uma linguagem de programação, pois ela é estática e não consegue-se criar funcionalidades dinâmicas.*/";

    document.getElementById("js-titulo").textContent = tituloHab;
    document.getElementById("js-texto").textContent = textoHab;
}
function js() {
    var tituloHab = "JavaScript";
    var textoHab = "/*Ela é linguagem de programação, sendo utilizada na criação dinâmica e interativa nos sites, sendo capaz de gerar programas que dão a vida para o site, como gerar cálculos, fazer gráficos, validações na parte do cliente, animar imagens." + "\n" + "O JavaScript possui também muitas expansões como a biblioteca jQuery, React.js, etc, onde cada uma delas possui comandos únicos." + "\n" + "Hoje o JavaScript serve também para trabalhar com lado servidor, conhecido como o node.js.*/";

    document.getElementById("js-titulo").textContent = tituloHab;
    document.getElementById("js-texto").textContent = textoHab;
}

function abrirMenu() {
    var menu = document.getElementById("menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}