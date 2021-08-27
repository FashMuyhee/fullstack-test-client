import axios from 'axios'

const fetchInfo = async () => {
  try {
    const { data } = await axios.get('https://fullstack-test-api.herokuapp.com/api/v1/infos')
    return data[0]
  } catch (error) {
    console.log(error)
  }
}

const downloadCv = async () => {
  try {
    await axios.get('https://fullstack-test-api.herokuapp.com/api/v1/files/download_cv', {
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // 
  } catch (error) {
    console.log(error)
  }
}

export { fetchInfo, downloadCv }