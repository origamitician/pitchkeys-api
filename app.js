fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    let x = JSON.stringify(json);
    document.getElementById('content').innerHTML = x;
  })