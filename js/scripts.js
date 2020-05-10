$(document).ready(function() {
  $("form").submit(function() {
  const items = [$("#item1").val(), $("#item2").val(), $("#item3").val(), $("#item4").val(), $("#item5").val()];
  items.sort();
  
  const sortedItems = items.map(function(sortedItem) {
    return sortedItem.toUpperCase();
  });
  sortedItems.forEach(function(sortedItem) {
    $("#list").append("<li>" + sortedItem + "</li>");
  }); 

  $("form").hide();
  $(".output").show();
  event.preventDefault();
  });
});

// another code option that works and could take the place of lines 6-11:
// const sortedItems = items.map(function(sortedItem) {
//   $("#list").append("<li>" + sortedItem.toUpperCase() + "</li>");
//   return sortedItem.toUpperCase();
// });
