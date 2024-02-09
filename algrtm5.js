const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
    let first =0;
    let second =0;
    let third=0;
    
    for(let i =0; i<arr.length; i++){
        if (arr[i] > first){
            third = second;
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second) {
            third = second;
            second = arr[i];  
        }
        else if (arr[i] > third) {
            third = arr[i];
        }
    }
    
console.log(third);