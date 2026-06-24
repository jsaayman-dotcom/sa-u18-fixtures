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

    name: "Lions U18 Academy",

    coach: "Mashudu Raphunga",

    manager: "Andrew Barnes",

    players: [

        { no:1, name:"Joshua Hammann", school:"Jeppe" },
        { no:2, name:"Mahlatse Memeza", school:"Jeppe" },
        { no:3, name:"Jordan Venter", school:"Northcliff" },
        { no:4, name:"Matthew Van Deventer", school:"Monument" },
        { no:5, name:"MC Van Tonder", school:"Helpmekaar" },
        { no:6, name:"Llewelyn Vermaak", school:"Helpmekaar" },
        { no:7, name:"Naledi Phiri", school:"KES" },
        { no:8, name:"Ryno Van Der Westhuizen", school:"Monument" },
        { no:9, name:"Lethabo Malahlela", school:"Parktown" },
        { no:10, name:"Cameron Kourie", school:"Monument" },
        { no:11, name:"Joshua Wilkinson", school:"KES" },
        { no:12, name:"Sam Smith", school:"KES" },
        { no:13, name:"Juandre Ehlers", school:"Monument" },
        { no:14, name:"Luyanda Mbadamana", school:"KES" },
        { no:15, name:"Loghan Langeveldt", school:"Monument" },
        { no:16, name:"Joshua Snyman", school:"KES" },
        { no:17, name:"Tswaledi Phasha", school:"KES" },
        { no:18, name:"Kwazi Noyka", school:"Jeppe" },
        { no:19, name:"Hanco Van Geelen", school:"Monument" },
        { no:20, name:"Allan Patu", school:"St John's" },
        { no:21, name:"Luxon Zwane", school:"Jeppe" },
        { no:22, name:"Luthando Marangxa", school:"Jeppe" },
        { no:23, name:"Asa Mgwatyu", school:"KES" }

    ]

},

lionsxv: {
    name: "Lions XV",
    coach: "TBC",
    manager: "TBC",
    players:[]
},

bulls: {

```
name: "Blue Bulls",

coach: "Dillon Smith",

manager: "Carlos Augusto",

players: [

    { no:1, name:"Francois de Beer", school:"Affies" },
    { no:2, name:"Regan Blignaut", school:"Zwartkop" },
    { no:3, name:"Reinhard Duvenhage", school:"Waterkloof" },
    { no:4, name:"Phillip Mans", school:"Waterkloof" },
    { no:5, name:"Reuben Vlok (Vice Captain)", school:"Affies" },
    { no:6, name:"Kwetsima Dlamini", school:"PBHS" },
    { no:7, name:"Duran Pieterse", school:"Menlopark" },
    { no:8, name:"Janno Geyser", school:"Affies" },
    { no:9, name:"Tilon Baron", school:"Zwartkop" },
    { no:10, name:"Caleb Africa", school:"Rietondale" },
    { no:11, name:"Brian Jacobs", school:"Oos-Moot" },
    { no:12, name:"David van Jaarsveld", school:"Zwartkop" },
    { no:13, name:"Meyer Pretorius (Captain)", school:"Waterkloof" },
    { no:14, name:"Neo Ledwaba", school:"Garsfontein" },
    { no:15, name:"Alex Griesel", school:"Waterkloof" },
    { no:16, name:"Stiaan Theron", school:"Waterkloof" },
    { no:17, name:"Esihle Mhlongo", school:"Heronbridge College" },
    { no:18, name:"Morne Bisset", school:"Affies" },
    { no:19, name:"Onyeari Didintle", school:"Overkruin" },
    { no:20, name:"Tshepang Rawida", school:"Cornwall Hill College" },
    { no:21, name:"Michael Bhuda", school:"Oos-Moot" },
    { no:22, name:"Kealan Cloete", school:"Die Wilgers" },
    { no:23, name:"Bradley Jacobs", school:"Oos-Moot" }

]
```

},

