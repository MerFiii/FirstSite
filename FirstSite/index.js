const godzina = document.getElementById('godzina');

function time(){
    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

    godzina.innerHTML = `${zero(hour)} : ${zero(min)} : ${zero(sec)}`;
    setTimeout(time, 100);
}

function zero(n){
    return (n <10 ?' 0' : '') +n    
}

time();