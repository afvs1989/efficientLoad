efficientLoad
=========

It is a small library that allows efficient load js files and css


Load files only when you need them, ["Github Repository."](https://github.com/)

## Installation

```shell
  npm install efficientLoad --save
```

## Usage

```js
      /**
       * Initial Config.
      */
      var config = {
        element:'cuerpo',//Id of the element where the files were inserted
        pools:[//Array Pools
                {name:'poolUno',route:'libs/',files:'test1,test2',type:'js'},//Pool of js files
                {name:'otherPool',route:'libs/',files:'pruebas,PERSONAS.arg',type:'css'},//Pool of css files    
                {name:'Traducciones',route:'traductions/',files:'traduction.arg',type:'js'}//Pool of traductions files arg should be written for variable use
              ]
      };

      /**
       * Use.
      */
      var idioma = 'en';
      /**
       * Instantiating efficientLoad.
      */
      var eL = new efficientLoad.initConfig(config);
      /**
       * all pools.
      */
      eL.load();
      //eL.load('');
      //eL.load('*');

      /**
       * specific pool.
      */
      eL.load('poolUno');

      /**
       * specific pool and argument(arg).
      */

      eL.load('Traducciones',idioma);

      /**
       * all pools and argument(arg).
      */

      eL.load('*',idioma);
```

## More utilities

```js
   console.log(eL.showPool());
   console.log(eL.showPool('Traducciones'));
   console.log(eL.showElement());
   console.log(eL.VERSION);
```

## Release History


* 1.0.0 Initial release
