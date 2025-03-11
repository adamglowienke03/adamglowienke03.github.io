document.getElementById("openSettings").addEventListener("click", function() {
    document.getElementById("settingsMenu").style.display = "block";
});

document.getElementById("closeSettings").addEventListener("click", function() {
    document.getElementById("settingsMenu").style.display = "none";
});

// Głośność muzyki
document.getElementById("volumeSlider").addEventListener("input", function() {
    let audio = document.getElementById("muzyka"); // Musisz mieć audio w HTML
    audio.volume = this.value;
});

// Tryb ciemny
document.getElementById("darkModeToggle").addEventListener("change", function() {
    if (this.checked) {
        document.body.style.background = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.background = "";
        document.body.style.color = "";
    }
});


function information() {
    alert("Zasady gry:\n-Pokonuj przeciwników\n-Z każdą wygraną przeciwnicy mają dodatkowe 10 HP\nPowodzenia!");
  }
