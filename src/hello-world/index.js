import helloWorld from './helloWorld'
const helloWorldStr = helloWorld()
function write() {
  const div = document.createElement('div');
  div.innerHTML = helloWorldStr;

  (document.body || document.documentElement).appendChild(div);
}

write()