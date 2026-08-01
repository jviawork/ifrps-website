const intro=document.getElementById("intro-screen");
const skip=document.getElementById("intro-skip");
function closeIntro(){
  if(!intro||intro.classList.contains("intro-hidden")) return;
  intro.classList.add("intro-hidden");
  document.body.classList.remove("intro-active");
  setTimeout(()=>intro.remove(),800);
}
if(intro){
  document.body.classList.add("intro-active");
  setTimeout(()=>intro.classList.add("impact"),4100);
  setTimeout(closeIntro,6250);
  skip?.addEventListener("click",closeIntro);
}