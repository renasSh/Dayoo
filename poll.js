// poll.js
let votes = {
    'Amad': 0,
    'Renas': 0,
    'Habib': 0,
    'Anjam': 0,
    'Aram Adil': 0,
    'Pala': 0,
    'Wjar': 0,
    'Redan': 0,
    'Aram abd': 0,
    'Gailan': 0,
    'Sahand': 0,
    'Hndren': 0
};

function vote() {
    let selectedPlayer = document.getElementById('players').value;
    alert(`You voted for ${selectedPlayer}`);
}

function submitVote() {
    let selectedPlayer = document.getElementById('players').value;
    votes[selectedPlayer]++;
    updateResults();
}

function updateResults() {
    let resultParagraph = document.getElementById('result');
    let results = 'Votes:';
    for (let player in votes) {
        results += ` ${player}: ${votes[player]} |`;
    }
    resultParagraph.innerText = results;
}
