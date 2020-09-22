
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
       
    //document.getElementById("dancinha").innerHTML;
}

function redirecionar(){
    window.open("https://www.youtube.com/")
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = " Passe o mouse aqui!"
    elemento.innerHTML = "Passe o mouse aqui!"
}

function load(){
    alert ("Pagina carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*var nome = "Gabriel, o jogador";
var lista = ["melancia", " banana", " maçã"]
var fruta = {nome:"Melâo", cor:"Amarelo", Gosto:"Docinha"}
var idade = 19;
//alert("Pagina em construção por: " + nome + "a idade de " + idade + " anos");


console.log (lista);
console.log(fruta);
alert(fruta)
lista.push(" uva");
lista.pop();
//alert(nome.replace("jogador", "gamer ") + "falta comprar "  + lista);
*/