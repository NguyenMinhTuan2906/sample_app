$(document).ready(function(){
  $('body').on('click', '.destroy-user', function(e){
    e.preventDefault();
    var url_request = $(this).attr('href');
    var childLi = $(this).closest('li');
    $.ajax({
      url: url_request,
      type: 'delete',
    })
    .done(function() {
      childLi.hide();
    });
    return false;
  })
})
