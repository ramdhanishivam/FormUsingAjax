$(document).ready(function(){
  

  // save comment to database
  $(document).on('click', '#submit_button', function(){
    console.log(this);
    var name = $('#name').val();
    var comment = $('#comment').val();
    console.log(comment);
    console.log(name);
    $.ajax({
      url: 'server.php',
      type: 'POST',
      data: {
        'save': 1,
        'name': name,
        'comment': comment,
      },
      success: function(response){
      //A function to be run when the request succeeds
        $('#name').val('');
        $('#comment').val('');
        $('#display_area').append(response);
        console.log(this);
        console.log(response);
        console.log(comment);
        console.log(name);
      }
    });
  });


  // delete from database
  $(document).on('click', '.delete', function(){
    var id = $(this).data('id');
    $clicked_button = $(this);
    console.log(this);
    console.log(id);
    console.log($clicked_button);
  	$.ajax({
  	  url: 'server.php',
  	  type: 'GET',
  	  data: {
    	'delete': 1,
    	'id': id,
      },
      success: function(response){
        // remove the deleted comment
        $clicked_button.parent().remove();
        console.log($clicked_button.parent());
        $('#name').val('');
        $('#comment').val('');
      }
  	});
  });


  var edit_id;
  var $edit_comment;

  $(document).on('click', '.edit', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  	edit_id = $(this).data('id');
    console.log(edit_id);
  	$edit_comment = $(this).parent();
    console.log($edit_comment);
  	// grab the comment to be editted
  	var name = $(this).siblings('.display_name').text();
    console.log(name);
  	var comment = $(this).siblings('.comment_text').text();
    console.log(comment);
  	// place comment in form
    console.log($('#name').val());
  	$('#name').val(name);
  	$('#comment').val(comment);
  	$('#submit_button').hide();
  	$('#update_button').show();
    console.log($('#name').val());
  });


  $(document).on('click', '#update_button', function(){
  	var id = edit_id;
  	var name = $('#name').val();
  	var comment = $('#comment').val();
    console.log(id);
    console.log(name);
    console.log(comment);
    
  	$.ajax({
      url: 'server.php',
      type: 'POST',
      data: {
      	'update': 1,
      	'id': id,
      	'name': name,
      	'comment': comment,
      },
      success: function(response){
        console.log(response);
      	$('#name').val('');
      	$('#comment').val('');
      	$('#submit_button').show();
      	$('#update_button').hide();
      	$edit_comment.replaceWith(response);
      }

  	});		
  });
});