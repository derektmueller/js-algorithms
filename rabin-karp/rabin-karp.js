

function rabinKarp(s, m) {
  if(s.length < m.length) return false;

  const charSetSize = 65536;

  function code(c) {
    return c.charCodeAt(0);
  }

  function hash(s, i, j) {
    let val = 0,
        pos = 0;

    for(let k = j - 1; k >= i; --k) {
      val += code(s[k]) * (Math.pow(charSetSize, pos));
      pos++;
    }

    return val;
  }

  function compare(m, s, i, j) {
    let pos = 0;

    for(let k = i; k < j; ++k) {
      if(m[pos] !== s[k]) {
        return false;
      }

      ++pos;
    }

    return true;
  }

  mHashed = hash(m, 0, m.length);

  let currHash = null;
  for(let i = 0; i <= s.length - m.length; ++i) {
    if(currHash === null) {
      currHash = hash(s, i, m.length);
    } else {
      currHash = 
        (currHash -
          (code(s[i - 1]) * Math.pow(charSetSize, m.length - 1)))
        * charSetSize
        + code(s[i + m.length - 1]);
    }

    if(mHashed === currHash && compare(m, s, i, m.length)) {
      return true;
    }
  }

  return false;
}

module.exports = rabinKarp;
