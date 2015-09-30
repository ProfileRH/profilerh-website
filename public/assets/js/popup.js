/**
 * Created by thomascatty on 28/05/15.
 */
function hideDiv() {
    if (document.getElementById) { // DOM3 = IE5, NS6
        document.getElementById('hideshow').style.visibility = 'hidden';
     /*  document.getElementById('myheader').style.visibility = 'visible'; */ // add by Thomas


    } else {
        if (document.layers) { // Netscape 4
            document.hideshow.visibility = 'hidden';
        } else { // IE 4
            document.all.hideshow.style.visibility = 'hidden';
        }
    }
}

function showDiv() {
    if (document.getElementById) { // DOM3 = IE5, NS6
       /* document.getElementById('myheader').style.visibility = 'hidden';*/ // add by Thomas
        document.getElementById('hideshow').style.visibility = 'visible';

    } else {
        if (document.layers) { // Netscape 4
            document.hideshow.visibility = 'visible';
        } else { // IE 4
            document.all.hideshow.style.visibility = 'visible';
        }
    }
}