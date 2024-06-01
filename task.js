//VIGITABLE CODE EXERCISE
var money = prompt("How much your budget for this vigitable you have?");
if (money >= 1000)
    {
        var vegitables = prompt("Enter the vegitables");
        var price = +prompt("Enter the price");    
        var kilo = +prompt("How much you wanted");
        alert("Your bill\n---------------------------\nYOUR VEGETABLE ${VEGETABLE}\nTOTAL KILO ${KILO}kilo is ${Totalprice}");
    }
    else{
        alert("sorry you can't buy");

    }*/

 //even odd checking program
    var number = +prompt("Please enter your number")
   if (number%2 == 0)
    {
        alert("the number is even");
    } 
    else{
        alert("the number is odd")
    }*/

    //Trafic signals 
    var traficLight = prompt("What's the collor of the trafic signal")
    if (traficLight === "Red")
        {
            alert("STOP🚦");
        }else if(traficLight === "Yellow")
            {
                alert("READY 🚦");
            }else if(traficLight === "Green")
                {
                alert("MOVE🚦");
                }