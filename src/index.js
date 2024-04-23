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