document.querySelector('.payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    if (amount && parseFloat(amount) > 0) {
        alert(`You entered: $${parseFloat(amount).toFixed(2)}`);
    } else {
        alert('Please enter a valid amount.');
    }
}); 