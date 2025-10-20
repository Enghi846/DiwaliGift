document.addEventListener('DOMContentLoaded', () => {
    let password = Math.floor(1000 + Math.random() * 9000).toString();
  console.log(password)

    
    const divs = document.querySelectorAll('.btn'),
          clear = document.querySelector("#clearbtn"),
          check = document.querySelector("#checkbtn");
          
    let display = document.querySelector("#ca");
    let digits = 0;
    let codeEntered = "";

    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', () => {
            digits++;

       
            if (display.innerHTML === 'CORRECT' || display.innerHTML === 'WRONG') {
                display.innerHTML = '';
                codeEntered = "";
            }

           
            codeEntered += divs[i].innerHTML;

            display.innerHTML = codeEntered;
        });
    }

check.addEventListener('click', () => {
  const Entered = display.innerHTML;
  let result = ["❌","❌","❌","❌"];
  for(let i=0;i<4;i++) if(Entered[i]) result[i] = (Entered[i]===password[i])?"✅":(password.includes(Entered[i])?"❔":"❌");
  display.innerHTML = result.join('');

if(result.join('')==="✅✅✅✅"){
  setTimeout(()=>{
      rick.style.opacity=1; 
      fade.style.display='none';
    }, 4000);
    display.innerHTML = "CORRECT NUMBER"
    document.querySelector('.container').style.display='none';

    const bgVideo = document.getElementById('myVideo');
    if(bgVideo) bgVideo.style.display = 'none'; 

    const fade = document.getElementById('fade');
    const rick = document.createElement('video');
    rick.id='rick';
    rick.src='rick.mp4';
    rick.autoplay = rick.loop= true;
    rick.style.display='block';
    document.body.appendChild(rick);

    fade.style.opacity=1; 

    setTimeout(()=>{
      rick.style.opacity=1; 
      fade.style.display='none';
    }, 2000);
}

});

clear.addEventListener('click', () => {
    display.innerHTML = '';
    codeEntered = "";
});
});
