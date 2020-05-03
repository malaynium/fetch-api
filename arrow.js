document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// fetch local text file data
function getText (){
  // get local data file
  fetch('test.txt')

  // resturn data in the file
  .then(res => res.text())

  // if have data, display the data in index.html 
  .then(data => {
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })

  // if error, console log the error message
  .catch(err => console.log(err));

}

// // fetch local json data
function getJson (){
  // get local json file
  fetch('posts.json')

  // return json data in the file
  .then(res => res.json())

  // if have json data, display the data in index.html 
  .then(data => {
    console.log(data);

    let output = '';
    
    data.forEach(function(post){
      output += `<li>${post.title}</li>`;

    });

    document.getElementById('output').innerHTML = output;  

    })

  // if error, console log the error message
  .catch(err => console.log(err));
   
}

// fetch external json data
function getExternal (){
  // get external json file
  fetch('https://api.github.com/users')

  // return json data in the file
  .then (res=> res.json())

  // if have json data, display the data in index.html 
  .then(data => {

    let output = '';
    
    data.forEach(function(user){
      output += `<li>${user.login}</li>`;
    });

    document.getElementById('output').innerHTML = output;

  })    

  // if error, console log the error message
  .catch(err => console.log(err));

}