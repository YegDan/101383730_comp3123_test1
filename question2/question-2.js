const resolvedPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let success = { message: 'delayed success!' }
        resolve(success)
      }, 500)
    })
  }

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          throw new Error('error: delayed exception!')
        } catch (e) {
          reject(e)
        }
      }, 500)
    })
}

//resolved
resolvedPromise()
  .then((result) => {
    console.log('resolved promise result message is:\n', result)
  })
  .catch((err) => {
    console.error('resolved promise error message is:\n', err)
  })
  
//rejected
rejectedPromise()
  .catch((err) => {
    console.error('rejected promise error message is:\n', err)
  })

