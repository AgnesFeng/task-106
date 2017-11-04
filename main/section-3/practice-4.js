'use strict';

module.exports = function createUpdatedCollection(collection, objectB) {
    var obj = {key:'a',count:0};//初始化
    var result = [];
    var k = 0;
    var j = 1;
    for(var i=0;i<collection.length; i++){

        if(collection[i]!=collection[i+1]) {
            if (collection[i].length != 1) {
                // obj.key = collection[i];
                // obj.count = j;
                var s = collection[i].charAt(0);
                var num = parseInt(collection[i].charAt(2));
                obj = {key: s, count: num};
                result.push(obj);
                j = 1;
            } else{
                // obj.key = collection[i];
                // obj.count = j;
                obj = {key: collection[i], count: j};//上面那种，虽然打印obj的结果一样，但是前者不能传入push。
                result.push(obj);
                j = 1;
            }

        }else {
            j += 1;
        }

        //console.log(collection[i+1]);//它最后一个是undefined
    }
    var C = result;
    //console.log(result);
    for(var i=0; i<C.length; i++){
        for(var j=0; j<objectB.value.length; j++){
            if(C[i].key == objectB.value[j] && C[i].count >2)
                C[i].count -=1;
        }
    }
    return C;
}
