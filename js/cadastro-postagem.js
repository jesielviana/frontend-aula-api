// Captura o click do botão salvar
const btn = document.getElementById('salvar');
btn.onclick = () => {
  const postagem = getDadosFormulario();
  enviarDadosParaAPI(postagem);
};
const tituloInput = document.getElementById('titulo');
const textoInput = document.getElementById('texto');
const autorInput = document.getElementById('autor');
// Pegar os dados do formulário
function getDadosFormulario() {
  const postagem = {};
  postagem.titulo = tituloInput.value;
  postagem.texto = textoInput.value;
  postagem.autor = autorInput.value;
  return postagem;
}
// Enviar os dados para a API 
async function enviarDadosParaAPI(postagem) {
  const resposta = await fetch('http://localhost/postagens', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postagem)
  });
  if (resposta.status === 201) {
    const [divMsg] = document.getElementsByClassName('msg');
    divMsg.style.backgroundColor = 'green';
    divMsg.innerHTML = '<p>Post adicionado com sucesso!</p>'
    limparForm()
  }
}


function limparForm() {
  tituloInput.value = '';
  textoInput.value = '';
  autorInput.value = '';
}