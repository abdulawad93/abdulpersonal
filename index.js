document.querySelector(".msgTitle").addEventListener("keydown",function(event){
  if(event.key!=="Tab")
  document.querySelector("form").setAttribute("action","mailto:abdulrahman.y.awad@gmail.com?subject="+document.querySelector(".msgTitle").value+event.key);
});
