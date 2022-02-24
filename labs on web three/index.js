let div = document.createElement('div');
let textNode = document.createTextNode('Глупая шутка про табуретку');
let otvet_text;
document.body.append(div);
div.append(textNode);

div.classList.add('dog');
let dog = document.querySelector('.dog')
dog.style.margin = "15px";

function multi(){
    let inp1 = document.getElementById('inp_1').value,
    inp2 = document.getElementById('inp_2').value;

    otvet_text = document.createTextNode(inp1*inp2);
    let otvet = document.createElement('div');
    document.body.prepend(otvet);
    otvet.append(otvet_text);

    otvet.classList.add('block')
    
}




// let java = document.createElement('div');
// let textNodeTwo = document.createTextNode('Более смешная шутка про таблету где мне дадут вознограждения как обещал Данил Дмитриевичь');
// document.body.append(java);
// java.append(textNodeTwo);


// let div_ONE= document.createElement('div');
// let textNodethree = document.createTextNode('Этот текст для CCS');
// document.body.append(div_ONE);
// div_ONE.append(textNodethree);

// div_ONE.classList.add('goose');
// let goose = document.querySelector('.goose');
// goose.style.margin = '50px'