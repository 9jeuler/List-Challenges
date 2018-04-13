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
  let reversie = [];
  for (let d = list.length-1; d >= 0; d = d-1) {
    reversie.push(list[d])
  }
    return reversie;
}
//Task 3
function contains(list,e){
  for (let e = 0; e < list.length; e++) {
    if(e == list[e]){
      return true;
    }
    else{
      return false;
    }
  }

}


//Task 4
function oddElements(list){
  let oddidy = []
    for (let i = 1; i < list.length; i=i+2) {
      oddidy.push(list[i])
    }
      return oddidy;

}

//Task 5
function total(list){
  let joe=0 ;
  for (let p = 0; p < list.length; p++){
  joe = joe+list[p]
}
return joe;
}

//Task 6
function isPalindrome(list){
  for (let q = 0, r = list.length-1; q < list.length / 2, r > list.length / 2; q++, r--) {
    if(list[q] == list[r]){
      return true;
    }
    else {
      return false;
    }
  }

}

//Task 7
//Do second to last
function recursiveTotal(list){
      if (list.length === 1){
        return list[0];
      }
      else{
        return list.pop() + recursiveTotal(list)
      }
}
//bonus task(jkactually the real task)
function realRecursiveTotal(list){
let mac = []
  if (list.length == 1){
    return list[0];
  }
  else{
    
  }
}

//Task 8
function concatenate(listA, listB){
  let dylan = [];
  for (let j = 0; j < listA.length; j++){
    dylan.push(listA[j]);

  }
  for (let p = 0; p < listB.length; p++){
    dylan.push(listB[p]);
  }
  return dylan
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
  let listA = ["J", "O", "H", "N", "A", "N", "D"]
  let listB = ["P", "L", "A", "C", "E", "D", "O"]

  console.log(largest(list));
  console.log(reverse(list));
  console.log(contains(list,e));
  console.log(oddElements(list));
  console.log(total(list));
  console.log(isPalindrome(list));
  console.log(recursiveTotal(list));
  console.log(concatenate(listA,listB));

}
main();
