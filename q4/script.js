$(document).ready(function() {
    let arr = [];
    
    //Option 1 of the app find if there is a point with the same coordinates (when click array is rest)
    $('#task1').on('click', function() {
        arr =[];
        let str = `<input class="x-point-input" placeholder="Enter x..."/>`+ 
        `<input class="y-point-input" placeholder="Enter y..."/>` +
        `<button class="add-point">add to array</button>` +
        `<button id="search-coordinates">search with coordinates</button>`;

        $('#dynamic-div').html(str);

    });

    //Option 2 of the app find if there is two equal points (when click array is rest)
    $('#task2').on('click', function() {
        arr =[];
        let str = `<input class="x-point-input" placeholder="Enter x..."/>`+ 
        `<input class="y-point-input" placeholder="Enter y..."/>` +
        `<button class="add-point">add to array</button>` +
        `<button id="search-points">search with point</button>`;

        $('#dynamic-div').html(str);
    });

    //Option 3 of the app enter 4 points minimum inside the input and find out the travel distance (when click array is rest)
    $('#task3').on('click', function() { 
        arr =[];
        let str = `<input class="x-point-input" placeholder="Enter x..."/>`+ 
        `<input class="y-point-input" placeholder="Enter y..."/>` +
        `<button class="add-point">add to array</button>` +
        `<button id="search-distance">get travel distance</button>`;

        $('#dynamic-div').html(str);
    });


    //Event handler for adding point into array
    $('#dynamic-div').on('click', '.add-point' , function() {
        //Collect values if there are empty don`t print error msg
        const x = $('.x-point-input').val() ;
        const y = $('.y-point-input').val() ;
        if (x === "" || y === "") {
            $('#result-div').html("<h1>One or both coordinates are empty</h1>");
            return;
        }

        //Push the point into arr and then print msg that shows the number of points inside array 
        const point = new Point(x, y);
        $('.x-point-input').val("");
        $('.y-point-input').val("");
        arr.push(point);
        $('#result-div').html(`<h1>New point has been added to array there is now ${arr.length} points</h1>`);
    });

    //Event lister for search inside the array for point by coordinates
    $('#dynamic-div').on('click', '#search-coordinates', function() {
        //Check if there are any points inside the array if not print error msg
        if (arr.length <= 0) {
            const errorString = "<h1>The array of points is empty</h1>";
            $('#result-div').html(errorString);
            return;
        }

        //Check if there is values inside input if not print error msg
        const x = $('.x-point-input').val();
        const y = $('.y-point-input').val();
        if (x === "" || y === "") {
            const errorString = "<h1>One or both coordinates are empty</h1>";
            $('#result-div').html(errorString);
            return;
        }

        //Search if there is a point with the coordinates values if there is return true break loop otherwise keep false 
        let coordinatesExists = false;
        for (let i = 0; i < arr.length; i++) {
            const point = arr[i];
            if (x === point.x && y === point.y) {
                coordinatesExists = true;
                break;
            }
        }

        //Print on the screen if found says exist / if not found says point don`t exist 
        let str;
        if (coordinatesExists) 
            str = "<h1>Coordinates inside the array of points</h1>"
        else 
            str = "<h1>Coordinates are not inside the array of points</h1>";

        $('#result-div').html(str);
    });


    //Event handler for checking if there is a point inside the array similar to the input point the user insert 
    $('#dynamic-div').on('click', '#search-points', function() {
        //Check if there are any points inside the array if not print error msg
        if (arr.length <= 0) {
            const errorString = "<h1>The array of points is empty</h1>";
            $('#result-div').html(errorString);
            return;
        }

        //Check if there is values inside input if not print error msg
        const x = $('.x-point-input').val();
        const y = $('.y-point-input').val();
        if (x === "" || y === "") {
            const errorString = "<h1>One or both coordinates are empty</h1>";
            $('#result-div').html(errorString);
            return;
        }

        //Create new point and  search if there is a point in the array that equal to the point the user insert if there is return true break loop otherwise keep false 
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

        //Print on the screen if found says exist / if not found says point don`t exist 
        let str;
        if (pointExists) 
            str = "<h1>Point is inside the array of points</h1>";
        else
            str = "<h1>Point is not inside the array of points</h1>";
        $('#result-div').html(str);
    });


    $('#dynamic-div').on('click', '#search-distance', function() {
        //Check if the array has 4 points if not print error msg and stops the function from running
        if (arr.length < 3) {
            const errorString = "<h1>The array of points has to be 4 points</h1>";
            $('#result-div').html(errorString);
            return;
        }
        //Calculate the distance between the point by index (from n to n+1)
        let totalDistance = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            const point1 = arr[i];
            const point2 = arr[i + 1];
            
            const distance = Math.sqrt(Math.pow((point2.x - point1.x), 2) + Math.pow((point2.y - point1.y), 2));
            totalDistance += distance;
        }

        //Prints to the user the travel distance
        let str = "<h1>Total travel distance: " + totalDistance.toFixed(2) + "</h1>";
        $('#result-div').html(str);
    });


});
