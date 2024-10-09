
const userName = document.getElementById('nameUser');
const data1 = document.getElementById ('note1');
const data2 = document.getElementById ('note2');
const data3 = document.getElementById ('note3');
const btnCalculate = document.getElementById('btn-calculate');
const btnPredict = document.getElementById ('btn-predict');
const response = document.getElementById('response');
btnPredict.addEventListener ('click', predictNote)
btnCalculate.addEventListener('click', calculateNote )

function calculateNote(event) {
    let user = userName.value
    let note1 = Number(data1.value);
    let note2 = Number(data2.value);
    let note3 = Number(data3.value);
   

    let result = (note1 * 0.3) + (note2  * 0.3) + (note3  * 0.4) ;

    if((note1 >= 1 && note1 <= 5) && (note2 >= 1 && note2 <= 5) && (note3 >= 1 && note3 <= 5) ){

        if(result < 3.5){
            response.style.color = 'black'
            response.textContent = `Sr ${user}  su nota es de: ${result}`;

        }else if(result >= 3.5 && result <= 4.5 ){
            response.style.color = 'orange'
            response.textContent = `Sr ${user}  su nota es de: ${result}`;
        }else{
            response.style.color = 'green'
            response.textContent = `Sr ${user}  su nota es de: ${result}`;
        }

    
    event.preventDefault()

    }else{
        response.textContent = `Ingrese notas validas`
        event.preventDefault()
    }
   

    
}

function predictNote(event) {
    let user = userName.value
    let notaMin = 3.5;
    let note1 = Number(data1.value);
    let note2 = Number(data2.value);
    let operation = (notaMin - (note1 * 0.3) - (note2 * 0.3) ) / 4;

    alert ( operation + user)
    event.preventDefault()
}