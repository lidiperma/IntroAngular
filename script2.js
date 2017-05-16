var app=angular.module("app",[]);
 
function SeguroController($scope) {
    //Ojeto en notación JSON
    $scope.seguro = {
        nif: "",
        nombre: "",
        ape1: "",
        edad: undefined,
        sexo: "",
        casado: false,
        numHijos: undefined,
        embarazada: false,
        //Es un objeto dentro del objeto "seguro"
        coberturas: {
            oftalmologia: false,
            dental: false,
            fecundacionInVitro: false
        },
        //Es otro objeto dentro del objeto "seguro"
        enfermedades: {
            corazon: false,
            estomacal: false,
            rinyones: false,
            alergia: false,
            nombreAlergia: ""
        },
    
        fechaCreacion:new Date()
  }
}


