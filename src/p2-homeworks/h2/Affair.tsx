import React from 'react'
import {AffairType} from "./HW2";
import classes from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={classes.contain}>
            <div className={classes.text1}>{props.affair.name}</div>
            <div className={classes.text2}>{props.affair.priority}</div>
            <div className={classes.button}>
                <span  onClick={deleteCallback}>х</span>
            </div>
        </div>
    )
}

export default Affair
