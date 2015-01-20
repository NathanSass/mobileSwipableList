$(function() {
  var swipeableDecorator= function(node,content) {
    var $listItem,
        startX,
        startY;

    function getCoord (e, c) {
      return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]['page' + c] : e['page' + c];
    }

    $listItem = $(node);
  		// startX = getCoord(ev, 'X');
  		// startY = getCoord(ev, 'Y');

    $(node).on('touchstart mousedown', swipeStart)
      .on('touchmove mousemove', swipeMove)
      .on('touchend mouseup mouseleave mouseout', swipeEnd)

    function swipeStart(e){
      console.log("in swipeStart")
    }

    function swipeMove(e){
      console.log("in swipeMove")
    }

    function swipeEnd(e){
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