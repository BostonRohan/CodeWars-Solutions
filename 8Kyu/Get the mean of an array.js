function getAverage(marks){
//Takes the sum of the array using reduce, and divides it by the length of the array, to find the average.
//Uses Math.floor to round down.
return Math.floor(marks.reduce((a,b) => a+b,0) / marks.length);
}
getAverage([2,2,2,2])