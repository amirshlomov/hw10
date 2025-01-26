let batman=document.getElementById('summ');

let amount=0;

function checkOverDraft(amount) {
    let warning=document.getElementById('warning');

    if (amount < 0) {
        warning.innerHTML = "אתה במינוס!";
    }
    else {
        warning.innerHTML = "";
    }
}

function add(){
    amount=amount+1;
    batman.innerHTML=amount;

    checkOverDraft(amount);
}

function take(){
    amount=amount-1;
    batman.innerHTML=amount;
    checkOverDraft(amount);
}


function zero(){
    amount=amount*0;
    batman.innerHTML=amount;
    checkOverDraft(amount);
}
