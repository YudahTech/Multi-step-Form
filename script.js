const tableRow = document.querySelectorAll("table tr ")
const pages = document.querySelectorAll(".page")
const nextStep = document.querySelectorAll(" .next-step")
const goBack = document.querySelectorAll(" .go-back")
const errorMessage = document.querySelector("error-message");
const plans = document.querySelectorAll(".level");
const input = document.querySelectorAll("input");
// const required = document.querySelectorAll("required");
let nameLabel = document.querySelector(".name-label");
let emailLabel = document.querySelector(".email-label");
let contactLabel = document.querySelector(".contact-label");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputContact = document.querySelector("#phone-number");
const boxes = document.querySelectorAll(".box");
const checks = document.querySelectorAll(".check");
const toggle = document.querySelector(".toggle")
const arcade = document.querySelector(".price-plan-arcade");
const advanced = document.querySelector(".price-plan-advanced");
const firstAddons = document.querySelector(".addons-price-1");
const secondAddons = document.querySelector(".addons-price-2");
const thirdAddons = document.querySelector(".addons-price-3");
const step3 = document.querySelector(".step-3")
const pro = document.querySelector(".price-plan-pro");
let monthlyPlan = document.querySelector(".mo-plan");
    let yearlyPlan = document.querySelector(".yr-plan");
    monthlyPlan.style.fontWeight = "bold"
    const icons = document.querySelectorAll(".steps")
    // const heading = document.querySelectorAll(".box h3")
    // console.log(heading)
let currentStep = 0;
let currentIcon = 0;

// Array to store selected items
let selectedItems = [];


toggle.addEventListener("change", function () {

    if (!this.checked) {
        monthlyPlan.style.fontWeight = "bold"
        yearlyPlan.style.fontWeight = "normal"
        arcade.textContent = `$9/mo`
       advanced.textContent = `$12/mo`
       pro.textContent = `$15/mo`
       firstAddons.textContent = `$1/mo`
       secondAddons.textContent = `$2/mo`
       thirdAddons.textContent = `$2/mo`
    }else{
        yearlyPlan.style.fontWeight = "bold"
       monthlyPlan.style.fontWeight = "normal"
       arcade.textContent = `$90/yr`
       advanced.textContent = `$120/yr`
       pro.textContent = `$150/yr`
       firstAddons.textContent = `$10/yr`
       secondAddons.textContent = `$20/yr`
       thirdAddons.textContent = `$20/yr`
    }
box();

})


function showForm(step){
    pages.forEach(function (page,index) {
        if (index === step) {
            page.classList.remove("hide");
            if (index < icons.length) {
                icons[index].style.backgroundColor = 'hsl(231, 100%, 99%)';
            }
        } else {
            page.classList.add("hide");
        }
    })
}

showForm(currentStep);

nextStep.forEach(function (button,index) {
    button.addEventListener('click', function (event) {
        event.preventDefault()
        let isValid = true;

            if(inputName.value === "" ){
                inputName.style.borderColor = "red";
                nameLabel.innerHTML = "The field is required";
                isValid = false
                        }

            if(inputEmail.value === "" || !inputEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    inputEmail.style.borderColor = "red";
    emailLabel.innerHTML = "The field is required";
    isValid = false
            }

            if(inputContact.value === "" || !inputContact.value.match(/^\d{11}$/)){
    inputContact.style.borderColor = "red";
    contactLabel.innerHTML = "The field is required";
    isValid = false
            }


        if (isValid) {
            currentStep++;
                showForm(currentStep);

            }
        })

    })

    goBack.forEach(function (button, index) {
        button.addEventListener('click', function () {
            icons[currentStep].style.backgroundColor = 'transparent';
            currentStep--;
            showForm(currentStep);
            selectedItems.forEach((item) =>
                {
                    item.classList.remove("active")
                    let checkbox = item.querySelector('input[type="checkbox"]')

                if (checkbox) {
                    checkbox.checked  = !checkbox.checked

                }

            })

    // Clear the selectedItems array
    selectedItems = [];

        })

    })

