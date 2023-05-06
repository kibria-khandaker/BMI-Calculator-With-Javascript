let weightValue = document.getElementById('weightInput');
let heightValue = document.getElementById('heightInput');

let resultSubmitBtn = document.getElementById('calculateBtn');

let resultShowBox = document.getElementById('result_show_div');


function bmiValueCalculate(weiValue, heiValue) {
    heiValueToMeter = heiValue * 0.0254
    return (Number(weiValue) / Number(heiValueToMeter * heiValueToMeter)).toFixed(4);
}

function bmiValue() {
    if (!weightValue.value || !heightValue.value) {
        resultShowBox.innerText = "Input Your Weight and Height ";
    } else {
        const bmiValueData = bmiValueCalculate(weightValue.value, heightValue.value);

            if (bmiValueData < 18.5) {
                resultShowBox.innerText = bmiValueData + " (Thin Body)";
            } else if (bmiValueData < 25) {
                resultShowBox.innerText = bmiValueData + " (Normal Weight)";
            } else if (bmiValueData < 30) {
                resultShowBox.innerText = bmiValueData + " (Over Weight)";
            } else if (bmiValueData < 35) {
                resultShowBox.innerText = bmiValueData + " (Obesity)";
            } else if (bmiValueData < 40) {
                resultShowBox.innerText = bmiValueData + " (Obesity High & Step 1)";
            } else {
                resultShowBox.innerText = bmiValueData + " (Obesity very High & Step 2)";
            };

        weightValue.value = '';
        heightValue.value = '';
    }

};
