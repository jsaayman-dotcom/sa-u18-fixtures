/* ==========================
   FIXTURE TABS
========================== */

function showDay(dayId, button){

    document.querySelectorAll(".day").forEach(day => {
        day.classList.remove("active");
    });

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById(dayId).classList.add("active");

    button.classList.add("active");
}


/* ==========================
   COUNTDOWN TIMER
========================== */

const tournamentDate = new Date("July 6, 2026 08:30:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const difference = tournamentDate - now;

    if(difference < 0){

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* ==========================
   SCROLL ANIMATION
========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
    ".stat-card, .weather-card, .fixture-card, .team-card, .venue-card"
).forEach(el => {

    observer.observe(el);

});


/* ==========================
   NAVBAR SHADOW
========================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow =
            "0 6px 20px rgba(0,0,0,.25)";

    }else{

        navbar.style.boxShadow =
            "0 4px 15px rgba(0,0,0,.15)";

    }

});
