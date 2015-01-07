$(function() {
    // $(".message-group li").on("touchmove", function(e){
    // 	debugger
    // 	// $(e.target).closest('li').on("vmousedown", function(event){
    // 	// 	debugger
    // 	// })
    // 	// console.log(e.swipestop.coords[0] - e.swipestart.coords[0])
    // 	// $(e.target).addClass("hidden");
    // 	// $(e.target).next().removeClass("hidden").addClass("show");
    // })

  //   $("li").on("touchstart",function(e){
  //     debugger
  //     e.preventDefault();
		// });


		$(".message-group li")
    .on('touchstart mousedown', function(e){
    	e.preventDefault();
    	// console.log("hkjh")
    	// debugger
    	$(e.target).closest('li')
	    .on('touchmove mousemove', function(e){
	    	e.preventDefault();
	    	// debugger
	    	$(e.target).closest('li span').css("color","red")
	    })

    })
    // .on('touchend touchcancel', function(e){debugger})
});