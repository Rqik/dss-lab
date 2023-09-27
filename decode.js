const {
  str
} = require('./data.json')

const decode = input => input
  .replace(/[\.-](?<count>\d+)/gim, (...x) => {
    const {
      count
    } = x.pop()
    if (count === '1') return '.';
    return (count - 2) / 2
  })
  .split('.')
  .reduce((acc, el, i) => {
    if (i % 2) {
      const last = acc.pop();
      last.push(el)
      acc = [...acc, last];
    } else {
      acc.push([el])
    }
    return acc
  }, [])
  .sort(([_, posA], [__, posB]) => posA - posB)
  .map(([el]) => String.fromCharCode(el))
  .join('')

console.log(decode(str))