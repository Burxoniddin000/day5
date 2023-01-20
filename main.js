let elInput = document.querySelector(".input")
let elbtn = document.querySelector(".hisob")
let eltaxt = document.querySelector(".taxt")

elbtn.addEventListener("click", function () {
    let son = elInput.value;

    if (!(son % 2 == 0) && !(son % 3 == 0) && !(son % 5 == 0) && !(son % 7 == 0)) {
        eltaxt.textContent = "son tub";
    } else {
        eltaxt.textContent = "son tub emas";
    }

})

