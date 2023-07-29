//program - 1
function arrConcat(arr1, arr2) {
  return arr1 + "," + arr2;
}

//program - 2
function arrIndexOf(arr1, value) {
  for (var i = 0; i < arr1.length; i++) {
    var temp = 0;
    if (arr1[i] === value) {
      var temp = i;
      break;
    }
  }
  if (temp == 0) {
    return 1;
  } else {
    return temp;
  }
}

//program - 3
function arrjoin(arr1) {
  s = "";
  for (var i = 0; i < arr1.length; i++) {
    s += arr1[i];
  }
  return s;
}

//program - 4
function arrLastIndexOf(arr1, value) {
  var temp = -1;
  for (var i = arr1.length - 1; i >= 0; i--) {
    if (arr1[i] === value) {
      var temp = i;
      break;
    }
  }
  if (temp == -1) {
    return -1;
  } else {
    return temp;
  }
}

//program - 5
function arrPush(arr1,value){
  arr1.push(value);
  return arr1.length;
}

//program - 6
function arrPop(arr1){
  return arr1[arr1.length-1];
}

//program - 7
function arrShift(arr1){
  removedElement = arr1[0];
  for(var i=0;i<arr1.length;i++){
    arr1[i]=arr1[i+1];
  }
  return removedElement;
}

//program - 8
function arrUnShift(arr1,value){
  for(var i=arr1.length-1;i>=0;i--){
    arr1[i+1]=arr1[i];
  }
  arr1[0]=value;
  return arr1.length;
}

//program - 9
function arrSort(arr2){
  for (var i=0;i<arr2.length;i++){
    for(var j=0;j<arr2.length-i-1;j++){
      if(arr2[j]>arr2[j+1]){
        temp=arr2[j];
        arr2[j]=arr2[j+1];
        arr2[j+1]=temp;
      }
    }
  }
  return arr2;
}

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [16, 27, 58, 109, 10];
document.write("concatenated array : ", arrConcat(arr1, arr2) + "</br>");
document.write("first index of the given value : ",arrIndexOf(arr1, 3) + "</br>");
document.write("joined string : ", arrjoin(arr1) + "</br>");
document.write("last index of the given value : ",arrLastIndexOf(arr1, 5) + "</br>");
document.write("length resultant array after the push operation : ",arrPush(arr1, 20) + "</br>");
document.write("removed element of the array after the pop operation : ",arrPop(arr1) + "</br>");
document.write("removed element at first position of the array after the pop operation : ",arrShift(arr1) + "</br>");
document.write("length of the array after the addition of element at first position : ",arrUnShift(arr1,20) + "</br>");
document.write("resultant array after sorting : ",arrSort(arr2));