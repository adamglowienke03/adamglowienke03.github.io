let playerHealth = 100;
let enemyHealth = 100;
let lvl = 1;
let bonusHP = 0;
let round = 1;
let battleLog = document.getElementById('battle-log');

function restoreHP()
{
    playerHealth = 100;
    enemyHealth = 100 + bonusHP;
}

function logMessage(message) {
    let logEntry = document.createElement('p');
    logEntry.textContent = message;
    document.getElementById('battle-log').appendChild(logEntry);
    document.getElementById('battle-log').scrollTop = document.getElementById('battle-log').scrollHeight;
}

function updateEnemyHealth() {
  document.getElementById('enemy-health').textContent = "Goblin lvl "+ lvl + ": " + enemyHealth + " HP";
}

  function updatePlayerHealth() {
    document.getElementById('your-health').textContent = "Gracz: " + playerHealth + " HP";
  }
  
  function playerAttack() {
    playerDamage = Math.floor(Math.random() * 15) + 1;
    enemyHealth -= playerDamage;
    updateEnemyHealth();
    logMessage()
    logMessage("--------------------------------------------");
    logMessage("Zadałeś " + playerDamage + " dmg!");
  
    if (enemyHealth <= 0) {
        logMessage("Pokonałeś Goblina lvl " + lvl + ", gratulacje!");
        logMessage("--------------------------------------------");
        restoreHP();
        lvl++;
        round++;
        bonusHP += 10;
        enemyHealth += bonusHP;
        document.getElementById('area').textContent = "Round " + round;
        playerHeal()
    } 
    else {
      enemyTurn();
    }
  }
  
  function playerHeal() {
    heal = Math.floor(Math.random() * 15) + 1;
    playerHealth += heal
    if(playerHealth >= 100){
    playerHealth = 100
    }
    else{
      logMessage("--------------------------------------------");
      logMessage('Uleczyłeś ' + heal + ' HP!');
    }

    enemyHeal = Math.floor(Math.random() * 10) + 1;
    enemyHealth += enemyHeal
    if(enemyHealth >= 100 + bonusHP){
      enemyHealth = 100 + bonusHP
    }
    else{
    logMessage('Przeciwnik uleczył ' + enemyHeal + ' HP!');
    logMessage('--------------------------------------------')
    }
    updateEnemyHealth();
    updatePlayerHealth();
    // enemyTurn()
  }
  
  function enemyTurn() {
    let enemyDamage = Math.floor(Math.random() * 10) + 1;
    playerHealth -= enemyDamage;
    updatePlayerHealth();
    logMessage("Atak przeciwnika zadał Tobie " + enemyDamage + " dmg!");
    logMessage("--------------------------------------------")
  
    if (playerHealth <= 0) {
      logMessage('Przegrałeś!!!');
      logMessage("Wrócisz do menu za 3 sekundy...");
      setTimeout("location.href = 'index.html';",3000);
    }
  }