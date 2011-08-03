jQuery miniTip Plugin (v1.3.2)
---------------------

License
========
Dual licensed under the MIT and GPL licenses:

* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html

Copyright 2011, James Simpson
http://goldfirestudios.com

Description
===========
[miniTip](http://goldfirestudios.com/blog/81/miniTip-jQuery-Plugin) is an ultra lightweight jQuery plugin that creates highly customizable tooltips without all of the fluff.

### Features  ###

* JS + CSS is just 4.38kb minified (1.7kb gzipped)!
* No images
* Automatically stays within viewport
* Automatic support for image maps
* Extremely easy to style
* Use text or HTML from title tag, hidden element, or JS declaration
* Fade in and out
* Set custom delay for show/hide
* Specify default anchor position
* Persistent tooltip that only closes when mouse moves off of tooltip and anchor element
* Support for hover and click events
* Optional title bar
* Tested in: IE7+, Firefox 3.5+, Safari 3+, Chrome, Opera 10+
* More features can be found at the [miniTip](http://goldfirestudios.com/blog/81/miniTip-jQuery-Plugin) home page

### Documentation ###

Please go to the [miniTip](http://goldfirestudios.com/blog/81/miniTip-jQuery-Plugin) home page to view the full documentation (it is really straightforward, I promise!).

Examples
========
This is the most basic usage. It displays a miniTip on mouseover of the element with ID "tip" and content of the title tag (maximum width of 250px). Mouseout of the "tip" hides the miniTip.

    $('#tip').miniTip();

This is a more advanced example utilizing all available options (as of v1.0). The element with ID of "tip" will be activated by click instead of mouseover. It will have a title bar with text "Title Bar" and content defined in the JS call. It will wait .5s before showing and hiding the tooltip, and the fade animation will be .5s both ways. The default anchor position is east (the right side of the anchor element). Auto-hide is set to false, so the tooltip will only hide once your mouse is off of the tooltip and the anchor element. The max width is set to 50px and the offset is 15px, so the tooltip's stem will be 15px from the edge of the anchor element. Finally, an event will fire when the tooltip is shown (alerting "Hello,"), and another will be fired when it is hidden (alerting "World!").

    $('#tip').miniTip({
      title: 'Title Bar',
      content: 'This is a test miniTip!',
      delay: 500,
      anchor: 'e',
      event: 'click',
      fadeIn: 500,
      fadeOut: 500,
      aHide: false,
      maxW: '50px',
      offset: 15,
      show: function(){ alert('Hello,'); },
      hide: funciton(){ alert('World!'); }
    });

More examples and live demos can be found at [http://goldfirestudios.com/blog/81/miniTip-jQuery-Plugin](http://goldfirestudios.com/blog/81/miniTip-jQuery-Plugin)

Requirements
============
* jQuery v1.3+

Changelog
============
### Version 1.3.1 (August 3, 2011) ###
* Improvement to fix in 1.3.1.

### Version 1.3.1 (August 1, 2011) ###
* Click behavior now works correctly when html is used within tooltip.

### Version 1.3.0 (July 28, 2011) ###
* Added support for image maps. miniTip will detect and center itself in area.

### Version 1.2.6 (July 26, 2011) ###
* maxW option now works as expected.

### Version 1.2.5 (July 23, 2011) ###
* Fixed odd behavior when showing new tooltip when previous was still fading out.
* Fixed bug that caused tooltips to randomly hide when long delays were used.
* Fixed a bug that prevented a second tooltip from showing when the previous had aHide = false.

### Version 1.2.0 (July 23, 2011) ###
* Cleaned and condensed code.
* Fixed bug that caused multiple tooltips on the same page to all be the same size.

### Version 1.1.0 (July 22, 2011) ###
* Automatic repositioning of the tooltip anchor point now works correctly on page scroll.
* Bug fixed that caused odd behavior when the anchor was flush to the right of the screen.
* Correctly declare aTop variable.
* Improved commenting on CSS file.

### Version 1.0.1 (July 21, 2011) ###
* Added fix for z-index issues in select cases.

### Version 1.0.0 (July 21, 2011) ###
* Initial release.