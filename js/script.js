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

$(document).ready(function(){    

    $('ul.nav-sidebar li[data-id="files_index"] > a img     ').replaceWith('<i class="icon-home      deic_green icon"></i>');
    $('ul.nav-sidebar li[data-id="meta_data"] > a img       ').replaceWith('<i class="icon-tag       deic_green icon"></i>');
    $('ul.nav-sidebar li[data-id="files_unsharing"] > a img ').replaceWith('<i class="icon-share     deic_green icon"></i>');
    $('ul.nav-sidebar li[data-id="user_group_admin"] > a img').replaceWith('<i class="icon-users     deic_green icon"></i>');
    $('ul.nav-sidebar li[data-id="gallery_index"] > a img   ').replaceWith('<i class="icon-camera    deic_green icon"></i>');
    $('ul.nav-sidebar li[data-id="documents_index"] > a img ').replaceWith('<i class="icon-doc-text  deic_green icon"></i>');
    $('ul.nav-sidebar li[data-id="importer_index"] > a img  ').replaceWith('<i class="icon-download  deic_green icon"></i>');
    $('ul.nav-sidebar li[data-id="uploader"] > a img        ').replaceWith('<i class="icon-upload    deic_green icon"></i>');
    $('ul.nav-sidebar li[data-id="activity"] > a img        ').replaceWith('<i class="icon-flash     deic_green icon"></i>');
    $('ul.nav-sidebar li[data-id="calendar_index"] > a img  ').replaceWith('<i class="icon-calendar  deic_green icon"></i>');
    $('ul.nav-sidebar li[data-id="contacts"] > a img        ').replaceWith('<i class="icon-chat      deic_green icon"></i>');
    $('ul.nav-sidebar li#apps-management > a img            ').replaceWith('<i class="icon-plus      deic_grey  icon"></i>');


});
