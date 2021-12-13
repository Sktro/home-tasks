import React from 'react'
import classes from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(prop: MessageType) {
    return (
        <div className={classes.messages}>
            <div className={classes.avatar}><img src={prop.avatar} alt="avatar"/>
            </div>
            <div className={classes.dialog}>
               <div className={classes.name}>{prop.name}</div>
                <div className={classes.text}>{prop.message}</div>
               <div className={classes.time}>{prop.time}</div>
            </div>
        </div>
    )
}
