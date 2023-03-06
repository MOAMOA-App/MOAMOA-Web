import { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import style from './search.module.css?after';

function Search({setModalOpen}, props) {
    const [dropdownVisibility, setDropdownVisibility] = useState(false);
    const [dropdownVisibility2, setDropdownVisibility2] = useState(false);
    const [menu, setMenu] = useState("전체");
    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);
    const [order, setOrder] = useState("인기순");

    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    const selectMunu = (clickedMenu) => {
        setMenu(clickedMenu);
    };

    const selectOrder = (clickedOrder) => {
        setOrder(clickedOrder);
    };

    
    return (
        <div className={style.container}>
            <button className={style.close} onClick={closeModal}>
                X
            </button>
            <div className={style.layout}>
                <p className={style.text}>검색 기준</p>
                <div className={style.dropdown}>
                    <p className={style.ddtext}>{menu}</p>
                    <button className={style.arrow} onClick={e=>setDropdownVisibility(!dropdownVisibility)}>
                        {dropdownVisibility 
                        ? <img  src='https://www.noticons.com/icon/Q3BQ/274E13/'></img>  
                        : <img  src='https://www.noticons.com/icon/NlBe/667479/'></img> }
            
                    </button>
                
                    <Dropdown visibility={dropdownVisibility}>
                        <div className={style.dropdownMenu}>
                            <ul className={style.dropdownText}>
                                <li onClick={() => selectMunu("전체")}>전체</li>
                                <li onClick={() => selectMunu("제목")}>제목</li>
                                <li onClick={() => selectMunu("내용")}>내용</li>
                                <li onClick={() => selectMunu("작성자")}>작성자</li>
                            </ul>
                        </div>
                    </Dropdown>
                    
                </div>
            </div>

            <div className={style.layout}>
                <p className={style.text}>진행 상태</p>
                <div className={style.btnLayout}>
                    <button className={`${style.btn} + ${isActive1? style.active : ""}`} onClick={()=>setActive1(!isActive1)}>모집중</button>
                    <button className={`${style.btn} + ${isActive2? style.active : ""}`} onClick={()=>setActive2(!isActive2)}>진행중</button>
                    <button className={`${style.btn} + ${isActive3? style.active : ""}`} onClick={()=>setActive3(!isActive3)}>거래완료</button>
                </div>
            </div>
            <div className={style.layout}>
                <p className={style.text}>정렬 기준</p>
                <div className={style.dropdown}>
                    <p className={style.ddtext}>{order}</p>
                    <button className={style.arrow} onClick={e=>setDropdownVisibility2(!dropdownVisibility2)}>
                        {dropdownVisibility2 
                        ? <img  src='https://www.noticons.com/icon/Q3BQ/274E13/'></img>  
                        : <img  src='https://www.noticons.com/icon/NlBe/667479/'></img> }
                    </button>

                    <Dropdown visibility={dropdownVisibility2}>
                        <div className={style.dropdownMenu}>
                            <ul className={style.dropdownText}>
                                <li onClick={() => selectOrder("인기순")}>인기순</li>
                                <li onClick={() => selectOrder("마감순")}>마감순</li>
                                <li onClick={() => selectOrder("신규")}>신규</li>
                            </ul>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
}
export default Search;