'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var obj = {key:'a',count:0};//初始化
    var C = [];
    var k = 0;
    var j = 1;
    for(var i=0;i<collectionA.length; i++){

        if(collectionA[i]!=collectionA[i+1]) {
            obj = {key: collectionA[i], count: j};//上面那种，虽然打印obj的结果一样，但是前者不能传入push。
            C.push(obj);
            j = 1;
        }else {
            j += 1;
        }

    }
    //console.log(C);

    for(var i=0; i<C.length; i++){
        for(var j=0; j<objectB.value.length; j++){
            if(C[i].key == objectB.value[j] && C[i].count >2)
                C[i].count -=1;
        }
    }
    //console.log(C);
  return C;
}



