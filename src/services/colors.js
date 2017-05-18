var collection = {
  blue: { start: '#3AE7F3', end: '#1E96E5', mid: '#2EC0EC' },
  orange: { start: '#FFA254', end: '#FF768C', mid: '#ff8f6d' },
  green: { start: '#10c7a0', end: '#01c8b1', mid: '#15a68d' },
  purple: { start: '#bc5ddd', end: '#807cea', mid: '#8461ca' },
  yellow: { start: '#ffc75a', end: '#ff701e', mid: '#ffa650' },
  darkBlue: { start: '#07D2F3', end: '#4945FF', mid: '#399ffb' },
  red: { start: '#ffb492', end: '#ff4d64', mid: '#ff6162' },
  green_sms: { start: '#84ecb9', end: '#12b9c9', mid: '#4bd2c1' },
  bluePurple: { start: '#7D81F3', end: '#7853FC', mid: '#7A7FF1' }
}

function getRandom () {
  var keys = Object.keys(collection)
  var randomKey = keys[Math.floor(Math.random() * keys.length)]
  return collection[randomKey]
}

export default { collection, getRandom }
