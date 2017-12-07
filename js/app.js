var app = angular.module ("myApp", []);

// app.controller ("FilterController", ['$scope', function ($scope) {
//   this.data = [{"ifsc":"ABHY0065001","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"RTGS-HO","address":"ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065002","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"ABHYUDAYA NAGAR","address":"ABHYUDAYA EDUCATION SOCIETY, OPP. BLDG. NO. 18, ABHYUDAYA NAGAR, KALACHOWKY, MUMBAI - 400033","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065003","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"BAIL BAZAR","address":"KMSPM'S SCHOOL, WADIA ESTATE, BAIL BAZAR-KURLA(W), MUMBAI-400070","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065004","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"BHANDUP","address":"CHETNA APARTMENTS, J.M.ROAD, BHANDUP, MUMBAI-400078","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065005","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"DARUKHANA","address":"POTIA IND.ESTATE, REAY ROAD (E), DARUKHANA, MUMBAI-400010","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065006","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"FORT","address":"ABHYUDAYA BANK BLDG., 251, PERIN NARIMAN STREET, FORT, MUMBAI-400001","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065007","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"GHATKOPAR","address":"UNIT NO 2 & 3, SILVER HARMONY BLDG,NEW MANIKLAL ESTATE, GHATKOPAR (WEST), MUMBAI-400086","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065008","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"KANJUR","address":"BHANDARI CO-OP. HSG. SOCIETY, KANJUR VILLAGE, KANJUR (EAST), MUMBAI-400078","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065009","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"NEHRU NAGAR","address":"ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065010","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"PAREL","address":"SHRAMA SAFALYA, 63 G.D.AMBEKAR MARG, PAREL VILLAGE, MUMBAI-400012","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065011","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"SEWRI","address":"NAVNIDHI INDUSTRIAL ESTATE, ACHARYA DONDHE MARG, SEWRI, MUMBAI-400015","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065012","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"WADALA","address":"B.P.T.MARKET BLDG., NADKARNI PARK, WADALA (EAST), MUMBAI-400037","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065013","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"WORLI","address":"LANDMARK,NEXT TO MAHINDRA TOWERS, PLOT NO.1, J M BHOSLE MARG, WORLI, MUMBAI-400018","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065014","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"MUMBRA","address":"RIZVI APARTMENTS, OPP. RAILWAY STATION, MUMBRA-400612","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065015","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"TURBHE","address":"A.P.M.C.MARKET, ADMINISTRATIVE BLDG, TURBHE, NAVI MUMBAI-400705","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065016","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"VASHI","address":"ABHYUDAYA BANK BLDG., SECTOR 17, VASHI, NAVI MUMBAI-400705","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065017","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"MOBILE BANK","address":"ABHYUDAYA BANK BLDG., SECTOR 17, VASHI, NAVI MUMBAI-400703","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065018","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"NEW PANVEL","address":"ABHYUDAYA BANK BLDG., SECTOR 17, NEW PANVEL-410206","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065019","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"KALAMBOLI","address":"BLDG F-4, SHOP NO 17-20, SECTOR 3 EB, KALAMBOLI, NAVI MUMBAI-410218","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065020","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"DHARAVI","address":"WESTERN INDIA TANNERIES, SION DHARAVI ROAD, MUMBAI-400017","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065021","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"MALAD EAST","address":"148 ELLORA SHOPPING CENTRE, DAFTARY ROAD, MALAD (EAST), MUMBAI-400097","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065022","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"CBD BELAPUR","address":"SECTOR-3, CHANAKYA SHOPPING CENTRE, BELAPUR (CBD), NAVI MUMBAI-400614","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065023","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"BHIWANDI","address":"BLDG F-1,GOPAL NAGAR,BHIWANDI-KALYAN ROAD, BHIWANDI, 421302","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065024","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"BORIVALI","address":"RATNADEEP APARTMENTS, CARTER ROAD NO.1, BORIVLI (EAST), MUMBAI-400066","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065025","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"HILL ROAD","address":"HILL-N-DALE, HILL ROAD, NR.BANDRA POLICE STATION, BANDRA (W), MUMBAI-400050","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065026","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"KHER NAGAR","address":"JANATA EDUCATION SOC. PREMISES, KHER NAGAR, BANDRA (E), MUMBAI-400051","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065027","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"KANDIVLI-EAST","address":"GUNDECHA INDL.COMPLEX, AKURLI RD, KANDIVLI (E), MUMBAI-400101","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065028","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"SHERLY RAJAN","address":"KHAIR HOUSE, SHERLY RAJAN RD, BANDRA (WEST), MUMBAI-400050","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065029","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"GANESH NAGAR","address":"NAVJIVAN VIDYA MANDIR, GANESH NAGAR, BHANDUP (W), MUMBAI-400078.","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065030","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"MALAD WEST","address":"ST.JUDE'S HIGH SCHOOL, KHARODI, MALAD(W), MUMBAI,400095","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065031","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"NERUL","address":"ABHYUDAYA BANK BLDG. PLOT NO.3A, SECTOR 15, NERUL, NAVI MUMBAI-400706","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065032","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"AIROLI","address":"ABHYUDAYA BANK BLDG., PLOT NO.26 SECTOR 17, AIROLI, NAVI MUMBAI-400701","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065034","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"ANDHERI","address":"SHRADHA SHOPPING CENTRE, OLD NAGARDAS ROAD, ANDHERI (E), MUMBAI-400069","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065035","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"NHAVA SHEVA","address":"J.N.P.T. SHOPPING COMPLEX, NHAVA SHEVA, NAVI MUMBAI-400707","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065036","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"BANKING COMPLEX","address":"UNIT NO.7 SECTOR 19, PHASE II, APMC, VASHI, NAVI MUMBAI-400705","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065037","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"KOPARKHAIRNE","address":"UNIT NO.1, PLOT 24-25 SECTOR 6, KOPARKHAIRANE, NAVI MUMBAI-400701","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065038","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"DADAR","address":"GURUKRIPA CHS LTD., OPP. PLAZA CINEMA, DADAR (W), MUMBAI-400028.","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065039","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"MULUND","address":"NEELKANTHDHARA, NETAJI SUBHASHCHANDRA ROAD, MULUND (W), MUMBAI-400080.","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065040","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"CHARAI","address":"MUMBA DEVI APT., JOSHIWADA, CHARAI, VEER SAVARKAR PATH, THANE WEST 400601","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065041","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"LOKMANYA NAGAR","address":"PANCHPAKHADI SAMARTHA CHS LTD., LOKMANYA NAGAR, THANE (W)-400608","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065042","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"KHARGHAR","address":"SHOP NO 66/67, PATEL HERITAGE, PLOT NO 15/17, SECTOR 7, KHARGHAR, NAVI MUMBAI 410210","city":"MUMBAI","district":"RAIGAD","state":"MAHARASHTRA"},{"ifsc":"ABHY0065047","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"DAHISAR EAST","address":"GR. FLOOR, MADHURAM HALL, HARISHANKAR JOSHI ROAD, DAHISAR (E), MUMBAI - 400 068","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065051","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"KANDIVALI (WEST)","address":"KANDIVLI (W) BRANCH, SHOP NO.7, VIJAYBHARTI CO-OP. HSG. SOCIETY, SECTOR - II CHARKOP, KANDIVALI (W), MUMBAI 400067","city":"MUMBAI","district":"MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065054","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"CHEMBUR","address":"SHOP NO.12 TO 19, BLDG. NO. 2, TILAKNAGAR SHRAMIK CO-OP HSG SOCIETY LTD., TILAKNAGAR, CHEMBUR, MUMBAI 400089.","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065056","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"SEAWOOD","address":"SHOP NO. 13 TO 15, GIRIRAJ CO-OP HSG SOCIETY LTD., PLOT NO.7&8, SECTOR NO.44, NRI SEAWOOD ROAD, SEAWOOD, NERUL 400706","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065058","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"ANTOP HILL","address":"SHOP NO..34 & 35, GROUND FLOOR, BLDG NO. B-2, KALPAK ESTATE, SHAIKH MISTRY ROAD, ANTOP HILL, MUMBAI 400037","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065060","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"DIVALE CBD","address":"SHOP NO 8A & 9, GROUND FLOOR, SAI SANGAM, SECTOR-15, SAKAL BHAVAN MARG, CBD BELAPUR, NAVI MUMBAI 400 614","city":"MUMBAI","district":"GREATER MUMBAI","state":"MAHARASHTRA"},{"ifsc":"ABHY0065064","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"GOREGAON WEST","address":"SHOP NO.2,3,5 & 6A, VRINDAVAN CHS LTD., BUILDING NO.9, SHASTRI NAGAR ROAD NO.1, GOREGAON (W), MUMBAI 400 104.","city":"MUMBAI","district":"GREATER BOMBAY","state":"MAHARASHTRA"},{"ifsc":"ABHY0065065","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"JOGESHWARI (E)","address":"BAL VIKAS SCHOOL BUILDING, GROUND FLOOR, MHADA COLONY, SARVODAYA NAGAR, JOGESHWARI (E), MUMBAI 400 060","city":"MUMBAI","district":"GREATER BOMBAY","state":"MAHARASHTRA"},{"ifsc":"ABHY0065069","bank_id":60,"bank_name":"ABHYUDAYA COOPERATIVE BANK LIMITED","branch":"MARVE LINK ROAD","address":"SHOP NO. S-109, RAJIV GANDHI COMMERCIAL COMPLEX, EKTA NAGAR, CHARKOP MARVE LINK ROAD, KANDIVLI (W), MUMBAI - 400 067","city":"MUMBAI","district":"GREATER BOMBAY","state":"MAHARASHTRA"}];
  

