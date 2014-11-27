/*                                                                                                                                
 * menu_improver
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

    $('div.wrapper li[data-id="files_index"] > a img').replaceWith('<i class="fa fa-home deic_green icon"></i>');
    $('div.wrapper li[data-id="meta_data"] > a img').replaceWith('<i class="fa fa-tag deic_green icon"></i>');
    $('div.wrapper li[data-id="files_unsharing"] > a img').replaceWith('<i class="fa fa-share-alt deic_green icon"></i>');
    $('div.wrapper li[data-id="group_custom_index"] > a img').replaceWith('<i class="fa fa-users deic_green icon"></i>');
    $('div.wrapper li[data-id="gallery_index"] > a img').replaceWith('<i class="fa fa-camera deic_green icon"></i>');
    $('div.wrapper li[data-id="documents_index"] > a img').replaceWith('<i class="fa fa-file deic_green icon"></i>');
    $('div.wrapper li[data-id="importer_index"] > a img').replaceWith('<i class="fa fa-download deic_green icon"></i>');
    $('div.wrapper li[data-id="uploader"] > a img').replaceWith('<i class="fa fa-upload deic_green icon"></i>');
    $('div.wrapper li[data-id="activity"] > a img').replaceWith('<i class="fa fa-bolt deic_green icon"></i>');
    $('div.wrapper li[data-id="user_appchooser"] > a img').replaceWith('<i class="fa fa-cogs deic_grey icon"></i>');


});
