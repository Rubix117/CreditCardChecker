/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {


    $("#submit").click(function() {

        var cardNumber = $("#creditcard").val();

        try {
            if (isNaN(cardNumber))
            {
                throw "not a number";
            }
           
        }
        catch (err)
        {
            alert(err);
        }

        if (checkCard(cardNumber)) {
            alert("This is a valid card number");
        }
        else {
            alert("This is not a valid card number");
        }

    });

    function checkCard(cardnumber) {
        //alert(cardnumber);

        var cardString = cardnumber.toString();
        //var cardNumberArry = Array();
        var total = 0;

        for (var i = 0; i < cardString.length - 1; i++)
        {
            var currentNumber = 0;

            // odd
            if (i % 2)
            {
                currentNumber = cardString.charAt(i) * 2;
                if (parseInt(currentNumber) >= 10)
                {
                    currentNumber = (1 + (currentNumber - 10));
                }
            }
            else
            {
                currentNumber = cardString.charAt(i);
            }

            
            total += parseInt(currentNumber);
            //alert("Running Total " + total);
            
        }
        total += parseInt(cardString.charAt(cardString.length - 1));

        alert("total" + total);

        if (parseInt(total) % 10 === 0)
            return true;

        return false;
    }

});