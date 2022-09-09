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
    //console.log(e.target.className);

    if (e.target != getStartedForm && e.target != getStartedBtn && e.target.className != "title-send-request" && e.target.className != "input" && e.target.className != "content" && e.target.className != "submit-btn" && e.target.className != "web-project" && e.target.className != "mobile-project" && e.target.className != "web" && e.target.className != "mobile" && e.target.className != "radio-btn" && e.target.className != "our-getStarted-form" && e.target.className.indexOf("input") == -1) {
        if (getStartedForm.classList.contains("active")) {
            removeOverlayAndForm();
        }
    }
});

// sending the request to the server js :
document.querySelector(".our-getStarted-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.querySelector(".username").value;
    const phoneNum = document.querySelector(".phoneNum").value;
    const email = document.querySelector(".email").value;
    const project = document.querySelector(".radio-btn").value;
    const text = document.querySelector(".text").value;

    /*  console.log(username);
     console.log(phoneNum);
     console.log(email);
     console.log(project);
     console.log(text); */

    let user = {
        username: username.trim(),
        email: email.trim(),
        phoneNum: phoneNum.trim(),
        project: project,
        text: text.trim(),
    }


    console.log(user);

    const params = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    fetch("http://localhost:5000/", params)
        .then((res) => {
            console.log(res.json()) ;
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
});




/*  
    */

