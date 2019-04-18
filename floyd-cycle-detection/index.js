
module.exports = function floydCycleDetection(list) {
  if(!list || !list.next) return null;

  let slow = list.next,
      fast = list.next.next;

  while(slow !== fast) {
    slow = slow.next;

    if(!fast.next) {
      return null;
    }

    fast = fast.next.next;
  }

  let start = list;

  while(start !== fast) {
    start = start.next;
    fast = fast.next;
  }

  return fast;
}

