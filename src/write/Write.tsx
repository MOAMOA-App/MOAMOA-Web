/*global kakao*/
import React, { useRef, useState } from "react";
import imgBtn from "../assets/images/imgBtn.png";
import hright from "../assets/images/hright.svg";
import hleft from "../assets/images/hleft.svg";
import checked from "../assets/images/checked.svg";
import defaultChecked from "../assets/images/defaultChecked.svg";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import DaumPostcode from "react-daum-postcode";
import * as S from "./../style/Write.styled";
import { SubmitHandler, useForm } from "react-hook-form";

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
    const [inputAddressValue, setInputAddressValue] = useState();
    const [inputZipCodeValue, setInputZipCodeValue] = useState();
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

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    // useEffect(() => {
    //   var container = document.getElementById("map");
    //   var options = {
    //     center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
    //     level: 3,
    //   };

    //   var map = new kakao.maps.Map(container, options);
    //   var markerPosition = new kakao.maps.LatLng(
    //     37.365264512305174,
    //     127.10676860117488
    //   );
    //   var marker = new kakao.maps.Marker({
    //     position: markerPosition,
    //   });
    //   marker.setMap(map);
    // }, []);

    const handleClick = () => {
        console.log("버튼이 클릭되었습니다.");
    };

    const postCodeStyle = {
        width: "400px",
        height: "400px",
        display: modalState ? "block" : "none",
    }; // 스타일 정의 code
    const onCompletePost = (data: {
        address: React.SetStateAction<undefined>;
        zonecode: React.SetStateAction<undefined>;
    }) => {
        setModalState(false);
        setInputAddressValue(data.address);
        setInputZipCodeValue(data.zonecode);
    }; // onCompletePost 함수

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
                {/* <DatePicker
            selected={startDate}
            onChange={(date: React.SetStateAction<Date>) => setStartDate(date)}
          /> */}
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
                    <S.Inp2
                        type="name"
                        id="scales"
                        required
                        // onChange={handleZipCode}
                        value={inputZipCodeValue}
                        {...register("sellingArea")}
                    />
                    <button onClick={() => setModalState(true)}>
                        주소찾기
                    </button>
                    <label htmlFor="scales"></label>
                    <S.Inp2
                        type="name"
                        id="scales"
                        placeholder="상세주소를 입력해주세요"
                        {...register("detailArea")}
                    />
                </div>

                <div
                    className="second2"
                    id="map"
                    style={{ width: "440px", height: "230px" }}
                ></div>
                {/* {optional && <p>{optional}</p>} */}
            </S.Wrap2>
            <div>
                <S.BtnSave onClick={handleClick}>등록하기</S.BtnSave>
            </div>
            {/* <DaumPostcode
        style={postCodeStyle}
        onComplete={onCompletePost}
      ></DaumPostcode> */}
        </S.Wrap>
    );
}

Write.defaultProps = {
    mark: "!",
};

export default Write;
