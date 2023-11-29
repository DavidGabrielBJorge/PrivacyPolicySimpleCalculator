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

    //Carregar o Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            768:{//resolução dos celulares
                items:3
            },
            938:{//resolução dos celulares
                items:4
            },
        }
    })

    //Carregar o Pie Chart
    /*
    $(function() {
        $('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#333',
            scaleColor: false,
            size:150,
            onStep: function(from, to, percent){//Ao carregar a página vai de 0 até o valo da porcentagem correta
                $(this.element).find('.skill-percentage').text(Math.round(percent));
            }
        });
    });
*/
    var skillsDontAppear = $(".skills-section").offset().top;//Captura a posição vertical da distância do topo do elemto da classe 'skills-section', dessa forma pode realizar alguma ação quando o usuário rolar para essa posição na página
    
    //console.log(skillsDontAppear)
    $(window).scroll(function(){//Se a janela rolar
        //console.log(window.pageYOffset)
        if(window.pageYOffset > skillsDontAppear - $(window).height()+200){//Adciona os 200 como delay
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#333',
                scaleColor: false,
                size:150,
                onStep: function(from, to, percent){//Ao carregar a página vai de 0 até o valo da porcentagem correta
                    $(this.element).find('.skill-percentage').text(Math.round(percent));
                }
            });
        }
    })
});

