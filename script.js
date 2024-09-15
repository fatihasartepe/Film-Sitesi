const arrows=document.querySelectorAll(".arrow");
const movielists=document.querySelectorAll(".movie-list");
arrows.forEach((arrow,i) => {
    let clickCounter = 0;
    const imageItem=movielists[i].querySelectorAll("img").length;
    console.log(imageItem);
    if(imageItem - (4 + clickCounter) >= 0 ) {
        arrow.addEventListener("click", function(){
            clickCounter++;
         
            movielists[i].style.transform=`translateX(${movielists[i].computedStyleMap().get("transform")[0].x.value -300}px)`
        });
    }
    
   
  
    
});