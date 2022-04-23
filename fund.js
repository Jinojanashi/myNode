const process = require('process');
const result = process.argv.slice(2).toString()

const axios = require('axios')
const getData = async () => {
  try {
    return await axios.get('https://codequiz.azurewebsites.net/', {hasCookie:true},{withCredentials:true}).then(res => res.data)
  } catch (error) {
    console.error(error)
  }
}

const setOutput = async () => {
  const data = await getData()

  if(result === "B-INCOMESSF" || result === "BM70SSF" || result === "BEQSSF" || result === "B-FUTURESSF") {
        console.log(data.nav.result)
    }
    else console.log("Don't have data")
    }

    setOutput()
