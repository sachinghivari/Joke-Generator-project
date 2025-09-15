 let jokeText = document.querySelector('.joke-text');
 let nextBtn = document.querySelector('.nxtBtn');
  let spinner = document.querySelector('.spinner');
  



   async function jokeG(params) {
      
      try {
        
        spinner.style.display = "block";
        jokeText.textContent ="";

        const res = await fetch("https://official-joke-api.appspot.com/jokes/random");

      const data = await res.json();

      jokeText.innerHTML = `${data.setup} 👉  ${data.punchline}`;
     }catch(error){
      jokeText.innerHTML = para.innerHTML = `😅 Oops! Failed to load a joke. " Try Again "`;
     }finally {
        spinner.style.display = "none";
     }
   }

 document.addEventListener('keydown', function(e){
      if(e.key === "Enter" || e.key === " "){
        jokeG();
      }
 });

 
nextBtn.addEventListener('click', jokeG);
