// Captura o click do botão salvar
const btn = document.getElementById('salvar');
btn.onclick = () => {
  const postagem = getDadosFormulario();
  enviarDadosParaAPI(postagem);
};
// Pegar os dados do formulário
function getDadosFormulario () { 
  const postagem = {};
  postagem.titulo = document.getElementById('titulo').value;
  postagem.texto = document.getElementById('texto').value;
  postagem.autor = document.getElementById('autor').value;
  return postagem;
}
// Enviar os dados para a API 
async function enviarDadosParaAPI (postagem) { 
  const resposta = await fetch('https://ifpi-web-nodejs.herokuapp.com/postagens', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postagem)
  });
  if (resposta.status === 200) { 
    const [divMsg] = document.getElementsByClassName('msg');
    divMsg.style.backgroundColor = '#00e600';
    divMsg.innerHTML = '<p>Adicionado com sucesso!</p>'
  }
}