limpopo: {

```
name: "Limpopo Blue Bulls",

coach: "TBC",

manager: "TBC",

players: [

    { no:1, name:"Regardt Els", school:"Pietersburg Hoërskool", height:"180", weight:"101" },
    { no:2, name:"Daniel Musekene", school:"Hoërskool Louis Trichardt", height:"178", weight:"82" },
    { no:3, name:"Kgaugelo Mosima", school:"Hoërskool Nylstroom", height:"173", weight:"110" },
    { no:4, name:"Thamsanqa Lunga", school:"Hoërskool Ellisras", height:"186", weight:"99" },
    { no:5, name:"Lefa Motlhabane", school:"Hoërskool Frikkie Meyer", height:"185", weight:"83" },
    { no:6, name:"Jac Johan Gouws", school:"Hoërskool Ben Viljoen", height:"179", weight:"92" },
    { no:7, name:"Ignus Ferreira", school:"Pietersburg Hoërskool", height:"180", weight:"81" },
    { no:8, name:"Milan le Roux", school:"Merensky Landbou Skool", height:"185", weight:"87" },
    { no:9, name:"Mario Opperman", school:"Hoërskool Hans Strijdom", height:"173", weight:"68" },
    { no:10, name:"Rome Petersen", school:"Hoërskool Ben Viljoen", height:"179", weight:"72" },
    { no:11, name:"Tshiamo Mabuza", school:"Hoërskool Ben Vorster", height:"178", weight:"75" },
    { no:12, name:"Luhan Drotskie", school:"Hoërskool Ellisras", height:"184", weight:"86" },
    { no:13, name:"Jayden Enslin", school:"Hoërskool Hans Strijdom", height:"181", weight:"75" },
    { no:14, name:"Themba Mphahlele", school:"Northen Academy", height:"177", weight:"69" },
    { no:15, name:"Ryno Mienie", school:"Pietersburg Hoërskool", height:"175", weight:"73" },
    { no:16, name:"Tyron Calitz", school:"Hoërskool Ellisras", height:"176", weight:"84" },
    { no:17, name:"Koketso Kalape", school:"Hoërskool Ben Vorster", height:"176", weight:"95" },
    { no:18, name:"AJ van Jaarsveld", school:"Hoërskool Hans Strijdom", height:"183", weight:"110" },
    { no:19, name:"Pex Mametja", school:"Hoërskool Ben Vorster", height:"180", weight:"82" },
    { no:20, name:"Mare Pieterse", school:"Hoërskool Frikkie Meyer", height:"188", weight:"100" },
    { no:21, name:"Tshepo Makgai", school:"Hoërskool Ellisras", height:"175", weight:"73" },
    { no:22, name:"Reabetswe Senyolo", school:"Hoërskool Ellisras", height:"178", weight:"79" },
    { no:23, name:"Corne Loock", school:"Hoërskool Ben Viljoen", height:"180", weight:"65" }

]
```
},

wp: {
    name: "Western Province",
    coach: "TBC",
    manager: "TBC",
    players:[]
},

sharks: {
    name: "Sharks",
    coach: "TBC",
    manager: "TBC",
    players:[]
},

ep: {

```
name: "Eastern Province",

coach: "TBC",

manager: "TBC",

players: [

    { no:1, name:"Marcus September", position:"1", school:"Marlow", height:"173", weight:"98" },
    { no:2, name:"Luciano Othando Solani", position:"2", school:"Marlow", height:"170", weight:"90" },
    { no:3, name:"Lucas Anderson Wheeler", position:"3", school:"Grey", height:"188", weight:"118" },
    { no:4, name:"Schalk Willem Burger van der Merwe", position:"4", school:"Nico Malan", height:"194", weight:"88" },
    { no:5, name:"Sinqobile Siyengo", position:"5", school:"Marlow", height:"185", weight:"101" },
    { no:6, name:"David Ligcine Matyani", position:"6", school:"Framesby", height:"184", weight:"86" },
    { no:7, name:"Duncan Hudek", position:"7", school:"Grey", height:"178", weight:"90" },
    { no:8, name:"Zola Yeye", position:"8", school:"Grey", height:"183", weight:"86" }

]
```

},

border: {
    name: "Border",
    coach: "TBC",
    manager: "TBC",
    players:[]
},

bordercd: {
    name: "Border CD",
    coach: "TBC",
    manager: "TBC",
    players:[]
},

boland: {
    name: "Boland",
    coach: "Pieter Burger",
    manager: "Hein Pieterse",
    players:[]
},

freestate: {
    name: "Free State",
    coach: "TBC",
    manager: "TBC",
    players:[]
},

griffons: {
    name: "Griffons",
    coach: "TBC",
    manager: "TBC",
    players:[]
},

griquas: {
    name: "Griquas",
    coach: "TBC",
    manager: "TBC",
    players:[]
},

leopards: {
    name: "Leopards",
    coach: "TBC",
    manager: "TBC",
    players:[]
},

pumas: {
    name: "Pumas",
    coach: "TBC",
    manager: "TBC",
    players:[]
},

valke: {
    name: "Valke",
    coach: "TBC",
    manager: "TBC",
    players:[]
},

swd: {
    name: "SWD",
    coach: "TBC",
    manager: "TBC",
    players:[]
},

namibia: {
    name: "Namibia",
    coach: "TBC",
    manager: "TBC",
    players:[]
},

zimbabwe: {
    name: "Zimbabwe",
    coach: "TBC",
    manager: "TBC",
    players:[]
},

salsen: {
    name: "SA LSEN",
    coach: "TBC",
    manager: "TBC",
    players:[]
}
```

};

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

}
