let musicas =[
    {titulo:'Meu Mundo', artista:'WC no BEAT FT. Mc Cabelinho, PK, Mc Hariel & Orochi', src:'musicas/X2Download.com - independentemente do teu belo visual au au au au - Speed up (128 kbps).mp3',
     img:'img/download.jfif'},
    {titulo:'Pacify her x Jealousy (mashup)', artista:'Melanie Martinez & Olivia Rodrigo', src:'musicas/X2Download.com - pacify her x jealousy (mashup) - speed up (128 kbps).mp3', 
     img:'img/borboleta.jfif'},
];

let musica = document.querySelector('audio');


let duracaoMusica = document.querySelector('.fim');
duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
function duration(){
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(currentSong.duration));
}

let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');
let indexMusica = 0;

renderizarMusica(indexMusica);

//Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica<0){
        indexMusica = 1;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica>1){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () =>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.scr = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}
function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector ('progress');
    barra.style.width = Math.floor ((musica.currentTime / musica.duration) * 100 )+ '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinuto = Math.floor(segundos / 60);
    let campoSegundo = segundos % 60;
    if (campoSegundo < 10){
        campoSegundo = '0' + campoSegundo;
    }

    return campoMinuto+ ':' +campoSegundo;
}

