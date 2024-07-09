
    Player1 = localStorage.getItem("player1_name");
    Player2 = localStorage.getItem("player2_name");
    
    document.getElementById("player1_name").innerHTML = Player1 + ":";
    document.getElementById("player2_name").innerHTML = Player2 + ":";
    
    document.getElementById("player_resposta").innerHTML = Player1;
    document.getElementById("player_pergunta").innerHTML = Player2;


    jogador1score = 0;
    jogador2score = 0;

    document.getElementById("player1_score").innerHTML=jogador1score;
    document.getElementById("player2_score").innerHTML=jogador2score;
