// Tryb ciemny
// document.getElementById("darkModeToggle").addEventListener("change", function() {
//     if (this.checked) {
//         document.body.style.background = "black";
//         document.body.style.color = "white";
//     } else {
//         document.body.style.background = "";
//         document.body.style.color = "";
//     }
// });
function toggleBackground() 
       {
            let body = document.body;
            if (body.classList.contains('dark-mode')) 
            {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
            } 
            else 
            {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
            }
        }

function information() {
    alert("Zasady gry:\n-Pokonuj przeciwników\n-Z każdą wygraną przeciwnicy mają dodatkowe 10 HP\nPowodzenia!");
  }
