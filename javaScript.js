let rows= 4;
let columns =4;
let score =0;

window.onload = function(){
    startGame();
}

function startGame(){
    let arr=[
        [0,0,8,0],
        [0,2,0,0],
        [0,0,4,0],
        [32,0,0,0]
    ]

    for(let i=0 ;i<rows;i++){
        for(let j=0; j<columns; j++){
            let element= document.createElement('div')
            // console.log(arr[i][j])
            let num =arr[i][j]
            //  element.innerText=num
            updateElement(element,num)
            element.classList.add('element')
            document.querySelector('.box').append(element)
        }
    }
}

function updateElement(element,num){

    element.classList.value=''
    element.innerText=''

    if(num>0){
    element.innerText=num
    element.classList.add(`e${num}`)
      
    }

}




