import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useCallback, useEffect, useRef} from 'react'
import classnames from "classnames";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    startValue: number
    max: number
    min: number
    maxValue: number
    setStartValue: (value: number) => void
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type,
        className, startValue, max, min, maxValue, onChange, setStartValue,
        ...restProps
    }
) => {
    const range = useRef<HTMLDivElement>(null);
    const minValRef = useRef<HTMLInputElement>(null);
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(startValue);
            const maxPercent = getPercent(+minValRef.current.value);

            if (range.current) {
                range.current.style.right = `${minPercent}%`;
                range.current.style.width = `${minPercent+1}%`;
                console.log(maxPercent)
            }
        }
    }, [startValue, getPercent]);

    return (
        <div>
            <input
                type={'range'}
                min={min}
                ref={minValRef}
                max={max}
                value={startValue}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value, maxValue - 1);
                    setStartValue(value);
                    event.target.value = value.toString();
                }}
                className={classnames("thumb thumb--zindex-3", {
                    "thumb--zindex-5": startValue > max - 100
                })}
            />
            <div className="slider">
                <div className="slider__track"/>
                <div ref={range} className="slider__range"/>
                <div className="startValue1">{startValue}</div>
            </div>
        </div>
    )
}

export default SuperRange
