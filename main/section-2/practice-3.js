'use strict';

module.exports = function countSameElements(collection) {
// const collection = [
//     'a', 'a', 'a',
//     'e', 'e', 'e', 'e', 'e', 'e', 'e',
//     'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',
//     't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]',
//     'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
//     'c:8',
//     'g', 'g', 'g', 'g', 'g', 'g', 'g',
//     'b', 'b', 'b', 'b', 'b', 'b',
//     'd-5'
// ];
    var obj = {name:'a',summary:0};//初始化
    var result = [];
    var k = 0;
    var j = 1;
    var num = 0;
    for(var i=0;i<collection.length; i++){

       if(i == collection.length-1){
           var s = collection[i].charAt(0);
           j = parseInt(collection[i].charAt(2));
           obj = {name: s, summary: j};
           result.push(obj);
       }
       else{
           if(collection[i].charAt(0)==collection[i+1].charAt(0)) {
               j +=1;
               if(collection[i].length  !=1){
                   if(collection[i].length ==5){
                       num = parseInt(collection[i].slice(2,4));
                       j = j+num-1;

                   }else{
                       num = parseInt(collection[i].slice(2,3));
                       j = j+num-1;
                   }
               }

           }else {
               if(collection[i].length  !=1){
                   if(collection[i].length ==5){
                       num = parseInt(collection[i].slice(2,4));
                       j = j+num-1;

                   }else{
                       num = parseInt(collection[i].slice(2,3));
                       j = j+num-1;
                   }
               }
               var s = collection[i].charAt(0);
               obj = {name: s, summary: j};
               result.push(obj);
               j = 1;
           }
       }


        //它最后一个是undefined
    }

    //console.log(result);
  return result;
}