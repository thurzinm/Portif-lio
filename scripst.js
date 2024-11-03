    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-23581568-13');

    function myFunction (){
        var $doc = $('html, body');
    $('.scrollSuvave').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1200);
        return false;
    });
}

    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }