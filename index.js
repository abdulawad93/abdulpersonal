$(".msgTitle").on("keydown", function(event){
  if(event.key!=="Tab"&&event.key!=="Backspace")
  {
    const receiver= $(".receiver-email").attr("value");
    let subject= "?subject="+$(".msgTitle").val()+event.key;
    console.log(subject);
    $("form").attr("action","mailto:"+receiver+subject);
  }
});

console.log($(".profile-pic-container").css("height")+"px");
$(".profile-pic").css("height",$(".profile-pic-container").css("height")+"px");

if($(window).width()<992){

$(".nav-link").on('click', function(){
    $(".navbar-collapse").collapse('hide');
    console.log("okay");
});
}