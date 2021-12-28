window.onload = function () {
  //! Requisito 1

  let inputText = document.querySelector('#text-input');
  inputText.addEventListener('keyup', insereTexto);

  function insereTexto() {
    let texto = document.querySelector('#meme-text');
    texto.innerHTML = inputText.value;
  }

  //!Requisito 2
  // new FileReader() - pega todos os arquivos 'selecionados' <input type="file"> (arquivos de leitura)
  //  x.onload - transforma os arquivos - da pra trabalhar com eles
  // x.result - é o arquivo (caminho) em si, selecionado no input
  // x.readAsDataURL(x.files[0]) - tras o caminho do arquivo em si

  let inputImagem = document.querySelector('#meme-insert');
  inputImagem.addEventListener('change', selecionarImagem);

  function selecionarImagem(parametro) {
    let criaImg = document.querySelector('#meme-image');
    let objeto = new FileReader();
    let referencia = parametro.target;
    objeto.onload = function () {
      let resultado = objeto.result;
      criaImg.src = resultado;
    };
    objeto.readAsDataURL(referencia.files[0]);
  }

  //! Requisito 6
  let container = document.querySelector('#meme-image-container');

  let botaoFire = document.querySelector('#fire');
  botaoFire.addEventListener('click', bordarFire);
  function bordarFire() {
    container.style.border = '3px dashed red';
  }

  let botaoWater = document.querySelector('#water');
  botaoWater.addEventListener('click', bordaWater);
  function bordaWater() {
    container.style.border = '5px double blue';
  }

  let botaoEarth = document.querySelector('#earth');
  botaoEarth.addEventListener('click', bordaEarth);
  function bordaEarth() {
    container.style.border = '6px groove green';
  }

  //! Requisito 7

  let meme1 = document.querySelector('#meme-1');
  meme1.addEventListener('click', function () {
    let imagem = document.querySelector('#meme-image');
    imagem.src = './imgs/meme1.png';
  });

  let meme2 = document.querySelector('#meme-2');
  meme2.addEventListener('click', function () {
    let imagem = document.querySelector('#meme-image');
    imagem.src = './imgs/meme2.png';
  });

  let meme3 = document.querySelector('#meme-3');
  meme3.addEventListener('click', function () {
    let imagem = document.querySelector('#meme-image');
    imagem.src = './imgs/meme3.png';
  });

  let meme4 = document.querySelector('#meme-4');
  meme4.addEventListener('click', function () {
    let imagem = document.querySelector('#meme-image');
    imagem.src = './imgs/meme4.png';
  });
};
