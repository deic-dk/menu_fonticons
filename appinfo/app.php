<?php 
/*                                                                                                                                
 * ownCloud menu_fonticons app                                                                                                   
 *                                                                                                                                  
 * @author Christian Brinch                                                                                                           
 * @copyright 2014 Christian Brinch, DeIC.dk, cbri@dtu.dk   
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

OCP\App::checkAppEnabled('menu_fonticons');

  
OCP\Util::addScript('menu_fonticons','script');
OCP\Util::addStyle('menu_fonticons','style');



OCP\App::register(Array(                                                                                                           
    'order' => 400,                                                                                                                 
    'id' => 'menu_fonticons',                                                                                                          
    'name' => 'menu_fonticons'                                                                                                         
));  


