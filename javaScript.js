let arr;
let rows= 4;
let columns =4;
let score =0;
let tryleft = true;
let tryRight = true;
let tryUp = true;
let tryDown = true;

window.onload = function(){
    startGame();
  
    
    
}



function startGame(){
     arr=[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]


    // touchDevice()


    let newGame= document.getElementById('new-game');
    newGame.addEventListener("click",()=>{location.reload()})

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

// function moveLeft(){
//     for(let i=0; i<4; i++){
//         for(let j=1; j<4; j++){
//             if(arr[i][j]!=0){
//                 let z=j

//                 while(z>0 && arr[i][z-1]==0){
//                     arr[i][z-1]=arr[i][z]
//                     arr[i][z]=0
//                      z--
//                             }

//                 if(z>0  && arr[i][z]==arr[i][z-1]){
//                     tryleft =true
//                     arr[i][z-1]*= 2
//                     score += arr[i][z-1]
//                     arr[i][z]=0
//                 }
//                 tryleft =false

//             }
//         }
//     }
// }



function moveLeft(){
    for(let i=0 ;i<rows;i++){
     let row= arr[i]   // 0 2 0 2
    row= filtterZero(row)  //2 2
     for(let x=0 ;x<row.length-1;x++){  // 4    
      if(row[x] == row[x+1]){
         tryleft =true
        row[x] *= 2;
         score += row[x]
        row[x+1]=0;
            }  
         tryleft =false
 
     }
    row= filtterZero(row)     
    while(row.length<4) {
          row.push(0) }
   arr[i]=row
    } 

    console.log('left-----')
}



function moveRight(){
    for(let i=0 ;i<rows;i++){
     let row= arr[i]   
    row= filtterZero(row)  

     for(let x=row.length-1 ;x>=0;x--){  
      if(row[x] == row[x+1]){
        tryRight =true
        row[x+1] *= 2;
        score += row[x+1]
        row[x]=0;
       }
       tryRight =false

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
        tryUp =true
                y[x] *= 2;
        score += y[x]

                y[x+1] = 0;
            }
        tryUp =false
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
        tryDown =true
              y[x] *= 2;
        score += y[x]
              y[x+1]= 0;
             }
        tryDown =false

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

// function moveRight(){
    

// for(let i=0;i<4;i++) {
//     for (let j=2;j>=0;j--) {
//       if(arr[i][j]!=0) {
//         let z=j;
//         while(z<3&&arr[i][z+1]==0) {
//           arr[i][z+1]=arr[i][z];
//           arr[i][z]=0;
//           z++;
//         }
//           if(z<3&&arr[i][z]==arr[i][z+1]) {
//             arr[i][z+1]*=2;
            
//               arr[i][z]=0;
//         }
//       }
//     }
//   }
// }




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
    // setTwo()
    console.log(arr)
   
}

if (event.code == 'ArrowRight'){
    console.log('righttttttt')
    moveRight()
    // setTwo()
    console.log(arr)

}

if (event.code == 'ArrowUp'){
    console.log('Uppp')
    moveUp()
    // setTwo()
    console.log(arr)
}

if (event.code == 'ArrowDown'){
    console.log('Down')
    moveDown()
    // setTwo()
    console.log(arr)
}

let scoreNum =document.querySelector('.score-num')
console.log(scoreNum)

scoreNum.innerText=score
//console.log('the score is'+score)
GameOver()

for(let i=0 ;i<rows;i++){
    for(let j=0; j<columns; j++){
     let  ele= document.getElementById(i+'-'+j) 
     let num =arr[i][j]
        updateElement(ele,num) 
        
        
    }}

    setTwo()

  // won game   
   let YouWinBox= document.querySelector('.win-box')
   let CancelButton= document.querySelector('.cancel')
   
   CancelButton.addEventListener("click",()=>{
       YouWinBox.classList.add('none')
   })
    
   let newe= document.querySelector('.new-games')
   newe.addEventListener("click",()=>{
   location.reload()
})

// lost Game
let YouloseBox= document.querySelector('.lose-box')
console.log(YouloseBox)

let CancelLoseBtn= document.querySelector('.cancel-lose')
CancelLoseBtn.addEventListener("click",()=>{
         YouloseBox.classList.add('none')
    })

    let news= document.querySelector('.neww-games')
   news.addEventListener("click",()=>{
   location.reload()
})
})

function setTwo() {
    if (!hasEmptyTile()) {
        return;
    }
    while (true) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
      
        if (arr[r][c] == 0) {
          
          if (r+c==4)
          arr[r][c] = 2+2;

            else
            arr[r][c] = 2;

            let tile = document.getElementById(r+ "-" + c);
            tile.innerText = 2;
            tile.classList.add("e2");
           break;
        }
    }
}

