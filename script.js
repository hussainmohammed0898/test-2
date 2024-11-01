
function largestNumberAndSmallest (arr){
    let largest = arr[0];
    let smallest = arr[0];
    let fin =[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
        if(arr[i]<smallest){
            smallest=arr[i]
        }
    }
    fin.push(largest, smallest)
    

    return fin
}


function reverse (str){
    let res='';
    for(let i=str.length-1; i>=0;i--){
        res+=str[i];
    }
    return res
}

function duplicate (arr){
    let val=[];
    let sum = [];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]!==arr[j] && val[i]!==arr[i]){
                val.push(arr[i]);
            }
            
            } 
        }
       
            
    
    return val;
}





let array =[3,4,9,3,8,0,4,9]
let string = "KRIYATMA"
console.log(largestNumberAndSmallest(array));
console.log(reverse(string));
console.log(duplicate(array));


