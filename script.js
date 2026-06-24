/* ==========================
FIXTURE TABS
========================== */

function showDay(dayId, button){

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
TEAM POPUP
========================== */

function openTeam(team){

```
const t = teams[team];

if(!t) return;

let rows = "";

if(t.players.length > 0){

    t.players.forEach(player => {

        rows += `
            <tr>
                <td>${player.no || ""}</td>
                <td>${player.name || ""}</td>
                <td>${player.position || ""}</td>
                <td>${player.school || ""}</td>
                <td>${player.height || ""}</td>
                <td>${player.weight || ""}</td>
                <td>${player.age || ""}</td>
            </tr>
        `;

    });

} else {

    rows = `
        <tr>
            <td colspan="7">
                Squad Information Coming Soon
            </td>
        </tr>
    `;

}

document.getElementById("teamContent").innerHTML = `

    <div class="team-header">

        <h2>${t.name}</h2>

        <div class="team-info">

            <div class="info-box">

                <strong>Head Coach</strong><br>

                ${t.coach}

            </div>

            <div class="info-box">

                <strong>Manager</strong><br>

                ${t.manager}

            </div>

        </div>

    </div>

    <table class="player-table">

        <thead>

            <tr>

                <th>No</th>
                <th>Name</th>
                <th>Position</th>
                <th>School</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Age</th>

            </tr>

        </thead>

        <tbody>

            ${rows}

        </tbody>

    </table>

`;

document.getElementById("teamPageBtn").href = t.page;

document.getElementById("teamModal").style.display = "block";
```

}


/* ==========================
CLOSE TEAM
========================== */

function closeTeam(){

```
document.getElementById("teamModal").style.display = "none";
```

}

/* ==========================
CLICK OUTSIDE MODAL
========================== */

window.onclick = function(event){

```
const modal =
document.getElementById("teamModal");

if(event.target === modal){

    modal.style.display = "none";

}
```

};
/* ==========================
TEAM DATABASE
========================== */

const teams = {

```
lions: {

    name: "Lions U18 Academy",

    coach: "Mashudu Raphunga",

    manager: "Andrew Barnes",

    page: "teams/lions.html",

    players: [

        {
            no: 1,
            name: "Joshua Hammann",
            school: "Jeppe"
        },

        {
            no: 2,
            name: "Mahlatse Memeza",
            school: "Jeppe"
        },

        {
            no: 3,
            name: "Jordan Venter",
            school: "Northcliff"
        },

        {
            no: 4,
            name: "Matthew Van Deventer",
            school: "Monument"
        }

    ]

},

lionsxv: {

    name: "Lions XV",

    coach: "TBC",

    manager: "TBC",

    page: "teams/lionsxv.html",

    players: []

},

bulls: {

    name: "Blue Bulls",

    coach: "Dillon Smith",

    manager: "Carlos Augusto",

    page: "teams/bulls.html",

    players: []

},

limpopo: {

    name: "Limpopo Blue Bulls",

    coach: "TBC",

    manager: "TBC",

    page: "teams/limpopo.html",

    players: []

},

wp: {

    name: "Western Province",

    coach: "TBC",

    manager: "TBC",

    page: "teams/wp.html",

    players: []

},

sharks: {

    name: "Sharks",

    coach: "TBC",

    manager: "TBC",

    page: "teams/sharks.html",

    players: []

},

ep: {

    name: "Eastern Province",

    coach: "TBC",

    manager: "TBC",

    page: "teams/ep.html",

    players: []

}
```

};
,

```
border: {

    name: "Border",

    coach: "TBC",

    manager: "TBC",

    page: "teams/border.html",

    players: []

},

bordercd: {

    name: "Border CD",

    coach: "TBC",

    manager: "TBC",

    page: "teams/bordercd.html",

    players: []

},

boland: {

    name: "Boland",

    coach: "Pieter Burger",

    manager: "Hein Pieterse",

    page: "teams/boland.html",

    players: []

},

freestate: {

    name: "Free State",

    coach: "TBC",

    manager: "TBC",

    page: "teams/freestate.html",

    players: []

},

griffons: {

    name: "Griffons",

    coach: "TBC",

    manager: "TBC",

    page: "teams/griffons.html",

    players: []

},

griquas: {

    name: "Griquas",

    coach: "TBC",

    manager: "TBC",

    page: "teams/griquas.html",

    players: []

},

leopards: {

    name: "Leopards",

    coach: "TBC",

    manager: "TBC",

    page: "teams/leopards.html",

    players: []

},

pumas: {

    name: "Pumas",

    coach: "TBC",

    manager: "TBC",

    page: "teams/pumas.html",

    players: []

},

valke: {

    name: "Valke",

    coach: "TBC",

    manager: "TBC",

    page: "teams/valke.html",

    players: []

},

swd: {

    name: "SWD",

    coach: "TBC",

    manager: "TBC",

    page: "teams/swd.html",

    players: []

},

namibia: {

    name: "Namibia",

    coach: "TBC",

    manager: "TBC",

    page: "teams/namibia.html",

    players: []

},

zimbabwe: {

    name: "Zimbabwe",

    coach: "TBC",

    manager: "TBC",

    page: "teams/zimbabwe.html",

    players: []

},

salsen: {

    name: "SA LSEN",

    coach: "TBC",

    manager: "TBC",

    page: "teams/salsen.html",

    players: []

}
```
/* ==========================
CLOSE TEAM
========================== */

function closeTeam(){

```
document.getElementById("teamModal").style.display = "none";
```

}

/* ==========================
CLICK OUTSIDE MODAL
========================== */

window.onclick = function(event){

```
const modal =
document.getElementById("teamModal");

if(event.target === modal){

    modal.style.display = "none";

}
```

};

/* ==========================
ESC KEY CLOSE
========================== */

document.addEventListener("keydown", function(event){

```
if(event.key === "Escape"){

    closeTeam();

}
```

});

/* ==========================
PAGE LOADED
========================== */

document.addEventListener("DOMContentLoaded", function(){

```
console.log(
    "SA U18 Academy Week 2026 Loaded"
);
```

});
