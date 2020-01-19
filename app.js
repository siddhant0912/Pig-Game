var score,roundScore,ActivePlayer, gamePlaying;
init();

//document.querySelector('#current-' +ActivePlayer).textContent = dice;  //setter

//document.querySelector('#current-' +ActivePlayer).innerHTML ='<em>'+ dice +'<em>'




document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gamePlaying){
        //1.Random number
   var dice = Math.floor(Math.random() * 6)+1;
   
   //2.Display Result 
   var diceDOM =document.querySelector('.dice');
   diceDOM.style.display ='block';
    
    diceDOM.src ='dice-'+ dice+ '.png';
    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' +ActivePlayer).textContent = roundScore;
    }
    else{
     nextPlayer();
    }
    }
    
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //1. Add curr score to global score
   score[ActivePlayer] += roundScore;
   
    
   //2.Update the UI
   document.querySelector('#score-' +ActivePlayer).textContent=score[ActivePlayer];
    //3.Check winner    
   if(score[ActivePlayer] >= 20){
     document.querySelector('#name-'+ActivePlayer).textContent = 'WINNER :)';
       
       document.querySelector('.dice').style.display = 'none';
       document.querySelector('.player-'+ActivePlayer+'-panel').classList.add('winner');
       document.querySelector('.player-'+ActivePlayer+'-panel').classList.remove('active');
       gamePlaying =false;
       
   }
    else{
        nextPlayer();
    }
    }
   
   
});

function nextPlayer(){
     ActivePlayer === 0 ? ActivePlayer =1 : ActivePlayer =0;
      roundScore=0;
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';
        
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');  
      document.querySelector('.dice').style.display ='none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
        
  score=[0,0];
  ActivePlayer=0;
  roundScore=0;
    gamePlaying =true;
    
document.querySelector('.dice').style.display ='none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';     
document.getElementById('name-1').textContent = 'Player 2'; 
document.querySelector('.player-1-panel').classList.remove('winner'); 
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active')      
    
}
