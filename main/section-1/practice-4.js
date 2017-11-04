'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var out = [];
    var k=0;
    for(var i=0; i<collectionA.length; i++){
        for(var j=0; j<objectB.value.length; j++){
            if(collectionA[i].key==objectB.value[j]){
                out[k] = collectionA[i];
                k++;
            }
        }
    }
    var c = [];
    for(i=0; i<out.length; i++){

        //process.stdout.write(out[i].key);//一种不换行的方法
        c[i] = out[i].key;
    }

    return c;
}

