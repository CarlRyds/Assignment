angular.module('app.controllers', [])
  
.controller('currencyCtrl', function($scope, $http) {

    
    // DEFAULTS ////////////////////////////////////////
    // If there is no exchange rate set then set a default
    // localStorage.gbpUSD = "1.42746";
    // GBP Rates ///////////////////////////////////////
    
    if (localStorage.getItem("gbpUSD") === null) { 
        
        $.ajax({
        url: "/api",
        dataType: 'jsonp',
        success: function (data) {

           localStorage.gbpEURO = data;
        }
        
        }); 
    }
    
    if (localStorage.getItem("gbpEURO") === null) {   
    localStorage.gbpEURO = "1.51848";
    }
    
    if (localStorage.getItem("gbpAUD") === null) {   
    localStorage.gbpAUD = "2.09851";
    }
    
    if (localStorage.getItem("gbpCAD") === null) {   
    localStorage.gbpCAD = "2.02476";
    }
    
    if (localStorage.getItem("gbpYEN") === null) {   
    localStorage.gbpYEN = "186.495";
    }
    
    // USD Rates ///////////////////////////////////////
    
    if (localStorage.getItem("usdGBP") === null) {   
    localStorage.usdGBP = "0.65852";
    }
    
    if (localStorage.getItem("usdEURO") === null) {   
    localStorage.usdEURO = "0.93994";
    }
    
    if (localStorage.getItem("usdAUD") === null) {   
    localStorage.usdAUD = "1.38300";
    }
    
    if (localStorage.getItem("usdCAD") === null) {   
    localStorage.usdCAD = "1.33462";
    }
    
    if (localStorage.getItem("usdYEN") === null) {   
    localStorage.usdYEN = "122.870";
    }
    
    // EURO Rates /////////////////////////////////////
    
    if (localStorage.getItem("euroGBP") === null) {   
    localStorage.euroGBP = "0.70059";
    }
    
    if (localStorage.getItem("euroUSD") === null) {   
    localStorage.euroUSD = "1.06396";
    }
    
    if (localStorage.getItem("euroAUD") === null) {   
    localStorage.euroAUD = "1.47176";
    }
    
    if (localStorage.getItem("euroCAD") === null) {   
    localStorage.euroCAD = "1.42013";
    }
    
    if (localStorage.getItem("euroYEN") === null) {   
    localStorage.euroYEN = "130.742";
    }
    
    // AUD Rates ////////////////////////////////////
    
    if (localStorage.getItem("audGBP") === null) {   
    localStorage.audGBP = "0.47596";
    }
    
    if (localStorage.getItem("audUSD") === null) {   
    localStorage.audUSD = "0.72312";
    }
    
    if (localStorage.getItem("audEURO") === null) {   
    localStorage.audEURO = "0.67982";
    }
    
    if (localStorage.getItem("audCAD") === null) {   
    localStorage.audCAD = "0.964931";
    }
    
    if (localStorage.getItem("audYEN") === null) {   
    localStorage.audYEN = "88.8547";
    }
    
    // CAD Rates ////////////////////////////////////
    
    if (localStorage.getItem("cadGBP") === null) {   
    localStorage.cadGBP = "0.49313";
    }
    
    if (localStorage.getItem("cadUSD") === null) {   
    localStorage.cadUSD = "0.74921";
    }
    
    if (localStorage.getItem("cadEURO") === null) {   
    localStorage.cadEURO = "0.70436";
    }
    
    if (localStorage.getItem("cadAUD") === null) {   
    localStorage.cadAUD = "1.03636";
    }
    
    if (localStorage.getItem("cadYEN") === null) {   
    localStorage.cadYEN = "92.0770";
    }
    
    // YEN Rates ////////////////////////////////////
    
    if (localStorage.getItem("yenGBP") === null) {   
    localStorage.yenGBP = "0.00536";
    }
    
    if (localStorage.getItem("yenUSD") === null) {   
    localStorage.yenUSD = "0.00814";
    }
    
    if (localStorage.getItem("yenEURO") === null) {   
    localStorage.yenEURO = "0.00765";
    }
    
    if (localStorage.getItem("yenAUD") === null) {   
    localStorage.yenAUD = "0.0112543";
    }
    
    if (localStorage.getItem("yenCAD") === null) {   
    localStorage.yenCAD = "0.0108606";
    }
    
})
   
.controller('converterCtrl', function($scope) {

    $scope.gbpUSD   = localStorage["gbpUSD"];
    $scope.gbpEURO  = localStorage["gbpEURO"];
    $scope.gbpAUD   = localStorage["gbpAUD"];
    $scope.gbpCAD   = localStorage["gbpCAD"];
    $scope.gbpYEN   = localStorage["gbpYEN"];
    
    $scope.usdGBP   = localStorage["usdGBP"];
    $scope.usdEURO  = localStorage["usdEURO"];
    $scope.usdAUD   = localStorage["usdAUD"];
    $scope.usdCAD   = localStorage["usdCAD"];
    $scope.usdYEN   = localStorage["usdYEN"];
    
    $scope.euroGBP  = localStorage["euroGBP"];
    $scope.euroUSD  = localStorage["euroUSD"];
    $scope.euroAUD  = localStorage["euroAUD"];
    $scope.euroCAD  = localStorage["euroCAD"];
    $scope.euroYEN  = localStorage["euroYEN"];
    
    $scope.audGBP   = localStorage["audGBP"];
    $scope.audUSD   = localStorage["audUSD"];
    $scope.audEURO  = localStorage["audEURO"];
    $scope.audCAD   = localStorage["audCAD"];
    $scope.audYEN   = localStorage["audYEN"];
    
    $scope.cadGBP   = localStorage["cadGBP"];
    $scope.cadUSD   = localStorage["cadUSD"];
    $scope.cadEURO  = localStorage["cadEURO"];
    $scope.cadAUD   = localStorage["cadAUD"];
    $scope.cadYEN   = localStorage["cadYEN"];
    
    $scope.yenGBP   = localStorage["yenGBP"];
    $scope.yenUSD   = localStorage["yenUSD"];
    $scope.yenEURO  = localStorage["yenEURO"];
    $scope.yenAUD   = localStorage["yenAUD"];
    $scope.yenCAD   = localStorage["yenCAD"];
    
})
   
