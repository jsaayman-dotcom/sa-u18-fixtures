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
TEAM DATABASE
========================== */

const teams = {

```
lions: {

```
name: "Lions",

coach: "Mashudu Raphunga",

manager: "Andrew Barnes",

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
    },

    {
        no: 5,
        name: "MC Van Tonder",
        school: "Helpmekaar"
    },

    {
        no: 6,
        name: "Llewelyn Vermaak",
        school: "Helpmekaar"
    },

    {
        no: 7,
        name: "Naledi Phiri",
        school: "KES"
    },

    {
        no: 8,
        name: "Ryno Van Der Westhuizen",
        school: "Monument"
    },

    {
        no: 9,
        name: "Lethabo Malahlela",
        school: "Parktown"
    },

    {
        no: 10,
        name: "Cameron Kourie",
        school: "Monument"
    }

]
```

},

lionsxv: {
    name: "Lions XV",
    coach: "TBC",
    manager: "TBC",
    players: []
},

bulls: {
    name: "Blue Bulls",
    coach: "Dillon Smith",
    manager: "Carlos Augusto",
    players: []
},

limpopo: {
    name: "Limpopo Blue Bulls",
    coach: "TBC",
    manager: "TBC",
    players: []
},

wp: {
    name: "Western Province",
    coach: "TBC",
    manager: "TBC",
    players: []
},

sharks: {
    name: "Sharks",
    coach: "TBC",
    manager: "TBC",
    players: []
},

ep: {
    name: "Eastern Province",
    coach: "TBC",
    manager: "TBC",
    players: []
},

border: {
    name: "Border",
    coach: "TBC",
    manager: "TBC",
    players: []
},

bordercd: {
    name: "Border CD",
    coach: "TBC",
    manager: "TBC",
    players: []
},

boland: {
    name: "Boland",
    coach: "Pieter Burger",
    manager: "Hein Pieterse",
    players: []
},

freestate: {
    name: "Free State",
    coach: "TBC",
    manager: "TBC",
    players: []
},

griffons: {
    name: "Griffons",
    coach: "TBC",
    manager: "TBC",
    players: []
},

griquas: {
    name: "Griquas",
    coach: "TBC",
    manager: "TBC",
    players: []
},

leopards: {
    name: "Leopards",
    coach: "TBC",
    manager: "TBC",
    players: []
},

pumas: {
    name: "Pumas",
    coach: "TBC",
    manager: "TBC",
    players: []
},

valke: {
    name: "Valke",
    coach: "TBC",
    manager: "TBC",
    players: []
},

swd: {
    name: "SWD",
    coach: "TBC",
    manager: "TBC",
    players: []
},

namibia: {
    name: "Namibia",
    coach: "TBC",
    manager: "TBC",
    players: []
},

zimbabwe: {
    name: "Zimbabwe",
    coach: "TBC",
    manager: "TBC",
    players: []
},

salsen: {
    name: "SA LSEN",
    coach: "TBC",
    manager: "TBC",
    players: []
}
```

};

/* ==========================
OPEN TEAM
========================== */

function openTeam(team){

```
const t = teams[team];

if(!t) return;

let content = `

    <div class="team-header">

        <h2>${t.name}</h2>

        <div class="team-info">

            <div class="info-box">

                <strong>Coach</strong><br>

                ${t.coach}

            </div>

            <div class="info-box">

                <strong>Manager</strong><br>

                ${t.manager}

            </div>

        </div>

    </div>

`;

if(t.players.length > 0){

    let rows = "";

    t.players.forEach(player => {

        rows += `

            <tr>

                <td>${player.no}</td>

                <td>${player.name}</td>

                <td>${player.school || ""}</td>

            </tr>

        `;

    });

    content += `

        <table class="player-table">

            <thead>

                <tr>

                    <th>No</th>

                    <th>Name</th>

                    <th>School</th>

                </tr>

            </thead>

            <tbody>

                ${rows}

            </tbody>

        </table>

    `;

} else {

    content += `

        <p style="text-align:center; margin-top:20px;">

            Squad Information Coming Soon

        </p>

    `;

}

document.getElementById("teamContent").innerHTML = content;

document.getElementById("teamModal").style.display = "block";
```

}


```
const t = teams[team];

if(!t) return;

document.getElementById("teamContent").innerHTML = `

    <div class="team-header">

        <h2>${t.name}</h2>

        <div class="team-info">

            <div class="info-box">

                <strong>Coach</strong><br>

                ${t.coach}

            </div>

            <div class="info-box">

                <strong>Manager</strong><br>

                ${t.manager}

            </div>

        </div>

        <p>
            Squad Information Coming Soon
        </p>

    </div>

`;

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
