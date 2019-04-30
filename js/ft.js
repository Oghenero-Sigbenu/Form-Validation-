$(function(){
    $('button').attr('disabled','true');
    // $('#form').on( 'input', function(e){
    // e.preventDefault();
    // $('#form').on( 'input', function(){
    //     let input = $(this);
        // let names = input.val(); 
let $user = $('#user');
let $password = $('#password');
let $retype = $('#retype');
// let email = $('#email').val();
let $age = $('#age');
let $button = $('button');

 
var formValidate = 

// $('form').submit(function(e){
//     $('#submit').attr('disabled','true');
// //     e.preventDefault();
// //    
// //     // console.log(submit);
//    });
    

// if(names){input.addClass('span', )}

$user.blur( function (){
    $(".error").remove();
if(user.val().length < 6){
    $('#user').after('<span class="error">This field is required</span>');
    console.log(user);

}
});
password.blur( function (){
    $(".error").remove();
if(password.val().length < 8){
    $('#password').after('<span class="error">Must be at least 8 characters</span>');
}
});
retype.blur( function (){
    $(".error").remove();
if( retype.val() != password.val()){
//    $('.error').text('');
    $('#retype').after('<span class="error">Does not match</span>');
    $('.submit').prop('disabled', true);
}


});
// else{
//     $('#retype').after('<span class="error">Must be the same value with password</span>');

//     // $('').text('<span class="error">Must be the same as password</span>');

// }
age.blur(function (){
    $(".error").remove();
if(age.val() < 18) {
    $('#age').after('<span class="error">Age must be above 18</span>');
    $('.submit').prop('disabled', true); 
}else{
    
}
if(
    (user.val().length > 6) && (password.val().length > 8) && (password.val() == retype.val()) && (age.val() >= 18) ){
            //  $('#submit').RemoveAttr("disabled" );
              $('.submit').prop('disabled', false);
        }
});

    // $('form').blur(function(){
    //     $('input[type=submit]').removeAttr('disabled','disabled'); 
    // });



// console.log(yes);

    });

