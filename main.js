document.addEventListener('DOMContentLoaded', function() {
    // Animação para os links do menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.transition = 'transform 0.3s';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Função para ajustar o layout em diferentes resoluções
    function adjustLayout() {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelector('.nav-links');
        if (window.innerWidth <= 768) {
            navbar.style.flexDirection = 'column';
            navLinks.style.flexDirection = 'column';
        } else {
            navbar.style.flexDirection = 'row';
            navLinks.style.flexDirection = 'row';
        }
    }

    // Chamar a função inicialmente e adicionar um listener para redimensionamento
    adjustLayout();
    window.addEventListener('resize', adjustLayout);

    // Função para verificar se um elemento está visível na tela
    // function isElementInViewport(el) {
    //     const rect = el.getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }

    // // Função para mostrar elementos quando estiverem visíveis
    // function showElementsOnScroll() {
    //     const fadeElements = document.querySelectorAll('.fade-in');
    //     fadeElements.forEach(element => {
    //         if (isElementInViewport(element)) {
    //             element.classList.add('visible');
    //         }
    //     });
    // }

    // Adicionar listener para o evento de scroll
    // window.addEventListener('scroll', showElementsOnScroll);
    // Chamar a função inicialmente para mostrar elementos já visíveis
    // showElementsOnScroll();

    // Funcionalidade do botão AZ-5
    const botao = document.querySelector('#botao');
    const usinaImage = document.querySelector('#usina-image');
    const usinaGif = document.querySelector('#usina-gif');

    botao.addEventListener('click', function() {
        usinaImage.style.display = 'none';
        usinaGif.style.display = 'block';
    });
});