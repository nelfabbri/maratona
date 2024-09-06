function pesquisar() {
    // Função responsável por realizar a pesquisa e exibir os resultados na página.
    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(section); // Verifica se a seção foi encontrada no DOM.
  
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Digite um nome ou algo.</p>"
      return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = "";
   
    let titulo ="";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados da pesquisa e constrói o HTML para cada resultado.
    // A variável 'dado' representa cada item da lista de resultados.
    for (let dado of dados) {
       titulo = dado.titulo.toLowerCase()
       descricao = dado.descricao.toLowerCase()
       tags = dado.tags.toLowerCase()
     if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;
     }
       
    }
     if (!resultados) {
         resultados = "<p>Nada foi encontrado</p>"

     }
    // Atribui o HTML gerado à seção de resultados.
    section.innerHTML = resultados;
  }
  // console.log(dados); // Linha usada para depuração, pode ser removida após o desenvolvimento.