'use strict';

 module.exports = function countSameElements(collection) {

    var result = {key:[], count:[]};
    var k=0;
    for(var i=0; i<collection.length; i++) {
        if(collection[i]!=collection[i+1]){
            result.key[k]=collection[i];
            k = k+1;
        }
    }
    //console.log(result.key);

    var cc=[];
    var m=0;
    for(var j=0; j<result.key.length; j++) {
        cc[m]=0;
        for(var i=0; i<collection.length; i++){
            if(result.key[j]==collection[i]){
                cc[m] +=1;
            }
        }
        m = m+1;
    }
    //console.log(cc);

    var re = [];
    for(var t=0;t<cc.length; t++){
        re.push({key:result.key[t],count:cc[t]});
        //console.log(re[t]);
    }
    //console.log(re);
    return re;
 }




//方法2，,能不能只循环一次，优化一下代码量
//
// const collection = [
//     'a', 'a', 'a',
//     'e', 'e', 'e', 'e', 'e', 'e', 'e',
//     'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
//     't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
//     'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
//     'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
//     'g', 'g', 'g', 'g', 'g', 'g', 'g',
//     'b', 'b', 'b', 'b', 'b', 'b',
//     'd', 'd', 'd', 'd', 'd'
// ];
// var obj = {key:'a',count:0};//初始化
// var result = [obj];
// var k = 0;
// var j = 1;
// for(var i=0;i<collection.length; i++){
//     if(collection[i]!=collection[i+1]){
//         obj.key = collection[i];
//         obj.count = j;
//         result.push(obj);
//         j = 1;
//         console.log(obj);
//     }
//     // else if(i == collection.length-1){
//     //     obj.key = collection[i];
//     //     obj.count = j;
//     //     result.push(obj);
//     else{
//         j += 1;
//     }
// }
// // for(var i=0; i<result.length; i++){
// //     console.log(result[i]);
// // }
// console.log(result);




// expect(result).toEqual([s
//     {key: 'a', count: 3},
//     {key: 'e', count: 7},
//     {key: 'h', count: 11},
//     {key: 't', count: 20},
//     {key: 'f', count: 9},
//     {key: 'c', count: 8},
//     {key: 'g', count: 7},
//     {key: 'b', count: 6},
//     {key: 'd', count: 5}
// ]);
// });
// });