 var searchTerm;
  $("#submit").click(function() {
   console.log("hello");
      searchTerm = $("#input").val();
    $.getJSON(
      "https://api.giphy.com/v1/gifs/search?q= " + searchTerm +"&api_key=dc6zaTOxFJmzC",
      function(response) {
          console.log(response);
          
       for (var i in response.data) { 
        console.log(i + ": " + response.data[i].images.fixed_width.url);
        $("#result").append("<img src= "+ response.data[i].images.fixed_width.url + ">")
        
}

      }
    )
    
  });
  
 
$("#reset").click(function(){
console.log("click");
  $("#input").val(""); 
 $("#result").html("");
});
  

  
  