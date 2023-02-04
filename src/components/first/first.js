import React from 'react'
import "./first.css"
import { Link } from 'react-router-dom'

function first() {
    return (
        <div className='first'>
            <h1 className='first_pageTitle'>1日1名言</h1>
            <p className='first__page__text1'>
                こちらのサイトでは1日1つの名言をご覧いただくことができます。
            </p>
            <p className='first__page__text2'>
                以下のボタンをクリックし今日の一言をぜひご覧ください。
            </p>
            <p className='first__page__text3'>
                今日も名言を見て乗り切りましょう
            </p>
            <div className='first__page__btn'>
                <a href="#">今日の名言</a>
            </div>
        </div>
    )
}

export default first
