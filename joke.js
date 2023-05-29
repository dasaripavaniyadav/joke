const  Btn =document.getElementById("Btn");
const  jokeContent=document.getElementById("jokeContent");
const joke  =document.getElementById("joke");
Btn.onclick= () =>{
    axios.get("https://official-joke-api.appspot.com/random_joke")
    .then(function(response){
        Btn.textContent="Next!";
        jokeContent.textContent=response.data.setup;
        joke.textContent="";
        setTimeout(function(){
            joke.textContent=response.data.punchline;
        },5000);
    })
.catch (function(error){
    console.log("error");
});  
}

