
const someArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(myArr) {
    return new Promise((resolve, reject) => {
      
      const filteredwrd = myArr.filter((item) => typeof item === 'string')
  
      if (filteredwrd.length === 0) {
        reject({msg:'Array has no item type of string'})
        return
      }
  
      const lowerc = filteredwrd.map((word) => word.toLowerCase())
      resolve(lowerc)
    })
  }
  

  lowerCaseWords(someArray)
    .then((result) => {
      console.log('filtered words:\n', result);
    })
    .catch((error) => {
      console.error('an error occured:\n', error.message);
    });
  