const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function insertNode(node, data) {
  if (!node) return new Node(data);
  if (data < node.data) {
    node.left = insertNode(node.left, data);
  } else {
    node.right = insertNode(node.right, data);
  }
  return node;
}

function postorderTraversal(node) {
  if (!node) return;
  postorderTraversal(node.left);
  postorderTraversal(node.right);
  console.log(node.data);
}

let root = null;
const keys = [];

rl.on('line', function(line) {
  keys.push(parseInt(line));
}).on('close', function() {
  keys.forEach(key => {
    root = insertNode(root, key);
  });
  postorderTraversal(root);
  process.exit();
});
