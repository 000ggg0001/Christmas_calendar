

const game = () => { 
    let playerScore = 0; 
    let computerScore = 0; 
    let moves = 0; 
  
  
    
    const playGame = () => { 
        const rockBtn = document.querySelector('.snow_globe'); 
        const paperBtn = document.querySelector('.gift_wrap'); 
        const scissorBtn = document.querySelector('.santas_sleigh'); 
        const playerOptions = [rockBtn,paperBtn,scissorBtn]; 
        const computerOptions = ['snow_globe','gift_wrap','santas_sleigh'] 
          
       
        playerOptions.forEach(option => { 
            option.addEventListener('click',function(){ 
  
                const movesLeft = document.querySelector('.movesleft'); 
                moves++; 
                movesLeft.innerText = `Moves Left: ${10-moves}`; 
                  
  
                const choiceNumber = Math.floor(Math.random()*3); 
                const computerChoice = computerOptions[choiceNumber]; 
  
                
                winner(this.innerText,computerChoice) 
                  
                
                if(moves == 10){ 
                    gameOver(playerOptions,movesLeft); 
                } 
            }) 
        }) 
          
    } 
  
   
    const winner = (player,computer) => { 
        const result = document.querySelector('.result'); 
        const playerScoreBoard = document.querySelector('.p-count'); 
        const computerScoreBoard = document.querySelector('.c-count'); 
        player = player.toLowerCase(); 
        computer = computer.toLowerCase(); 
        if(player === computer){ 
            result.textContent = 'Tie 🤝'
        } 
        else if(player == 'snow_globe'){ 
            if(computer == 'gift_wrap'){ 
                result.textContent = 'Computer Won 🎆'; 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
  
            }else{ 
                result.textContent = 'Player Won 🎉'
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
            } 
        } 
        else if(player == 'santas_sleigh'){ 
            if(computer == 'snow_globe'){ 
                result.textContent = 'Computer Won 🎆'; 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
            }else{ 
                result.textContent = 'Player Won 🎉'; 
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
            } 
        } 
        else if(player == 'gift_wrap'){ 
            if(computer == 'santas_sleigh'){ 
                result.textContent = 'Computer Won 🎆'; 
                computerScore++; 
                computerScoreBoard.textContent = computerScore; 
            }else{ 
                result.textContent = 'Player Won 🎉'; 
                playerScore++; 
                playerScoreBoard.textContent = playerScore; 
            } 
        } 
    } 
  
   
    const gameOver = (playerOptions,movesLeft) => { 
  
        const chooseMove = document.querySelector('.move'); 
        const result = document.querySelector('.result'); 
        const reloadBtn = document.querySelector('.reload'); 
  
        playerOptions.forEach(option => { 
            option.style.display = 'none'; 
        }) 
  
       
        chooseMove.innerText = '🧸 Game Over!! 🧸'
        movesLeft.style.display = 'none'; 
  
        if(playerScore > computerScore){ 
            result.style.fontSize = '2rem'; 
            result.innerText = '🏆 You Won The Game 🏆'
            result.style.color = '#308D46'; 
        } 
        else if(playerScore < computerScore){ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'You Lost The Game ✨'; 
            result.style.color = 'red'; 
        } 
        else{ 
            result.style.fontSize = '2rem'; 
            result.innerText = 'Tie 🤝'; 
            result.style.color = 'grey'
        } 
        reloadBtn.innerText = 'Restart'; 
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => { 
            window.location.reload(); 
        }) 
    } 
  
  
   
    playGame(); 
      
} 
game();