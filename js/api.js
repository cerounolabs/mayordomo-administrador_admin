const urlBASE   = 'https://www.cerouno.me/mayorcontrol_api/apiv1';
const xHTTP	    = new XMLHttpRequest();
const autBASE   = 'dXNlcl9zZmhvbG94OnVzZXJfc2Zob2xveDIwMjA=';

function getJSON(codJSON, codURL) {
    var urlJSON = urlBASE + '/' + codURL;

    xHTTP.open('GET', urlJSON, false);
    xHTTP.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xJSON = JSON.parse(this.responseText);
            localStorage.removeItem(codJSON);
            localStorage.setItem(codJSON, JSON.stringify(xJSON));
        }
    };

    xHTTP.setRequestHeader('Accept', 'application/json;charset=UTF-8');
    xHTTP.setRequestHeader('Authorization', 'Basic ' + autBASE);
    xHTTP.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xHTTP.send();
}

function postJSON(codPAGE, codURL, codPARS) {
    var urlJSON = urlBASE + '/' + codURL;

    xHTTP.open('POST', urlJSON, true);
    xHTTP.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xJSON = JSON.parse(this.responseText);
            window.location.replace('../public/' + codPAGE + '.php?code='+ xJSON.code + '&msg=' + xJSON.message); 
        }
    };
    
    xHTTP.setRequestHeader('Accept', 'application/json;charset=UTF-8');
    xHTTP.setRequestHeader('Authorization', 'Basic ' + autBASE);
    xHTTP.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xHTTP.send(codPARS);
}

function getDominio(codDom){
    if (localStorage.getItem('dominioJSON') === null){
        getJSON('dominioJSON', '000/dominio');
    }

    var xJSON = JSON.parse(localStorage.getItem('dominioJSON'));
    var xDATA = [];

    if (xJSON['code'] == 200) {
        xJSON['data'].forEach(element => {
            if (element.tipo_dominio == codDom) {
                xDATA.push(element);
            }
        });
    }

    return xDATA;
}