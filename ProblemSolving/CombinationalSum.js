// sorted array an elements are unique

const arr = [5, 10, 15, 20, 25, 30];

function sumCombination (arr, sum) {
    // code goes here
    const sumCombinationArr=[];
    for(let i=arr.length-1;i>0;i--){
        const combArr= [];
        combArr.push(arr[i]);
        let combSum = arr[i];
        const comElSum = arr[i];
        if(sum === combSum){
            const combEleArr = [];
            combEleArr.push(arr[i]);
            sumCombinationArr.push(combEleArr);
        }
        for(let j=0; j<arr.length;j++){
            if((comElSum+arr[j]) === sum && i!==j){
                const combEleArr = [];
                combEleArr.push(arr[i]);
                combEleArr.push(arr[j]);
                sumCombinationArr.push(combEleArr);

            }
            combSum += arr[j];
            combArr.push(arr[j]);
            if(combSum === sum ){
                sumCombinationArr.push(combArr);
                break;
            }
        }

    }
    return sumCombinationArr;
}

const combinations = sumCombination(arr, 20);
console.log(combinations); // [[10, 30], [15, 25]]

