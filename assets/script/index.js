$( document ).ready(function() {
    $('.cl_projets--item').on('mouseover', function() {
        let src = $(this).find('.cl_projets--bg').attr('src');

        $('.cl_projets--full-bg').css('background-image', 'url(' + src + ')');

        $(this).find('.cl_projets--titre').addClass('cl_projet--titre-active');
        $(this).find('.cl_projets--sous-titre').addClass('cl_projet--sous-titre-active');
        
        $('.cl_projets--item').find('.cl_projets--bg').css('opacity', 0);
        $('.cl_projets--titre, .cl_projets--sous-titre').css('opacity', 0.5);
        $(this).find('.cl_projets--titre, .cl_projets--sous-titre').css('opacity', 1);
    })
    
    $('.cl_projets--item').on('mouseout', function() {
        $('.cl_projets--full-bg').css('background-image', 'none');

        $('.cl_projets--titre').removeClass('cl_projet--titre-active');
        $('.cl_projets--sous-titre').removeClass('cl_projet--sous-titre-active');

        $('.cl_projets--item').find('.cl_projets--bg').css('opacity', 1);
    })

    $('#btn-burger-menu, #btn-fermer-menu').on('click', function(){
        $('#menu-content').toggleClass('isOpen');
    })
});