let arr;
let rows= 4;
let columns =4;
let score =0;

window.onload = function(){
    startGame();
}

function startGame(){
     arr=[
        [8,0,8,0],
        [0,2,0,2],
        [2,4,4,8],
        [32,0,0,0]
    ]

    for(let i=0 ;i<rows;i++){
        for(let j=0; j<columns; j++){
            let element= document.createElement('div')
            // console.log(arr[i][j])
            let num =arr[i][j]
            //  element.innerText=num
            element.classList.add('element')
            element.id=i+'-'+j;
            updateElement(element,num)
          
            document.querySelector('.box').append(element)
        }
    }
}

function updateElement(element,num){
    element.innerText=''
    element.classList.value=''
    
    element.classList.add('element')
    if(num>0){
    element.innerText=num
    element.classList.add(`e${num}`)
      
    }
    

}
function filtterZero(row){
  return  row.filter(num => num != 0)
}



///////////////////////////////////// move left



function moveLeft(){
    for(let i=0 ;i<rows;i++){
     let row= arr[i]   // 0 2 0 2
    console.log(row)
     
    row= filtterZero(row)  //2 2
     console.log(row);


     for(let x=0 ;x<row.length-1;x++){  // 4    
      if(row[x] == row[x+1]){
        console.log(' x '+ row[x])
      console.log( 'x+1 '+ row[x+1])
        row[x] *= 2;
        row[x+1]=0;
        // console.log(row)   
        // score += row[i]    
    }   
     }

    row= filtterZero(row)     
   // console.log(row)
  //  console.log(row.length)
    while(row.length<4) {
          row.push(0) }
     
    console.log(row)
    // return row;

   arr[i]=row
    } 
}

function moveRight(){
    for(let i=0 ;i<rows;i++){
     let row= arr[i]   // 0 2 0 2
    console.log(row)
     
    row= filtterZero(row)  //2 2
     console.log(row);


     for(let x=0 ;x<row.length-1;x++){  // 4    
      if(row[x] == row[x+1]){
        console.log(' x '+ row[x])
      console.log( 'x+1 '+ row[x+1])
        row[x+1] *= 2;
        row[x]=0;
        // console.log(row)   
        // score += row[i]    
    }   
     }


    row= filtterZero(row)     
   // console.log(row)
  //  console.log(row.length)
    while(row.length<4) {
          row.unshift(0)}
     
    console.log(row)
    // return row;

   arr[i]=row
    } 
}



//////////////////////////////////////////



document.addEventListener('keyup' ,(event)=>{
  
if (event.code == 'ArrowLeft'){
    console.log('leftttttt')
    moveLeft();
   
}

if (event.code == 'ArrowRight'){
    moveRight()
    console.log('righttttttt')
}

if (event.code == 'ArrowUp'){
    console.log('Uppp')
}

if (event.code == 'ArrowDown'){
    console.log('Down')
}
for(let i=0 ;i<rows;i++){
    for(let j=0; j<columns; j++){
     let  ele= document.getElementById(i+'-'+j)
     let num =arr[i][j]
        updateElement(ele,num)
    }}

})





