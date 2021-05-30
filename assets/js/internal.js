'use strict';
$(function () {
    
/*================================ match-height ======================*/
(function matchHeight(){
    var getDivS = document.getElementsByClassName('match-height');
    var arrayLength = getDivS.length;
    var heights = [];
  
    for (var i = 0; i < arrayLength; i++) {
        heights.push(getDivS[i].offsetHeight);
    }
    function getHighest() {
      return Math.max(...heights);
    }  
    var tallest = getHighest();
  
    for (var i = 0; i < getDivS.length; i++) {
        getDivS[i].style.height = tallest + "px";
    }
  })();
  
/*================================ Macy-gallery ======================*/
    var masonry = new Macy({
        container: '#macy-container',
        trueOrder: false,
        waitForImages: true,
        useOwnImageLoader: false,
        debug: true,
        useImageLoader: true,
        mobileFirst: true,
        margin: {
            y: 35,
            x: 35,
        },
        breakAt: {
            1200: 6,
            940: 5,
            520: 3,
            400: 2
        },
    });

});

