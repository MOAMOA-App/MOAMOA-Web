import React from 'react'
import { MyPageAlarmPart } from './MyPageAlarmPart'
import style from './myPageMain.module.css'
export const MyPageAlarm = (props) => {
	return (
		<div className={style.InnerDiv}>
			<p className={style.Subject }>알림</p>
			<div className={style.InnerDiv}
				style={{padding : "0 15px", border : "none"}}
			>
				<MyPageAlarmPart/>
				<MyPageAlarmPart/>
				<MyPageAlarmPart/>
				<MyPageAlarmPart/>
			</div>
		</div>
	)
}
