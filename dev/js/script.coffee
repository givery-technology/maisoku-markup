$ ->
  # Side Content
  $("#icon").click ->
    console.log $(this).hasClass("active")
    if $(this).hasClass("active")
      $("aside").css({"right":"-200px"});
    else
      $("aside").css({"right":"0"});

  # Header Nav Select
  $("header nav").click ->
    if $(this).hasClass("active")
      $(this).removeClass("active")
    else
      $(this).addClass("active")

  # main list
  $("#wrapper").masonry
    itemSelector: ".item"
    columnWidth: 150
