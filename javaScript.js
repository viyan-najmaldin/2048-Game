let arr;
let rows= 4;
let columns =4;
let score =0;

window.onload = function(){
    startGame();
}


function startGame(){
     arr=[
        [0,0,0,0],
        [0,0,0,0],
        [4,4,2,2],
        [4,4,2,2]
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
    
   setTwo()
   setTwo()
}

function updateElement(element,num){
    element.innerText=''
    element.classList.value=''
    element.classList.add('element')
    
    if(num>0){
    element.innerText=num
    element.classList.add(`e${num}`)
    element.classList.add('smooth')
    element.classList.add('unsmooth')
    }

}
function filtterZero(row){
  return  row.filter(num => num != 0)
}



///////////////////////////////////// move left

function moveLeft(){
    for(let i=0; i<4; i++){
        for(let j=1; j<4; j++){
            if(arr[i][j]!=0){
                let z=j

                while(z>0 && arr[i][z-1]==0){
                    arr[i][z-1]=arr[i][z]
                    arr[i][z]=0
                     z--
                            }

                if(z>0  && arr[i][z]==arr[i][z-1]){
                    arr[i][z-1]*= 2
                    score += arr[i][z-1]
                    arr[i][z]=0
                }
            }
        }
    }
}



// function moveLeft(){
//     for(let i=0 ;i<rows;i++){
//      let row= arr[i]   // 0 2 0 2
//     row= filtterZero(row)  //2 2
//      for(let x=0 ;x<row.length-1;x++){  // 4    
//       if(row[x] == row[x+1]){
//         row[x] *= 2;
//         row[x+1]=0;
//             }   
//      }
//     row= filtterZero(row)     
//     while(row.length<4) {
//           row.push(0) }
//    arr[i]=row
//     } 
// }



function moveRight(){
    for(let i=0 ;i<rows;i++){
     let row= arr[i]   
    row= filtterZero(row)  

     for(let x=row.length-1 ;x>=0;x--){  
      if(row[x] == row[x+1]){
        row[x+1] *= 2;
        score += row[x+1]
        row[x]=0;
       }   
     }

    row= filtterZero(row)     
    while(row.length<4) {
          row.unshift(0)}
    
   arr[i]=row
    } 
}

function moveUp(){
    for(let i=0 ;i<arr.length;i++){
        let y=[arr[0][i],arr[1][i],arr[2][i],arr[3][i]] 
        y = filtterZero(y) 


        for (let x = 0; x < y.length-1; x++){
            if (y[x] == y[x+1]) {
                y[x] *= 2;
        score += y[x]

                y[x+1] = 0;
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

        for (let x=y.length-1 ;x>=0;x--){  // 4    
            if (y[x] == y[x+1]){
              y[x] *= 2;
        score += y[x]
              y[x+1]= 0;
             }   
           }
      
          y= filtterZero(y)     
          while(y.length<4) {
                y.unshift(0)}         
          
        arr[0][i]= y[0]
        arr[1][i]= y[1]
        arr[2][i]= y[2]
        arr[3][i]= y[3]


    }
}





////////////////////////////////////////


// function moveRight(){
//     for(let i=0; i<4; i++){
//         for(let j=2; j>=0; j--){
//             if(arr[i][j]!=0){
//                 let z=j


//                 while(z<3 && arr[i][z+1]==0){
//                     arr[i][z+1]=arr[i][z]
//                     arr[i][z]=0
//                      z++
//                             }

//                             if(z<3  && arr[i][z]==arr[i][z+1]){
//                                 arr[i][z+1]*= 2
//                                 arr[i][z]=0
//                             }

                
//             }
//         }
//     }
// }


document.addEventListener('keyup' ,(event)=>{
  
if (event.code == 'ArrowLeft'){
    console.log('leftttttt')
    moveLeft();
    setTwo()
    console.log(arr)
   
}

if (event.code == 'ArrowRight'){
    console.log('righttttttt')
    moveRight()
    setTwo()
    console.log(arr)

}

if (event.code == 'ArrowUp'){
    console.log('Uppp')
    moveUp()
    setTwo()
    console.log(arr)
}

if (event.code == 'ArrowDown'){
    console.log('Down')
    moveDown()
    setTwo()
    console.log(arr)
}

let scoreNum =document.querySelector('.score-num')
//console.log(scoreNum)

scoreNum.innerText=score
//console.log('the score is'+score)

for(let i=0 ;i<rows;i++){
    for(let j=0; j<columns; j++){
     let  ele= document.getElementById(i+'-'+j)
     
     let num =arr[i][j]
     
        updateElement(ele,num)
    }}

})
  




function setTwo(){
    // for(let i=0 ;i<rows;i++){
    //     for(let j=0; j<columns; j++){

    //         if(!(arr[i][j]==0)){
              
                let r= Math.floor(Math.random() *4)
                let c= Math.floor(Math.random() *4)
 
                let found = false;
                
                if(arr[r][c]==0){
                  console.log(arr)

                    console.log(r+ ' & ' +c)
                  arr[r][c]=2;
                  let  element = document.getElementById(r+'-'+c)

                  element.innerText= 2;
                   element.classList.add('e2')

                
            }
            // }

            // else return;
        // } }
}




