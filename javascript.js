let count = document.querySelector('.value');
let increment = document.querySelector('.plus');
let decrement = document.querySelector('.minus');


let c=0;
increment.addEventListener('click', ()=>{
    c++;
    count.innerHTML = c;
});
decrement.addEventListener('click', ()=>{
    c--;
    if(c<0)
        c=0;
    count.innerHTML=c;
});
