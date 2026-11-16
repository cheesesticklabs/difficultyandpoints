window.renderActualRules=function(t){
const row=(label,rule)=>`<tr><th scope="row">${label}</th><td>${rule}</td></tr>`;
const chart=(name,rows)=>`<table class="game-rule-chart"><caption>${name}</caption><thead><tr><th scope="col">${t('Rule','Regla')}</th><th scope="col">${t('How it works','Cómo funciona')}</th></tr></thead><tbody>${rows.join('')}</tbody></table>`;
return `<p class="lead">${t('Compare the rules in the two games you played.','Compara las reglas de los dos juegos que probaste.')}</p>`+
chart('Ms. Pac-Man',[
row(t('Starting lives','Vidas iniciales'),t('3 lives.','3 vidas.')),
row(t('Losing a life','Perder una vida'),t('A ghost catches you. Return to the same maze with the dots you have not eaten yet.','Un fantasma te atrapa. Vuelves al mismo laberinto con los puntos que todavía no comiste.')),
row(t('Extra life','Vida extra'),t('One bonus life at 10,000 points.','Una vida extra al llegar a 10.000 puntos.')),
row(t('Points','Puntos'),t('Dot: 10 · Power pellet: 50<br>Ghosts during one power pellet: 200 → 400 → 800 → 1,600<br>Fruit gives bonus points.','Punto: 10 · Punto de poder: 50<br>Fantasmas con un mismo poder: 200 → 400 → 800 → 1.600<br>La fruta da puntos extra.')),
row(t('Challenge','Desafío'),t('Four ghosts chase you. Power pellets let you eat them for a short time. Later rounds change the maze and challenge.','Cuatro fantasmas te persiguen. Los puntos de poder permiten comerlos durante poco tiempo. Las rondas posteriores cambian el laberinto y el desafío.')),
row(t('After losing all lives','Al perder todas las vidas'),t('Game Over. Pay another quarter to start a new game. Score and progress reset.','Game Over. Paga otra moneda para empezar de nuevo. La puntuación y el progreso se reinician.'))
])+
chart('Super Mario Bros.',[
row(t('Starting lives','Vidas iniciales'),t('3 lives.','3 vidas.')),
row(t('Losing a life','Perder una vida'),t('Small Mario is hit, falls into a pit, or runs out of time. Restart at the level’s beginning or a checkpoint.','Mario pequeño recibe un golpe, cae en un hoyo o se queda sin tiempo. Vuelves al inicio del nivel o a un punto de control.')),
row(t('Extra lives','Vidas extra'),t('Collect 100 coins or a 1-Up mushroom.','Recoge 100 monedas o un hongo 1-Up.')),
row(t('Points','Puntos'),t('Coins, enemies, and power-ups earn points.<br>Flagpole height and remaining time affect bonuses.','Las monedas, enemigos y poderes dan puntos.<br>La altura en el asta y el tiempo restante afectan las bonificaciones.')),
row(t('Challenge','Desafío'),t('Enemies, jumps, and a timer create pressure. Power-ups help you survive. New levels change the obstacles.','Enemigos, saltos y un reloj crean presión. Los poderes te ayudan a sobrevivir. Los nuevos niveles cambian los obstáculos.')),
row(t('After losing all lives','Al perder todas las vidas'),t('Game Over. Start another game without paying again.','Game Over. Empieza otra partida sin volver a pagar.'))
])+`<p class="caption rule-references">${t('Rule references:','Referencias:')} <a href="https://www.nintendo.co.jp/clv/manuals/en/pdf/CLV-P-NAAAE.pdf" target="_blank" rel="noopener">Super Mario Bros.</a> · <a href="https://www.betson.com/wp-content/uploads/2017/07/Pac-man-Manual.pdf" target="_blank" rel="noopener">Ms. Pac-Man</a></p>`;
};
