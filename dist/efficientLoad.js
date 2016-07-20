/**
 * Andres Valenzuela
 * https://github.com
 *
 * Copyright (c) 2016 Andres Valenzuela
 * Licensed under the MIT license.
 */
var efficientLoad = (function(){
  var config = {}
      ,url = '';

  /**
   * Fuction Contruct.
   *
   * @param  {Object} configs
   * @return void
  */
  function initConfig (obj) {
    if(typeof obj != 'object' ){
      console.log('Incorrect argument !!');
      return;
    }
    config = obj;
  }
  /**
   * Fuction checkType.
   *
   * @param  {Object} arg  
   * @return void
  */
  var checkType = function(arg){
      if(!arg.type || arg.type == '' || typeof arg.type != 'string'){
          console.log('Missing the argument type or does not contain correct format');
          return;
      }
  }
  /**
   * Fuction Append Element.
   *
   * @param  {Object | Array} x   
   * @param  {String} argConcat   
   * @return void
  */
  var appendElement = function(){
      var arrFiles = []
          ,type = '';      
      arguments[0].forEach(
            y => {
                    checkType(y);
                    arrFiles = y.files.split(',');
                    arrFiles.forEach(
                        z => {
                                type = y.type == 'js' ? 'script' : 'link';
                                element = document.createElement( type );
                                if(arguments[1] != undefined){
                                  z = z.replace(/arg/g, arguments[1]);
                                }
                                if(type == 'script'){
                                  element.type =  'text/javascript';
                                  element.src  =   y.route+z+'.js';
                                }else{
                                  element.rel  = 'stylesheet';
                                  element.type = 'text/css';
                                  element.href =  y.route+z+'.css';
                                }        
                                b =  document.getElementById(config.element);
                                b.appendChild(element);
                              }
                    );
                 }
      );
      
  }
  /**
   * Information Librarie.
  */
  initConfig.prototype.VERSION = '1.0';
  initConfig.prototype.AUTHOR = 'Andres Valenzule';
  initConfig.prototype.LICENSE = 'MIT';

  /**
   * Fuction Load.
   *
   * @param  {String} namePool 
   * @param  {String} argConcat    
   * @return void
  */
  initConfig.prototype.load = function(){
     if(!config.element || config.element == '' || typeof config.element != 'string'){
         console.log('Missing the argument element or does not contain correct format');
         return;
      }
      if(!config.pools || config.pools.length <= 0){
         console.log('Missing the argument pool');
         return;
      }
      var x;
      if(arguments[0] == '' || arguments[0] == undefined ||  !arguments[0] || arguments[0] == '*'){
         appendElement(config.pools,arguments[1]);
      }else{
        x = config.pools.filter( x =>  x.name == arguments[0] );
        appendElement(x,arguments[1]);
      }
      
  }
  /**
   * Fuction Show Pool.
   *
   * @param  {String} type 
   * @return Array 
  */
  initConfig.prototype.showPool = function(){
      if(arguments.length == 0){
          return config.pools.map(x => x.name);
      }else{
          return  config.pools.filter(x => x.name == arguments[0]);
      }  
  }
  /**
   * Fuction Show Pool.
   *
   * @return String 
  */
  initConfig.prototype.showElement = function(){
     return config.element;
  }
  
  return{
    initConfig : initConfig
  }
})();
 