$(function() {
  var swipeableDecorator= function(node,content) {
    var $node,
        startX,
        startY,
        currentMessage,
        currentMessageActions;

    function _getCoord (e, c) {
      return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]['page' + c] : e['page' + c];
    }

    $node = $(node);
      // startY = getCoord(e, 'Y');

    $node.on('touchstart mousedown', swipeStart)
      .on('touchmove mousemove', swipeMove)
      .on('touchend mouseup mouseleave mouseout', swipeEnd)

    function swipeStart(e){
      console.log("in swipeStart")
      currentMessage = $node.find("message-item");
      currentMessageActions = $node.find("actionable");
      // Add in the classes I'm going to add / remove
  		startX = _getCoord(e, 'X');
    }

    function swipeMove(e){
      e.preventDefault();
      console.log("in swipeMove")
    }

    function swipeEnd(e){
      e.preventDefault();
      console.log("in swipeEnd")
    }
    return {
      teardown: function(){
      }
    }
  }

  Ractive.decorators.swipeable = swipeableDecorator;

  var templateData = [
    { message: "Do not take California weather for granted.", class: "focus"},
    { message: "Focus Better." },
    { message: "Wake up Earlier."},
    { message: "Wear Sunscreen"}
  ]
  
  var ractive = new Ractive({
    el: 'container',
    template: '#template',
    data: { message: templateData}
  });

});