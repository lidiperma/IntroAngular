
 
 
/* global $scope */

var app=angular.module("app",[]);

function PruebaController($scope) {
  $scope.mensaje="Hola Mundo";
  $scope.mensaje="Adios mundo cruel :-)";
  
  $scope.cambiarMensaje2=function() {
    $scope.mensaje="A tomar cafe";
    $scope.mensaje2="Que sean dos";
};
}



  
  