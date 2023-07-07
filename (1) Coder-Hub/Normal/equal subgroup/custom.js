function hasSubsetSum(numArray, k) {
  const n = numArray.length;
  const dp = Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < n; i++) {
    for (let j = k; j >= numArray[i]; j--) {
      dp[j] = dp[j] || dp[j - numArray[i]];
    }
  }

  return dp[k];
}

console.log(hasSubsetSum([1, 4, 6, 3], 8));

