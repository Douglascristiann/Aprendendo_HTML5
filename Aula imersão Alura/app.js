//console.log(dados);

function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa =document.getElementById("campo-pesquisa").value

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let descricao = "";
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {

        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
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
        if (campoPesquisa == ""){
            resultados =`
            <div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/fUQ4rhUZJYiQsas6WD" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/muppetwiki-sesame-street-muppets-elmo-fUQ4rhUZJYiQsas6WD">via GIPHY</a></p>
            `;
        }
    }
    // Cria um título com um link para o dado
    // Adiciona uma descrição
    // Adiciona um link para a Wikipédia
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}