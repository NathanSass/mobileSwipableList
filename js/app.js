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
	// var startX,
	// 	startY;

	function getCoord (e, c) {
		return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]['page' + c] : e['page' + c];
	}

	$(".message-group li")
  .on('touchstart mousedown', function(ev){
		startX = getCoord(ev, 'X');
		startY = getCoord(ev, 'Y');


  	$(ev.target).closest('li').on('touchmove mousemove', function(e){
    	e.preventDefault();
    	currentX = getCoord(e, 'X');
    	currentY = getCoord(e, 'Y');
    	if(currentX - startX < 0){ //Do something here to account for vertical swiping
    		console.log("swipingleft");
    		// debugger
    		var distance =  startX - currentX;
    		// console.log(dist)
    		$(e.target).css("-webkit-transform", "translateX(" + -distance + "px)")
    		// $(e.target).css("-webkit-transform", "translateX(" + startX - currentDistX + "px)")
    	}

    })

  })
  // .on('touchend touchcancel', function(e){debugger})
});