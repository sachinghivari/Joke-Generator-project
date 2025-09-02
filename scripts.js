 let para = document.querySelector('.para');
 let nextBtn = document.querySelector('.nxtBtn');



 let joke = [

     `Why don’t skeletons ever fight each other? 
     👉 Because they don’t have the guts.`,
   `Why did the computer go to the doctor? 
   👉 Because it caught a virus!`,
   `Why did the math book look so sad? 
   👉 Because it had too many problems.`,
    `Parallel lines have so much in common...
     👉 It’s a shame they’ll never meet.`,
    `Why don’t eggs ever tell jokes? 
    👉 They’d crack each other up.`
 ]

      


      nextBtn.addEventListener('click', function(){
           let radomJoke = Math.floor(Math.random() * joke.length);
           para.innerHTML = joke[radomJoke];
      });
