import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {// need to fix any
        setName(e.currentTarget.value)
        let regexOfNumber = /\d/g
        let regexSpace = /^\s|\s$/
        regexSpace.test(e.currentTarget.value) ? setError('There should be no spaces at the beginning and end of the text') :
            e.currentTarget.value.length <= 2 ? setError('Name must be longer than 2 letters') :
                regexOfNumber.test(e.currentTarget.value) ? setError('There must be no number in the name') :
                    setError('')// need to fix
    }
    const addUser = () => {
        alert(`Hello  ${name}!`) // need to fix
        addUserCallback(name)
        setName('')
        console.log(users)
    }

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name !== '' && !error) {
            alert(`Hello  ${name}!`)
            addUserCallback(name)
            setName('')
        }
    }

    const totalUsers = `Registered users: ${users.length}` // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPress={onKeyPress}
        />
    )
}

export default GreetingContainer
