var bill = document.getElementById("input-bill");
var tip = document.querySelectorAll(".tip-amount");
var people = document.getElementById("input-people");
var reset = document.getElementById("reset");
let tipamount = document.getElementById("tipperson");
let totalamount = document.getElementById("totalperperson");
let customtip = document.getElementById("input-tip");

bill.addEventListener('keyup', number)
people.addEventListener('keyup', number)

function number() {
    if (people.value === "" || bill.value === "") {
        reset.disabled = true
    }
    if (people.value === "0") {
        document.getElementById("error-message").style.display = "block";
        document.getElementsByClassName("input-value")[1].style.border = "1px solid rgb(198, 45, 14)";
    }
    else {
        reset.disabled = false
        document.getElementById("error-message").style.display = "none";
        document.getElementsByClassName("input-value")[1].style.border = "1px solid $very-light-grayish-cyan";
    }
}

tip.forEach(tips => {
    tips.addEventListener('click', function () {
        console.log(tips.id)

        tip.forEach(element => {
            element.classList.remove("selected");

            this.classList.add("selected")
        })

        let tipPerPerson = (parseFloat(bill.value) * parseFloat(tips.id) / 100) / people.value
        let totalPerPerson = (parseFloat(bill.value) / people.value) + tipPerPerson

        if (bill.value == "" || people.value == "") {
            tipamount.innerHTML = "$0.00"
            totalamount.innerHTML = "$0.00"
        } else {
            tipamount.innerHTML = "$" + tipPerPerson.toFixed(2).toString();
            totalamount.innerHTML = "$" + totalPerPerson.toFixed(2).toString();
        }
    })
});

reset.addEventListener('click', function () {
    bill.value = ""
    people.value = ""
    tipamount.innerHTML = "$0.00"
    totalamount.innerHTML = "$0.00"
    reset.disabled = true
})