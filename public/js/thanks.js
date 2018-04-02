var submitted = false;

/**
 * 
 */
function thanksRedirect() {
    if (submitted) {
        var loadingDiv = document.getElementById('spinner');
        loadingDiv.style.display="block";
        setTimeout(function(){ window.location = 'http://www.comeygana.com/gracias'; }, 3000);
    }
}