//   $scope.changeCity = function(){
//     console.log("reached");
//     target = e.currentTarget;
//     val = $(target).val()
//     console.log(val);
//   //    $http({
//   //     method: "POST",
//   //     url: "studentattendance.aspx/GetEmployees",
//   //     dataType: 'json'
//   //     data: JSON.stringify({ title: startdate, songname: enddate}),
//   //     headers: { "Content-Type": "application/json; charset=utf-8" },
//   // }).then(function (msg) {
//   //     $scope.studentattendance = {};
//   //     $scope.studentattendance = JSON.parse(msg.d);
//   //     console.log($scope.studentattendance);
//   //     }, function (msg) {
//   //    alert(msg.d);
//   // });

//   }
 


// }]);

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

    $scope.navigate = function(event){
      target = event.target;
      
      navigate_type = $(target).attr('data-nav-type');
      offset_value = $(target).attr('data-offset');
      end = $('#entries').val();
      city = $('#select1').val();
      if (navigate_type == 'next')
      {
        $scope.changeCity(city,offset_value,end);
        $('#prev').removeAttr('disabled');

        new_offset_value_next =  parseInt(offset_value) + parseInt(end) ;
        $('#next').attr('data-offset',new_offset_value_next);

        of_val = $('#prev').attr('data-offset');
        new_offset_value_prev =  parseInt(of_val) + parseInt(end) ;
        $('#prev').attr('data-offset',new_offset_value_prev);

        
        
      }

      else
      {

        new_offset_value =  parseInt(offset_value) - parseInt(end) ;
        $scope.changeCity(city,offset_value,end);
        $('#prev').attr('data-offset',new_offset_value);

        of_val = $('#next').attr('data-offset');
        new_offset_value_next =  parseInt(of_val) - parseInt(end) ;
        $('#next').attr('data-offset',new_offset_value_next);

        
        if (new_offset_value == 0)
          $('#prev').attr('disabled',true);

      }



    }

  

    $("#select1").on('change', function(e) {

      target = e.currentTarget;
      city = $(target).val();
      start = 0;
      end = $('#entries').val();
      $('#next').attr('data-offset',end);
      $scope.changeCity(city,start,end);
      
      
    });


    $("#entries").on('change', function(e) {
      target = e.currentTarget;
      end = $(target).val();
      city = $('#select1').val();
      start = 0;
      $('#next').attr('data-offset',end);
      $('#prev').attr('data-offset',start);
      $scope.changeCity(city,start,end);
    });

    $scope.changeCity("BANGALORE",0,10);




    
}]);
