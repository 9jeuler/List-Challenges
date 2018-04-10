//Task 1
function largest(list){
  let bigGuy= 0;
  for (let j = 0; j < list.length; j++) {
    if(list[j] > bigGuy){
      bigGuy = list[j]
    };
  }
  return bigGuy;
}

//Task 2
function reverse(list){

}
//Task 3
function cotains(list,e){
  for (let i = 0; i < list.length; i++) {
    if(e == list[i]){
      return true;
    }
  }

}


//Task 4
function oddElements(list){

}

//Task 5
function total(list){

}

//Task 6
function isPalindrome(list){

}

//Task 7
//Do second to last
function recursiveTotal(list){

}
//Task 8
function concatenate(listA, listB){

}

//Task 9
function weave(listA, listB){

}

//Task 10
//Attempt last
function mergeInOrder(listA, listB){

}

//Task 11
function rotate(list,k){

}

//Task 12
function fibonacci(){

}

function main(){
  let list = [1, 2, 3, 4, 5, 6, 7, 8];
  let e = 18

  console.log(largest(list));
  console.log(contains(list,e));
}
main();
