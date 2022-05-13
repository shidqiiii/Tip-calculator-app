let bill = document.getElementById("input-bill");
let tip = document.querySelectorAll(".tip-amount");
let people = document.getElementById("input-people");
let reset = document.getElementById("reset");
let tipamount = document.getElementById("tip-person");
let totalamount = document.getElementById("total-person");
let customtip = document.getElementById("input-tip");

let tipMuch = "";

bill.addEventListener('keyup', number)

customtip.addEventListener('keyup', function () {
    tipMuch = customtip.value
    tip.forEach(element => {
        element.classList.remove("selected");
    })
    SplitTip(parseFloat(bill.value), parseFloat(tipMuch), parseInt(people.value));
})

people.addEventListener('keyup', function () {
    number();
    SplitTip(parseFloat(bill.value), parseFloat(tipMuch), parseInt(people.value));
})

function number() {
    if (parseInt(people.value) === "" || parseFloat(bill.value) === "") {
        reset.disabled = true
    }
    if (parseInt(people.value) === 0) {
        document.getElementById("error-message").style.display = "block";
        document.getElementsByClassName("input-value")[1].style.border = "1px solid rgb(198, 45, 14)";
    }
    else {
        reset.disabled = false
        document.getElementById("error-message").style.display = "none";
        document.getElementsByClassName("input-value")[1].style.border = "1px solid hsl(189, 41%, 97%)";
    }
}

function SplitTip(billAmount, tipAmount, personAmount) {
    let tipPerPerson = (billAmount * tipAmount / 100) / personAmount
    let totalPerPerson = (billAmount / personAmount) + tipPerPerson

    tipamount.innerHTML = "$" + tipPerPerson.toFixed(2).toString();
    totalamount.innerHTML = "$" + totalPerPerson.toFixed(2).toString();
}

tip.forEach(tips => {
    tips.addEventListener('click', function () {
        tipMuch = tips.id
        customtip.value = ""

        tip.forEach(element => {
            element.classList.remove("selected");
            this.classList.add("selected")
        })

        SplitTip(parseFloat(bill.value), parseFloat(tipMuch), parseInt(people.value));
    })
});

reset.addEventListener('click', function () {
    bill.value = ""
    people.value = ""
    tipamount.innerHTML = "$0.00"
    totalamount.innerHTML = "$0.00"
    reset.disabled = true
    tip.forEach(element => {
        element.classList.remove("selected");
    })
})