var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1; // Last valid element in nums1
  let p2 = n - 1; // Last element in nums2
  let p = m + n - 1; // Last position in nums1


  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }


  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p--;
    p2--;
  }
};

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1);