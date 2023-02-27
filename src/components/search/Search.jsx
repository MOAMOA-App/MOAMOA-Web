import { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import style from './search.module.css';

function Search({ setModalOpen}, props) {
    const [dropdownVisibility, setDropdownVisibility] = useState(false);

    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    
    return (
        <div className={style.container}>
            <button className={style.close} onClick={closeModal}>
                X
            </button>
            <div className={style.layout}>
                <p className={style.text}>검색 기준</p>
                <div className={style.dropdown}>
                    <p className={style.ddtext}>제목</p>
                    <button className={style.arrow} onClick={e=>setDropdownVisibility(!dropdownVisibility)}>
                        {dropdownVisibility 
                        ? <img  src='https://www.noticons.com/icon/Q3BQ/274E13/'></img>  
                        : <img  src='https://www.noticons.com/icon/NlBe/667479/'></img> }
                        {dropdownVisibility && props.children}
                    </button>
                
                    <Dropdown visibility={dropdownVisibility}>
                        <div className={style.dropdownMenu}>
                            <ul>
                                <li>카테고리</li>
                                <li>지역</li>
                                <li>item1</li>
                                <li>item1</li>
                            </ul>
                        </div>
                    </Dropdown>
                    
                </div>
            </div>

            <div className={style.layout}>
                <p className={style.text}>진행 상태</p>
                <div className={style.btnLayout}>
                    <button className={style.btn}>모집중</button>
                    <button className={style.btn}>진행중</button>
                    <button className={style.btn}>거래완료</button>
                </div>
            </div>
            <div className={style.layout}>
                <p className={style.text}>정렬 기준</p>
                <div className={style.dropdown}>
                    <p className={style.ddtext}>인기순</p>
                    <button className={style.arrow}>
                        <img  src='https://www.noticons.com/icon/NlBe/667479/'></img>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Search;