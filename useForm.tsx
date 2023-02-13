import { ChangeEvent, useState } from "react"

const useForm = <T extends Object>(initState: T) => {
  
  const [input, setInput] = useState(initState)

  const handleImputChange = ({target}: ChangeEvent<HTMLInputElement> ) => {
    
    const {name, value} = target

    setInput({...input, [target.name]: target.value})
  }

  return {
          input,
          setInput,
          handleImputChange,
          ...input
         }
}

export default useForm