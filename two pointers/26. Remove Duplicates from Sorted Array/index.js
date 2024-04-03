/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0,j = 0;
    let count = 0;
    if(nums.length === 0) return 0;
    nums.sort((a,b)=>a-b);
    while(i < nums.length && nums[i] != '_'){
        j++;
        console.log(i,j);
        while(j < nums.length && nums[j] === nums[i]){
            nums[j] = '_';
            j++;
        }
        
        if( j < nums.length && j != i+1){ // entro al menos una vez en la iteracion
            console.log( nums[i], nums[j])
            //swap
            nums[i+1] = nums[j]
            nums[j] = '_'

        }
        i++ // salto a el nuevo valor
        count++;
    }
    return count
};
let nums = [1,2]

console.log(removeDuplicates(nums))
console.log(nums)