import React, { useRef, useState, useEffect } from "react";
import imgBtn from "../../assets/images/imgBtn.png";
import hright from "../../assets/images/hright.svg";
import hleft from "../../assets/images/hleft.svg";
import searchGreen from "../../assets/images/search_green.svg";
import calendar from "../../assets/images/calendar.svg";

import checked from "../assets/images/checked.svg";
import defaultChecked from "../assets/images/defaultChecked.svg";
import ModalPortal from "../../components/modal/ModalPortal";
import MapModal from "../../components/modal/MapModal";
import useCustomModal from "../../hooks/useCustomModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import * as S from "../../styles/Write.styled";
import { SubmitHandler, useForm } from "react-hook-form";
import KakaoMapScript from "../../hooks/KakaoMapScript";
import MapContainer from "../../hooks/KakaoMapScript";

interface FormValue {
    title: string;
    description: string;
    sellPrice: number;
    userId: string;
    categoryId: string;
    sellingArea: string;
    detailArea: string;
    status: string;
    finishedAt: string; //수정
    maxCount: number;
}

type WriteProps = {
    name: string;
    mark: string;
    arr: string;
    optional?: string;
    onClick: (name: string) => void; //함수타입을 가져오고 싶을때
};

function Write() {
    const [startDate, setStartDate] = useState(new Date());
    const [modalState, setModalState] = useState(false);
    const [inputAddressValue, setInputAddressValue] = useState<string>("");
    const [inputZipCodeValue, setInputZipCodeValue] = useState<string>("");
    const [imgFile, setImgFile] = useState<any>(null);
    const arr = [
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
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const { modalOpen, setModalOpen } = useCustomModal();

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };
    // 모달창 노출
    const showModal = (e: any) => {
        setModalOpen(true);
    };
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    useEffect(() => {
        // KakaoMapScript()
        // var container = document.getElementById("map");
        // var options = {
        //     center: new kakao.maps.LatLng(
        //         37.365264512305174,
        //         127.10676860117488
        //     ),
        //     level: 3,
        // };
        // var map = new kakao.maps.Map(container, options);
        // var markerPosition = new kakao.maps.LatLng(
        //     37.365264512305174,
        //     127.10676860117488
        // );
        // var marker = new kakao.maps.Marker({
        //     position: markerPosition,
        // });
        // marker.setMap(map);
    }, []);

    useEffect(() => {
        setModalOpen(false);
    }, [inputAddressValue, setModalOpen]);

    const handleClick = () => {
        console.log("버튼이 클릭되었습니다.");
    };

    const { register, handleSubmit, watch, reset, setValue } =
        useForm<FormValue>();

    const upload = useRef<HTMLInputElement>(null);

    // 이미지 업로드 input의 onChange

    const saveImgFile = () => {
        const file = upload.current?.files?.[0]; // optional chaining을 사용

        if (!file) {
            // 파일이 없으면 함수를 종료
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
            console.log(reader.result);
        };
    };

    const onSubmit: SubmitHandler<FormValue> = (data) => {
        console.log("Submitting", data);
    };

    return (
        <S.Wrap onSubmit={handleSubmit(onSubmit)}>
            <S.ImgCont>
                <img src={hleft} alt="" />
                {imgFile ? (
                    // <div></div>
                    <img src={imgFile} alt="이미지" />
                ) : (
                    <div>
                        <label htmlFor="file-uploader">
                            <img src={imgBtn} alt="" />
                            <p>이미지 등록하기</p>
                        </label>
                        <input
                            id="file-uploader"
                            type="file"
                            accept="image/*"
                            multiple
                            ref={upload}
                            onChange={saveImgFile}
                            style={{ display: "none" }}
                        />
                    </div>
                )}
                <img src={hright} alt="" />
            </S.ImgCont>
            <S.ContentCont>
                <label htmlFor="scales">제목</label>
                <S.Title
                    type="name"
                    id="scales"
                    placeholder="제목을 입력하세요"
                    required
                    {...register("title")}
                />
                <label>카테고리</label>
                <S.CategoryCont>
                    {arr.map((category) => (
                        <S.CategoryBtn
                            selectedCategory={selectedCategory}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </S.CategoryBtn>
                    ))}
                </S.CategoryCont>
                <label htmlFor="">모집기간</label>
                <S.DateCont>
                    <S.InpDateCont>
                        <DatePicker
                            className="datePicker"
                            dateFormat="yyyy.MM.dd" // 날짜 형태
                            shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                            minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
                            maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                        />
                        <img src={calendar} alt="" />
                    </S.InpDateCont>
                    <span>~</span>
                    <DatePicker
                        className="datePicker"
                        calendarClassName="calenderWrapper"
                        dateFormat="yyyy.MM.dd" // 날짜 형태
                        shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                        minDate={new Date("2000-01-01")} // minDate 이전 날짜 선택 불가
                        maxDate={new Date()} // maxDate 이후 날짜 선택 불가
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                    />
                    <img src={calendar} alt="" />
                </S.DateCont>
                <label htmlFor="scales">상품가격</label>
                <div>
                    <S.Inp
                        type="name"
                        id="scales"
                        required
                        {...register("sellPrice")}
                    />
                    원
                </div>
                <label htmlFor="scales">모집개수</label>

                <S.CountBox>
                    <S.Inp
                        type="name"
                        id="scales"
                        required
                        {...register("maxCount")}
                    />
                    개
                    <S.Checklabel htmlFor="scales">
                        <S.Check type="checkbox" id="scales" name="scales" />
                        개수 제한 없음
                    </S.Checklabel>
                </S.CountBox>
            </S.ContentCont>
            <label htmlFor="scales">상세정보 및 내용</label>
            <S.TextArea
                placeholder="게시글 입력하기"
                required
                {...register("description")}
            />
            <S.Wrap2>
                <div className="second1">
                    <label htmlFor="scales">주소입력</label>
                    <div className="radio">
                        <label htmlFor="offline">
                            <S.Check
                                type="checkbox"
                                id="offline"
                                name="offline"
                            />
                            직거래
                        </label>
                        <label htmlFor="online">
                            <S.Check
                                type="checkbox"
                                id="online"
                                name="online"
                            />
                            온라인
                        </label>
                    </div>

                    <label htmlFor="scales">주소찾기</label>
                    <S.InpCont>
                        <S.Inp2
                            type="name"
                            id="scales"
                            required
                            value={inputAddressValue}
                            {...register("sellingArea")}
                        />
                        <button onClick={showModal} type="button">
                            주소찾기
                            <img src={searchGreen} alt="" />
                        </button>
                    </S.InpCont>

                    <label htmlFor="scales"></label>
                    <S.InpCont>
                        <S.Inp2
                            type="name"
                            id="scales"
                            placeholder="상세주소를 입력해주세요"
                            {...register("detailArea")}
                        />
                    </S.InpCont>
                </div>
                <MapContainer inputAddressValue={inputAddressValue} />
                {/* <div
                    className="second2"
                    id="myMap"
                    style={{ width: "440px", height: "230px" }}
                ></div> */}
                {/* {optional && <p>{optional}</p>} */}
            </S.Wrap2>
            <div>
                <S.BtnSave onClick={handleClick}>등록하기</S.BtnSave>
            </div>
            {modalOpen && (
                <ModalPortal>
                    <MapModal
                        type="product"
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen}
                        handleModal={showModal}
                        setInputAddressValue={setInputAddressValue}
                        setInputZipCodeValue={setInputZipCodeValue}
                        // handleModal={handleProductDetail}
                    />
                </ModalPortal>
            )}
        </S.Wrap>
    );
}

Write.defaultProps = {
    mark: "!",
};

export default Write;
