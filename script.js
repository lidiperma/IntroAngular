
 
 
/* global $scope */

var app=angular.module("app",[]);

function PruebaController($scope) {
  $scope.mensaje="Mensaje1";
  $scope.mensaje="Mensaje2";
  
  $scope.cambiarMensaje2=function() {
    $scope.mensaje="Cambiar Mensaje1";
    $scope.mensaje2="Cambiar Mensaje2";
};
}



  
  