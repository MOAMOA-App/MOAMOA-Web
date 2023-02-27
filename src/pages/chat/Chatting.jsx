import React from 'react'
import style from './chatting.module.css'
import profile from '../../assets/images/profile.png'
import search from '../../assets/images/search.png'
import chatbtn from '../../assets/images/chatbtn.svg'

export default function Chatting() {
    return (
        <div  className={style.wrap_chat}>
            <div className={style.list_chat}>
                <div className={style.listName_chat}>메세지 목록</div> 
                <div className={style.search_chat}>
                    <img className={style.btn_search} src={search} alt="" />
                    <input className={style.input_chat} type="text" placeholder='닉네임을 입력하세요'/>
                </div> 
                <div className={style.profilebox_chat}>
                    <img className={style.img_chat} src={profile} alt="" />
                    <div className={style.cont_chat}>
                        <div className={style.namebox_chat}>
                            <span className={style.name_chat}>닉네임</span>
                        <span className={style.date_chat}>2일 전</span>
                        </div>
                            <p className={style.content_chat}>hihihihi</p>
                    </div>

                </div>
                <div className={style.profilebox_chat}>
                    <img className={style.img_chat} src={profile} alt="" />
                    <div className={style.cont_chat}>
                        <div className={style.namebox_chat}>
                            <span className={style.name_chat}>닉네임</span>
                        <span className={style.date_chat}>2일 전</span>
                        </div>
                            <p className={style.content_chat}>hihihihi</p>
                    </div>

                </div>
                <div className={style.profilebox_chat}>
                    <img className={style.img_chat} src={profile} alt="" />
                    <div className={style.cont_chat}>
                        <div className={style.namebox_chat}>
                            <span className={style.name_chat}>닉네임</span>
                        <span className={style.date_chat}>2일 전</span>
                        </div>
                            <p className={style.content_chat}>hihihihi</p>
                    </div>

                </div>
            </div>
            <div className={style.main_chat}>
            
                <div className={style.cont_nick}>
                    <img  className={style.img_chat} src={profile} alt="" />
                    <span>닉네임</span>
                </div>
                <div className={style.cont_chatting}>
                    <div></div>
                </div>
                <div className={style.cont_input}>
                    <img src={profile} alt="" />
                    <input  className={style.input_chatting} type="text" />
                    <img src={chatbtn} alt="" className={style.btn_chatting}/>
                </div>
            </div>
        </div>
    )
}
