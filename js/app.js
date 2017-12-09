var app = angular.module ("myApp", ['ngMaterial']);


app.controller('FilterController',['$scope','$element','$http','$timeout', function($scope, $element, $http, $attrs) {
    
    
    
    $scope.cities = [{name:'Bangalore',id:'BANGALORE'},{name:'Chennai',id:'CHENNAI'},{name:'Pune',id:'PUNE'},{name:'Hyderabad',id:'HYDERABAD'},{name:'Mumbai',id:'MUMBAI'}]


    // Hits api to get data
    $scope.fetchData = function (location,start,end) {
      $scope.loader_flag = true;

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
        headers: { "Content-Type": "application/json; charset=utf-8" },

        }).then(function (res) {
          


          $scope.branches = res.data;
          $('#loader').addClass('hidden');
          $('#content').removeClass('hidden');
          $scope.loader_flag = false;
        });
    }

    // Navigate to prev page
    $scope.navPrev = function(){
      var prev_el = angular.element('#prev');
      var next_el = angular.element('#next');
      offset_val = prev_el.attr('data-prev');
      end = $scope.itemsPerPage || 10;
      city = $scope.currentCity || 'BANGALORE';
      
      $scope.fetchData(city,offset_val,end);      

      new_offset_value =  parseInt(offset_val) - parseInt(end) ;
      prev_el.attr('data-prev',new_offset_value);

      of_val = next_el.attr('data-next');
      new_offset_value_next =  parseInt(of_val) - parseInt(end) ;
      next_el.attr('data-next',new_offset_value_next);

      
      if (new_offset_value == 0)
        prev_el.attr('disabled',true);


    }

    // Navigate to next page
    $scope.navNext = function(){
      var prev_el = angular.element('#prev');
      var next_el = angular.element('#next');
      offset_val = next_el.attr('data-next');

      end = $scope.itemsPerPage || 10;
      city = $scope.currentCity || 'BANGALORE';
      $scope.fetchData(city,offset_val,end);

      prev_el.removeAttr('disabled');

      new_offset_value_next =  parseInt(offset_val) + parseInt(end) ;
      next_el.attr('data-next',new_offset_value_next);

      of_val = prev_el.attr('data-prev');
      new_offset_value_prev =  parseInt(of_val) + parseInt(end) ;
      prev_el.attr('data-prev',new_offset_value_prev);


    }

    
    

    // Change in City
    $scope.changeInCity = function(){

      var prev_el = angular.element('#prev');
      prev_el.attr('disabled',true);

        
      city = this.currentCity;
      end = $scope.itemsPerPage || 10;
      start = 0;

      var nextEl =angular.element('#next');
      nextEl.attr('data-next', end);

      var prevEl =angular.element('#prev');
      prevEl.attr('data-prev', start);

      $scope.fetchData(city,start,end);
      
      
    }


    // Items Per Page
    $scope.perPage = function(){

      var prev_el = angular.element('#prev');
      prev_el.attr('disabled',true);

  
      end = this.itemsPerPage;
      start = 0;
      city = $scope.currentCity || 'BANGALORE';

      var nextEl =angular.element('#next');
      nextEl.attr('data-next', end);

      var prevEl =angular.element('#prev');
      prevEl.attr('data-prev', start);

      $scope.fetchData(city,start,end);

    }
   

    
    $scope.fetchData("BANGALORE",0,10);




    
}]);
