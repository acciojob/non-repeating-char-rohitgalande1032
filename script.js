function firstNonRepeatedChar(str) {
 // Write your code here
 let obj = {}
 for(let i=0; i<str.length; i++) {
   if(obj[str[i]]){
     obj[str[i]]++;
   }else{
     obj[str[i]] = 1;
   }
 }
 
 let keys = Object.keys(obj);
 for(let key of keys) {
   if(obj[key] === 1) {
     return key
   }
 } 
 
 return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
