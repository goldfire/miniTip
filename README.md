jQuery miniTip Plugin (v1.6.0)
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

* JS + CSS is just 4.5kb minified (1.7kb gzipped)!
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

### Installation ###

You can either download it from the `dist` directory, or install it via NPM

	npm i --save minitip

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
		stemOff: 0,
		show: function(){ alert('Hello,'); },
		hide: funciton(){ alert('World!'); },
		class: "custom-class"
	});

You can also pass options per element using the element's attributes:

```html

	<div data-minitip-class='my-custom-class' data-minitip-maxW='500'>hover me</div>

```

More examples and live demos can be found at [http://goldfirestudios.com/blog/81/miniTip-jQuery-Plugin](http://goldfirestudios.com/blog/81/miniTip-jQuery-Plugin)

Requirements
============
* jQuery v1.3+