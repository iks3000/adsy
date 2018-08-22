import 'jquery-validation';
import $ from "jquery";

$(document).ready(function (){

  $.validator.addMethod(
    "regex",
    function(value, element, regexp) {
      if (regexp.constructor != RegExp)
        regexp = new RegExp(regexp);
      else if (regexp.global)
        regexp.lastIndex = 0;
      return this.optional(element) || regexp.test(value);
    }
  );

  let mailRegexp = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;


  $('#message').validate({

    rules: {
      name: {
        required: true,

      },
      email: {
        required: true,
        email: true,
        regex: mailRegexp
      },
      subject: {
        required: true
      },
      message: {
        required: true,
        // minlength: 5,
        // maxlength: 100
      }
    },

    errorPlacement: function(){
      return false;  // suppresses error message text
    },
  });
});