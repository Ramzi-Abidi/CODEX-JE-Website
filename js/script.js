const numbers = document.querySelectorAll(".stats .container .number");
const links = document.querySelectorAll("header .container .main-links li a");
const getStartedBtn = document.querySelector(".btn");
const getStartedForm = document.querySelector(".getStarted-form");

let ok = true;

console.log(document.querySelector(".features"));

function start() {
    let interv;
    console.log(numbers[0]);
    let i = 0;
    interv = setInterval(() => {
        i++;
        numbers[0].textContent = i;
        if (i === 30)
            clearInterval(interv);
    }, 50);
}
function start1() {
    let interv;
    let i = 0;
    interv = setInterval(() => {
        i++;
        numbers[1].textContent = i;
        if (i === 30)
            clearInterval(interv);
    }, 50);
}
function start2() {
    let interv;
    let i = 0;
    interv = setInterval(() => {
        i++;
        numbers[2].textContent = i;
        if (i === 21)
            clearInterval(interv);
    }, 50);
}
/* function start3() {
    let interv;
    let i = 0;
    interv = setInterval(() => {
        i++;
        numbers[3].textContent = i;
        if (i === 25)
            clearInterval(interv);
    }, 50);
} */

/* function scrollSomeWhere(s) {
    console.log(s);

    let sec = document.querySelector("."+s);
    console.log(sec);

    sec.scrollIntoView(true);
} */

/* function scrollInto() {
    links.forEach(el => {
        el.addEventListener("click", (e) => {
            console.log(el.textContent);
            scrollSomeWhere(el.textContent);
        });
    });
} */

/* scrollInto(); */

window.addEventListener("scroll", () => {
    if (ok) {
        /* console.log("scrolling");
        console.log(window.scrollY);*/
        if (window.scrollY >= 4370) {
            start();
            start1();
            start2();
            ok = false;
        }
    }
})

// creating the overlay dynamically :
getStartedBtn.addEventListener("click", () => {
    let div = document.createElement("div");
    div.className = "overlay";
    document.body.appendChild(div);
    getStartedForm.classList.toggle("active");
});

function removeOverlayAndForm() {
    getStartedForm.classList.toggle("active");
    console.log(document.querySelector(".overlay"));
    let overlay = document.querySelector(".overlay");
    overlay.remove();      // removing the verlay dynamically
}

// removing the form and the overlay :
document.addEventListener("click", (e) => {
    if (e.target != getStartedForm && e.target != getStartedBtn && e.target.className != "title-send-request" && e.target.className != "input" && e.target.className != "content" && e.target.className != "submit-btn") {
        if (getStartedForm.classList.contains("active")) {
            removeOverlayAndForm();
        }
    }
});

// sending the request to the email js :

document.querySelector(".submit-btn").addEventListener("click", () => {
    alert("a");
    removeOverlayAndForm();
})