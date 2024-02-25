window.onload = function(){ 

    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null
    
    // окно вывода результата
    outputElement = document.getElementById("result")
    
    // список объектов кнопок циферблата (id которых начинается с btn_digit_)
    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')
    
    function onDigitButtonClicked(digit) {
        if (digit == '0' && a =='0') return
        if (!selectedOperation) {
            if (digit !='0' && digit!='.' && a == '0') a = digit
            else if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                a += digit
            }
            outputElement.innerHTML = a
        } else {
            if (digit == '0' && b == '0') return
            if (digit !='0' && digit!='.' && b == '0') b = digit
            else if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit      
            }
            outputElement.innerHTML = b   
        }
    }
    // установка колбек-функции для %
    document.getElementById("btn_op_percent").onclick = function() {
        if (a === '') return
        selectedOperation = '%'
    }
    // установка колбек-функции для +/-
    document.getElementById("btn_op_sign").onclick = function()
    {
        if(a === '' || a === '0' || b === '0') return;
        if(b === ''){
            a = -1*a
            outputElement.innerHTML = a
        }
        else{
            b = -1*b
            outputElement.innerHTML = b
        }  
    }
    // установка колбек-функций на кнопки циферблата по событию нажатия
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });
    
    // установка колбек-функций для кнопок операций
    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '') return
        if (selectedOperation) {
            document.getElementById("btn_op_equal").onclick.call()
        }
        selectedOperation = 'x'
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '') return
        if (selectedOperation) {
            document.getElementById("btn_op_equal").onclick.call()
        }
        selectedOperation = '+'
    }
    document.getElementById("btn_op_minus").onclick = function() { 
        if (a === '') return
        if (selectedOperation) {
            document.getElementById("btn_op_equal").onclick.call()
        }
        selectedOperation = '-'
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '') return
        if (selectedOperation) {
            document.getElementById("btn_op_equal").onclick.call()
        }
        selectedOperation = '/'
    }
    
    // кнопка очищения
    document.getElementById("btn_op_clear").onclick = function() { 
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }
    
    // кнопка расчёта результата
    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
            
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
            case '%':
                expressionResult = ((+a)/100) * (+b)
                break;
        }
        
        a = expressionResult.toString()
        b = ''
        selectedOperation = null
    
        outputElement.innerHTML = a
    }
    };