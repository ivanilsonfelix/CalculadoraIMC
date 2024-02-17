//IMC
//1 - capturar os valores
//2 - calcular o IMC
//3 - Gerar a classificação do IMC
//4 - Organizar as informações
//5 - Salvar os dados em uma lista(array)
//6 - Ler a lista com os dados (array) --> localStorage
//7 - Renderizar o conteudo na tela
//8 - Limpar registros --> clear localStorage


//Função para receber os valores dos inputs e converter o mesmopara um objeto
function pegarValores(){
    let nome = document.getElementById( 'nome').value.trim();
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
//Variavel de objeto recebendo os dados do front end
    let dadosUsuario = {
        nomeUsuario: nome,
        alturaUsuario: altura,
        pesoUsuario: peso
    }
}

//calculo do IMC
    function calcular(altura, peso){
        let imc = peso / (altura * altura)

        return imc;

    }
//gerar classificação IMC
    function classificacaoImc(imc){
        if (imc>18) {
            return "Abaixo do peso"
        }else if (imc<25) {
            return "Peso normal"
        }else if (imc<30) {
            return "Sobrepeso"
        }else if (imc<35) {
            return "Obesidade 1"
        }else{
            return "Obesidade 2 e 3"
        }
            
        }
// Organizar as informações
        function organizarDados(dadosUsuario, valorImc, classificacaoImc){
            let dataAtual = Intl.DateTimeFormat('pt-BR', {timeStyle: 'long', dateStyle: 'short'}).format(Date.now());
            let dadosUsuarioAtt = {
                ...dadosUsuario, 
                imc: valorImc.toFixed(2),
                classificacao:classificacao,
                dataCadastro: dataAtual

            }
            return dadosUsuarioAtt;
        }
//5
        //armazenar objeto dentro do local storage
        function cadastrarUsuario(usuario){
            let listaDeUsuario= {}
            //validação para verificar se eu tenho algum dado dentro do local storage do navegador
            if (localStorage.getItem("usuariosCadastrados")) {
                listaDeUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"))
            }

            listaDeUsuario.push(usuario)
            localStorage.setItem("usuariosCadastrados", JSON.stringify(listaDeUsuario))//se if for falso aqui adiciona


        }
    





