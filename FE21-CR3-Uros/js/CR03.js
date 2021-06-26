//Task 1

function calculateInvoice(starterPrice,maindishPrice,dessertPrice,beveragePrice) {
var customer = starterPrice + maindishPrice + dessertPrice + beveragePrice;
return customer;
}

var preis= calculateInvoice(4,9,5,8);
console.log(preis)


//Task 2
var snack = 4;
var pasta = 9;
var milkshake= 6;
var lemonade = 4;
function invoice (starterPrice,maindishPrice,dessertPrice,beveragePrice) {
var result =  starterPrice + maindishPrice + dessertPrice + beveragePrice; ;
return result;
}
var endprice = (invoice(snack, pasta, milkshake,lemonade))
console.log(endprice)



//task 3

function menu1(starterPrice,maindishPrice,dessertPrice,beveragePrice) {
    var customer1 = starterPrice + maindishPrice + dessertPrice + beveragePrice;
    return customer1;
    }
    var total= menu1(6,7,5,5);
    console.log(total)

    function menu2(starterPrice,maindishPrice,dessertPrice,beveragePrice) {
        var customer2 = starterPrice + maindishPrice + dessertPrice + beveragePrice;
        return customer2;
        }
        var total= menu2(3,10,4,7);
        console.log(total)

        function menu3(starterPrice,maindishPrice,dessertPrice,beveragePrice) {
            var customer3 = starterPrice + maindishPrice + dessertPrice + beveragePrice;
          return customer3;
          }
          var total= menu3(4,9,7,8);
          console.log(total)

    



// Bonus


function studentinvoice1(starterPrice,maindishPrice,dessertPrice,beveragePrice){
    let aktion1 =starterPrice + maindishPrice + dessertPrice ; 
    let aktion2 =(aktion1/100)*90;
    let aktion3 = aktion2 + beveragePrice;
    return aktion3;
    }
    console.log(studentinvoice1(6,9,5,7)+ "€")

    function studentinvoice2(starterPrice,maindishPrice,dessertPrice,beveragePrice){
        let aktion1 = starterPrice + maindishPrice + dessertPrice ;  
        let aktion2 =(aktion1/100)*90;
        let aktion3 = aktion2 + beveragePrice;
        return aktion3;
        }
        console.log(studentinvoice2(4,10,4,4)+ "€")


        function studentinvoice3(starterPrice,maindishPrice,dessertPrice,beveragePrice){
            let aktion1 = starterPrice + maindishPrice + dessertPrice ;  
            let aktion2 =(aktion1/100)*90;
            let aktion3 = aktion2 + beveragePrice;
            return aktion3;
            }
            console.log(studentinvoice3(4,9,6,5)+ "€")
