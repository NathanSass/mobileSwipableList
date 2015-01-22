$(function() {
  var swipeableDecorator= function(node,content) {
    var $node,
        startX,
        startY,
        currentMessage,
        currentMessageActions,
        isSwiping,
        distance,
        currentX;

    function _getCoord (e, c) {
      return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]['page' + c] : e['page' + c];
    }
    function _getPercent (distance){
      maxSlide = window.innerWidth - (window.innerWidth * .5) //buttons are set to take up 50% of the width
      if (distance) {
        return (distance / maxSlide) * 100;
      }
      return 0;
    }

    $node = $(node);

    $node.on('touchstart mousedown', swipeStart)
      .on('touchmove mousemove', swipeMove)
      .on('touchend mouseup mouseleave', swipeEnd)

    function swipeStart(e){
      // console.log("in swipeStart")
      currentMessage = $node.find(".message-item");
      currentMessageActions = $node.find(".actionable");
      $node.addClass("focus");
  		startX = _getCoord(e, 'X');
      isSwiping = true;
    }

    function swipeMove(e){
      console.log("in swipe move")
      e.preventDefault();
      if(isSwiping){
        // console.log("---- in swipe move")
        currentX = _getCoord(e, 'X');
        distance = -(startX - currentX);
        distance = _getPercent(distance)
        distance = Math.max(distance, -50);
        distance = Math.min(distance, 0);
        currentMessage.css("left", distance + "%");
        currentMessageActions.css("opacity", -distance / 100 + .50);

      }
    }

    function swipeEnd(e){
      // console.log("in swipeEnd")
      e.preventDefault();
      if(currentMessage){
        isSwiping = false;
      }
    }
    return {
      teardown: function(){
      }
    }
  }

  Ractive.decorators.swipeable = swipeableDecorator;

  var templateData = [
    { message: "Do not take California weather for granted."},
    { message: "Focus Better." },
    { message: "Wake up Earlier."},
    { message: "Wear Sunscreen"},
    { message: "Get Better at Swing Dancing"}
  ]
  
  var ractive = new Ractive({
    el: 'container',
    template: '#template',
    data: { message: templateData}
  });

});