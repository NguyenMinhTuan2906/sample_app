$(document).ready(function() {
  $('body').on('click', '.destroy-mircopost', function(event) {
    event.preventDefault();
    var childLi = $(this).closest('li');
    var url_request = $(this).attr('href')
    $.ajax({
      url: url_request,
      type: 'delete',
    })
    .done(function() {
      childLi.hide();
    });
    return false;
  });
})
