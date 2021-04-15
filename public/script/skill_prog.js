const skilldiv = document.querySelector('#skil-cont');

const setProg = () => {
    document.querySelector('#html').style.width = "85%";
    document.querySelector('#css').style.width = "55%";
    document.querySelector('#scss').style.width = "27%";
    document.querySelector('#ps').style.width = "85%";
    document.querySelector('#xd').style.width = "50%";
    document.querySelector('#js').style.width = "49%";
    document.querySelector('#nodejs').style.width = "29%";
    document.querySelector('#oracle').style.width = "20%";
    document.querySelector('#mongo').style.width = "70%";
    document.querySelector('#c').style.width = "80%";
    document.querySelector('#cp').style.width = "62%";
    document.querySelector('#java').style.width = "70%";
}
const defProg = () => {
    document.querySelector('#html').style.width = "0%";
    document.querySelector('#css').style.width = "0%";
    document.querySelector('#scss').style.width = "0%";
    document.querySelector('#ps').style.width = "0%";
    document.querySelector('#xd').style.width = "0%";
    document.querySelector('#js').style.width = "0%";
    document.querySelector('#nodejs').style.width = "0%";
    document.querySelector('#oracle').style.width = "0%";
    document.querySelector('#mongo').style.width = "0%";
    document.querySelector('#c').style.width = "0%";
    document.querySelector('#cp').style.width = "0%";
    document.querySelector('#java').style.width = "0%";
}

skilldiv.addEventListener('mouseover', setProg);
skilldiv.addEventListener('mouseout', defProg);

skilldiv.addEventListener('touchmove', setProg);
skilldiv.addEventListener('focusin', setProg);



const img = document.querySelector('.my-pic');
img.addEventListener('mouseover', () => {
    document.querySelector('.aboutme').style.width = "26rem";
});
img.addEventListener('mouseout', () => {
    document.querySelector('.aboutme').style.width = "0rem";
});