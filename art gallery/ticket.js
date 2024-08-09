
    var adultQty = document.getElementById('quantityAdult');
   var childQty = document.getElementById('quantityChild');
   var seniorQty = document.getElementById('quantitySenior');
   var submitBtn = document.getElementById('submitButton');
   var outputPara = document.getElementById('totalPrice');
   
   // generic function that takes in quantity and multiplies with appropriate price
   function calcPrice(qty, price){
     return qty * price;
   }

   // generic function that outputs final price and amout it tickets purchased
   function getMessage(qty, total){
     return outputPara.innerHTML = 'You purchased ' + qty + ' ticket(s) and your total price is Rs' + total + '<br><br>' + 'Thanks for your confirmation and We are requesting you to  scan the qr code and pay the amount';
   }

   submitBtn.addEventListener('click', function() { 

    if(adultQty.value === '0' && childQty.value === '0'  && seniorQty.value === '0')
      {
     
      alert('Please purchase at least 1 ticket');
    } else {
      var totalAdult = calcPrice(adultQty.value, 49);
      var totalChild = calcPrice(childQty.value, 20);
      var totalSenior = calcPrice(seniorQty.value, 30);

      var totalPrice = totalAdult + totalChild + totalSenior;
      var totalTix = parseInt(adultQty.value) + parseInt(childQty.value) + parseInt(seniorQty.value);

      getMessage(totalTix, totalPrice);
    }

   }); 
