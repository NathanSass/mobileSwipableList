$(function() {
    $(".message-group li").on("swipe", function(e){
    	$(e.target).addClass("hidden");
    	$(e.target).next().removeClass("hidden").addClass("show");
    })
});