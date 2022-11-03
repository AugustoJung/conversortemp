function Conversor(){

    let inputTemp = document.getElementById("pegar").value;
    let inputMedida = document.getElementById("selecionar").value;

    var Celsius = 0;
    var Fahrenheit = 0;
    var Kelvin = 0;
    var Rankine = 0;
    
    if(inputMedida == 'c'){

        Celsius = inputTemp;
        Fahrenheit = ((parseFloat(Celsius) * 1.8)+32).toFixed(2);
        Kelvin = (parseFloat(Celsius) + 273.15).toFixed(2);
        Rankine = ((Celsius * (9/5)) + 491.67).toFixed(2);

    }else if(inputMedida == 'f'){

        Fahrenheit = inputTemp;
        Celsius = ((parseFloat(Fahrenheit) - 32) / 1.8).toFixed(2);
        Kelvin = (parseFloat(Celsius) + 273.15).toFixed(2);
        Rankine = ((Celsius * (9/5)) + 491.67).toFixed(2);

    }else if(inputMedida == 'k'){

        Kelvin = inputTemp;
        Celsius = (Kelvin - 273.15).toFixed(2);
        Fahrenheit = ((parseFloat(Celsius) * 1.8)+32).toFixed(2);
        Rankine = ((Celsius * (9/5)) + 491.67).toFixed(2);

    }else if(inputMedida == 'r'){
        Rankine = inputTemp;
        Kelvin = (Rankine / 1.8).toFixed(2);
        Celsius = (Kelvin - 273.15).toFixed(2);
        Fahrenheit = ((parseFloat(Celsius) * 1.8)+32).toFixed(2);
    }

    cels.textContent = `${Celsius} °C`;
    fahren.textContent = `${Fahrenheit} °F`;
    kel.textContent = `${Kelvin} K`;
    ran.textContent = `${Rankine} R`;

}

converter.addEventListener("click", Conversor);