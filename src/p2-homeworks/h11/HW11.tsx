import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import style from './hw11.module.css'

type HW11PropsType = {
    min: number
    max: number
}


function HW11(props: HW11PropsType) {
    const [startValue, setStartValue] = useState(props.min)
    const [maxValue, setMaxValue] = useState(props.max)

    return (
        <div className={style.contain}>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={style.SuperRange}>
                <SuperRange
                    setStartValue={setStartValue}
                    startValue={startValue}
                    max={props.max}
                    min={props.min}
                    maxValue={maxValue}
                />
            </div>

            <div className={style.SuperDoubleRange}>
                <SuperDoubleRange
                    min={props.min}
                    max={props.max}
                    maxValue={maxValue}
                    startValue={startValue}
                    setStartValue={setStartValue}
                    setMaxValue={setMaxValue}
                    onChange={({ min, max }: { min: number; max: number }) =>
                        console.log(`min = ${min}, max = ${max}`)
                    }
                    // сделать так чтоб value1 и value2 изменялось
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
