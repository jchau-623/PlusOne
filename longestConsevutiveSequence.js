// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

var longestConsecutive = function(nums) {
    const numsSet = new Set(nums)
    let longestSequence = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const pres = num - 1;
        let next = num + 1;
        let sequence = 1;

        if (!numsSet.has(prev)) {
            while (numsSet.has(next)) {
                sequence++;
                next++
            }
            longestSequence = Math.max(longestSequence, sequence)
        }
    }
    return longestSequence
};
