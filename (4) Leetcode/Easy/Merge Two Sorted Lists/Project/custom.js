var mergeTwoLists = function(list1, list2) {
  // Create a dummy node to act as the starting point
  let dummy = new ListNode(-1);
  let current = dummy;

  // Loop until either list1 or list2 becomes null
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1; // Point current node to list1's node
      list1 = list1.next;   // Move list1 to the next node
    } else {
      current.next = list2; // Point current node to list2's node
      list2 = list2.next;   // Move list2 to the next node
    }
    current = current.next; // Move the current pointer
  }

  // Attach the remaining nodes from either list1 or list2
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  // Return the merged list, starting from the next of dummy node
  return dummy.next;
};

// Example usage: Creating linked lists
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// Merging the lists
let mergedList = mergeTwoLists(list1, list2);

// Function to print the linked list
function printList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

console.log(mergeTwoLists([2, 3, 4], [3, 2, 1]));