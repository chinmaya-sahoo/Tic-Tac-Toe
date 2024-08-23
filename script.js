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

function restart(){
    box.forEach(element => {
        console.log(element.classList)
        element.className = 'box';
    });
    const outDiv = document.querySelector('.outDiv');
    if (outDiv) {
        outDiv.remove(); // Remove the winning/draw message
    }
   
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
    document.body.insertAdjacentHTML('afterbegin', `
        <div class="outDiv"> 
            <h3>Cross Wins! Try Playing a New Game</h3>
        </div>
    `);
}

function circleWin(){
    document.body.insertAdjacentHTML('afterbegin', `
        <div class="outDiv"> 
            <h3>Circle Wins! Try Playing a New Game</h3>
        </div>
    `);
}

function draw(){
    document.body.insertAdjacentHTML('afterbegin', `
        <div class="outDiv"> 
            <h3>Match Draw! Try Playing a New Game</h3>
        </div>
    `);
}

const button  = document.querySelector('button');
button.addEventListener('click',()=>{
    count = 0;
    restart();
})

start();