.controller('settingsCtrl', function($scope) {

    $scope.gbpUSD   = localStorage["gbpUSD"];
    $scope.gbpEURO  = localStorage["gbpEURO"];
    $scope.gbpAUD   = localStorage["gbpAUD"];
    $scope.gbpCAD   = localStorage["gbpCAD"];
    $scope.gbpYEN   = localStorage["gbpYEN"];
       
    $scope.usdGBP   = localStorage["usdGBP"];
    $scope.usdEURO  = localStorage["usdEURO"];
    $scope.usdAUD   = localStorage["usdAUD"];
    $scope.usdCAD   = localStorage["usdCAD"];
    $scope.usdYEN   = localStorage["usdYEN"];
    
    $scope.euroGBP  = localStorage["euroGBP"];
    $scope.euroUSD  = localStorage["euroUSD"];
    $scope.euroAUD  = localStorage["euroAUD"];
    $scope.euroCAD  = localStorage["euroCAD"];
    $scope.euroYEN  = localStorage["euroYEN"];
    
    $scope.audGBP   = localStorage["audGBP"];
    $scope.audUSD   = localStorage["audUSD"];
    $scope.audEURO  = localStorage["audEURO"];
    $scope.audCAD   = localStorage["audCAD"];
    $scope.audYEN   = localStorage["audYEN"];
    
    $scope.cadGBP   = localStorage["cadGBP"];
    $scope.cadUSD   = localStorage["cadUSD"];
    $scope.cadEURO  = localStorage["cadEURO"];
    $scope.cadAUD   = localStorage["cadAUD"];
    $scope.cadYEN   = localStorage["cadYEN"];
    
    $scope.yenGBP   = localStorage["yenGBP"];
    $scope.yenUSD   = localStorage["yenUSD"];
    $scope.yenEURO  = localStorage["yenEURO"];
    $scope.yenAUD   = localStorage["yenAUD"];
    $scope.yenCAD   = localStorage["yenCAD"];
    
    // Exchange Rates last Updated  ///////////////
    
    if (localStorage.getItem("rateUpdateDate") === null) { 
        
        localStorage.rateUpdateDate = "22-11-2015 23:59";
        $scope.rateUpdateDate = localStorage["rateUpdateDate"];
        
    } else {
        
        $scope.rateUpdateDate = localStorage["rateUpdateDate"];
    }
    
    $scope.save = function save(GBP){
        
        // Get current date
        var currentTime = new Date()
        var month = currentTime.getMonth() + 1
        var day = currentTime.getDate()
        var year = currentTime.getFullYear()
        var hours = currentTime.getHours()
        var minutes = currentTime.getMinutes()
        
        // Save to local storage
        localStorage.setItem("rateUpdateDate", day + "/" + month + "/" + year + " " + hours + ":" + minutes);
        // Update page
        $scope.rateUpdateDate = localStorage["rateUpdateDate"];
        
        // GBP ON OFF //////////
        
        // Save to local storage
        localStorage.setItem("gbpON", GBP.value);
        // Update page
        $scope.gbpON = localStorage["gbpON"];
    }
    
    // GBP  ///////////////////////////////////////
    
    if (localStorage.getItem("gbpON") === null) {   
        
        localStorage.gbpON = "true";
        $scope.gbpON = localStorage["gbpON"];
        
    } else {
        
        $scope.gbpON = localStorage["gbpON"];
    }
    
    // USD  ///////////////////////////////////////
    
    if (localStorage.getItem("usdON") === null) {   
        
        localStorage.usdON = "true";
        $scope.usdON = localStorage["usdON"];
        
    } else {
        
        $scope.usdON = localStorage["usdON"];
    }
    
    // EURO //////////////////////////////////////
    
    if (localStorage.getItem("euroON") === null) {   
        
        localStorage.euroON = "true";
        $scope.euroON = localStorage["euroON"];
        
    } else {
        
        $scope.euroON = localStorage["euroON"];
    }
    
    // AUD  //////////////////////////////////////
    
    if (localStorage.getItem("audON") === null) {   
        
        localStorage.audON = "true";
        $scope.audON = localStorage["audON"];
        
    } else {
        
        $scope.audON = localStorage["audON"];
    }
    
    // CAD  //////////////////////////////////////
    
    if (localStorage.getItem("cadON") === null) {   
        
        localStorage.cadON = "true";
        $scope.cadON = localStorage["cadON"];
        
    } else {
        
        $scope.cadON = localStorage["cadON"];
    }
    
    // YEN  //////////////////////////////////////
    
    if (localStorage.getItem("yenON") === null) {   
        
        localStorage.yenON = "true";
        $scope.yenON = localStorage["yenON"];
        
    } else {
        
        $scope.yenON = localStorage["yenON"];
    }
    
})
    