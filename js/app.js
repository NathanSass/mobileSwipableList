$(function() {
  var swipeableDecorator= function(node,content) {
    var THRESHOLD = 35,
        $node = $(node);

    var startX,
        startY,
        $currentMessage,
        $currentMessageActions,
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

    function _resetList(){
      $node.siblings('.focus').each(function(i){
        var $this = $(this);
        $this.find(".message-item").attr("style", "");
        $this.find(".actionable").attr("style", "");
        $this.addClass("closed");
        $this.removeClass("open");
        $this.removeClass("focus");
      })
    }

    // $node = $(node);

    $node.on('touchstart mousedown', swipeStart)
      .on('touchmove mousemove', swipeMove)
      .on('touchend mouseup mouseleave', swipeEnd)

    function swipeStart(e){
      _resetList();
      $currentMessage = $node.find(".message-item");
      $currentMessageActions = $node.find(".actionable");
      $node.addClass("focus");
      $node.removeClass("closed");
      startX = _getCoord(e, 'X');
      isSwiping = true;
    }

    function swipeMove(e){
      console.log("in swipe move")
      e.preventDefault();
      if(isSwiping){

        currentX = _getCoord(e, 'X');
        distance = -(startX - currentX);
        distance = Math.min(Math.max(_getPercent(distance), -50), 0);
        
        $currentMessage.css("left", distance + "%");
        $currentMessageActions.css("opacity", -distance / 100 + .50);
        console.log(-distance)

      }
    }

    function swipeEnd(e){
      e.preventDefault();
      if($currentMessage){
        isSwiping = false;
        if(-distance < THRESHOLD){
          $currentMessage.attr("style", "")
          $currentMessageActions.attr("style", "")
          $node.addClass("closed")
          $node.removeClass("open")



        }else if(-distance > THRESHOLD){
          $currentMessage.attr("style", "")
          $node.addClass("open")
        }
      }
    }
    return {
      teardown: function(){
      }
    }
  }

  Ractive.decorators.swipeable = swipeableDecorator;

  var templateData = [
    { message: "Do not take California weather for granted.", class: "closed" },
    { message: "Focus Better.", class: "closed"},
    { message: "Wake up Earlier.", class: "closed"},
    { message: "Wear Sunscreen", class: "closed"},
    { message: "Get Better at Swing Dancing", class: "closed"}
  ]
  
  var ractive = new Ractive({
    el: 'container',
    template: '#template',
    data: { message: templateData}
  });

});