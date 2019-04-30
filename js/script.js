//this code will run when the form is submitted
$("#form").submit(function(event){
    console.log("love")
        //prevents the form from been submitted
        event.preventDefault();

        //declaring a varaible for error message
        var errormessage = "";
        
        //if username is less than 6 an 
        //error message should display
        if($('#user').val().length < 4){
            errormessage = "<br/> This field is required"
        }

        //password must be > 8 letters
        if($("#password").val().length < 8){
            errormessage = errormessage + "<br/> password must be more than 8 letters"
            console.log("yesd")  
        }
        
        //password must be === to retype password
        if($("#password").val() !== $("#retype").val()){
            errormessage = errormessage + "<br/> password does not match"
        }
        
        //age must be more than 18years old
        if($("#age").val() <= 18){
            errormessage = errormessage + "<br/> must be above 18years"

        }
        if(errormessage === ""){
            $("button").attr('disabled','true');
            console.log("tres")}
        $(".error").html(errormessage);
         
})