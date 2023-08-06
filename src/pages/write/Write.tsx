/*global kakao*/ 
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import imgBtn from "../../assets/images/imgBtn.png";
import hright from "../../assets/images/hright.svg";
import hleft from "../../assets/images/hleft.svg";
import checked from "../../assets/images/checked.svg";
import defaultChecked from "../../assets/images/defaultChecked.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


type WriteProps = {
    name: string;
    mark: string;
    arr: string;
    optional?: string;
    onClick: (name: string) => void; //함수타입을 가져오고 싶을때
};

function Write({ name, mark, optional, onClick }: WriteProps) {
    const [startDate, setStartDate] = useState(new Date());
 
    const arr = [
        "전체",
        "관심",
        "생활",
        "의류",
        "식품",
        "가전",
        "취미",
        "운동",
        "굿즈",
        "동물",
        "해외",
        "기타",
    ];
    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
          level: 3
        };

        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488); 
        var marker = new kakao.maps.Marker({
          position: markerPosition
      });
      marker.setMap(map);
        }, [])
    
    const handleClick = () => {
        console.log("버튼이 클릭되었습니다.");
    };
    
    return (
        <Div>
            <ImgCont>
                <img src={hleft} alt="" />
                <div>
                    <img src={imgBtn} alt="" />
                    <p>이미지 등록하기</p>
                </div>
                <img src={hright} alt="" />
            </ImgCont>
            <Wrap>
                <label for="scales">제목</label>
                <Title
                    type="name"
                    id="scales"
                    placeholder="제목을 입력하세요"
                    required
                />
                <label>카테고리</label>
                <div>
                    {arr.map((arr) => (
                        <Btn>{arr}</Btn>
                    ))}
                </div>
                <label for="scales">상품가격</label>
                <div>
                    <Inp type="name" id="scales" required />원
                </div>
                <label for="scales">모집개수</label>
                <div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

                </div>
                <div>
                    <Inp type="name" id="scales" required />개
                    <Checklabel htmlFor="scales">
                        {" "}
                        <Check type="checkbox" id="scales" name="scales" />
                        개수 제한 없음
                    </Checklabel>
                </div>
            </Wrap>

            <label htmlFor="scales">상세정보 및 내용</label>
            <TextArea type="text" placeholder="게시글 입력하기" required />

            <Wrap2>
                <div className="second1">
                    <label for="scales">주소입력</label>
                    <div className="radio">
                        <label for="scales" htmlFor="offline">
                            {" "}
                            <Check
                                type="checkbox"
                                id="offline"
                                name="offline"
                            />
                            직거래
                        </label>
                        <label for="scales" htmlFor="online">
                            {" "}
                            <Check type="checkbox" id="online" name="online" />
                            온라인
                        </label>
                    </div>

                    <label for="scales">주소찾기</label>
                    <Inp2 type="name" id="scales" required />
                    <label for="scales"></label>
                    <Inp2
                        type="name"
                        id="scales"
                        placeholder="상세주소를 입력해주세요"
                    />
                </div>

                <div className="second2" id="map" style={{width:"440px",height:"230px"}}></div>
                {optional && <p>{optional}</p>}
            </Wrap2>

            <div>
                <BtnSave onClick={handleClick}>등록하기</BtnSave>
            </div>
        </Div>
    );
}

Write.defaultProps = {
    mark: "!",
};

export const Title = styled.input`
    border-bottom: 1px solid #d9d9d9;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    padding: 2px;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding: 140px 20% 10px;
`;

export const ImgCont = styled.div`
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    ${"img"} {
        cursor: pointer;
        /* width: 125px;
        height: 125px; */
    }

    ${"div"} {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 15px;
        font-weight: 700;
    }
`;

export const Checklabel = styled.label`
    margin-bottom: 10px;
`;

export const Wrap = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 100px auto;
    gap: 20px;
`;

export const Inp = styled.input`
    width: 216px;
    height: 35px;
    border: 1px solid #d9d9d9;
    margin-right: 5px;
    border-radius: 1550px;
`;

export const Inp2 = styled.input`
    width: 340px;
    height: 35px;
    margin: 5px 0;
    border: 1px solid #d9d9d9;
    border-radius: 1550px;
`;

export const Wrap2 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    ${".second1"}{

    width: 318px;
margin-right: 60px;

    }

    ${".second2"}{
        width: 300px;
height: 230px;
background: red;
margin-bottom: 30px;
    }
    ${"div"}{

    }
    ${"input"}
        width: 316px; 
        margin-right: 5px;
        margin: 6px 0;
    }

    ${"label"}{
        font-weight: 700;
        font-size: 16px; 
    }
    ${".radio"}{
        margin-bottom: 10px;
    }
`;

export const Check = styled.input`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #f79331;
    border-radius: 50%;
    position: relative;
    top: 7px;
    margin-right: 5px;

    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #f79331;
    }
`;
export const TextArea = styled.textarea`
    height: 150px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    margin: 10px 0 20px;
`;

export const Btn = styled.button`
    width: 55px;
    height: 29px;
    background: #d9d9d9;
    border-radius: 15px;
    font-weight: 500;
    font-size: 14px;
    margin: 0 7px 4px;
`;
export const BtnSave = styled.button`
    width: 100%;
    height: 40px;
    background: #d9d9d9;
    border-radius: 3px;

    font-weight: 700;
    font-size: 20px;
    line-height: 31px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
`;

export default Write;
