//Ao inicializar a página os seguintes itens devem ser carregados
$(document).ready(function(){
    //Carregar o super silde
    $('#slides').superslides({
        animation: 'slide',
        play: 3000,
        pagination: false
    });

    //Carrega o texto
    var typed = new Typed('#element', {
        strings: ['Analista de desenvolvimento', 'Programador Full Stack Júnior'],
        typeSpeed: 70,
        loop: true,
        startDelay: 1200
      });

});

