function ShellSort(array)
{
    var n = array.length, i = Math.floor(n/2);
    while (i > 0)
     { for (var j = 0; j < n; j++)
        { var k = j, t = array[j];
          while (k >= i && array[k-i] > t)
           { array[k] = array[k-i]; k -= i; }
           array[k] = t;
        }
      i = (i==2) ? 1 : Math.floor(i*5/11);
     }
    return array;
}

function ArrayMax( array ){
        return Math.max.apply( Math, array );
};

module.exports = function longestConsecutiveLength(array) {

    if(array.length==0) return 0;

    var sequenceLength = [];
    array = ShellSort(array);
    count = 1;
    for(var i=0; i<array.length; i++){
        if((array[i]==array[i+1]-1)){
          count++;
        }
        else if(count!=1){
            sequenceLength.push(count);
            count=1;
        }
    }
    if (sequenceLength.length==0) return 1;
    var count = ArrayMax(sequenceLength);
    return count;
}
