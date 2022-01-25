import {
    ChangeEvent,
    FC,
    useCallback,
    useEffect,
    useRef
} from "react";
import classnames from "classnames";
import "./SuperDoubleRange.css";

interface SuperDoubleRangeProps {
    min: number;
    max: number;
    onChange: Function;
    startValue: number
    setStartValue: (value: number) => void
    maxValue: number
    setMaxValue: (value: number) => void
}

const SuperDoubleRange: FC<SuperDoubleRangeProps> = ({
                                                         min,
                                                         max,
                                                         onChange,
                                                         startValue,
                                                         setStartValue,
                                                         maxValue,
                                                         setMaxValue,
                                                     }) => {
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);

    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(startValue);
            const maxPercent = getPercent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
                console.log(maxPercent)
            }
        }
    }, [startValue, getPercent]);

    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxValue);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxValue, getPercent]);

    useEffect(() => {
        onChange({min: startValue, max: maxValue});
    }, [startValue, maxValue, onChange]);

    return (
        <>
            <input
                type="range"
                min={min}
                max={max}
                value={startValue}
                ref={minValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value, maxValue - 1);
                    setStartValue(value);
                    event.target.value = value.toString();
                }}
                className={classnames("thumb thumb--zindex-3", {
                    "thumb--zindex-5": startValue > max - 100
                })}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxValue}
                ref={maxValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.max(+event.target.value, startValue + 1);
                    setMaxValue(value);
                    event.target.value = value.toString();
                }}
                className="thumb thumb--zindex-4"
            />

            <div className="slider">
                <div className="slider__track"/>
                <div ref={range} className="slider__range"/>
                <div className="maxValue">{maxValue}</div>
                <div className="minValue">{startValue}</div>
            </div>
        </>
    );
};

export default SuperDoubleRange;


