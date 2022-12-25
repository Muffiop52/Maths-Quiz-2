function addUser()
{
    
    player1_name = document.getElementById("player1username")
    player2_name = document.getElementById("player2username")
    
    localStorage.setItem("Player1",player1username)
    localStorage.setItem("Player2",player2username)

    window.location = "quiz_game.html"
}