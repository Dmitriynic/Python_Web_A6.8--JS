function init(){
  $("#btn1").click(function() {
      let width = $("#a").css("width");
      width=parseInt(width);
      width+=(width*0.01);
      $(".progress-bar").css({"width": `${width}`});
  });
  $("#btn2").click(function() {
      let width = $("#a").css("width");
      width=parseInt(width);
      width+=(width*0.03);
      $(".progress-bar").css({"width": `${width}`});
  });
  $("#btn3").click(function() {
      let width = $("#a").css("width");
      width=parseInt(width);
      width+=(width*0.07);
      $(".progress-bar").css({"width": `${width}`});
  });
};

$(document).ready(init);