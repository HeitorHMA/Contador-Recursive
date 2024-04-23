const userSubmit = document.querySelector("#userSubmit");
userSubmit.addEventListener("click",function(){
    const userInput = document.querySelector("#userInput").value;
    contadorRecursive(userInput)
});
function contadorRecursive (n){
    if(n <= 0){
        console.log("Uhuul Terminou!")
        return
    }
    else{
    
    console.log(n)
    contadorRecursive(n-1)
    }
}