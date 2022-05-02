const button = document.querySelector('#btn');
button.addEventListener('click', summ)

function summ(){
    function fullness(){
        let howMuchMoney = document.querySelector('#howMuchMoney').value;
        let howLong = document.querySelector('#howLong').value;
        if (howMuchMoney ==="" || howLong === ""){
            Swal.fire({
                icon: 'error',
                title: 'Ошибка!',
                text: 'Заполните все поля!',
            })
        }
    }
    fullness()

    let ul = document.querySelector('.ul');
    let ull = document.querySelector('.ull');
    let pHow = document.querySelector('#how')
    
    ul.innerHTML = "";
    ull.innerHTML = "";
    pHow.innerHTML = "";

    let howMuchMoney = document.querySelector('#howMuchMoney').value;
    let howLong = document.querySelector('#howLong').value;
    let chooseATerm = document.querySelector('#tip').value;
    
    if (chooseATerm === '1'){
        let amountOfMoney = howMuchMoney/howLong;
        pHow.textContent = amountOfMoney.toFixed(2) + ' в месяц';
    }
    
    else if(chooseATerm === '2'){
        ul.innerHTML = "Сумма";
        ull.innerHTML = "Месяц";
        let amountOfMoney = howMuchMoney/howLong;
        let a = 100/howLong;
        let b = a/2; 
        let c = (howMuchMoney*2 - b*howLong)/howLong; 
        let e =(howMuchMoney*2 - 2*b*howLong)/((howLong-1)*howLong); 
        
        //массив по сроку
        let arr=[];
        let p=1;
        for (p=1; p<=howLong; p++) {
            let li = document.createElement('li');
            li.textContent = arr.push(p);
            ull.appendChild(li);
        }
        
        // массив по вложениям
        
        arr.length = arr.length - 2;
        let resultSumm = arr.map(x => x * e + b);
        
        resultSumm.push(c)
        resultSumm.unshift(b)
        
    
        for (v=0; v<resultSumm.length; v++){
            if (resultSumm[v]< 0){
                Swal.fire({
                    icon: 'error',
                    title: 'Ошибка!',
                    text: 'Введите сумму больше!',
                })
                ul.innerHTML = "";
                ull.innerHTML = "";
                break;
        }
            else{    
            
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = resultSumm[v].toFixed(2);
            }
            
    }
        
        const sumOfNumbers = resultSumm.reduce((acc, number) => acc + number, 0);
    
}   
    
else {let amountOfMoney = howMuchMoney/howLong;
    ul.innerHTML = "Сумма";
    ull.innerHTML = "Месяц";
    let a = 100/howLong;
    let b = a/2; 
    let c = (howMuchMoney*2 - b*howLong)/howLong; 
    let e =(howMuchMoney*2 - 2*b*howLong)/((howLong-1)*howLong); 

    //массив по сроку
    let arr=[];
    let p=1;
    for (p=1; p<=howLong; p++) {
        let li = document.createElement('li');
        li.innerHTML = arr.push(p);
        ull.appendChild(li);
    }
    
    // массив по вложениям
    
    arr.length = arr.length - 2;
    let resultSumm = arr.map(x => x * e + b);

    resultSumm.push(c)
    resultSumm.unshift(b)
    let resultSummRev = resultSumm.reverse();
    for (v=0; v<resultSummRev.length; v++){
        if (resultSumm[v]< 0){
            Swal.fire({
                icon: 'error',
                title: 'Ошибка!',
                text: 'Введите сумму больше!',
            })
            ul.innerHTML = "";
            ull.innerHTML = "";
            break;
    }
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = resultSummRev[v].toFixed(2);
    }
    
    const sumOfNumbers = resultSumm.reduce((acc, number) => acc + number, 0);
}
}
const btnReload = document.querySelector('#btnTwo');
btnReload.addEventListener('click', reload)
function reload(){
    window.location.reload()
}
