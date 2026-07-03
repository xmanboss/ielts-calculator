function listeningBand(correct) {
    if (correct >= 39) return 9;
    if (correct >= 37) return 8.5;
    if (correct >= 35) return 8;
    if (correct >= 32) return 7.5;
    if (correct >= 30) return 7;
    if (correct >= 26) return 6.5;
    if (correct >= 23) return 6;
    if (correct >= 18) return 5.5;
    if (correct >= 16) return 5;
    if (correct >= 13) return 4.5;
    if (correct >= 10) return 4;
    if (correct >= 8) return 3.5;
    if (correct >= 6) return 3;
    if (correct >= 4) return 2.5;
    if (correct >= 2) return 2;
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
    if (correct >= 13) return 4.5;
    if (correct >= 10) return 4;
    if (correct >= 8) return 3.5;
    if (correct >= 6) return 3;
    if (correct >= 4) return 2.5;
    if (correct >= 2) return 2;
    if (correct >= 1) return 1;
    return 0;
}

function roundIELTS(score) {
    let decimal = score % 1;

    if (decimal < 0.25) {
        return Math.floor(score);
    } else if (decimal < 0.75) {
        return Math.floor(score) + 0.5;
    } else {
        return Math.ceil(score);
    }
}

function calculate() {
    let lc = document.getElementById("listening").value;
    let rc = document.getElementById("reading").value;
    let w = document.getElementById("writing").value;
    let s = document.getElementById("speaking").value;

    let listeningCorrect = Number(lc);
    let readingCorrect = Number(rc);
    let writing = Number(w);
    let speaking = Number(s);

    // Limit checks
    if (lc !== "" && (listeningCorrect < 0 || listeningCorrect > 40)) {
        document.getElementById("result").innerHTML =
            "Listening 0-40 oralig'ida bo'lishi kerak.";
        return;
    }

    if (rc !== "" && (readingCorrect < 0 || readingCorrect > 40)) {
        document.getElementById("result").innerHTML =
            "Reading 0-40 oralig'ida bo'lishi kerak.";
        return;
    }

    if (w !== "" && (writing < 0 || writing > 9)) {
        document.getElementById("result").innerHTML =
            "Writing 0-9 oralig'ida bo'lishi kerak.";
        return;
    }

    if (s !== "" && (speaking < 0 || speaking > 9)) {
        document.getElementById("result").innerHTML =
            "Speaking 0-9 oralig'ida bo'lishi kerak.";
        return;
    }

    // Faqat Listening
    if (lc !== "" && rc === "" && w === "" && s === "") {
        document.getElementById("result").innerHTML =
            `Listening Band: ${listeningBand(listeningCorrect)}`;
        return;
    }

    // Faqat Reading
    if (rc !== "" && lc === "" && w === "" && s === "") {
        document.getElementById("result").innerHTML =
            `Reading Band: ${readingBand(readingCorrect)}`;
        return;
    }

    // Listening + Reading
    if (lc !== "" && rc !== "" && w === "" && s === "") {
        document.getElementById("result").innerHTML =
            `Listening Band: ${listeningBand(listeningCorrect)}<br>
             Reading Band: ${readingBand(readingCorrect)}`;
        return;
    }

    // Agar hamma maydon to'ldirilmagan bo'lsa, hech narsa chiqarmaymiz
    if (lc === "" || rc === "" || w === "" || s === "") {
        return;
    }

    // Overall hisoblash
    let listening = listeningBand(listeningCorrect);
    let reading = readingBand(readingCorrect);

    let average =
        (listening + reading + writing + speaking) / 4;

    let overall = roundIELTS(average);

    document.getElementById("result").innerHTML =
        `Listening: ${listening}<br>
         Reading: ${reading}<br>
         Writing: ${writing}<br>
         Speaking: ${speaking}<br><br>
         <b>Overall IELTS Band: ${overall}</b>`;
}