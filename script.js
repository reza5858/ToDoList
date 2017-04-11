<<<<<<< HEAD
$(document).ready(
    function(){
       $('#button').click(
           function(){
               var new_task = $('input[name=TaskList]').val();
               $('ol').append('<li>' + new_task + '</li>');
      	});
       
       $("input[name=TaskList]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }         
      	});
      
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('del').fadeOut('slow');    
      	});
      
      $('input').focus(function() {
        $(this).val('');
      	});
      
      $('ol').sortable();  

      $('#mrProper').click(
           function(){
               $('ol').empty();
      	});
      
    	}
);

=======
$(document).ready(
    function(){
       $('#button').click(
           function(){
               var new_task = $('input[name=TaskList]').val();
               $('ol').append('<li>' + new_task + '</li>');
      	});
       
       $("input[name=TaskList]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }         
      	});
      
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');    
      	});
      
      $('input').focus(function() {
        $(this).val('');
      	});
      
      $('ol').sortable();  

      $('#mrProper').click(
           function(){
               $('ol').empty();
      	});
      
    	}
);

>>>>>>> origin/master
