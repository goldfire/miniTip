### Version 1.6.0 (November 28, 2016) ###
* Added ability to add custom classes
* Ability to set options per element via "data-minitip-<option>" attribute

### Version 1.5.3 (July 15, 2012) ###
* Added 'stemOff' option to correct stem positioning when a large browser-radius is used (cross browser solution, thanks Jason Day).
* Correctly unbind HTML click event on miniTip hide.

### Version 1.5.2 (July 13, 2012) ###
* Better organized codebase with /src folder and split the changelog into its own file.
* Dynamically position arrow when large border-radius is used.

### Version 1.5.1 (June 30, 2012) ###
* Switched to UglifyJS for minified version.
* Fixed issue that added multiple click events to the html element.
* Call the hide custom function on the correct tooltip when multiple miniTips are used on the same page.

### Version 1.5.0 (December 9, 2011) ###
* Fix image map compatibility for Firefox and Opera.
* Allow show() callback to access options and element context for dynamically overriding content (Wolfram Arnold).

### Version 1.4.4 (November 27, 2011) ###
* Enabled better clickhandling with multiple miniTips (thanks Denis Krienbühl).

### Version 1.4.3 (September 20, 2011) ###
* Added a render callback which is called when the element is shown (thanks Denis Krienbühl).
* Changes manual hide function from $('#id').miniTip({hide: true}); to $('#id').miniTip({doHide: true}); to fix compatibility.

### Version 1.4.2 (September 12, 2011) ###
* Added function to manually hide tooltip by calling $('#id').miniTip({hide: true});

### Version 1.4.1 (August 22, 2011) ###
* A few bug fixes associated with the corners feature in 1.4.0.

### Version 1.4.0 (August 21, 2011) ###
* Fixed issue with tooltips going off the screen by adding automated support for anchors on the corners of the tooltips.
* Fixed issue with blank tooltips showing on elements with no content or title specified.
* Fixed mixing of spaces and tabs in miniTip.css.

### Version 1.3.2 (August 3, 2011) ###
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