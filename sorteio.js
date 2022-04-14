//SELECIONAR AS TAGS
//INTERCEPTAR O CLICK NO BOTAO
//PEGAR AS INFORMAÇÕES QUE ESTAO DENTRO DO CAMPO

const btnSortear = document.querySelector(".botaoSortear")
const textarea = document.querySelector("textarea")
const tagResultado = document.querySelector(".resultado p")
const popUpResultado = document.querySelector(".resultado")
const btnFechar = document.querySelector(".fechar")



//PEGANDO DADOS DO FORMULARIO
function dadosformulario(){
  
    //RECUPERANDO VALOR DO CAMPO
    const valorCampo = textarea.value
    const listaNomes= valorCampo.split(",")
    const tamanhoArray=listaNomes.length
    const posicaoNome = numeroAleatorio(tamanhoArray)
    const nome = (listaNomes[posicaoNome])
    mostrarResultado(nome)

    textarea.value = ""

}

//INTERCEPTANDO CLICK E EXECUTANDO FUNÇÃO
btnSortear.addEventListener("click",dadosformulario)

 

function numeroAleatorio(tamanhoArray){

    return  Math.floor(Math.random()*(tamanhoArray - 0)+0)

} 

function mostrarResultado(nome){

    tagResultado.innerText= `Resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")
}

function fecharPopup(){
    popUpResultado.classList.remove("mostrarResultado") 
}
btnFechar.addEventListener("click", fecharPopup)
