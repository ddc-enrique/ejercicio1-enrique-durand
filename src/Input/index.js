import React, { useEffect, useState } from 'react'
import { getFakeData1, getFakeData2 } from '../fakeRequest'

const Input = ( { inputValue, onChangeInputValue } ) => {
  const [inputValueInComponent, setInputValueInComponent] = useState('')

  useEffect(() => {
    const nameWithId = async () => {
      const firstNameWithId = await getFakeData1()
      const lastNameWithId = await getFakeData2()
      
      console.log({firstNameWithId, lastNameWithId})
    }

    nameWithId()    
  }, [])

  useEffect(() => {
    setInputValueInComponent(inputValue)
    
  }, [inputValue])

  return (
    <input
        onChange={e => onChangeInputValue(e.target.value)}
        value={inputValueInComponent}
    />
  )
}

export default Input
