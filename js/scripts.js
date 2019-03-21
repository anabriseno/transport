$(document).ready(function(){
  $("form#trans_survey").submit(function(event){
    event.preventDefault();
    $("#work-answer").show();
    $("input:checkbox[name=work-transport]:checked").each(function(){
      var TransportMode = $(this).val();
      $('#work-answer').append(TransportMode + "<br>");
    });
    $("#fun-answer").show();
    $("input:checkbox[name=fun-transport]:checked").each(function(){
      var FunMode = $(this).val();
      $('#fun-answer').append(FunMode + "<br>");
    });
    $('#trans_survey').hide();
  });
});
