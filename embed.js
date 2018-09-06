$.get('https://cors-anywhere.herokuapp.com/https://github.com/Nodws?tab=repositories', function(data) {
   var t = $(data).filter('title').text();
   console.log(t)
});   
