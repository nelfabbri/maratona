function pesquisar() {
    // Função responsável por realizar a pesquisa e exibir os resultados na página.
    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Verifica se a seção foi encontrada no DOM.
  
    let resultados = "";
  
    // Itera sobre os dados da pesquisa e constrói o HTML para cada resultado.
    // A variável 'dado' representa cada item da lista de resultados.
    for (let dado of dados) {
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
  
    // Atribui o HTML gerado à seção de resultados.
    section.innerHTML = resultados;
  }
  // console.log(dados); // Linha usada para depuração, pode ser removida após o desenvolvimento.