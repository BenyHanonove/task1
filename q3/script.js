$(document).ready(function() {

    let arr =[];
    
    $('.number-input').on('input', function() {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));

        // Limit the input length to 2 characters
        if ($(this).val().length > 2) {
        $(this).val($(this).val().slice(0, 2));
        }
    });

    function cleanValues(){
        $('#hours-input').val("");
        $('#minutes-input').val("");
        $('#seconds-input').val("");
        $('#country-input').val("");
    };

    function printClocks(){
        let str = "<h2>Clocks</h2>"; 
        for(let i = 0; i < arr.length; i++){
            str += `<p>In ${arr[i].country} ${arr[i].Show()} that is in secs ${arr[i].ConvertToSeconds()}</p>`;
        }
        $('#dynamic-clocks').html(str);
    };

    //Function to handel the click of submit
    $('#submit-button').on('click', function() {
        //Collect all the values
        const hour = parseInt($('#hours-input').val()) || 0;
        const minutes = parseInt($('#minutes-input').val()) || 0;
        const seconds = parseInt($('#seconds-input').val()) || 0;
        const country = $('#country-input').val();

        //Create new clock and push to array the values
        const newClock = new Clock(hour, minutes, seconds, country);
        arr.push(newClock);
        cleanValues();



        //Handle event of adding 5 clocks
        if(arr.length >=5){
            printClocks();
        }else{
            $('#dynamic-clocks').html(`<h1>you entered ${arr.length} of 5 clocks the app needs </h1>`);
        }
    });


});
