function showNote() {
    document.getElementById('Note').classList.remove("hidden");
    setTimeout(hideNote, 10000); // after 5 secs
}

function hideNote() {
    document.getElementById("Note").classList.add("hidden");
}

window.onload = function () {
    document.getElementById("psid").addEventListener("mouseup", showNote);
}
