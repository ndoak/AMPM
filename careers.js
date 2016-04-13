
  jQuery(document).ready(function($) {


   $('.job').hide();
   

  $('.plus-toggle').click(function(){
    	$(this).next('.job').slideToggle();
    	$(this).next('.job').show();
    	

  });

  /* --------FORM VALIDATION STARTS HERE----------*/

 $('.err').hide();  /* need to hide error messages beforehand */ 


  var form = document.forms[0];

  form.onsubmit= function processForm(){
          $('.fnameErr').show();   /* once clicked, show error message. NOTE: i gave each label TWO class names... a general one
           (".err") which i used to hide earlier ^ and a specific one for each field which i show here (ex. "fnameErr")*/

         if($('#fname').val() ==="" || $('#fname').val() === null ){
          $('.fnameErr').html("Please enter your first name");
        $('#fname').focus();
          return false;  
          }
        else{  /* (aka. if userinput is true)*/
           $('.fnameErr').css('border','none');   
       $('.fnameErr').html("");          /* removes error message once user fills in correct info */
          }

         if($('#lname').val() ==="" || $('#fname').val() === null ){
           $('.lnameErr').show();
          $('.lnameErr').html("Please enter your last name");
        $('#lname').focus();
          return false;
           $('.lnameErr').hide();
           return true;
         }
           else{
             $('.lnameErr').css('border','none');
       $('.lnameErr').html("");
        
         }

        var phonetest = /\(?\d{3}(\)|.)?\d{3}(-|.)?\d{4}/;

         if($('#phone').val() ==="" || $('#phone').val() === null  || phonetest.test($('#phone').val()) === false){
          $('.phoneErr').show();
          $('.phoneErr').html("Please enter a valid telephone number");
          return false;
           $('.phoneErr').hide();
           return true;
            }
           else{
             $('.phoneErr').css('border','none');
       $('.phoneErr').html("");
        
         }

         var emailtest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if($('#email').val() ==="" || $('#email').val() === null  || emailtest.test($('#email').val()) ===false){
          $('.emailErr').show();
          $('.emailErr').html("Please enter a valid email address");
          return false;
           $('.emailErr').hide();
           return true;
         }
           else{
             $('.emailErr').css('border','none');
       $('.emailErr').html("");
        
         }


          if($('#essay').val() ==="" || $('#essay').val() === null){
          $('.essayErr').show();
          $('.essayErr').html("Please complete this essay");
          return false;
           $('.essayErr').hide();
           return true;
            }
           else{
             $('.essayErr').css('border','none');
       $('.essayErr').html("");

        
         }

  }

    });

