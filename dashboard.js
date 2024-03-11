
const burguerMenuBtn = document.getElementById("burguerMenuBtn");
const burguerMenu = document.getElementById("burguerMenu");
let burguerMenuAct = false;

burguerMenuBtn.addEventListener('click', () => {

    if (burguerMenuAct == false) {
        burguerMenu.classList.remove("hidden");
        burguerMenu.classList.add("block");
        burguerMenuAct = true;
        console.log(burguerMenuAct);
    } else if (burguerMenuAct == true) {
        burguerMenu.classList.remove("block");
        burguerMenu.classList.add("hidden");
        burguerMenuAct = false;
        console.log(burguerMenuAct);
    }

})

