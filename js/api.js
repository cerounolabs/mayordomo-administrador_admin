const urlBASE   = 'https://cerouno.me/mayorcontrol_api/apiv1';
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

function getFechaHora(codTipo){
    var xDATE   = new Date();
    var xDATA   = '';
    var xMONTH  = pad((xDATE.getMonth() + 1), 2);
    var xDAY    = pad(xDATE.getDate(), 2);
    var xMILS  = pad(xDATE.getMilliseconds(), 3);

    switch (codTipo) {
        case 1:
            xDATA   = xDATE.getFullYear() + '-' + xMONTH + '-' + xDAY;
            break;
    
        case 2:
            xDATA   = xDATE.getFullYear() + '/' + xMONTH + '/' + xDAY;
            break;

        case 3:
            xDATA   = xDAY + '-' + xMONTH + '-' + xDATE.getFullYear();
            break;

        case 4:
            xDATA   = xDAY + '/' + xMONTH + '/' + xDATE.getFullYear();
            break;

        case 5:
            xDATA   = xDATE.getHours() + ':' + xDATE.getMinutes() + ':' + xDATE.getSeconds();
            break;

        case 6:
            xDATA   = xDATE.getFullYear() + '' + xMONTH + '' + xDAY + '' + xDATE.getHours() + '' + xDATE.getMinutes() + '' + xDATE.getSeconds() + '' + xMILS;
            break;
    }

    return xDATA;
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

function getEstablecimiento(){
    if (localStorage.getItem('establecimientoJSON') === null){
        getJSON('establecimientoJSON', '000/establecimiento');
    }

    var xJSON = JSON.parse(localStorage.getItem('establecimientoJSON'));
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

function getEstablecimientoId(codElem){
    if (localStorage.getItem('establecimientoJSON') === null){
        getJSON('establecimientoJSON', '000/establecimiento');
    }

    var xJSON = JSON.parse(localStorage.getItem('establecimientoJSON'));
    var xDATA = [];

    if (xJSON['code'] == 200) {
        xJSON['data'].forEach(element => {
            if (element.establecimiento_codigo == codElem) {
                xDATA.push(element);
            }
        });
    }

    return xDATA;
}

function getEstablecimientoPersona(codElem){
    if (localStorage.getItem('establecimientoPersonaCOD') != codElem) {
        localStorage.removeItem('establecimientoPersonaJSON');
    }

    if (localStorage.getItem('establecimientoPersonaJSON') === null){
        localStorage.setItem('establecimientoPersonaCOD', codElem);

        getJSON('establecimientoPersonaJSON', '000/establecimientopersona/' + codElem);
    }

    var xJSON = JSON.parse(localStorage.getItem('establecimientoPersonaJSON'));
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

function getSeccion(codElem){
    if (localStorage.getItem('seccionJSON') === null){
        getJSON('seccionJSON', '000/establecimientoseccion/' + codElem);
    }

    var xJSON = JSON.parse(localStorage.getItem('seccionJSON'));
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

function getPotrero(codElem){
    if (localStorage.getItem('potreroJSON') === null){
        getJSON('potreroJSON', '000/establecimientopotrero/' + codElem);
    }

    var xJSON = JSON.parse(localStorage.getItem('potreroJSON'));
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

function getLote(codElem){
    if (localStorage.getItem('loteJSON') === null){
        getJSON('loteJSON', '000/establecimientolote/' + codElem);
    }

    var xJSON = JSON.parse(localStorage.getItem('loteJSON'));
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

function getAnimalAll(codElem){
    if (localStorage.getItem('animalJSON') === null){
        getJSON('animalJSON', '000/animal/' + codElem);
    }

    var xJSON = JSON.parse(localStorage.getItem('animalJSON'));
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

function getAnimal(codTip, codEst, codAni, codCat, codSub, codOrg, codRaz, codPro, codPel, codGra, codHac){
    localStorage.removeItem('animalJSON');

    if (localStorage.getItem('animalJSON') === null){
        getJSON('animalJSON', '000/animal/' + codEst);
    }

    var xJSON = JSON.parse(localStorage.getItem('animalJSON'));
    var xDATA = [];

    if (xJSON['code'] == 200) {
        xJSON['data'].forEach(element => {
            switch (codTip) {
                case 1:
                    if (codCat == 0) {
                        if (codSub == 0) {
                            if (codOrg == 0) {
                                if (codRaz == 0) {
                                    if (codPro == 0) {
                                        if (codPel == 0) {
                                            if (codGra == 0) {
                                                if (codHac == 0) {
                                                    xDATA.push(element);
                                                } else {
                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                        xDATA.push(element);
                                                    }
                                                }
        
                                            } else {
                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                    if (codHac == 0) {
                                                        xDATA.push(element);
                                                    } else {
                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                            xDATA.push(element);
                                                        }
                                                    }
                                                }
                                            }
        
                                        } else {
                                            if (element.tipo_pelaje_codigo == codPel) {
                                                if (codGra == 0) {
                                                    if (codHac == 0) {
                                                        xDATA.push(element);
                                                    } else {
                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                            xDATA.push(element);
                                                        }
                                                    }
        
                                                } else {
                                                    if (element.tipo_grado_sangre_codigo == codGra) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
        
                                    } else {
                                        if (element.persona_codigo == codPro) {
                                            if (codPel == 0) {
                                                if (codGra == 0) {
                                                    if (codHac == 0) {
                                                        xDATA.push(element);
                                                    } else {
                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                            xDATA.push(element);
                                                        }
                                                    }
            
                                                } else {
                                                    if (element.tipo_grado_sangre_codigo == codGra) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                                                    }
                                                }
            
                                            } else {
                                                if (element.tipo_pelaje_codigo == codPel) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
            
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
        
                                } else {
                                    if (element.tipo_raza_codigo == codRaz) {
                                        if (codPro == 0) {
                                            if (codPel == 0) {
                                                if (codGra == 0) {
                                                    if (codHac == 0) {
                                                        xDATA.push(element);
                                                    } else {
                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                            xDATA.push(element);
                                                        }
                                                    }
            
                                                } else {
                                                    if (element.tipo_grado_sangre_codigo == codGra) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                                                    }
                                                }
            
                                            } else {
                                                if (element.tipo_pelaje_codigo == codPel) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
            
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
            
                                        } else {
                                            if (element.persona_codigo == codPro) {
                                                if (codPel == 0) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                
                                                } else {
                                                    if (element.tipo_pelaje_codigo == codPel) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
        
                            } else {
                                if (element.tipo_origen_codigo == codOrg) {
                                    if (codRaz == 0) {
                                        if (codPro == 0) {
                                            if (codPel == 0) {
                                                if (codGra == 0) {
                                                    if (codHac == 0) {
                                                        xDATA.push(element);
                                                    } else {
                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                            xDATA.push(element);
                                                        }
                                                    }
            
                                                } else {
                                                    if (element.tipo_grado_sangre_codigo == codGra) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                                                    }
                                                }
            
                                            } else {
                                                if (element.tipo_pelaje_codigo == codPel) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
            
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
            
                                        } else {
                                            if (element.persona_codigo == codPro) {
                                                if (codPel == 0) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                
                                                } else {
                                                    if (element.tipo_pelaje_codigo == codPel) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
            
                                    } else {
                                        if (element.tipo_raza_codigo == codRaz) {
                                            if (codPro == 0) {
                                                if (codPel == 0) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                
                                                } else {
                                                    if (element.tipo_pelaje_codigo == codPel) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                
                                            } else {
                                                if (element.persona_codigo == codPro) {
                                                    if (codPel == 0) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                    
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                    
                                                    } else {
                                                        if (element.tipo_pelaje_codigo == codPel) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                    
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
        
                        } else {
                            if (element.tipo_subcategoria_codigo == codSub) {
                                if (codOrg == 0) {
                                    if (codRaz == 0) {
                                        if (codPro == 0) {
                                            if (codPel == 0) {
                                                if (codGra == 0) {
                                                    if (codHac == 0) {
                                                        xDATA.push(element);
                                                    } else {
                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                            xDATA.push(element);
                                                        }
                                                    }
            
                                                } else {
                                                    if (element.tipo_grado_sangre_codigo == codGra) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                                                    }
                                                }
            
                                            } else {
                                                if (element.tipo_pelaje_codigo == codPel) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
            
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
            
                                        } else {
                                            if (element.persona_codigo == codPro) {
                                                if (codPel == 0) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                
                                                } else {
                                                    if (element.tipo_pelaje_codigo == codPel) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
            
                                    } else {
                                        if (element.tipo_raza_codigo == codRaz) {
                                            if (codPro == 0) {
                                                if (codPel == 0) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                
                                                } else {
                                                    if (element.tipo_pelaje_codigo == codPel) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                
                                            } else {
                                                if (element.persona_codigo == codPro) {
                                                    if (codPel == 0) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                    
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                    
                                                    } else {
                                                        if (element.tipo_pelaje_codigo == codPel) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                    
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
            
                                } else {
                                    if (element.tipo_origen_codigo == codOrg) {
                                        if (codRaz == 0) {
                                            if (codPro == 0) {
                                                if (codPel == 0) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                
                                                } else {
                                                    if (element.tipo_pelaje_codigo == codPel) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                
                                            } else {
                                                if (element.persona_codigo == codPro) {
                                                    if (codPel == 0) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                    
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                    
                                                    } else {
                                                        if (element.tipo_pelaje_codigo == codPel) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                    
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                
                                        } else {
                                            if (element.tipo_raza_codigo == codRaz) {
                                                if (codPro == 0) {
                                                    if (codPel == 0) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                    
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                    
                                                    } else {
                                                        if (element.tipo_pelaje_codigo == codPel) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                    
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                    
                                                } else {
                                                    if (element.persona_codigo == codPro) {
                                                        if (codPel == 0) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                        
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                        
                                                        } else {
                                                            if (element.tipo_pelaje_codigo == codPel) {
                                                                if (codGra == 0) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                        
                                                                } else {
                                                                    if (element.tipo_grado_sangre_codigo == codGra) {
                                                                        if (codHac == 0) {
                                                                            xDATA.push(element);
                                                                        } else {
                                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                                xDATA.push(element);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        
                    } else {
                        if (element.tipo_categoria_codigo == codCat) {
                            if (codSub == 0) {
                                if (codOrg == 0) {
                                    if (codRaz == 0) {
                                        if (codPro == 0) {
                                            if (codPel == 0) {
                                                if (codGra == 0) {
                                                    if (codHac == 0) {
                                                        xDATA.push(element);
                                                    } else {
                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                            xDATA.push(element);
                                                        }
                                                    }
            
                                                } else {
                                                    if (element.tipo_grado_sangre_codigo == codGra) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                                                    }
                                                }
            
                                            } else {
                                                if (element.tipo_pelaje_codigo == codPel) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
            
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
            
                                        } else {
                                            if (element.persona_codigo == codPro) {
                                                if (codPel == 0) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                
                                                } else {
                                                    if (element.tipo_pelaje_codigo == codPel) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
            
                                    } else {
                                        if (element.tipo_raza_codigo == codRaz) {
                                            if (codPro == 0) {
                                                if (codPel == 0) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                
                                                } else {
                                                    if (element.tipo_pelaje_codigo == codPel) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                
                                            } else {
                                                if (element.persona_codigo == codPro) {
                                                    if (codPel == 0) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                    
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                    
                                                    } else {
                                                        if (element.tipo_pelaje_codigo == codPel) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                    
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
            
                                } else {
                                    if (element.tipo_origen_codigo == codOrg) {
                                        if (codRaz == 0) {
                                            if (codPro == 0) {
                                                if (codPel == 0) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                
                                                } else {
                                                    if (element.tipo_pelaje_codigo == codPel) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                
                                            } else {
                                                if (element.persona_codigo == codPro) {
                                                    if (codPel == 0) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                    
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                    
                                                    } else {
                                                        if (element.tipo_pelaje_codigo == codPel) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                    
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                
                                        } else {
                                            if (element.tipo_raza_codigo == codRaz) {
                                                if (codPro == 0) {
                                                    if (codPel == 0) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                    
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                    
                                                    } else {
                                                        if (element.tipo_pelaje_codigo == codPel) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                    
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                    
                                                } else {
                                                    if (element.persona_codigo == codPro) {
                                                        if (codPel == 0) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                        
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                        
                                                        } else {
                                                            if (element.tipo_pelaje_codigo == codPel) {
                                                                if (codGra == 0) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                        
                                                                } else {
                                                                    if (element.tipo_grado_sangre_codigo == codGra) {
                                                                        if (codHac == 0) {
                                                                            xDATA.push(element);
                                                                        } else {
                                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                                xDATA.push(element);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
            
                            } else {
                                if (element.tipo_subcategoria_codigo == codSub) {
                                    if (codOrg == 0) {
                                        if (codRaz == 0) {
                                            if (codPro == 0) {
                                                if (codPel == 0) {
                                                    if (codGra == 0) {
                                                        if (codHac == 0) {
                                                            xDATA.push(element);
                                                        } else {
                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                xDATA.push(element);
                                                            }
                                                        }
                
                                                    } else {
                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                                                        }
                                                    }
                
                                                } else {
                                                    if (element.tipo_pelaje_codigo == codPel) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                
                                            } else {
                                                if (element.persona_codigo == codPro) {
                                                    if (codPel == 0) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                    
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                    
                                                    } else {
                                                        if (element.tipo_pelaje_codigo == codPel) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                    
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                
                                        } else {
                                            if (element.tipo_raza_codigo == codRaz) {
                                                if (codPro == 0) {
                                                    if (codPel == 0) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                    
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                    
                                                    } else {
                                                        if (element.tipo_pelaje_codigo == codPel) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                    
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                    
                                                } else {
                                                    if (element.persona_codigo == codPro) {
                                                        if (codPel == 0) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                        
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                        
                                                        } else {
                                                            if (element.tipo_pelaje_codigo == codPel) {
                                                                if (codGra == 0) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                        
                                                                } else {
                                                                    if (element.tipo_grado_sangre_codigo == codGra) {
                                                                        if (codHac == 0) {
                                                                            xDATA.push(element);
                                                                        } else {
                                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                                xDATA.push(element);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                
                                    } else {
                                        if (element.tipo_origen_codigo == codOrg) {
                                            if (codRaz == 0) {
                                                if (codPro == 0) {
                                                    if (codPel == 0) {
                                                        if (codGra == 0) {
                                                            if (codHac == 0) {
                                                                xDATA.push(element);
                                                            } else {
                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                    xDATA.push(element);
                                                                }
                                                            }
                    
                                                        } else {
                                                            if (element.tipo_grado_sangre_codigo == codGra) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                                                            }
                                                        }
                    
                                                    } else {
                                                        if (element.tipo_pelaje_codigo == codPel) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                    
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                    
                                                } else {
                                                    if (element.persona_codigo == codPro) {
                                                        if (codPel == 0) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                        
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                        
                                                        } else {
                                                            if (element.tipo_pelaje_codigo == codPel) {
                                                                if (codGra == 0) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                        
                                                                } else {
                                                                    if (element.tipo_grado_sangre_codigo == codGra) {
                                                                        if (codHac == 0) {
                                                                            xDATA.push(element);
                                                                        } else {
                                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                                xDATA.push(element);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                    
                                            } else {
                                                if (element.tipo_raza_codigo == codRaz) {
                                                    if (codPro == 0) {
                                                        if (codPel == 0) {
                                                            if (codGra == 0) {
                                                                if (codHac == 0) {
                                                                    xDATA.push(element);
                                                                } else {
                                                                    if (element.tipo_hacienda_codigo == codHac) {
                                                                        xDATA.push(element);
                                                                    }
                                                                }
                        
                                                            } else {
                                                                if (element.tipo_grado_sangre_codigo == codGra) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                                                                }
                                                            }
                        
                                                        } else {
                                                            if (element.tipo_pelaje_codigo == codPel) {
                                                                if (codGra == 0) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                        
                                                                } else {
                                                                    if (element.tipo_grado_sangre_codigo == codGra) {
                                                                        if (codHac == 0) {
                                                                            xDATA.push(element);
                                                                        } else {
                                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                                xDATA.push(element);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                        
                                                    } else {
                                                        if (element.persona_codigo == codPro) {
                                                            if (codPel == 0) {
                                                                if (codGra == 0) {
                                                                    if (codHac == 0) {
                                                                        xDATA.push(element);
                                                                    } else {
                                                                        if (element.tipo_hacienda_codigo == codHac) {
                                                                            xDATA.push(element);
                                                                        }
                                                                    }
                            
                                                                } else {
                                                                    if (element.tipo_grado_sangre_codigo == codGra) {
                                                                        if (codHac == 0) {
                                                                            xDATA.push(element);
                                                                        } else {
                                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                                xDATA.push(element);
                                                                            }
                                                                        }
                                                                    }
                                                                }
                            
                                                            } else {
                                                                if (element.tipo_pelaje_codigo == codPel) {
                                                                    if (codGra == 0) {
                                                                        if (codHac == 0) {
                                                                            xDATA.push(element);
                                                                        } else {
                                                                            if (element.tipo_hacienda_codigo == codHac) {
                                                                                xDATA.push(element);
                                                                            }
                                                                        }
                            
                                                                    } else {
                                                                        if (element.tipo_grado_sangre_codigo == codGra) {
                                                                            if (codHac == 0) {
                                                                                xDATA.push(element);
                                                                            } else {
                                                                                if (element.tipo_hacienda_codigo == codHac) {
                                                                                    xDATA.push(element);
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    break;
            
                case 2:
                    if (element.establecimiento_codigo == codEst && element.animal_codigo == codAni) {
                        xDATA.push(element);
                    }
                    
                    break;
            }
        });
    }

    return xDATA;
}

function getAnimalPeso(codElem){
    localStorage.removeItem('animalpesoJSON');
    if (localStorage.getItem('animalpesoJSON') === null){
        getJSON('animalpesoJSON', '000/animalpeso/animal/' + codElem);
    }
 
    var xJSON = JSON.parse(localStorage.getItem('animalpesoJSON'));
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

function getAnimalPeso2(codElem){
    localStorage.removeItem('animalpesokilogramosJSON');
    if (localStorage.getItem('animalpesokilogramosJSON') === null){
        getJSON('animalpesokilogramosJSON', '000/animalpeso/peso/' + codElem);
    }
 
    var xJSON = JSON.parse(localStorage.getItem('animalpesokilogramosJSON'));
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

function getOrdenTrabajo(codTip, codEst, codEsta, codPAdmin, codPVete){
    if (localStorage.getItem('ordentrabajoCOD') != codEst) {
        localStorage.removeItem('ordentrabajoJSON');
    }

    if (localStorage.getItem('ordentrabajoJSON') === null){
        localStorage.setItem('ordentrabajoCOD', codEst);

        getJSON('ordentrabajoJSON', '000/ordentrabajo/' + codEst);
    }

    var xJSON = JSON.parse(localStorage.getItem('ordentrabajoJSON'));
    var xDATA = [];

    if (xJSON['code'] == 200) {
        xJSON['data'].forEach(element => {
            if (element.tipo_orden_trabajo_parametro == codTip) {
                xDATA.push(element);
            }
        });
    }

    return xDATA;
}

function getOrdenTrabajoDetalle(codOT){
    if (localStorage.getItem('ordentrabajodetalleCOD') != codOT) {
        localStorage.removeItem('ordentrabajodetalleJSON');
    }

    if (localStorage.getItem('ordentrabajodetalleJSON') === null){
        localStorage.setItem('ordentrabajodetalleCOD', codOT);

        getJSON('ordentrabajodetalleJSON', '000/ordentrabajoandrologia/' + codOT);
    }

    var xJSON = JSON.parse(localStorage.getItem('ordentrabajodetalleJSON'));
    var xDATA = [];

    if (xJSON['code'] == 200) {
        xJSON['data'].forEach(element => {
            xDATA.push(element);
        });
    }

    return xDATA;
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}