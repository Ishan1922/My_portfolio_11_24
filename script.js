function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        email_sender: document.getElementById("emailSender").value,
        subject_sender: document.getElementById("subjectSender").value,
        message_sender: document.getElementById("message").value,
    };
    if(tempParams.email_sender == "" || tempParams.from_name == "" || tempParams.message_sender=="" || tempParams.subject_sender == ""){
        alert("Fields can't be empty");
        return;
    }
    console.log("temp params ---",tempParams);
    emailjs.send('service_xkmrjl7','template_vhxuhnb',tempParams)
     .then(function(res){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mail Sent Successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
        // Clear form fields after success
        document.getElementById("fromName").value = "";
        document.getElementById("emailSender").value = "";
        document.getElementById("subjectSender").value = "";
        document.getElementById("message").value = "";
     })
     .catch(err => {
        alert(err);
     });

    //  window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: "smooth"
    //   });

}

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings: ["Software Developer","Freelancer","Blogger","Writer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        fadeOut: true,
        
    });
    var typed = new Typed(".typing-2",{
        strings: ["Software Developer","Freelancer","Blogger","Writer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});

     // Scroll to top button script
      const btnScrollToTop = document.querySelector("#btnScrollToTop");

      btnScrollToTop.addEventListener("click", function(){
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });