
    let arr = [1,3,5,7,2,4,6,8];

    function rearrange(start, end){
        if(start>=end)
            return;
        let mid = start + (end - start) / 2;
        let x = Math.floor(1+ (start+mid)/2);
        let y = Math.floor(mid+1);
        for (let i=x, j=y; i <=mid ; i++,j++) {
           swap(i,j);
        }
        rearrange(start,mid);
        rearrange(mid+1,end);
    }

    function swap(m, n){
        let temp = arr[m];
        arr[m] = arr[n];
        arr[n] = temp;
    }

    rearrange(0, arr.length-1);
    console.log(arr);
