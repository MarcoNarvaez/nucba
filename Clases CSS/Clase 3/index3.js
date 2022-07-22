(function() {
    angular.module('InventarioApp', [])
      .controller('InventarioCtrl', inventarioCtrlFn);
  
    inventarioCtrlFn.$inject = ['$scope', '$log'];
    
    function inventarioCtrlFn ($scope, $log) {
      $log.debug('Iniciando InventarioCtrl');
      $scope.valorTest = 'UNO';
      var foto1 = 'https://4.bp.blogspot.com/-uEaH48GhjOs/Vji7GepdR4I/AAAAAAAADPQ/SGQ_36W8CZw/s1600/propiedades%2Bboniato%2B%25282%2529.jpg';
      var foto2 = 'http://blog.casapia.com/wp-content/uploads/2015/10/img_05031.jpg';
      var foto3 = 'http://adelgazarmasrapido.com/wp-content/uploads/2014/08/Boniato-para-perder-peso.png';
      
      $scope.items = {};
      $scope.items.categoriaA = [];
      $scope.items.categoriaA.push({ref:'REF00001', desc:'Objeto 1, cosa verde rara', img:foto1});
      $scope.items.categoriaA.push({ref:'REF00002', desc:'Objeto 2, cosa roja rara', img:foto1});
      $scope.items.categoriaA.push({ref:'REF00003', desc:'Objeto 3, cosa verde rara Objeto 3, cosa verde rara Objeto 3, cosa verde rara Objeto 3, cosa verde rara', img:foto1});
      $scope.items.categoriaA.push({ref:'REF00004', desc:'Objeto 4, cosa verde rara', img:foto1});
      $scope.items.categoriaA.push({ref:'REF00005', desc:'Objeto 5, cosa verde rara', img:foto1});
      $scope.items.categoriaA.push({ref:'REF00006', desc:'Objeto 6, cosa verde rara', img:foto1});
          
      $scope.items.categoriaB = [];
      $scope.items.categoriaB.push({ref:'REF10001', desc:'Cosa 1, cosa rara', img:foto2});
      $scope.items.categoriaB.push({ref:'REF10002', desc:'Cosa 2, cosa rara', img:foto2});
      $scope.items.categoriaB.push({ref:'REF10003', desc:'Cosa 3, cosa rara', img:foto2});
      $scope.items.categoriaB.push({ref:'REF10004', desc:'Cosa 4, cosa rara', img:foto2});
      $scope.items.categoriaB.push({ref:'REF10005', desc:'Cosa 5, cosa rara', img:foto2});
          
      $scope.items.categoriaC = [];
      $scope.items.categoriaC.push({ref:'REF20001', desc:'Esto es un 1', img:foto3});
      $scope.items.categoriaC.push({ref:'REF20002', desc:'Esto es un 2', img:foto3});
      $scope.items.categoriaC.push({ref:'REF20003', desc:'Esto es un 3', img:foto3});
      $scope.items.categoriaC.push({ref:'REF20004', desc:'Esto es un 4', img:foto3});
      $scope.items.categoriaC.push({ref:'REF20005', desc:'Esto es un 5', img:foto3});
      
      $scope.listaCategorias = Object.keys($scope.items);
      $scope.categoria = $scope.listaCategorias[0];
      $scope.actualizaCategoria = function (){
        $scope.listaItems = $scope.items[$scope.categoria];
      }
      $scope.actualizaCategoria();    
    }
  })();