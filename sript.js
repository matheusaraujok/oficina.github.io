document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var service = document.getElementById('service').value;

    var body = `Nome: ${name}\nTelefone: ${phone}\nEmail: ${email}\nServiço Desejado: ${service}`;
    var mailtoLink = `mailto:raimundomecanicoarniqueiras@gmail.com?subject=Solicitação de Orçamento&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
});
