/*!
 * miniTip v1.5.0
 *
 * Updated: December 9, 2011
 * Requires: jQuery v1.3+
 *
 * (c) 2011, James Simpson
 * http://goldfirestudios.com
 *
 * Dual licensed under the MIT and GPL
 *
 * Documentation found at:
 * http://goldfirestudios.com/blog/81/miniTip-jQuery-Plugin
 *
 * Modified by jesus@touristeye.com
 * - Added class name for the tooltip to personalize appearance
 */

// Example of use
//
// $('#idelement').miniTip({
//     content: 'Ejemplo de tooltip',
//     anchor: 'n',
//     className: 'red'
//   });


;(function($){
  $.fn.miniTip = function(opts) {
    // declare the default option values
    var d = {
      title    :'', // if left blank, no title bar will show
      content  :false, // the content of the tooltip
      delay    :100, // how long to wait before showing and hiding the tooltip (ms)
      anchor   :'n', // n (top), s (bottom), e (right), w (left)
      event    :'hover', // can be 'hover' or 'click'
      fadeIn   :100, // speed of fade in animation (ms)
      fadeOut  :100, // speed of fade out animation (ms)
      aHide    :true, // set to false to only hide when the mouse moves away from the anchor and tooltip
      maxW     :'300px', // max width of tooltip
      offset   :5, // offset in pixels of stem from anchor
      doHide   :false,  // call $('#id').miniTip({hide: true}); to manually hide the tooltip
      className:'', //Class name to personalize the tooltip colors,
      autoShow :false //Tooltip is showed when it is created,
    },

    // merge the defaults with the user declared options
    o = $.extend(d, opts);

    // add the tip elements to the DOM
    if (!$('#miniTip' + (o.className?'.' + o.className:''))[0]){
      $('body').append('<div id="miniTip" class="minitip-item '+ o.className +'"><div id="miniTip_c"></div></div>');
    }

    // declare the containers
    var tt_w = $('#miniTip' + (o.className?'.' + o.className.replace(/\s/g, '.'):'') ),
    tt_t = tt_w.find('#miniTip_t'),
    tt_c = tt_w.find('#miniTip_c'),
    tt_a = tt_w.find('#miniTip_a');

    // manually hide the tooltip if $('#id').miniTip({hide: true}); is called
    if (o.doHide) {
      tt_w.stop(true,true).fadeOut(o.fadeOut);
      return false;
    }

    var returnObject = {};

    // initialize the tooltip
    this.each(function(){
      // make sure the anchor element can be referred to below
      var el = $(this);

      // if content is set to false, use the title attribute
      var cont = o.content ? o.content : (el.attr('data-title') ? el.attr('data-title') : el.attr('title') );

      // if the tooltip isn't empty
      if (cont != '' && typeof cont != 'undefined') {
          // declare the delay variable and make sure it is global
          window.delay = false;

          // declare the variables that check if the mouse is still on the tooltip
          var tHov = false,
          aHov = true;

          // if you are using the title attribute, remove it from the anchor
          if (!o.content)
            el.removeAttr('title');

          if (o.event == 'hover') {
              // add the hover event
              el.hover(
                function(){
                      // make sure we know this wasn't activated by click
                      tt_w.removeAttr('click');

                      // show the tooltip
                      aHov = true;
                      show.call(this);
                    },
                    function(){
                      aHov = false;
                      hide();
                    }
                    );

              // add a hover event for the tooltip if aHide is false
              if (!o.aHide) {
                tt_w.hover(
                  function() {
                    tHov = true;
                  },
                  function() {
                    tHov = false;
                    setTimeout(function(){if (!aHov && !tt_w.attr('click')) hide()}, 20);
                  }
                  );
              }
            } else if (o.event == 'click') {
              // make sure auto hide is set to false automatically
              o.aHide = true;

              // add the click event to the anchor
              el.click(function(){
                  // make sure we know this was activated by click
                  tt_w.attr('click', 't');

                  if (tt_w.data('last_target') !== el) {
                      // rerender the tooltip if the target changed
                      show.call(this);
                    } else {
                      // show the tooltip, unless it is already showing, then close it
                      if (tt_w.css('display') == 'none') show.call(this); else hide();
                    }

                    tt_w.data('last_target', el);

                  //return false;
                });

            }


          // show the tooltip
          var show = function() {

              $('.minitip-item').hide();

              // call the show callback function
              if (o.show) o.show.call(this, o);

              // use content set by callback, if any
              if (o.content && o.content != '') {
                cont = o.content;
              }

              // add in the content
              tt_c.html(cont);

              // insert the title (or hide if none is set)
              if (o.title != '')
                tt_t.html(o.title).show();
              else
                tt_t.hide();

              // call the render callback function
              if (o.render) o.render(tt_w);

              // reset arrow position
              tt_a.removeAttr('class');

              // make sure the tooltip is the right width even if the anchor is flush to the right of the screen
              // set the max width
              // tt_w.hide().width('').width(tt_w.width()).css('max-width', o.maxW);

              // add support for image maps
              var isArea = el.is('area');
              if (isArea) {
                  // declare variables to determine coordinates
                  var i,
                  x = [],
                  y = [],
                  c = el.attr('coords').split(',');

                  // sortin funciton for coordinates
                  function num (a, b) {
                    return a - b;
                  }

                  // loop through the coordinates and populate x & y arrays
                  for (i=0; i < c.length; i++){
                    x.push(c[i++]);
                    y.push(c[i]);
                  }

                  // get the center coordinates of the area
                  var mapImg = el.parent().attr('name'),
                  mapOff = $('img[usemap=\\#' + mapImg + ']').offset(),
                  left = parseInt(mapOff.left, 10) + parseInt((parseInt(x.sort(num)[0], 10) + parseInt(x.sort(num)[x.length-1], 10)) / 2, 10),
                  top = parseInt(mapOff.top, 10) + parseInt((parseInt(y.sort(num)[0], 10) + parseInt(y.sort(num)[y.length-1], 10)) / 2, 10);
                } else {
                  // get the coordinates of the element
                  var top,left;
                  if (tt_w.parent()[0].tagName === 'BODY'){
                    top = parseInt(el.offset().top, 10);
                    left = parseInt(el.offset().left, 10);                    
                  }else{
                    top = left = 0;  
                  }
                  
                  
                }

                  // get width and height of the anchor element
                  var elW = isArea ? 0 : parseInt(el.outerWidth(), 10),
                  elH = isArea ? 0 : parseInt(el.outerHeight(), 10),

                  // get width and height of the tooltip
                  tipW = tt_w.outerWidth(),
                  tipH = tt_w.outerHeight(),

                  // calculate position for tooltip
                  mLeft = Math.round(left + Math.round((elW - tipW) / 2)),
                  mTop = Math.round(top + elH + o.offset + 4),

                  // position of the arrow
                  aLeft = (Math.round(tipW - 16) / 2) - parseInt(tt_w.css('borderLeftWidth'), 10),
                  aTop = 0,

                  // figure out if the tooltip will go off of the screen
                  eOut = (left + elW + tipW + o.offset + 4) > parseInt($(window).width(), 10),
                  wOut = (tipW + o.offset + 4) > left,
                  nOut = (tipH + o.offset + 4) > top - $(window).scrollTop(),
                  sOut = (top + elH + tipH + o.offset + 4) > parseInt($(window).height() + $(window).scrollTop(), 10),

                  // default anchor position
                  elPos = o.anchor;

              // calculate where the anchor should be (east & west)
              if (wOut || o.anchor == 'e' && !eOut) {
                if (o.anchor == 'w' || o.anchor == 'e') {
                  elPos = 'e';
                  aTop = Math.round((tipH / 2) - 4 - parseInt(tt_w.css('borderRightWidth'), 10));
                  aLeft = - 11 - parseInt(tt_w.css('borderRightWidth'), 10);
                  mLeft = left + elW + o.offset + 4;
                  mTop = Math.round((top + elH / 2) - (tipH / 2));
                }
              } else if (eOut || o.anchor == 'w' && !wOut) {
                if (o.anchor == 'w' || o.anchor == 'e') {
                  elPos = 'w';
                  aTop = Math.round((tipH / 2) - 4 - parseInt(tt_w.css('borderLeftWidth'), 10));
                  aLeft = tipW - parseInt(tt_w.css('borderLeftWidth'), 10);
                  mLeft = left - tipW - o.offset - 8;
                  mTop = Math.round((top + elH / 2) - (tipH / 2));
                }
              }

              // calculate where the anchor should be (north & south)
              if (sOut || o.anchor == 'n' && !nOut) {
                if (o.anchor == 'n' || o.anchor == 's') {
                  elPos = 'n';
                  aTop = tipH - parseInt(tt_w.css('borderTopWidth'), 10);
                  mTop = top - (tipH + o.offset + 4) - 4;
                }
              } else if (nOut || o.anchor == 's' && !sOut) {
                if (o.anchor == 'n' || o.anchor == 's') {
                  elPos = 's';
                  aTop = - 11 - parseInt(tt_w.css('borderBottomWidth'), 10);
                  mTop = top + elH + o.offset + 8;
                }
              }

              // if it is going to go off on the sides, use corner
              // if (o.anchor == 'n' || o.anchor == 's') {
              //   if ((tipW / 2) > left) {
              //     mLeft = mLeft < 0 ? aLeft + mLeft : aLeft;
              //     aLeft = 0;
              //   } else if ((left + tipW / 2) > parseInt($(window).width(), 10)) {
              //     mLeft -= aLeft;
              //     aLeft *= 2;
              //   }
              // } else {
              //   if (nOut) {
              //     mTop = mTop + aTop
              //     aTop = 0;
              //   } else if (sOut) {
              //     mTop -= aTop;
              //     aTop *= 2;
              //   }
              // }

              // position the arrow
              tt_a.css({'margin-left': aLeft + 'px', 'margin-top': aTop + 'px'}).attr('class', elPos);
              tt_w.addClass(elPos);

              // clear delay timer if exists
              if (delay) clearTimeout(delay);

              // position the tooltip and show it
              delay = setTimeout(function(){ tt_w.css({"margin-left": mLeft+"px", "margin-top": mTop + 'px'}).stop(true,true).fadeIn(o.fadeIn); }, o.delay);

              if (o.event === 'click'){
                // clear the tooltip if anywhere but the tooltip itself is clicked
                $('html').on('click.miniTip', hideHTML);
              }
            }

          var hideHTML = function(e){
            if (tt_w.css('display') == 'block' && !$(e.target).closest('#miniTip').length){
              hide();
            }
          }

          // hide the tooltip
          var hide = function() {
            if (!o.aHide && !tHov || o.aHide) {
              // clear delay timer if exists
              if (delay) clearTimeout(delay);

              // fade out the tooltip
              delay = setTimeout(function(){hide2()}, o.delay);
            }

            $('html').off('click.miniTip');
          }

          // make a second hide function if the tooltip is set to not auto hide
          var hide2 = function() {
              // if the mouse isn't on the tooltip or the anchor, hide it, otherwise loop back through
              if (!o.aHide && !tHov || o.aHide) {
                  // fade out the tooltip
                  tt_w.stop(true,true).fadeOut(o.fadeOut);

                  // call the show callback function
                  if (o.hide) o.hide.call(this);
                } else
                setTimeout(function(){hide()}, 200);
              }

              if (o.autoShow){
                show.call(this);
              }

          //public functions
          returnObject.updateContent = function( content ){
            o.content = content;
            // add in the content
            tt_c.html(o.content);
          }

          returnObject.showTooltip = function(  ){
            show();
          }

          returnObject.destroy = function(  ){
            el.unbind(o.event);
            tt_w.remove();
          }
        }
      });

  return returnObject;
}
})(jQuery);