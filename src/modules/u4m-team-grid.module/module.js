$(".u4m-team-grid .view-bio a.btn").click(function () {
  $(this).parents(".item").toggleClass("active");
  $("body").toggleClass("popup-open");
});
$(".u4m-team-grid .close-icon").click(function () {
  $(this).parents(".item").removeClass("active");
  $("body").removeClass("popup-open");
});
