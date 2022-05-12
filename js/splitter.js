var bill = document.getElementById("input-bill");
var tip = document.querySelectorAll(".tip-amount");
var people = document.getElementById("input-people");
var reset = document.getElementById("reset");
let tipamount = document.getElementById("tipperson")
let totalamount = document.getElementById("totalperperson")

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
})