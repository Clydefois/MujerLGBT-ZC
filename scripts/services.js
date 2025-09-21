// Get all elements with a common setup
const modals = {
    hiv: document.getElementById("modalHiv"),
    covid: document.getElementById("modalCovid"),
    monkey: document.getElementById("modalMonkey"),
};

const openModalButtons = {
    hiv: document.getElementById("hiv"),
    covid: document.getElementById("covid"),
    monkey: document.getElementById("monkey"),
};

// Attach event listeners for opening modals
Object.keys(openModalButtons).forEach((key) => {
    const button = openModalButtons[key];
    const modal = modals[key];

    button.addEventListener("click", () => {
        modal.style.display = "flex"; // Show the corresponding modal
    });

    // Close the modal when clicking the close button
    modal.querySelector(".close").addEventListener("click", () => {
        modal.style.display = "none"; // Hide the modal
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

let num1 = 1; // input value for condom
let num2 = 1; // input value for lube
let num3 = 1; // input value for shirt


function addCart1(inputid) {
    const CTotal = document.getElementById(inputid);
    if (inputid === 'CondomTotal') {
        num1 = num1 + 1;
        CTotal.value = num1;
    } else if (inputid === 'LubTotal') {
        num2 = num2 + 1;
        CTotal.value = num2;
    } else if (inputid === 'ShirtTotal') {
        num3 = num3 + 1;
        CTotal.value = num3;
    }
}

function subCart1(inputid) {
    const CTotal = document.getElementById(inputid);

    if (inputid === 'CondomTotal') {
        if (num1 === 1) {
            num1 = 1;
        } else {
            num1 = num1 - 1;
            CTotal.value = num1;
        }
    } else if (inputid === 'LubTotal') {
        if (num2 === 1) {
            num2 = 1;
        } else {
            num2 = num2 - 1;
            CTotal.value = num2;
        }
    } else if (inputid === 'ShirtTotal') {
        if (num3 === 1) {
            num3 = 1;
        } else {
            num3 = num3 - 1;
            CTotal.value = num3;
        }
    }
}


function miniScreen() {
    const page = document.getElementById('cartPage');
    if (page.style.display === 'none' || page.style.display === '') {
        page.style.display = 'block';
    } else {
        page.style.display = 'none';
    }
}
/* 
    let num1 = 1; // input value for condom
    let num2 = 1; // input value for lube
    let num3 = 1; // input value for shirt
    ctotal1 = buttonId for input div 1 
    ctotal2 = buttonId for input div 2
    ctotal3 = buttonId for input div 3
    cartProduct1 = main div ng item 1 sa cart
    cartProduct2 = main div ng item 2 sa cart
    cartProduct3 = main div ng item 3 sa cart
    totalqueue = span id para ma change ang total amount
    CondomTotal = button ID for button ng nasa item shop for condom
    LubTotal = button ID for button ng nasa item shop for Lubricants
    ShirtTotal = button ID for button ng nasa item shop for Shirt
    condom = inputID for condom sa main shop
    lubricant = inputID for lubricant sa main shop
    pshirt = input ID for shirt sa main shop
    cartTotals = yung number sa gilid ng cart (yung button na nagpapabukas ng cart)
    cprod1 = inputID para sa buttons na nasa loob ng cart (condom)
    cprod2 = inputID para sa buttons na nasa loob ng cart (lubricant)
    cprod3 = inputID para sa buttons na nasa loob ng cart (shirt)

*/

let cnum1 = 0; // sakanya istore ang value ng num1 after ireset to 1
let cnum2 = 0; // sakanya istore ang value ng num2 after ireset to 1
let cnum3 = 0; // sakanya istore ang value ng num3 after ireset to 1
var cartDiv1 = document.getElementById('ctotal1'); // buttonID for cartProduct1
var cartDiv1 = document.getElementById('ctotal2'); // buttonID for cartProduct2
var cartDiv1 = document.getElementById('ctotal3'); // buttonID for cartProduct3
var mainShop1 = document.getElementById('CondomTotal'); //buttonID for main shop input for condom
var mainShop2 = document.getElementById('LubTotal');  //buttonID for main shop input for lubricant
var mainShop3 = document.getElementById('ShirtTotal'); //buttonID for main shop input for shirts
let totalCart = 0; //total amount ng babayaran sa cart
var changeAmount = document.getElementById('totalqueue');
var outcartTotal = document.getElementById('cartTotals');
let cart = 0;



function updateTotal(price) {
    totalCart = (cnum1 + cnum2 + cnum3) * price;
    changeAmount.innerText = totalCart;
}

function subtractTotal(price) {
    totalCart = totalCart - price;
    changeAmount.innerText = totalCart;
}


function addToCart(inputID, divName) { //inputID = buttonID ng main items sa webage, divName = main div per item sa cart
    const displayer = document.querySelector(divName); //cartProduct1 and displayer
    const currentDisplay = getComputedStyle(displayer).display;
    const buttonDisplay = document.getElementById(inputID); //condom ang inputID
    if (inputID === 'condom') { //checker if tama ang button
        if (getComputedStyle(displayer).display === 'none') { // if yung display ng div is none, change to flex
            displayer.style.display = 'flex'; // change div display to flex
            cnum1 = num1; //kunin niya ang value ng num 1
            num1 = 1; // reset counter sa num1 para maging 1 ang input everytime mag add to cart
            ctotal1.value = cnum1; //change button value to num1 value sa cart.
            mainShop1.value = num1; // resets the button value ng main shop condom
            cart = cart + 1; // counter
            cartTotals.innerText = cart; //change span value ng cart
            updateTotal(150);
        } else {
            ctotal1.value = parseInt(ctotal1.value) + num1 //current value sa input button ng item sa cart
            cnum1 = cnum1 + num1; // increment old value + new value (num1)
            num1 = 1; //reset
            ctotal1.value = cnum1; //change value ng buttonId na nasa loob ng cart for 1st div
            mainShop1.value = num1; //change buttonId ng condom sa main shop
            updateTotal(150);
        }
    }

    if (inputID === 'lubricant') { //checker if tama ang button
        if (getComputedStyle(displayer).display === 'none') { // if yung display ng div is none, change to flex
            displayer.style.display = 'flex'; // change div display to flex
            cnum2 = num2; //kunin niya ang value ng num 1
            num2 = 1; // reset counter sa num1 para maging 1 ang input everytime mag add to cart
            ctotal2.value = cnum2; //change button value to num1 value sa cart.
            mainShop2.value = num2; // resets the button value ng main shop condom
            cart = cart + 1; // counter
            cartTotals.innerText = cart; //change span value ng cart
            updateTotal(150);
        } else {
            ctotal2.value = parseInt(ctotal2.value) + num2 //current value sa input button ng item sa cart
            cnum2 = cnum2 + num2; // increment old value + new value (num1)
            num2 = 1; //reset
            ctotal2.value = cnum2; //change value ng buttonId na nasa loob ng cart for 1st div
            mainShop2.value = num2; //change buttonId ng condom sa main shop
            updateTotal(150);
        }
    }

    if (inputID === 'pshirt') { //checker if tama ang button
        if (getComputedStyle(displayer).display === 'none') { // if yung display ng div is none, change to flex
            displayer.style.display = 'flex'; // change div display to flex
            cnum3 = num3; //kunin niya ang value ng num 1
            num3 = 1; // reset counter sa num1 para maging 1 ang input everytime mag add to cart
            ctotal3.value = cnum3; //change button value to num1 value sa cart.
            mainShop3.value = num3; // resets the button value ng main shop condom
            cart = cart + 1; // counter
            cartTotals.innerText = cart; //change span value ng cart
            updateTotal(150);
        } else {
            ctotal3.value = parseInt(ctotal3.value) + num3 //current value sa input button ng item sa cart
            cnum3 = cnum3 + num3; // increment old value + new value (num1)
            num3 = 1; //reset
            ctotal3.value = cnum3; //change value ng buttonId na nasa loob ng cart for 1st div
            mainShop3.value = num3; //change buttonId ng condom sa main shop
            updateTotal(150);
        }
    }

}

function addCart(inputID) {
    if (inputID === 'cprod1') {
        cnum1 = cnum1 + 1;
        ctotal1.value = cnum1;
        updateTotal(150);
    }
    if (inputID === 'cprod2') {
        cnum2 = cnum2 + 1;
        ctotal2.value = cnum2;
        updateTotal(150);
    }
    if (inputID === 'cprod3') {
        cnum3 = cnum3 + 1;
        ctotal3.value = cnum3;
        updateTotal(150);
    }
}

function subCart(inputID, divName) {
    if (inputID === 'cprod1') { //cprod = inputID, .cartProduct1 = divName
        if (cnum1 === 1) {
            var displayer = document.querySelector(divName);
            displayer.style.display = 'none';
            cart = cart - 1;
            cartTotals.innerText = cart;
            subtractTotal(150);
        } else {
            cnum1 = cnum1 - 1;
            ctotal1.value = cnum1;
            subtractTotal(150);
        }
    }
    if (inputID === 'cprod2') { //cprod2 = inputID, .cartProduct2 = divName
        if (cnum2 === 1) {
            var displayer = document.querySelector(divName);
            displayer.style.display = 'none';
            cart = cart - 1;
            cartTotals.innerText = cart;
            subtractTotal(150);
        } else {
            cnum2 = cnum2 - 1;
            ctotal2.value = cnum2;
            subtractTotal(150);
        }
    }
    if (inputID === 'cprod3') { //cprod3 = inputID, .cartProduct3 = divName
        if (cnum3 === 1) {
            var displayer = document.querySelector(divName);
            displayer.style.display = 'none';
            cart = cart - 1;
            cartTotals.innerText = cart;
            subtractTotal(150);
        } else {
            cnum3 = cnum3 - 1;
            ctotal3.value = cnum3;
            subtractTotal(150);
        }
    }

}