#Plan of action for Tic Tac textContent
1. html create:
<!-- *   h1 'let's play'
*   3x3 table
*   h3 player turn -->
*   button: "Turn Finished/play again"
<!-- *   footer copyright -->
2.  CSS
*   center everything
*   table size
*   modal alert (do after getting cells responsive)
*   @keyframes and .winner, .loser (AFTER JAVASCRIPT)
3.  Javascript
<!-- *   make all game cells respond to a click
*   alternate player turns
-   start player x
-   playerX marks an X in a cell
-   switch to playerO
-   playerO marks an O in a cell
-   playerX marks an X in a cell -->
<!-- *   .textContent on h3 to signal if it's X or O -->
<!-- *   read board every time to see if winner
*   define winner -->
*   if winner.className('.winner')
*   create gameOver() when board reads winner


### Adventure Mode

1.  sessionStorage or localStorage to persist the game's state between page reloads.
2.  add a reset button
3.  Animiate the X and Os

###Epic mode
**make a computer play an unbeatable game of Tic Tac Toe**
