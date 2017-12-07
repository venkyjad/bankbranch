var app = angular.module ("myApp", []);


app.controller('FilterController',['$scope','$element','$http','$timeout', function($scope, $element, $http, $timeout) {
  
    $scope.changeCity = function (location,start,end) {

      $('#loader').removeClass('hidden');
      $('#content').addClass('hidden');

      city= location;
      start = start;
      end = end;
      url = 'https://app.fyle.in/api/bank_branches?city='+city+'&offset='+start+'&limit='+end;
      $http({
        method: "GET",
        url: url,
        dataType: 'json',
        // data: JSON.stringify({ title: startdate, songname: enddate}),
        headers: { "Content-Type": "application/json; charset=utf-8" },

        }).then(function (res) {
          
          $scope.branches = res.data;
          $('#loader').addClass('hidden');
          $('#content').removeClass('hidden');


        });

  

    }

  

    $("#select1").on('change', function(e) {

      target = e.currentTarget;
      city = $(target).val();
      start = 0;
      
      end = 50;
      $scope.changeCity(city,start,end);
    });


    $("#entries").on('change', function(e) {
      target = e.currentTarget;
      end = $(target).val();
      city = $('#select1').val();
      start = 0;
      
      $scope.changeCity(city,start,end);
    });

    $scope.changeCity("BANGALORE",0,50);




    
}]);
