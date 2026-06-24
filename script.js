/* ==========================
FIXTURE TABS
========================== */

function showDay(dayId, button) {

```
document.querySelectorAll(".day").forEach(day => {
    day.classList.remove("active");
});

document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active");
});

document.getElementById(dayId).classList.add("active");

button.classList.add("active");
```

}

/* ==========================
OPEN TEAM
========================== */

function openTeam(team) {

```
document.getElementById("teamContent").innerHTML = `

    <div class="team-header">

        <h2>${team.toUpperCase()}</h2>

        <p>
            Squad information coming soon.
        </p>

    </div>

`;

document.getElementById("teamModal").style.display = "block";
```

}

/* ==========================
CLOSE TEAM
========================== */

function closeTeam() {

```
document.getElementById("teamModal").style.display = "none";
```

}

/* ==========================
CLICK OUTSIDE MODAL
========================== */

window.onclick = function(event) {

```
const modal = document.getElementById("teamModal");

if (event.target === modal) {

    modal.style.display = "none";

}
```

};
