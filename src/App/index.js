import React, { useEffect, useState } from 'react'
import Input from '../Input/index'
import logo from '../resources/logo512.png'
import { getFakeData1, getFakeData2 } from '../fakeRequest'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [filterList, setFilterList] = useState([])
  const [userList, setUserList] = useState([])

  const onChangeInputValue = (value) => setInputValue(value)

  useEffect(() => {
    const nameWithId = async () => {
      const firstNameWithId = await getFakeData1()
      const lastNameWithId = await getFakeData2()
      let auxLast = lastNameWithId.map( user => user.id)
      let auxFirst = firstNameWithId.filter( user => auxLast.includes(user.id) )
      setUserList(
        auxFirst.map( userA => {
          let sameId = lastNameWithId.find( userB => userA.id === userB.id )
          return {id:userA.id, name: `${userA.firstName} ${sameId.lastName}` }
        })
      )      
    }
    nameWithId()   
  }, [])

  useEffect(() => {
    if(!inputValue.length){
      setFilterList([])
    } else {
      setFilterList(
        userList.filter( user => user.name.includes(inputValue))
      ) 
    }
  }, [inputValue])

  return (
    <>
      <div>
        <Input
          inputValue={inputValue}
          onChangeInputValue={onChangeInputValue}
        />
      </div>
      <div className='container'>
        <div className='containerNames' style={{ zIndex: "2"}} >
          {
            filterList.map( (user) => (
              <p
                key={user.id}
              >
                {user.name}
              </p>
            ))
          }
        </div>
        <img src={logo} alt={'logo'} style={{ zIndex: "1"}} />
      </div>
    </>
  )
}

export default App