function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = ranks.length; i < l; i++) {
  ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let innerNode = node.children[0]
  while (node.children[0]) {
    node = innerNode
    innerNode = node.children[0]
  }
  return node
}
