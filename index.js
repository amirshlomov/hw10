let batman=document.getElementById('summ');

let amount=0;

function add(){
    amount=amount+1;
    batman.innerHTML=amount;
}

function take(){
    amount=amount-1;
    if (amount < 0) {
        alert("אתה לא יכול להכנס למינוס");
    }
    else {
        batman.innerHTML=amount;
    }
}


function zero(){
    amount=amount*0;
    batman.innerHTML=amount;
}
