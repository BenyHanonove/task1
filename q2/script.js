let duck;

$(document).ready(function() {

    //Handel age input to get only numbers
    $('#age-input').on('input', function() {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    //Handel weight input to get only numbers
    $('#weight-input').on('input', function() {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    //Function to handel the click of submit
    $('#submit-button').on('click', function() {
        //Collect values and disable the 
        const name = $('#name-input').val();
        const color = $('#color-input').val();
        const age = $('#age-input').val();
        const weight = $('#weight-input').val();
        const image = $('#image-input').val();
        $('#submit-button').prop('disabled', true);
    
        // Creating a new Duck object using the collected values
        duck = new Duck(name, color, age, weight, image ,'sound.mp3');

        //Create 2 new buttons show | quack and show theme in the interface
        const buttons = '<button id="show-btn">Show</button> <button id="quack-btn">Quack</button>';
        $('#buttons-container').html(buttons);
    });

    //Function to show the duck info
    $('#buttons-container').on('click', '#show-btn', function() {
        const data = duck.show();
        $('#dynamic-container').html(data);
    });
    
    //Function to handel quack
    $('#buttons-container').on('click', '#quack-btn', function() {
        const data = duck.quack();
        $('#dynamic-container').html(data);
    });
    
}); 
