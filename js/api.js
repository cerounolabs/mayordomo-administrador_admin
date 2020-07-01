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

function getPropietario(codElem){
    if (localStorage.getItem('propietarioJSON') === null){
        getJSON('propietarioJSON', '000/establecimientopersona/' + codElem);
    }

    var xJSON = JSON.parse(localStorage.getItem('propietarioJSON'));
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

function getAnimal(codEst, codCat, codSub, codOrg, codRaz, codPro, codPel, codGra, codHac){
    localStorage.removeItem('animalJSON');

    if (localStorage.getItem('animalJSON') === null){
        getJSON('animalJSON', '000/animal/' + codEst);
    }

    var xJSON = JSON.parse(localStorage.getItem('animalJSON'));
    var xDATA = [];

    if (xJSON['code'] == 200) {
        xJSON['data'].forEach(element => {
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
        });
    }

    return xDATA;
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}