$(".msgTitle").on("keydown", function(event){
  if(event.key!=="Tab"&&event.key!=="Backspace")
  {
    const receiver= $(".receiver-email").attr("value");
    let subject= "?subject="+$(".msgTitle").val()+event.key;
    console.log(subject);
    $("form").attr("action","mailto:"+receiver+subject);
  }
});

$(".nav-link").on('click', function(){
    $(".navbar-nav").hide();
});
$(".navbar-toggler").on('click', function(){
  $(".navbar-nav").show();
});
