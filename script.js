window.onload = function () {
  //! Requisito 1

  let inputText = document.querySelector('#text-input');
  inputText.addEventListener('keyup', insereTexto);

  function insereTexto() {
    let texto = document.querySelector('#meme-text');
    texto.innerHTML = inputText.value;
  }

  //!Requisito 2

  let inputImagem = document.querySelector('#meme-insert');
  inputImagem.addEventListener('change', selecionarImagem);

  function selecionarImagem(parametro) {
    let criaImg = document.createElement('img');
    criaImg.id = 'meme-image';
    let container = document.querySelector('#meme-image-container');

    //todos os arquivos selecionados
    let objeto = new FileReader();
    let referencia = parametro.target;
    // transforma de leitura para poder mexer
    objeto.onload = function () {
      //endereço da imagem
      let resultado = objeto.result;
      criaImg.src = resultado;
    };
    objeto.readAsDataURL(referencia.files[0]);

    container.appendChild(criaImg);
  }

  //! Requisito 6
  const container = document.querySelector('#meme-image-container');

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
};
