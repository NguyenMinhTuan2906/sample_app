$(document).ready(function() {
  $('body').on('submit', '#new_micropost', function(e) {
    var content_request = $('#micropost_content').val();
    var url_request = $(this).attr('action');
    e.preventDefault();
    $.ajax({
      url: url_request,
      type: 'post',
      dataType: 'json',
      data: {micropost: {content: content_request}},
    })
    .done(function(data) {
      $('.microposts').prepend(data.micropost_data);
    })
    return false;
  });
})
