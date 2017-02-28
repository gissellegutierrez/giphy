 var searchTerm;
  $("#submit").click(function() {
      searchTerm = $("#input").val();
    $.getJSON(
      "https://api.giphy.com/v1/gifs/search?q= " + searchTerm +"&api_key=dc6zaTOxFJmzC",
      function(response) {
          console.log(response);
      }
    )
  });
  