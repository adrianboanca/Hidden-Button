function selectWinner() {
    let RandomNumber = Math.floor((Math.random() * 3) + 1);

    if(RandomNumber == 1){
        alert("Congratulations, You have won!")
    } else {
        alert("Unfortunately, You have lost!")
    }
}