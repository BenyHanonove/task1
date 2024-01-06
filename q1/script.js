
const counter = new Counter();

$(document).ready(function() {
    $('#numericInput').on('input', function() {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    //Function to handel the click of start
    $('#start').on('click', function() {
        //Start new value for counter if there is not input start default value of 0
        const newValue = parseInt($('#numericInput').val()) | 0;
        counter.Initialize(newValue);
        
        // Disable the input field after clicking 'Start' and change value to new value;
        $('#numericInput').val(newValue).prop('disabled', true);

    });

    //Function to handel the click of plus
    $('#plus').on('click', function() {
        counter.increment();
        $('#numericInput').val(counter.getCurrentValue());
    });

    //Function to handel the click of go
    $('#go').on('click', function() {
        const numbers = counter.go();
        const numbersDisplay = numbers.map(num => `<h3>${num}</h3>`).join('');
        $('#numbersDisplay').html(numbersDisplay);
    });
});