document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCvc = document.getElementById('card-cvc').value;

    if (cardName && cardNumber && cardExpiry && cardCvc) {
        alert(`Payment submitted successfully!\n\nName: ${cardName}\nCard Number: ${cardNumber}\nExpiry Date: ${cardExpiry}\nCVC: ${cardCvc}`);
        document.getElementById('payment-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