const summaryHeading = document.querySelector(".lists .head h3")
const summaryPrice = document.querySelector(".lists .head span")
    function box() {
        boxes.forEach(function (box) {
            if(box.classList.contains("active")){
                const heading = box.children[1].textContent;
                console.log(heading)
                const price = box.children[2].textContent;
                summaryHeading.innerHTML = `${heading}`
                summaryPrice.innerHTML = `${price}`
            }
            box.addEventListener('click',function () {
                boxes.forEach(function (box) {
                    box.classList.remove("active");
                });
                box.classList.add("active");

                if(box.classList.contains("active")){
                    const heading = box.children[1].textContent;
                    console.log(heading)
                    const price = box.children[2].textContent;
                    summaryHeading.innerHTML = `${heading}`
                    summaryPrice.innerHTML = `${price}`


                }


            })
        })
    }
box();



const lists = document.querySelector(".lists");
const mainLists = document.querySelector(".main-list");
const total = document.querySelector(".total");
let totalPrice = 0;

// Clear the mainLists container before attaching event listeners
mainLists.innerHTML = "";



checks.forEach(function (check) {
    check.addEventListener('click', function () {
        check.classList.toggle("active");

        // If the item is selected, add it to the array; if deselected, remove it
        if (check.classList.contains("active")) {
            selectedItems.push(check);
        } else {
            selectedItems = selectedItems.filter(item => item !== check);
        }

        // Update the list
        updateList();
    });
});

function updateList() {
    // Clear the list
    mainLists.innerHTML = "";
    totalPrice = 0;

    // Add selected items to the list
    selectedItems.forEach(function (check) {
        const heading = check.childNodes[1].childNodes[1].childNodes[0].childNodes[3].childNodes[1].textContent;
        const price = check.childNodes[1].childNodes[1].childNodes[0].childNodes[5].childNodes[0].textContent;

        let text = document.createElement("div");
        text.classList.add("list");
        const summaryText = document.createElement("p");
        const summaryPrice = document.createElement("span");

        summaryText.textContent = heading;
        summaryPrice.textContent = price;
        text.appendChild(summaryText);
        text.appendChild(summaryPrice);
        mainLists.appendChild(text);

        let currency = parseFloat(price.match(/\$\d+(\.\d+)?/)[0].substring(1));

        if (!isNaN(currency)) {
            totalPrice += currency;
        }
    });

    // Update total price
    total.innerHTML = `$${totalPrice}`;
}








    tableRow.forEach(function (row,index) {
        row.addEventListener("click", function () {
            this
            let checkbox = this.querySelector('input[type="checkbox"]')

            if (checkbox) {
                checkbox.checked  = !checkbox.checked

            }

        })
    })























// nextStep.forEach(function (formStep) {
//     formStep.addEventListener("click",function (event) {
//         event.preventDefault()
//         let currentForm = this.parentNode.parentNode;
//         let nextForm = currentForm.nextElementSibling;
//         let icon = currentForm.children[0];
//         console.log(currentForm)
//     if(nextForm){
//         currentForm.classList.add("hide");
//         nextForm.classList.remove("hide");
//         icon.style.backgroundColor = "white"
//         icon.style.borderRadius = "50%"
//     }

// })
// })

// goBack.forEach(function (formStep) {
//     formStep.addEventListener("click",function (event) {
//         event.preventDefault()
//         let currentForm = this.parentNode.parentNode;
//         let previousForm = currentForm.previousElementSibling;
//         let icon = currentForm.children[0];
//         console.log(currentForm)
//     if(previousForm){
//         currentForm.classList.add("hide");
//         previousForm.classList.remove("hide");
//         icon.style.backgroundColor = "white"
//         icon.style.borderRadius = "50%"
//     }

// })
// })




// let nextForm = currentForm.nextElementSibling;
    //     console.log(currentForm)
    //     let clickedElement =  event.target;
    //     console.log(currentForm.classList.contains("form-step-2"))