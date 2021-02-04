let intervalo;

function funcaoDaGabi(){
    let texto = "RAINBOW TIME";
    let p = document.createElement('p');
    p.textContent = texto;
    p.addEventListener('mouseenter', randomizeColor.bind(this, p));
    p.addEventListener('mouseleave', stopRandomization);
    document.body.append(p);
}

function randomizeColor(element){
    intervalo = setInterval(() => {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        element.style.color = `rgb(${r}, ${g}, ${b})`;
    }, 100);
}

function stopRandomization(){
    clearInterval(intervalo);
}

funcaoDaGabi();