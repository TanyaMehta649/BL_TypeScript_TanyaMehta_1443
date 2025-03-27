const findMaxandMin=(arr:number[]):{max:number,min:number} | null=>{
    if(arr.length===0){
        return null;
    }
    let max=arr[0];
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    }
    
        return {max,min};
    
};
const arr=[1,2,3,4,5];
const ans=findMaxandMin(arr);
console.log(ans);