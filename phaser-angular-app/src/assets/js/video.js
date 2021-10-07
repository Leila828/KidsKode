function video() {
  $(document).ready(function() {
    $("#divId").hide();
  });

  document.getElementById('myVideo').addEventListener('ended',myHandler,false);

  function myHandler(e) {
    $("#divId").show();
  }
}

function myTest() {
  $(document).ready(function() {
    $("#divId").hide();
    var a=document.getElementById('myVideo');
    a.onended= this.myHandler();
  });








}
function myHandler(e) {
  $("#divId").show();
  console.log("hello bitches")
}

 function lang() {
    $('.selectpicker').selectpicker();
  }

