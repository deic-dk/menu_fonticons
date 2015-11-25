/*
 * menu_fonticons
 *
 * @author Christian Brinch
 * @copyright 2014 Christian Brinch, DeIC.dk
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
function createCookie(name,value,days) {
		if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
}



$(document).ready(function(){

  		/* Change SVG icons into font-awesome icons */
		$('ul.nav-sidebar li[data-id="files_index"]      > a img').replaceWith('<i class="icon-home      deic_green icon"></i>');
		$('ul.nav-sidebar li[data-id^="internal-bookma"] > a img').replaceWith('<i class="icon-folder    deic_green icon"></i>');
		$('ul.nav-sidebar li[data-id="meta_data"]        > a img').replaceWith('<i class="icon-tag       deic_green icon"></i>');
		$('ul.nav-sidebar li[data-id="files_unsharing"]  > a img').replaceWith('<i class="icon-share    deic_green icon"></i>');
		$('ul.nav-sidebar li[data-id="user_group_admin"] > a img').replaceWith('<i class="icon-users     deic_green icon"></i>');
		$('ul.nav-sidebar li[data-id="gallery_index"]    > a img').replaceWith('<i class="icon-camera    deic_green icon"></i>');
		$('ul.nav-sidebar li[data-id="documents_index"]  > a img').replaceWith('<i class="icon-doc-text  deic_green icon"></i>');
		$('ul.nav-sidebar li[data-id="importer_index"]   > a img').replaceWith('<i class="icon-download  deic_green icon"></i>');
		$('ul.nav-sidebar li[data-id="uploader"]         > a img').replaceWith('<i class="icon-upload    deic_green icon"></i>');
		$('ul.nav-sidebar li[data-id="activity"]         > a img').replaceWith('<i class="icon-flash     deic_green icon"></i>');
		$('ul.nav-sidebar li[data-id="calendar_index"]   > a img').replaceWith('<i class="icon-calendar  deic_green icon"></i>');
		$('ul.nav-sidebar li[data-id="contacts"]         > a img').replaceWith('<i class="icon-chat      deic_green icon"></i>');
		$('ul.nav-sidebar li[data-id="adaptivefiles"]    > a img').replaceWith('<i class="icon-cubes	 deic_green icon"></i>');
		$('ul.nav-sidebar li[data-id="responsivefiles"]  > a img').replaceWith('<i class="icon-cube 	 deic_green icon"></i>');
		$('ul.nav-sidebar li#apps-management             > a img').replaceWith('<i class="icon-plus      deic_grey  icon"></i>');


		/* Replace "Files" with "Home" */
		$('ul.nav-sidebar li[data-id="files_index"] > a span    ').replaceWith('<span>Home</span>');

		/* Remove activity app */
		$('li[data-id=activity]').remove();

		/* Insert menu headings: Places, Tags, and Apps */
		$('ul.nav-sidebar li[data-id="files_index"]').before("<li id='places' class='head' style='min-width:160px;'><span >Places</span><span style='float:right'><i class='icon-angle-down'></i><i class='icon-angle-right hidden'></i></span></li>");
		$('ul.nav-sidebar li[data-id="meta_data"]  ').before("<li id='tags'   class='head'><span>Tags</span><span style='float:right'><i class='icon-angle-down'></i><i class='icon-angle-right hidden'></i></span></li><li id='apps' class='head'><span>Apps</span><span style='float:right'><i class='icon-angle-down'></i><i class='icon-angle-right hidden'></i></span></li>");


		/* Insert link to Trashbin and shared files */
		$('ul.nav-sidebar li#tags').before('<li data-id="sharing_out">'
														   +'<a title="" href="#"><i class="icon-share deic_green icon"></i><div class="icon-loading-dark" style="display:none;"></div><span>Shared by me</span></a>'
														   +'</li>'
														   +'<li data-id="sharing_in">'
														   +'<a title="" href="#"><i class="icon-share deic_green icon invert-image"></i><div class="icon-loading-dark" style="display:none;"></div><span>Shared with me</span></a>'
														   +'</li>'
														   +'<li data-id="trash">'
														   +'<a title="" href="#"><i class="icon-trash deic_green icon"></i><div class="icon-loading-dark" style="display:none;"></div><span>Trashbin</span></a>'
														   +'</li>');




		/* Remeber the state of the menu bar using cookies */
		var places = readCookie('OCplaces');
		var tags   = readCookie('OCtags');
		var apps   = readCookie('OCapps');

		if(places == 'collapsed'){
				$('ul.nav-sidebar li[data-id^="internal"], li[data-id="files_index"], li[data-id="trash"], li[data-id^="sharing_"]').hide();
				$('ul.nav-sidebar li#places span i').toggleClass('hidden');
		}
		if(tags == 'collapsed'){
				$('ul.nav-sidebar li[data-id^="tag-"]').hide();
				$('ul.nav-sidebar li#tags span i').toggleClass('hidden');
		}
		if(apps == 'collapsed'){
				$('ul.nav-sidebar li').not('.head, [data-id^="tag-"], [data-id^="internal-bookmarks"], [data-id="files_index"], [data-id="trash"], [data-id^="sharing_"]').hide();
				$('ul.nav-sidebar li#apps span i').toggleClass('hidden');
		}

		$('ul.nav-sidebar').show();



		/* Attach click event handlers */

		$('ul.nav-sidebar').on('click','li#places', function() {
				$('ul.nav-sidebar li[data-id^="internal-bookmarks"], li[data-id="files_index"], li[data-id="trash"], li[data-id^="sharing_"] ').toggle('fast','linear');
				$('ul.nav-sidebar li#places span i').toggleClass('hidden');
				if($('ul.nav-sidebar li#places span i.icon-angle-down').is(":visible")){
					createCookie('OCplaces','expanded','365');
				} else {
					createCookie('OCplaces','collapsed','365');
				}
		});

		$('ul.nav-sidebar').on('click','li#tags', function() {
				$('ul.nav-sidebar li[data-id^="tag-"]').toggle('fast','linear');
				$('ul.nav-sidebar li#tags span i').toggleClass('hidden');
				if($('ul.nav-sidebar li#tags span i.icon-angle-down').is(":visible")){
					createCookie('OCtags','expanded','365');
				} else {
					createCookie('OCtags','collapsed','365');
				}
		});

		$('ul.nav-sidebar').on('click','li#apps', function() {
				$('ul.nav-sidebar li').not('.head, [data-id^="tag-"], [data-id^="internal-bookmarks"], [data-id="files_index"], [data-id="trash"], [data-id^="sharing_"]').toggle('fast','linear');
				$('ul.nav-sidebar li#apps span i').toggleClass('hidden');
				if($('ul.nav-sidebar li#apps span i.icon-angle-down').is(":visible")){
					createCookie('OCapps','expanded','365');
				} else {
					createCookie('OCapps','collapsed','365');
				}
		});


		$('ul.nav-sidebar').on('click', 'li[data-id="trash"]', function(e) {
			    $('ul.nav-sidebar').find('.active').removeClass('active');
				$(this).children('a').addClass('active');
				if($('#app-navigation').length !== 0){
						$('#app-navigation ul li.nav-trashbin a').click();
				} else {
						window.location.href = "/index.php/apps/files?dir=%2F&view=trashbin";
				}

		});

		$('ul.nav-sidebar').on('click', 'li[data-id="sharing_in"]', function(e) {
			    $('ul.nav-sidebar').find('.active').removeClass('active');
				$(this).children('a').addClass('active');
				if($('#app-navigation').length !== 0){
						$('#app-navigation ul li.nav-sharingin a').click();
				} else {
						window.location.href = "/index.php/apps/files?dir=%2F&view=sharingin";
				}

		});

		$('ul.nav-sidebar').on('click', 'li[data-id="sharing_out"]', function(e) {
			    $('ul.nav-sidebar').find('.active').removeClass('active');
				$(this).children('a').addClass('active');
				if($('#app-navigation').length !== 0){
						$('#app-navigation ul li.nav-sharingout a').click();
				} else {
						window.location.href = "/index.php/apps/files?dir=%2F&view=sharingout";
				}

		});




});