function hasEmptyTile() {
    let count = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (arr[r][c] == 0) { 
                return true;
            }
        }
    }
    return false;
}


let maxx=0;

function GameOver(){
   // let game =true;
   

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
        
            if(arr[r][c]>maxx){
                maxx= arr[r][c]
            }

            if(!hasEmptyTile() && !ContinueTheGame()){
                let YouloseBox= document.querySelector('.lose-box')
                YouloseBox.classList.remove('none')
                // location.reload()
            }
        }
    }
  
     if(maxx == 2048  ){
   let YouWinBox= document.querySelector('.win-box')
       YouWinBox.classList.remove('none')
      
    }

}

function ContinueTheGame(){

    if( tryDown  || tryRight  || tryUp  || tryleft ){
          return true
    }

    return false
}






//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////



// function touchDevice(){

//     let touchArea = document.getElementById("box");
// let output = document.getElementById("output");

// //Initial mouse X and Y positions are 0

// let mouseX,
//   initialX = 0;
// let mouseY,
//   initialY = 0;
// let isSwiped;

// //Events for touch and mouse
// let events = {
//   mouse: {
//     down: "mousedown",
//     move: "mousemove",
//     up: "mouseup",
//   },
//   touch: {
//     down: "touchstart",
//     move: "touchmove",
//     up: "touchend",
//   },
// };

// let deviceType = "";

// //Detect touch device

// const isTouchDevice = () => {
//   try {
//     //We try to create TouchEvent (it would fail for desktops and throw error)
//     document.createEvent("TouchEvent");
//     deviceType = "touch";
//     return true;
//   } catch (e) {
//     deviceType = "mouse";
//     return false;
//   }
// };

// //Get left and top of touchArea
// let rectLeft = touchArea.getBoundingClientRect().left;
// let rectTop = touchArea.getBoundingClientRect().top;

// //Get Exact X and Y position of mouse/touch
// const getXY = (e) => {
//   mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
//   mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
// };

//  isTouchDevice();

// //Start Swipe
// touchArea.addEventListener(events[deviceType].down, (event) => {
//   isSwiped = true;
//   //Get X and Y Position
//   getXY(event);
//   initialX = mouseX;
//   initialY = mouseY;
// });

// //Mousemove / touchmove
// touchArea.addEventListener(events[deviceType].move, (event) => {
// //   if (!isTouchDevice()) {
// //     // event.preventDefault();
// //   }
//   if (isSwiped) {
//     getXY(event);
//     let diffX = mouseX - initialX;
//     let diffY = mouseY - initialY;
//     if (Math.abs(diffY) > Math.abs(diffX)) {
//       output.innerText = diffY > 0 ? moveDown() : moveUp();
//     } else {
//       output.innerText = diffX > 0 ? moveRight() :     moveLeft();
//       ;
//     }


//     let scoreNum =document.querySelector('.score-num')
//     console.log(scoreNum)
    
//     scoreNum.innerText=score
//     //console.log('the score is'+score)
//     GameOver()
//     setTwo()
//     for(let i=0 ;i<rows;i++){
//         for(let j=0; j<columns; j++){
//          let  ele= document.getElementById(i+'-'+j) 
//          let num =arr[i][j]
//             updateElement(ele,num) 
            
            
//         }}
    
        
//       // won game   
//        let YouWinBox= document.querySelector('.win-box')
//        let CancelButton= document.querySelector('.cancel')
       
//        CancelButton.addEventListener("click",()=>{
//            YouWinBox.classList.add('none')
//        })
        
//        let newe= document.querySelector('.new-games')
//        newe.addEventListener("click",()=>{
//        location.reload()
//     })
    
//     // lost Game
//     let YouloseBox= document.querySelector('.lose-box')
//     console.log(YouloseBox)
    
//     let CancelLoseBtn= document.querySelector('.cancel-lose')
//     CancelLoseBtn.addEventListener("click",()=>{
//              YouloseBox.classList.add('none')
//         })
    
//         let news= document.querySelector('.neww-games')
//        news.addEventListener("click",()=>{
//        location.reload()
//     })


//   }
// });

// //Stop Drawing
// touchArea.addEventListener(events[deviceType].up, () => {
//   isSwiped = false;
// });

// touchArea.addEventListener("mouseleave", () => {
//   isSwiped = false;
// });

// window.onload = () => {
//   isSwiped = false;
// };

// }