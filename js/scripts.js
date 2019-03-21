$(document).ready(function(){
  $("form#trans_survey").submit(function(event){
    event.preventDefault();
    $("work-answer").show();
    $("input:checkbox[name=work-transport]:checked").each(function(){
      var TransportMode = $(this).val();
      $('#work-answer').append(TransportMode + "<br>");
    });
    $('#trans_survey').hide();
  });
});
