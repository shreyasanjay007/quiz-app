const start = document.querySelector('.start')
const qna = document.querySelector('.qna')
const next = document.querySelector('.next')
const score = document.querySelector('.score')
const points = document.querySelector('.points')

let ques = document.querySelector('.ques')
let opt1 = document.querySelector('.opt1')
let opt2 = document.querySelector('.opt2')
let opt3 = document.querySelector('.opt3')
let opt4 = document.querySelector('.opt4')
let options = document.querySelectorAll('.opt')

let index = 0;
let point = 0;

start.addEventListener('click',()=>{
    start.style.display = 'none'
    qna.style.display = 'block'
    next.style.display = 'block'
    loadQuestion(index);
})
// checkAnswer(index);

next.addEventListener('click',()=>{
    index++;
    console.log(index);
    
    if(index<data.length ){
        resetBg(index)
        loadQuestion(index);
    } else{
        next.style.display = 'none'
        qna.style.display = 'none'
        score.style.display = 'block'
        quizOver();
    }
})



function loadQuestion(index){
        ques.innerHTML = `${data[index].q}`;
        opt1.innerHTML = `${data[index].o1}`
        opt2.innerHTML = `${data[index].o2}`
        opt3.innerHTML = `${data[index].o3}`
        opt4.innerHTML = `${data[index].o4}`
        checkAnswer(index)
}

function checkAnswer(index){
    options.forEach((e) => {
   
        e.onclick = ()=>{
            options.forEach(opt => opt.style.backgroundColor = '');

            if(e.innerHTML === `${data[index].copt}`){
            e.style.backgroundColor = 'green';
            point++;
            } else{
                e.style.backgroundColor = 'red'; 
                options.forEach((opt)=>{
                    if(opt.innerHTML === `${data[index].copt}`){
                        opt.style.backgroundColor = 'green';
                    }
                })
            }
       }
});
}

function resetBg(index){
    options.forEach((e)=>{
        if(e.style.backgroundColor === 'green' || e.style.backgroundColor === 'red'){
            e.style.backgroundColor = ''
        }
    })
}

function quizOver(){
    points.innerHTML = `${point}`;
}







