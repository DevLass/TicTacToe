let boxes = document.querySelectorAll('.box');
let popup = document.querySelector('.popup');
let winner = document.querySelector('.winner');
let cross = document.querySelector('.cross');
cross.addEventListener('click',()=>{
    location.reload();
})
let turn = "O";
function changeturn() {
    if (turn == "O") {
        turn = "X";
    } else {
        turn = "O";
    }
    return turn;
}
let probab = ['0,1,2', '3,4,5', '6,7,8', '0,4,8', '2,4,6', '0,3,6', '1,4,7', '2,5,8'];
let clickedindex = 0;
boxes.forEach((element, index) => {
    element.addEventListener('click', () => {

        element.classList.add("flip-animation");
        setTimeout(function(){
            element.innerHTML = changeturn();
            clickedindex++;
            probab.forEach(element => {
                let newarray = [];
                newarray = element.split(',');
                if (boxes[newarray[0]].innerHTML != "" && boxes[newarray[1]].innerHTML != "" && boxes[newarray[2]].innerHTML != "") {
                    if (boxes[newarray[0]].innerHTML == boxes[newarray[1]].innerHTML && boxes[newarray[0]].innerHTML == boxes[newarray[2]].innerHTML) {
                        popup.style.transform = `scale(1)`;
                        popup.style.transitionDuration =`0.3s`;
                        winner.innerHTML = turn + ` Won`;
                    }else if(clickedindex==9 && popup.style.transform!=`scale(1)`){
                        popup.style.transform = `scale(1)`;
                        popup.style.transitionDuration =`0.3s`;
                        winner.innerHTML = `Draw`;
                    }
                }
            })
            if (element.innerHTML == "X") {
                element.style.backgroundColor = "#FB2576";
                element.style.color = "white";
            }
            }, 250);
        
        
    }, { once: true });
})
