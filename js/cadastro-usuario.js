const USUARIOS_URL_API = 'http://localhost/usuarios'
const inputNome = document.querySelector('#nome')
const inputIdade = document.querySelector('#idade')
const butao = document.querySelector('#salvar')

butao.addEventListener('click', () => {
  salvarUsuario()
})

async function salvarUsuario() {
  const usuario = pegaDadosDoUsuario()
  await enviaDadosDoUsuarioParaAPI(usuario)
}

async function enviaDadosDoUsuarioParaAPI(usuario) {
  const resposta = await fetch(USUARIOS_URL_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  })
  if (resposta.status === 201) {
    console.log('Usuário cadastrado com sucesso!')
    window.location.replace('usuarios.html')
  } else {
    console.log(resposta.statusText)
  }
}

function pegaDadosDoUsuario() {
  const usuario = {}
  usuario.nome = inputNome.value
  usuario.idade = inputIdade.value
  return usuario
}
