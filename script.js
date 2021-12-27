window.onload = function () {
  let input = document.querySelector('#text-input');
  input.addEventListener('keyup', insereTexto);
  let texto = document.querySelector('#meme-text');

  function insereTexto() {
    texto.innerHTML = input.value;
  }
};
