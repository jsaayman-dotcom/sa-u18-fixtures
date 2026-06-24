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
}

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

    let rows = "";

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

}

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
