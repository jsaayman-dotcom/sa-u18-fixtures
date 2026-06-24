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
   TEAM DATA
========================== */

const teams = {

    lions: {
        name: "Lions",
        coach: "Mashudu Raphunga",
        manager: "Andrew Barnes",
        players: [
            "Joshua Hammann",
            "Mahlatse Memeza",
            "Jordan Venter",
            "Matthew Van Deventer",
            "MC Van Tonder",
            "Llewelyn Vermaak",
            "Naledi Phiri",
            "Ryno Van Der Westhuizen",
            "Lethabo Malahlela",
            "Cameron Kourie"
        ]
    },

    bulls: {
        name: "Blue Bulls",
        coach: "TBC",
        manager: "TBC",
        players: [
            "Squad To Be Added"
        ]
    },

    wp: {
        name: "Western Province",
        coach: "TBC",
        manager: "TBC",
        players: [
            "Squad To Be Added"
        ]
    },

    pumas: {
        name: "Pumas",
        coach: "TBC",
        manager: "TBC",
        players: [
            "Squad To Be Added"
        ]
    }

};

/* ==========================
   OPEN TEAM
========================== */

function openTeam(team){

    const t = teams[team];

    let playerList = "";

    t.players.forEach(player => {

        playerList += `<li>${player}</li>`;

    });

    document.getElementById("teamContent").innerHTML = `

        <h2>${t.name}</h2>

        <br>

        <p><strong>Coach:</strong> ${t.coach}</p>

        <p><strong>Manager:</strong> ${t.manager}</p>

        <br>

        <h3>Squad</h3>

        <ul>
            ${playerList}
        </ul>

    `;

    document.getElementById("teamModal").style.display = "block";

}

/* ==========================
   CLOSE TEAM
========================== */

function closeTeam(){

    document.getElementById("teamModal").style.display = "none";

}

/* ==========================
   CLOSE IF CLICK OUTSIDE
========================== */

window.onclick = function(event){

    const modal = document.getElementById("teamModal");

    if(event.target === modal){

        modal.style.display = "none";

    }

}
