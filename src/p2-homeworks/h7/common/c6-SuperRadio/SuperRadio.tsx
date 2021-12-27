import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import style from './../../hw7.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key


        <label key={name + '-' + i}>
            <input
                type={'radio'}
                // name, checked, value, onChang
                name={o}
                value={options[i]}
                onChange={onChangeCallback}
                checked={value === options[i]}
            />
            {o}
        </label>

    )) : []

    return (

        <>
            <fieldset>
                <legend>Please choose a letter</legend>
            {mappedOptions}
            </fieldset>
            {onChangeOption && <div className={style.letter}>{value}</div>}
        </>
    )
}

export default SuperRadio
