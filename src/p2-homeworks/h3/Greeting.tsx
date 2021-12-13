import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: string // need to fix any
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, onKeyPress, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.bar_error : s.bar
    const disableButton = name === '' ? true : !!error
    return (
        <div className={s.contain}>
            <div className={s.form}>
                <label>Name</label>
                <input value={name} onChange={setNameCallback} onKeyPress={onKeyPress}
                       placeholder={'Enter your name'}/>
                <span className={inputClass}/>
            </div>
            <div className={s.error_text}>{error}</div>
            <div className={s.buttonC}>
                <button onClick={addUser} disabled={disableButton}>Register</button>
            </div>
            <div>{totalUsers}</div>
        </div>
    )
}

export default Greeting
