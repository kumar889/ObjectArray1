
fizzBuzz(20);

function fizzBuzz(number) {
    for (var i = 0; i <=number; i++){

        switch(i <=number){
            case(i % 5 === 0 && i % 3 === 0):
                console.log("fizzBuzz");
                break;
            case (i % 3 === 0 ):
                console.log("fizz");
                break;
            
            case (i % 5  === 0):
                console.log("Buzz");
                break;

                default:
                    console.log(i);
                    break;
           
        }

    }

    }