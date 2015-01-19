$(function() {
  var swipeableDecorator= function(node,content) {
    
    console.log("in swipeable");
    
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
    return {
      teardown: function(){

      }
    }
  }

  Ractive.decorators.swipeable = swipeableDecorator;

var ractive = new Ractive({
  el: 'container',

  template: '#template'
});


  // .on('touchend touchcancel', function(e){debugger})
});