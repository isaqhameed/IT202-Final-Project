     $("#weather_button").on("click", function(){
                 
                    var url = new URL("https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=953073fe4afcf7a90d20248a09c37985&units=imperial");
//                     if($("#movie_title").val()) {
//                         url.searchParams.set("title", $("#movie_title").val());
//                     }
//                     if($("#park").val()){
//                         url.searchParams.set("park", $("#park").val());
//                     }
                    
//                   $.get(url,
//                     function (data) {         
//                         var listOfResults = "";
//                         $.each(data, function (i,v) {
//                            listOfResults = listOfResults.concat(v.title + " |"+v.park + " |" + v.day+ " |" + v.date + " |" + v.location.latitude + " |" + v.location.longitude +     
//                                                                 "<br>");
                           
//                           lat
                            
// //var                            long = v.location.longitude;
                      
         $.get(url, function(response){
             $.each(response, function(i,v){
                 $("body").append(v.temp+"<br>");
             });
         });
                        });
         
                           
                           
 
                            
                            
                            
                            
                            
                            


    });

  });