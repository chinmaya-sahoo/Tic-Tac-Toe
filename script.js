const nodes = document.querySelector('.container').children
const box = document.querySelectorAll('.box');
// const span = document.createElement('span');
const body = document.querySelector('body');
// console.log(nodes)
// console.log(box)

let count = 0;
function start(){
    box.forEach(element => {
        element.addEventListener('click',() =>{
            if(element.classList == 'box'){
                if(count%2==0){
                    element.classList = 'box cross';
                    count++;
                    check();
                }
                else{
                    element.classList = 'box circle';
                    count++;
                    check();
                }
            }
            
        })
    });
}
start();

function restart(){
    box.forEach(element => {
        console.log(element.classList)
        element.classList = 'box';
    });
    return;
}

function check(){
    // cross wining conditons
    if(box[0].classList == 'box cross' && box[1].classList == 'box cross' && box[2].classList == 'box cross'){
        crossWin();
    }
    else if(box[3].classList == 'box cross' && box[4].classList == 'box cross' && box[5].classList == 'box cross'){
        crossWin();
    }
    else if(box[6].classList == 'box cross' && box[7].classList == 'box cross' && box[8].classList == 'box cross'){
        crossWin();
    }
    else if(box[0].classList == 'box cross' && box[3].classList == 'box cross' && box[6].classList == 'box cross'){
        crossWin();
    }
    else if(box[1].classList == 'box cross' && box[4].classList == 'box cross' && box[7].classList == 'box cross'){
        crossWin();
    }
    else if(box[2].classList == 'box cross' && box[5].classList == 'box cross' && box[8].classList == 'box cross'){
        crossWin();
    }
    else if(box[0].classList == 'box cross' && box[4].classList == 'box cross' && box[8].classList == 'box cross'){
        crossWin();
    }
    else if(box[2].classList == 'box cross' && box[4].classList == 'box cross' && box[6].classList == 'box cross'){
        crossWin();
    }
    
    // circle wining conditons
    
    else if(box[0].classList == 'box circle' && box[1].classList == 'box circle' && box[2].classList == 'box circle'){
        circleWin();
    }
    else if(box[3].classList == 'box circle' && box[4].classList == 'box circle' && box[5].classList == 'box circle'){
        circleWin();
    }
    else if(box[6].classList == 'box circle' && box[7].classList == 'box circle' && box[8].classList == 'box circle'){
        circleWin();
    }
    else if(box[0].classList == 'box circle' && box[3].classList == 'box circle' && box[6].classList == 'box circle'){
        circleWin();
    }
    else if(box[1].classList == 'box circle' && box[4].classList == 'box circle' && box[7].classList == 'box circle'){
        circleWin();
    }
    else if(box[2].classList == 'box circle' && box[5].classList == 'box circle' && box[8].classList == 'box circle'){
        circleWin();
    }
    else if(box[0].classList == 'box circle' && box[4].classList == 'box circle' && box[8].classList == 'box circle'){
        circleWin();
    }
    else if(box[2].classList == 'box circle' && box[4].classList == 'box circle' && box[6].classList == 'box circle'){
        circleWin();
    }
    
    // draw condition 
    else if(count == 9){
        draw();
    }
}

function crossWin(){
    body.innerHTML = body.innerHTML +  `<div class="outDiv">  <h3>Cross Wins Try Playing New Game</h3></div>
    <button>Restart</button>` ;
    return;
}

function circleWin(){
    document.body.innerHTML += `<div class="outDiv"> <h3>circle Wins Try Playing New Game</h3></div>
    <button>Restart</button>` ;
    return;
}

function draw(){
    document.body.innerHTML += `<div class="outDiv"> <h3>Match draw Try Playing New Game</h3></div>
    <button>Restart</button>` ;
    return;
}

const button  = document.querySelector('button');
button.addEventListener('click',()=>{
    restart();
    count = 0;
})

button.addEventListener('click',()=>{
    
});