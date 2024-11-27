function sendEmail() {
    if (isEmailCooldown) {
        alert('Cooldown!');
        return;
    }

    var username = document.getElementById('contact-username').value.trim();
    var message = document.getElementById('contact-message').value.trim();
    var recaptchaResponse = grecaptcha.getResponse();

    if (username === "" || message === "") {
        alert('Harap isi username dan pesan terlebih dahulu!');
        return;
    }

    if (recaptchaResponse === "") {
        alert('Harap selesaikan CAPTCHA!');
        return;
    }

    var data = {
        service_id: 'deaditya',
        template_id: 'temp_email',
        user_id: '3rOnyc1hK0Q6qfdk_',
        template_params: {
            'username': username,
            'message': message
        },
        g_recaptcha_response: recaptchaResponse // Pass reCAPTCHA token
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert('Pesan kamu telah terkirim');
        document.getElementById("contact-form").reset();
        grecaptcha.reset(); // Reset reCAPTCHA
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });

    isEmailCooldown = true;

    setTimeout(() => {
        isEmailCooldown = false;
    }, 60000);
}
