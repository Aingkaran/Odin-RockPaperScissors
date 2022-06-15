function computerPlay(){
    let randomnumb = Math.floor(Math.random() * 9);
    console.log(randomnumb)
    if (randomnumb<=2){
        console.log("Rock")
    }
        else if (randomnumb<=5){
            console.log("Paper")
        }
        else {
            console.log("Scissors")
        }
    
}