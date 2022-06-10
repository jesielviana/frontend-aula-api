const divUsuarios = document.querySelector('#usuarios')
const USUARIOS_URL_API = 'http://localhost/usuarios'

async function carregaUsuariosDaAPI() {
  const resposta = await fetch(USUARIOS_URL_API)
  const usuarios = await resposta.json()
  preencherTela(usuarios)
}

function preencherTela(usuarios) {
  usuarios.forEach(usuario => {
    const usuarioHTML = `
    <div class="usuario">
    <h3>Nome: ${usuario.nome}</h3>
    <span>Idade: ${usuario.idade}</span>
  </div>`
    divUsuarios.innerHTML = divUsuarios.innerHTML + usuarioHTML
  });
}

carregaUsuariosDaAPI()
