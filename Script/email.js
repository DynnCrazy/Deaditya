function sendEmail(event) {
    event.preventDefault();

    var username = document.getElementById('contact-username').value.trim();
    var message = document.getElementById('contact-message').value.trim();

    if (username === "" || message === "") {
        alert('Harap isi username dan pesan terlebih dahulu!');
        return;
    }

    grecaptcha.execute('6Le2xYYqAAAAALl5p4hUU-NUT3mdVUdgAjZIL_QU', { action: 'submit' }).then(function(token) {
        var data = {
            service_id: 'deaditya',
            template_id: 'temp_email',
            user_id: '3rOnyc1hK0Q6qfdk_',
            template_params: {
                'username': username,
                'message': message,
                'g-recaptcha-response': token
            }
        };

        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            alert('Pesan kamu telah terkirim');
            document.getElementById("contact-form").reset();
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    });
}
