var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    
    if (count > 0) return [...Array(count + 1).keys()].join('+') + ' = '+ count * (count + 1) / 2;
    if (count == 0) return '0=0';
    return count+'<0';
  };

  return SequenceSum;

})();