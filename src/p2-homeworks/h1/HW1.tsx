import React from 'react'
import {Message} from "./Message";

const messageData = {
    avatar: 'https://lifehacki.ru/wp-content/uploads/2020/09/Avatarki-dlja-Vatsapa-dlja-muzhchin-2.jpg',
    name: 'Artem',
    message: "Hello! I completed my first homework!",
    time: '22:00'
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
