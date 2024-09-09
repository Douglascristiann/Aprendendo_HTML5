//console.log(dados);

function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa =document.getElementById("campo-pesquisa").value

    campoPesquisa = campoPesquisa.toLowerCase()

    if (!campoPesquisa){
        section.innerHTML= "<p>Nada foi encontrado. Digite Antes de pesquisar.</p>"
        return
    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tag = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {

        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tag = dado.tags.toLowerCase()

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa) ){
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.nome} <img src="imagem/${dado.nome}.jpg" alt="Imagem ${dado.nome}" class="logo"></a>
                </h2>
                <p class="descricao-meta"> ${dado.descricao}</p>
                <a href="https://en.wikipedia.org/wiki/${dado.nome}" target="_blank">Saiba mais</a>
            </div>
            `;
        }
    }

    if (!resultados){
        resultados= "<p> Nada foi encontrado. </p>"
    }

    section.innerHTML = resultados;
}