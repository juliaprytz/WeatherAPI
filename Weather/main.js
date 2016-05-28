

$(function () {

  $('.button').click(function() {
    getWeather();
    $('.div').html('');
  })

  function getWeather() {

    urlweatherArray = [
    'http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/59.329323/lon/18.068581/data.json',
    'http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/59.275263/lon/15.213411/data.json',
    'http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/57.708870/lon/11.974560/data.json',
    ];

    for (i = 0; i < urlweatherArray.length; i++) {

      $.getJSON(urlweatherArray[i], function(data) {
        //console.log(i);
        printWeather(data);

      })
    }
  }

  function printWeather(data) {
    var temp = data.timeseries[0].t;
    var str = data.timeseries[0].validTime;
    var res = str.substring(11,16);
    var lat = data.lat
    var long = data.lon



    if (lat == 59.306304 && long == 18.084463) {
      city = "Stockholm";
    } else if (lat == 59.242919 && long == 15.144689) {
      city = "Örebro";
    } else if (lat == 57.705613 && long == 11.957932) {
      city = "Göteborg";
    }
    //console.log(city);

      $('.div').append(city+ '<br/>' + ' Temperatur ' + temp + ' °C, ' + res + '<br/>' + '<br/>' + '<br/>');
 //$('.div').html('');
  }

});













/*

   function printWeather(data){
     var temp = data.timeseries[0].t;
     var str = data.timeseries[0].validTime;
     var res = str.substring(11, 16);

     $('.div').append("Temperatur " + temp + " °C, " + res + '<br/>');
   }

});

*/




/*

  function printWeather(data) {
    var temp = data.timeseries[0].t;
    var str = data.timeseries[0].validTime;
    var res = str.substring(11,16);

    $('.div').html('');

    citys = ["Haparanda", "Ystad", "Karlstad"];

    for(x = 0; x <= citys.length; x++) {
      $('.div').append(citys[x] + ' Temperatur ' + temp + ' °C, ' + res + '<br/>');
    }
  }

});

*/





































/*$(function (){

 $('.button').click(function(){

//För att hämta JSON-data från mitt API
$.ajax({
     type: 'GET',
     dataType: 'json',
     url: 'http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/65.841708/lon/24.127664/data.json',
     success: function(data) {
      var test = data.timeseries[0].validTime;
      var res = test.substring(12,16);
       console.log('success', data);

       $('.div').html('');
       $('.div').append('Vädret i <strong>Haparanda</strong> ' + data.timeseries[0].t + ' <strong>klocka</strong> ' + res + '<br/>');
     }
   });

//För att hämta JSON-data från mitt API

   $.ajax({
     type: 'GET',
     dataType: 'json',
     url: 'http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/55.429505/lon/13.820031/data.json',
     success: function(data) {
      var test = data.timeseries[0].validTime;
      var res = test.substring(12,16);
       console.log('success', data);

       $('.div2').html('');
       $('.div2').append('Vädret i <strong>Ystad</strong> ' + data.timeseries[0].t + ' <strong>klocka</strong> ' + res + '<br/>');

     }
   });

//För att hämta JSON-data från mitt API

   $.ajax({
     type: 'GET',
     dataType: 'json',
     url: 'http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/59.402181/lon/13.511498/data.json',
     success: function(data) {
      var test = data.timeseries[0].validTime;
      var res = test.substring(12,16);
       console.log('success', data);

       $('.div3').html('');
       $('.div3').append('Vädret i <strong>Karlstad</strong> ' + data.timeseries[0].t + ' <strong>klocka</strong> ' + res + '<br/>');

     }
   });

 })
}); */
