function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const bmi = weight / (height * height);
    const roundedBMI = bmi.toFixed(2);

    let category = "";
    if (bmi < 18.5) {
        category = "Abaixo do peso";
    } else if (bmi < 24.9) {
        category = "Peso normal";
    } else if (bmi < 29.9) {
        category = "Sobrepeso";
    } else {
        category = "Obesidade";
    }

    document.getElementById('result').innerText = `Seu IMC é ${roundedBMI} (${category}).`;
}