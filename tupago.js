

//Calculadora 
const input = document.getElementById("calInput")
const output = document.getElementById("calOutput")
const inputChange = document.getElementById("cambInput")
const outputChange = document.getElementById("cambOutput")

input.addEventListener('keyup', (e) => {
    verifInput(e.target.value);
})

inputChange.addEventListener('change', function() {
    changeCal()
})

outputChange.addEventListener('change', function() {
    changeCal()
})


function verifInput(input) {
    const regex = /^\d+$/;
    const coincide = regex.test(input);

    if (coincide) {
        changeCal();
    } else {
        output.value = 0;
    }

}

function changeCal() {
    

    //clp > bss | usd > clp | usd > bss | bss > clp | clp > usd | equals  
    const changeTasas = [0.0360, 923, 35.70, 0.03940, 1030]

    switch (inputChange.value) {

        case 'usd':

            switch (outputChange.value) {
                case 'clp':
                    output.value = (input.value * changeTasas[1]).toFixed(2)
                    break;
                    case 'bss':
                    output.value = (input.value * changeTasas[3]).toFixed(2)
                    break
                case 'usd':
                    output.value = input.value
                    break
            }

            break;

        case 'clp':

            switch (outputChange.value) {
                case 'usd':
                    output.value = (input.value * changeTasas[4]).toFixed(2)
                    break;
                case 'bss':
                    output.value = (input.value * changeTasas[0]).toFixed(2)
                    break
                case 'clp':
                    output.value = input.value
                    break
            }

            break;
        case 'bss':
            switch (outputChange.value) {
                case 'clp':
                    output.value = (input.value * changeTasas[3]).toFixed(2)
                    break;
                case 'usd':
                    output.value = (input.value / changeTasas[0]).toFixed(2)
                    break
                case 'bss':
                    output.value = input.value
                    break
            }
            break;
    }


}