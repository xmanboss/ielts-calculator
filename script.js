function listeningBand(correct) {
    if (correct >= 39) return 9;
    if (correct >= 37) return 8.5;
    if (correct >= 35) return 8;
    if (correct >= 33) return 7.5;
    if (correct >= 30) return 7;
    if (correct >= 27) return 6.5;
    if (correct >= 23) return 6;
    if (correct >= 19) return 5.5;
    if (correct >= 15) return 5;
    if (correct >= 1) return 1;
    return 0;
}

function readingBand(correct) {
    if (correct >= 39) return 9;
    if (correct >= 37) return 8.5;
    if (correct >= 35) return 8;
    if (correct >= 33) return 7.5;
    if (correct >= 30) return 7;
    if (correct >= 27) return 6.5;
    if (correct >= 23) return 6;
    if (correct >= 19) return 5.5;
    if (correct >= 15) return 5;
    if (correct >= 1) return 1;
    return 0;
}

function roundIELTS(score) {
    let decimal = score % 1;

    if (decimal < 0.25) return Math.floor(score);
    if (decimal < 0.75) return Math.floor(score) + 0.5;
    return Math.ceil(score);
}

function calculate() {
    let lc = document.getElementById("listening").value;
    let rc = document.getElementById("reading").value;
    let w = document.getElementById("writing").value;
    let s = document.getElementById("speaking").value;

    let listening = lc !== "" ? listeningBand(Number(lc)) : null;
    let reading = rc !== "" ? readingBand(Number(rc)) : null;
    let writing = w !== "" ? Number(w) : null;
    let speaking = s !== "" ? Number(s) : null;

    let result = "";

    if (listening !== null) result += `Listening: ${listening}<br>`;
    if (reading !== null) result += `Reading: ${reading}<br>`;
    if (writing !== null) result += `Writing: ${writing}<br>`;
    if (speaking !== null) result += `Speaking: ${speaking}<br>`;

    if (lc !== "" && rc !== "" && w !== "" && s !== "") {
        let avg = (listening + reading + writing + speaking) / 4;
        let overall = roundIELTS(avg);
        result += `<br><b>Overall IELTS Band: ${overall}</b>`;
    }

    document.getElementById("result").innerHTML = result;
}

function clearAll() {
    document.getElementById("listening").value = "";
    document.getElementById("reading").value = "";
    document.getElementById("writing").value = "";
    document.getElementById("speaking").value = "";
    document.getElementById("result").innerHTML = "";
}
