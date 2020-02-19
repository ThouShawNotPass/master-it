const HackerEarth = require('./hackerEarth-js');

const hackerEarth = new HackerEarth('143ff8481e32b5f0210a6ae96a29f418474ac08e', '');

var config = {};

config.time_limit = 1;  //your time limit in integer

config.memory_limit = 323244;  // memory limit as an integer
config.source = '';  //your source code for which you want to use hackerEarth api
config.input = "hello, world";  //input against which you have to test your source code
config.language = "Java"; //optional choose any one of them or none

function compile() {
     hackerEarth.compile(config, 
          function(compilerError, result) {
               if(compilerError) {
                    console.log(compilerError);
               }
               console.log(JSON.parse(result));
          }
     );
}

function run() {
     hackerEarth.run(config, 
          function(runtimeError, result) {
               if(runtimeError) {
                    console.log(runtimeError);
               }
               console.log(JSON.parse(result));
          }
     );
}