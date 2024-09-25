const input1 = document.getElementById('erro1-checkbox');
const input2 = document.getElementById('erro2-checkbox');
const input3 = document.getElementById('erro3-checkbox');
const input4 = document.getElementById('erro4-checkbox');
const input5 = document.getElementById('erro5-checkbox');
const input6 = document.getElementById('erro6-checkbox');
const az5 = document.getElementById('botao');
const usinaImg = document.getElementById('usina-image');
const usinaGif = document.getElementById('usina-gif');
const final = document.getElementById('final');

input1.addEventListener('click', ()=>{
    const erro2 = document.getElementById('erro2');

    erro2.classList.toggle('esconder-erros');

    erro2.classList.toggle('fade-in');
});

input2.addEventListener('click', ()=>{
    const erro3 = document.getElementById('erro3');

    erro3.classList.toggle('esconder-erros');

    erro3.classList.toggle('fade-in');
});

input3.addEventListener('click', ()=>{
    const erro4 = document.getElementById('erro4');

    erro4.classList.toggle('esconder-erros');

    erro4.classList.toggle('fade-in');
});

input4.addEventListener('click', ()=>{
    const erro5 = document.getElementById('erro5');

    erro5.classList.toggle('esconder-erros');

    erro5.classList.toggle('fade-in');
});

input5.addEventListener('click', ()=>{
    const erro6 = document.getElementById('erro6');

    erro6.classList.toggle('esconder-erros');

    erro6.classList.toggle('fade-in');
});

input6.addEventListener('click', ()=>{
    const continuacao = document.getElementById('continuacao');

    continuacao.classList.toggle('esconder-erros');

    continuacao.classList.toggle('fade-in');
});

az5.addEventListener('click', ()=>{
    usinaImg.classList.toggle('sumir'); 
    usinaGif.classList.toggle('sumir');

    final.classList.toggle('esconder-erros');

    final.classList.toggle('fade-in');
});
