 let para = document.querySelector('.para');
 let nextBtn = document.querySelector('.nxtBtn');
   para = document.querySelector(".joke-card");



   async function jokeG(params) {
      
      try {
        const res = await fetch("https://official-joke-api.appspot.com/jokes/random");

      const data = await res.json();

      para.innerHTML = `${data.setup} 👉  ${data.punchline}`;
     }catch(error){
      para.innerHTML = para.innerHTML = `😅 Oops! Failed to load a joke. " Try Again "`;
     }
   }

 document.addEventListener('keydown', function(e){
      if(e.key === "Enter" || e.key === " "){
        jokeG();
      }
 });

 
nextBtn.addEventListener('click', jokeG);
