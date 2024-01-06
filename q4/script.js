$(document).ready(function() {
    let arr = [];
    
    $('#task1').on('click', function() {
        arr =[];
        let str = `<input class="x-point-input" placeholder="Enter x..."/>`+ 
        `<input class="y-point-input" placeholder="Enter y..."/>` +
        `<button class="add-point">add to array</button>` +
        `<button id="search-coordinates">search with coordinates</button>`;

        $('#dynamic-div').html(str);

    });

    $('#task2').on('click', function() {
        arr =[];
        let str = `<input class="x-point-input" placeholder="Enter x..."/>`+ 
        `<input class="y-point-input" placeholder="Enter y..."/>` +
        `<button class="add-point">add to array</button>` +
        `<button id="search-points">search with point</button>`;

        $('#dynamic-div').html(str);
    });

    $('#task3').on('click', function() {
        arr =[];
        let str = `<input class="x-point-input" placeholder="Enter x..."/>`+ 
        `<input class="y-point-input" placeholder="Enter y..."/>` +
        `<button class="add-point">add to array</button>` +
        `<button id="search-distance">get travel distance</button>`;

        $('#dynamic-div').html(str);
    });


    $('#dynamic-div').on('click', '.add-point' , function() {

        const x = $('.x-point-input').val() ;
        const y = $('.y-point-input').val() ;


        if (x === "" || y === "") {
            $('#result-div').html("<h1>One or both coordinates are empty</h1>");
            return;
        }

        const point = new Point(x, y);
        $('.x-point-input').val("");
        $('.y-point-input').val("");

        arr.push(point);
        $('#result-div').html(`<h1>New point has been added to array there is now ${arr.length} points</h1>`);

    });


    $('#dynamic-div').on('click', '#search-coordinates', function() {
        if (arr.length <= 0) {
            const errorString = "<h1>The array of points is empty</h1>";
            $('#result-div').html(errorString);
            return;
        }

        const x = $('.x-point-input').val();
        const y = $('.y-point-input').val();

        if (x === "" || y === "") {
            const errorString = "<h1>One or both coordinates are empty</h1>";
            $('#result-div').html(errorString);
            return;
        }

        let coordinatesExists = false;

        for (let i = 0; i < arr.length; i++) {
            const point = arr[i];
            if (x === point.x && y === point.y) {
                coordinatesExists = true;
                break;
            }
        }

        let str;
        if (coordinatesExists) {
            str = "<h1>Coordinates inside the array of points</h1>";
        } else {
            str = "<h1>Coordinates are not inside the array of points</h1>";
        }

        $('#result-div').html(str);
    });


    $('#dynamic-div').on('click', '#search-points', function() {
        if (arr.length <= 0) {
            const errorString = "<h1>The array of points is empty</h1>";
            $('#result-div').html(errorString);
            return;
        }

        const x = $('.x-point-input').val();
        const y = $('.y-point-input').val();

        if (x === "" || y === "") {
            const errorString = "<h1>One or both coordinates are empty</h1>";
            $('#result-div').html(errorString);
            return;
        }

        const newPoint = new Point(x,y)

        let pointExists = false;

        for (let i = 0; i < arr.length; i++) {
            const point = arr[i];
            const pointMatch = newPoint.Equals(point);
            if(pointMatch){
                pointExists = true;
                break;
            }
        }

        let str;
        if (pointExists) {
            str = "<h1>Point is inside the array of points</h1>";
        } else {
            str = "<h1>Point is not inside the array of points</h1>";
        }

        $('#result-div').html(str);
    });


    $('#dynamic-div').on('click', '#search-distance', function() {
        if (arr.length < 3) {
            const errorString = "<h1>The array of points has to be 4 points</h1>";
            $('#result-div').html(errorString);
            return;
        }
        let totalDistance = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            const point1 = arr[i];
            const point2 = arr[i + 1];
            
            const distance = Math.sqrt(Math.pow((point2.x - point1.x), 2) + Math.pow((point2.y - point1.y), 2));
            totalDistance += distance;
        }

        let str = "<h1>Total travel distance: " + totalDistance.toFixed(2) + "</h1>";
        $('#result-div').html(str);
    });


});
