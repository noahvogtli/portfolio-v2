const modal = document.getElementById('contact-modal')
const openmodal = document.getElementById('open-contact')
const closemodal = document.getElementById('close-contact')

openmodal.addEventListener('click', () => {
    modal.showModal();
})

closemodal.addEventListener('click', () => {
    modal.close();
    console.log('closing main modal')
})


//update this with your js_form selector
var form_id_js = "javascript_form";

var data_js = {
    "access_token": "j8wm8ydqo1bwxi8pzgg2bp90"
};

function js_onSuccess() {
    window.location = window.location.pathname;
    modal.close();
    alert('Message sent successfully')
}

function js_onError(error) {
    window.location = window.location.pathname;
}

var sendButton = document.getElementById("js_send");

function js_send() {
    sendButton.value='Sending…';
    sendButton.disabled=true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            js_onSuccess();
        } else
        if(request.readyState == 4) {
            js_onError(request.response);
        }
    };

    var subject = document.querySelector("#" + form_id_js + " [name='firstname']").value + " " + document.querySelector("#" + form_id_js + " [name='lastname']").value + " ("+document.querySelector("#" + form_id_js + " [name='email']").value+")" + " is sending you a message";
    var message = document.querySelector("#" + form_id_js + " [name='message']").value + "\n\n\n\nReply at: " + document.querySelector("#" + form_id_js + " [name='email']").value;
    data_js['subject'] = subject;
    data_js['text'] = message;
    var params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);

    return false;
}

sendButton.onclick = js_send;

function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}

var js_form = document.getElementById(form_id_js);
js_form.addEventListener("submit", function (e) {
    e.preventDefault();
});