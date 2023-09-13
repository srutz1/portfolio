var typed= new typed(".text", {
    Strings: ["Frontend Developer" , "Web Developer","Backend developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});

//circle skil/////////////////////////////
const circle=document.querySelectorAll('.circle');
circle.array.forEach(element => {
    var dots=element.getAttribute('data-dots');
    var marked=element.getAttribute("data-percent");
    var percent=Math.floor(dots*marked/100);
    var points="";
    var rotate=360/dots;


    for(let i=0;i<dots;i++){
        points+='<div class="points" style="--i:1${i};--rot:${rotate}deg"></div>'
    }
    element.innerHTML=points;
    
});



const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});