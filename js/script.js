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
    
    //Deve mostrar os valores trocando de número quando chega na parte dos status
    var statsDontAppear = $(".stats-section").offset().top;

    var countUpFinished = false;//Para evitar que ao scrollar os númeors fiquem zerados deve criar uma flag que avisa quando que o Counter Up deve ser acionado, no caso ao iniciar a página será 0 e quando chegar no elemento dos status vai ser 1, dessa forma não terá a animação dos números subindo e os valores serão mantidos os mesmos

    //console.log(skillsDontAppear)
    $(window).scroll(function(){//Se a janela rolar
        //console.log(window.pageYOffset)
        
        //Código para o Pie Chart
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

        //Código para o plugin Count Up
        if(!countUpFinished && window.pageYOffset > statsDontAppear - $(window).height()+200){
            //Para cada elemento da classe counter deve fazer o seguinte comando
            $(".counter").each(function(){
                var element = $(this);//Vai pegar o elemento
                var endVal = parseInt(element.text());//Vai pegar o texto dentro do elemento e transformar em inteiro dessa forma vai de 0 até o valor que foi colocado no elemento
    
                element.countup(endVal);//Comando do count Up para mostrar os valores indo de 0 até o valor definido
            });
            countUpFinished = true;//Como o count Up será true, dessa forma os valores serão mantidos os mesmos, a não ser que recarregue a página, caso for os números terão a animação de carregamento
        }
    });

    $("[data-fancybox]").fancybox();


    

    

});

