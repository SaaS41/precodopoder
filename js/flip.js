const brennuz = document.querySelector('.box-1');
const dominic = document.querySelector('.box-2');
const john = document.querySelector('.box-3');
const junior = document.querySelector('.box-4');
const nerfetaro = document.querySelector('.box-5');
const sora = document.querySelector('.box-6');

brennuz.addEventListener('click', ()=> {
    brennuz.classList.toggle("active");
});

dominic.addEventListener('click', ()=> {
    dominic.classList.toggle("active");
});

john.addEventListener('click', ()=> {
    john.classList.toggle("active");
});

junior.addEventListener('click', ()=> {
    junior.classList.toggle("active");
});

nerfetaro.addEventListener('click', ()=> {
    nerfetaro.classList.toggle("active");
});

sora.addEventListener('click', ()=> {
    sora.classList.toggle("active");
});
