const mymodule = require('./mymodule')

mymodule(process.argv[2], process.argv[3],  function (error, result){
  if(error) return console.error('There was an error:', error);
  result.forEach(ext => {
    console.log(ext);
  })
})
