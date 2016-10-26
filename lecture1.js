/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the best practise
 * The last two are valid. However, the first three have the following problems; the first was one starts with a number,
 * which violates the variable naming rules.
 * The second one used the 'var' keyword which is used to created a variable twice. The third one has space in between
 * the varible name.
 */

var fstCar = 'Doge';
var sign = 'variable';
var first_name = 'Jerry';
var Sch00lName = 'MEST';
var totalnumber = 100;

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 * Both variables are invalid. This is due to the fact that quotation marks, which are used to string values to a variable
 * has been used in between the string with escaping.
 */
var greeting  =  'It\'s nice to me you today!';
var response = "Ashwin said, \"Yes Sir!\"";
/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 * This operation returns true. This means the value of the operation on the left hand is equal value and of the same type
 * as the value on the right.
 */
/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
var Pizza = {
    meat : true,
    onion : true,
    mushroom : false,
    name :  'meat lovers',
}

function Pizza( name, prize, size, flavor ) {
    this.name = name;
    this.prize = prize;
    this.size = size;
    this.flavor = flavor;
}

var Pizza = {
    toppings : [ 'onions', 'cherry' ],
    size : 'large',
    name : 'Meat lovers',
    price : 'GHC 55.00'
}

var nPizza = Object.create( Pizza );

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
var Animal = function ( name, kingdom, species ) {
    this.name = name;
    this.kingdom = kingdom;
    this.species = species;
}

Animal.prototype = {
    canFly : function ( fly ) {
        if( fly ) {
            console.log( "This animal can fly" );
        }   else {
            console.log( "This animal cannot fly" );
        }
    }
}

Animal.prototype = {
    canBark : function ( bark ) {
        if ( bark ){
            console.log( this.name+ " can bark!" );
        }   else {
            console.log( this.name+ " cannot bark!" );
        }
    }
}

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */

console.log( "Welcome, please select your favorite dringk!" );
console.log( "1. Coca Cola" );
console.log( "2. Fanta" );
console.log( "3. Pepsi" );
console.log( "4. Fruit Juice" );
function favoriteDrinkSwitch( optNumber ) {
    switch ( optNumber ) {
        case "1":
            console.log("Please sit and wait, your chilled Coca Cola will be served soon!");
            break;
        case "2":
            console.log("Please sit and wait, your chilled Fanta will be served soon!");
            break;
        case "3":
            console.log("Please sit and wait, your chilled Pepsi will be served soon!");
            break;
        case "4":
            console.log("Please sit and wait, your chilled Fruit Juice will be served soon!");
            break;
        default:
            console.log( "Sorry we don't have what you requested for, please select from the options presented!" );
            break;
    }
}

function favoriteDrinkIf( optNumber ) {
    if( optNumber == 1 ) {
        console.log("Please sit and wait, your chilled Coca Cola will be served soon!");
    }   else if ( optNumber == "2") {
        console.log("Please sit and wait, your chilled Fanta will be served soon!");
    }   else if ( optNumber == "3" ) {
        console.log("Please sit and wait, your chilled Pepsi will be served soon!");
    }   else if ( optNumber == "4" ){
        console.log("Please sit and wait, your chilled Fruit Juice will be served soon!");
    } else {
        console.log( "Sorry we don't have what you requested for, please select from the options presented!" );
    }
}

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
function studentGrades( studentScores ) {
    grades = [];
    for( i = 0; i < studentScores.length; i++ ){
        if ( studentScores[ i ] <= 100 && studentScores[ i ] >69 ){
            grades.push( "A");
        }   else if ( studentScores[ i ] <= 70 && studentScores[ i ] >69 ){
            grades.push( "B" );
        }   else if ( studentScores[ i ] <= 60 && studentScores[ i ] >59 ){
            grades.push( "C" );
        }   else if ( studentScores[ i ] <= 50 && studentScores[ i ] >49 ){
            grades.push( "D" );
        }   else if ( studentScores[ i ] <= 40 && studentScores[ i ] >39 ){
            grades.push( "E" );
        }   else if ( studentScores[ i ] <= 30 && studentScores[ i ] >0 ){
            grades.push( "B" );
        }
    }
    console.log( grades );
}
// studentGrades( [50, 67, 80, 90, 100, 30, 88, 68] )
/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */

function studentRemarks( studentScores ) {
    remarks = [];
    studentScores.forEach(
        function ( index, value ) {
            if ( index <= 100 && index >69 ){
                remarks.push( "Excellent" );
            }   else if ( index <= 70 && index >69 ){
                remarks.push( "Very Good" );
            }   else if ( index <= 60 && index >59 ){
                remarks.push( "Good" );
            }   else if ( index <= 50 && index >49 ){
                remarks.push( "Average" );
            }   else if ( index <= 40 && index >39 ){
                remarks.push( "Credit" );
            }   else if ( index <= 30 && index >0 ){
                remarks.push( "Fail" );
            }

        }
    )
    console.log( remarks );
}
// studentRemarks( [50, 67, 80, 90, 100, 30, 88, 68] );
