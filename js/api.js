const urlBASE   = 'https://www.cerouno.me/mayorcontrol_api/apiv1';
const xHTTP	    = new XMLHttpRequest();
const autBASE   = 'dXNlcl9zZmhvbG94OnVzZXJfc2Zob2xveDIwMjA=';

function getJSON(codJSON, codURL){
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

function postJSON(codPAGE, codURL, codPARS){
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

function getDominioSub(codDom){
    if (localStorage.getItem('dominioSubJSON') === null){
        getJSON('dominioSubJSON', '000/dominiosub');
    }

    var xJSON = JSON.parse(localStorage.getItem('dominioSubJSON'));
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

function getDominioTri(codDom){
    if (localStorage.getItem('dominioTriJSON') === null){
        getJSON('dominioTriJSON', '000/dominiotri');
    }

    var xJSON = JSON.parse(localStorage.getItem('dominioTriJSON'));
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

function getPais(){
    if (localStorage.getItem('paisJSON') === null){
        getJSON('paisJSON', '000/pais');
    }

    var xJSON = JSON.parse(localStorage.getItem('paisJSON'));
    var xDATA = [];

    if (xJSON['code'] == 200) {
        xJSON['data'].forEach(element => {
            if (element.tipo_estado_codigo == 1) {
                xDATA.push(element);
            }
        });
    }

    return xDATA;
}

function getDepartamento(){
    if (localStorage.getItem('departamentoJSON') === null){
        getJSON('departamentoJSON', '000/departamento');
    }

    var xJSON = JSON.parse(localStorage.getItem('departamentoJSON'));
    var xDATA = [];

    if (xJSON['code'] == 200) {
        xJSON['data'].forEach(element => {
            if (element.tipo_estado_codigo == 1) {
                xDATA.push(element);
            }
        });
    }

    return xDATA;
}

function getDistrito(){
    if (localStorage.getItem('distritoJSON') === null){
        getJSON('distritoJSON', '000/distrito');
    }

    var xJSON = JSON.parse(localStorage.getItem('distritoJSON'));
    var xDATA = [];

    if (xJSON['code'] == 200) {
        xJSON['data'].forEach(element => {
            if (element.tipo_estado_codigo == 1) {
                xDATA.push(element);
            }
        });
    }

    return xDATA;
}

function getPersona(){
    if (localStorage.getItem('personaJSON') === null){
        getJSON('personaJSON', '000/persona');
    }

    var xJSON = JSON.parse(localStorage.getItem('personaJSON'));
    var xDATA = [];

    if (xJSON['code'] == 200) {
        xJSON['data'].forEach(element => {
            if (element.tipo_estado_codigo == 1) {
                xDATA.push(element);
            }
        });
    }

    return xDATA;
}