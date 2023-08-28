// joke button
let joke_button=document.getElementById('joke_button');

// joke message
let joke=document.getElementById('joke');

 
 GenerateJoke=(async()=>{


    let   url=`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;

    let res=await fetch(url);
    let data=await res.json();
    displayJokes(data);
    
 })

  displayJokes=jokes=>{


        joke.innerText=`${jokes.joke}`

 }


 joke_button.addEventListener('click',GenerateJoke)


  GenerateJoke();