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
        [2,2,0,2],
        [2,4,4,8],
        [32,4,0,0]
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
    row= filtterZero(row)  //2 2
     for(let x=0 ;x<row.length-1;x++){  // 4    
      if(row[x] == row[x+1]){
        row[x] *= 2;
        row[x+1]=0;
            }   
     }
    row= filtterZero(row)     
    while(row.length<4) {
          row.push(0) }
   arr[i]=row
    } 
}

// function moveLeft(){
//     for(let i=0 ;i<arr.length;i++){
//       let x = filtterZero(arr[i]) 
//            arr[i]= x
//         for(let j=0 ;j<x.length;j++){
//             if(arr[i][j] == arr[i][j+1]){
//                 arr[i][j] *= 2;
//                 arr[i][j+1]=0;
//                 arr[i]=filtterZero(arr[i]) 
//             }        
//             while(arr[i].length<4) {
//                 arr[i].push(0)}
//         }
//     }
// }

function moveRight(){
    for(let i=0 ;i<rows;i++){
     let row= arr[i]   // 0 2 0 2
    row= filtterZero(row)  //2 2

     for(let x=0 ;x<row.length-1;x++){  // 4    
      if(row[x] == row[x+1]){
        row[x+1] *= 2;
        row[x]=0;
       }   
     }

    row= filtterZero(row)     
    while(row.length<4) {
          row.unshift(0)}
     
    // console.log(row)
    // return row;

   arr[i]=row
    } 
}

function moveUp(){
    for(let i=0 ;i<arr.length;i++){
        let y=[arr[0][i],arr[1][i],arr[2][i],arr[3][i]] 
        y = filtterZero(y) 
        for(let x=0 ;x<y.length-1;x++){  // 4    
            if(y[x] == y[x+1]){
              y[x+1] *= 2;
              y[x]=0;
             }   
           }
      
          y= filtterZero(y)     
          while(y.length<4) {
                y.push(0)}         
          
        arr[0][i]= y[0]
        arr[1][i]= y[1]
        arr[2][i]= y[2]
        arr[3][i]= y[3]

    }
}

function moveDown(){
    for(let i=0 ;i<arr.length;i++){
        let y=[arr[0][i],arr[1][i],arr[2][i],arr[3][i]] 
        y = filtterZero(y) 
        for(let x=0 ;x<y.length-1;x++){  // 4    
            if(y[x] == y[x+1]){
              y[x+1] *= 2;
              y[x]=0;
             }   
           }
      
          y= filtterZero(y)     
          while(y.length<4) {
                y.unshift(0)}         
          
        arr[0][i]= y[0]
        arr[1][i]= y[1]
        arr[2][i]= y[2]
        arr[3][i]= y[3]

        //  console.log(arr)

    }
}





//////////////////////////////////////////



document.addEventListener('keyup' ,(event)=>{
  
if (event.code == 'ArrowLeft'){
    console.log('leftttttt')
    moveLeft();
    console.log(arr)
   
}

if (event.code == 'ArrowRight'){
    console.log('righttttttt')
    moveRight()
    console.log(arr)

}

if (event.code == 'ArrowUp'){
    console.log('Uppp')
    moveUp()
    console.log(arr)
}

if (event.code == 'ArrowDown'){
    console.log('Down')
    moveDown()
    console.log(arr)
}
for(let i=0 ;i<rows;i++){
    for(let j=0; j<columns; j++){
     let  ele= document.getElementById(i+'-'+j)
     let num =arr[i][j]
     
        updateElement(ele,num)
    }}

})





