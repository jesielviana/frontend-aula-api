const divPostagens = document.getElementById('postagens');

async function consultaPostagens() {
  const retorno = await fetch('http://localhost/postagens');
  const dados = await retorno.json();
  preencheTela(dados);
}
function preencheTela(dados) {
  dados.forEach((postagem) => {
    const html = `<div class="postagem">
    <h3>${postagem.titulo}</h3>
    <p class="texto">${postagem.texto}</p>
    <sapn class="data">Publicado em: ${postagem.dataAlteracao}</span>
    </div>`;
    divPostagens.innerHTML = divPostagens.innerHTML + html;
  });
}
consultaPostagens();
