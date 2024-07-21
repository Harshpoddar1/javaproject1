let resultMsg;
      let score
      let scorestr = localStorage.getItem('score');
      resetscore(scorestr);
      function resetscore(scorestr){
        score = scorestr ? JSON.parse(scorestr) : {
        win : 0,
        lose : 0,
        tie  : 0,
      }
       
       score.displayscore =   function(){
         return ` score : won: ${score.win}, lose:${score.lose} , ties: ${score.tie}`;
    
     };
     showResult()
      };
      
      function generationComputer() {
        let computerChoice;
        let randomNumber = Math.random() * 3;
        computerChoice;

        if (randomNumber > 0 && randomNumber <= 1) {
         return "bat";
        } else if (randomNumber > 1 && randomNumber <= 2) {
          return "ball";
        } else {
          return "stump";
        }
        return computerChoice
      }
      function getresult(usermove,computerMove){
        if(usermove=== 'bat'){
          if(computerMove === 'ball'){
            score.win++
            return `user wins`;
           }
           else if(computerMove === 'bat'){
            score.tie++
            return `match is tie'e`;
           } else if (computerMove === 'stump'){
            score.lose++
            return  `computer wins`;
           }
          }
          else if(usermove=== 'ball'){
          if(computerMove === 'ball'){
            score.tie++
           return  `match is tie'e`;
          }
          else if(computerMove === 'bat'){
            score.lose++
           return  'computer wins';}
          else if (computerMove === 'stump'){
              score.win++
             return  `user won`;
          }
         }
         else{
          if(computerMove === 'ball'){
            score.lose++
          return  'computer wins';
         }
         else if(computerMove === 'bat'){
          score.win++
          return  `user won`;
          }
           else if (computerMove === 'stump'){
            score.tie++
            return  `match is tie'e`;
            }
          }}

         function showResult(usermove , computerMove , result){
          localStorage.setItem(`score`,JSON.stringify(score));
          document.querySelector('#user-move').innerHTML = 
          usermove  ? `you have chossen ${usermove}` : '';
          document.querySelector('#computer-move').innerHTML =  
            computerMove  ? `computer choices is ${computerMove}` : '';
          document.querySelector('#result').innerHTML = result  ? result : '';
          document.querySelector('#score').innerHTML = score.displayscore();
        }