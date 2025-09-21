function validateForm(event) {
    event.preventDefault();

    const email = document.getElementById('email');
    const address = document.getElementById('address');
    const bdate = document.getElementById('bdate');
    const sexM = document.getElementById('SexM');
    const sexF = document.getElementById('SexF');
    const nationality = document.getElementById('nationality');
    const cardNumber1 = document.getElementById('card-number1');
    const cardNumber2 = document.getElementById('card-number2');
    const cardNumber3 = document.getElementById('card-number3');
    const cardName = document.getElementById('card-name');
    const billingAddress1 = document.getElementById('billing-address1');
    const billingAddress2 = document.getElementById('billing-address2');
    const billingAddress3 = document.getElementById('billing-address3');
    const billingAddress4 = document.getElementById('billing-address4');

    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

    let formValid = true;

    if (!email.value) {
        document.getElementById('email-error').style.display = 'block';
        formValid = false;
    }
    if (!address.value) {
        document.getElementById('address-error').style.display = 'block';
        formValid = false;
    }
    if (!bdate.value) {
        document.getElementById('bdate-error').style.display = 'block';
        formValid = false;
    }
    if (!sexM.checked && !sexF.checked) {
        document.getElementById('sex-error').style.display = 'block';
        formValid = false;
    }
    if (!nationality.value) {
        document.getElementById('nationality-error').style.display = 'block';
        formValid = false;
    }
    if (!cardNumber1.value || !cardNumber2.value || !cardNumber3.value) {
        document.getElementById('card-info-error').style.display = 'block';
        formValid = false;
    }
    if (!cardName.value) {
        document.getElementById('card-name-error').style.display = 'block';
        formValid = false;
    }
    if (!billingAddress1.value || !billingAddress2.value || !billingAddress3.value || !billingAddress4.value) {
        document.getElementById('billing-address-error').style.display = 'block';
        formValid = false;
    }
    if (formValid) {
        document.querySelector('form').submit();
    }
}

document.querySelector('.categories3').addEventListener('click', function() {
    var cardElement = document.querySelector('.card');
    var bankElement1 = document.querySelector('.banks');

    if (cardElement.style.display === 'none' || cardElement.style.display === '') {
        cardElement.style.display = 'block';
        bankElement1.style.display = 'none';

    } 
});

document.querySelector('.categories4').addEventListener('click', function() {
    var bankElement = document.querySelector('.banks');
    var cardElement1 = document.querySelector('.card');

    if (bankElement.style.display === 'none' || bankElement.style.display === '') {
        bankElement.style.display = 'block';
        cardElement1.style.display = 'none';
    } 
});
  
document.querySelector('.categories1').addEventListener('click', function() {
    var cardElement2 = document.querySelector('.card');
    var bankElement2 = document.querySelector('.banks');

        cardElement2.style.display = 'none';
        bankElement2.style.display = 'none';

    } 
);

document.querySelector('.categories2').addEventListener('click', function() {
    var cardElement3 = document.querySelector('.card');
    var bankElement3 = document.querySelector('.banks');

        cardElement3.style.display = 'none';
        bankElement3.style.display = 'none';

    } 
);