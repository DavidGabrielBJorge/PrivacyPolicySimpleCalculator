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

    //Chamar o fancybox na aplicação
    $("[data-fancybox]").fancybox();

    $(".items").isotope({
        filter:'*',//Ao caregar vai direto para a opção de mostrar todos os itens
        animationOptions:{
            duration:1200,
            easing: 'linear',
            queue: false
        }
    });
    
    //Seleciona o id filters com a tag a
    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");//Procura o elemento current e elimina a classe current dele
        $(this).addClass("current");//Vai pegar o elemento que foi clicado e adicionar a classe current

        var selector = $(this).attr("data-filter");//Vai pegar o valor do atributo do data-filter

        $(".items").isotope({
            filter:selector,//Vai mostrar os itens do seletor selecionado
            animationOptions:{
                duration:1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;//Deve colocar false para parar qualquer operação e voltar ao estado padrão
    });

    $("#navigation li a").click(function(e){
        e.preventDefault();//Previne o evento de acontecer

        var targetElement = $(this).attr("href");//Vai pegar o atributo do elemento clicado
        var targetPosition = $(targetElement).offset().top;//Vai pegar o id do elemento, por exemplo se o href for "about" o position será $about

        $("html, body").animate({ scrollTop: targetPosition- 50}, "slow")
        /*Vai selecionar tanto o html quanto o body, depois vai fazer uma animação de scroll até o elemto específico de forma lenta até chegar na posição do alvo ajustando 50px */
    });

    //Lógica para o navbar fixar no topo da página 
    const nav = $("#navigation");
    const navTop = nav.offset().top;//Vai pegar a posição top da nav

    $(window).on("scroll", stickyNavbar)//Ao usar o scroll no window vai chamar a função stickyNavbar

    function stickyNavbar(){
        const body = $("body");
        //Caso ao usar o scroll passe o topo na navegação de fixar a navbar, se for menor deve retirar a classe
        if($(window).scrollTop()>=navTop){

            body.css("padding-top", nav.outerHeight()+"px");//Está ajustando o padding-top do elemento nav, o nav.outerHeight() recupera a altura externa do nav, como seu resultado é uma string deve acrescentar o px para coverter para unidade
            /*Para fazer com que a troca do navbar seja sutil quando é fixo, é preciso adicionar no local onde ele ficava o padding, dessa forma o site não precisa se apropriar de forma abrupta quando o navbar sai do lugar*/
            body.addClass("fixedNav");
        }else{
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }







    

});

