let result = '';
let isCalc = false;
window.onload = function () {
    result = document.getElementById('result');
};
function cClick() {
    result.value = '0';
    isCalc = false;
}
function numClick(val) {
    if (isCalc) {
        result.value = '0';
    }
    isCalc = false;
    if (result.value == '0' && val == '0') {
        result.value = '0';
    } else if (result.value == '0' && val == '.') {
        result.value = '0.';
    } else if (result.value == '0') {
        result.value = val;
    } else {
        result.value += val;
    }
}
function backClick(val) {
    if (val == '⌫') {
        if (result.value == '0') {
            return;
        }
        result.value = result.value.slice(0, -1);
        if (result.value == '') {
            result.value = '0';
        }
    }
}
function isOpeLast() {
    return ['+', '-', 'x', '÷', '^'].includes(result.value.toString().slice(-1));
}
function opeClick(val) {
    if (isCalc) {
        result.value = '0';
    }

    if (isOpeLast()) {
        result.value = result.value.slice(0, -1) + val;
    } else {
        result.value += val;
    }

}
function equalClick() {
    if (isOpeLast()) {
        result.value = result.value.slice(0, -1);
    }
    let temp = new Function('return ' + result.value.replaceAll('x', '*').replaceAll('÷', '/').replaceAll('^', '**'))();
    if (temp == Infinity || Number.isNaN(temp)) {
        result.value = 'Error';
        isCalc = true;
    } else {
        result.value = temp;
        isCalc = true;
    }
}