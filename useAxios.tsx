import axios from 'axios'
import { useEffect, useState } from 'react'

const useAxios = <T extends Object>(config: AxiosRequestConfig<any>, loadOnStart:boolean): [boolean, T|undefined, string, () => void] => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [error, setError] = useState('')
  
  useEffect(() => {
    if (loadOnStart){sendRequest()} 
  }, [])
  
  const request = () => {
    sendRequest();
  }



  const sendRequest = () => {
    setLoading(true)

    axios(config)
      .then(response =>{
        setError('')
        setData(response.data)
      })
      .catch(error =>{
        error.message
      })
      .finaly( () => {setLoading(false)} )
  } 
  return [
    loading,
    data,
    error,
    request
  ]
}

export default useAxios