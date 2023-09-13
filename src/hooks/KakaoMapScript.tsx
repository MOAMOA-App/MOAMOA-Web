import React, { useEffect } from "react";

declare global {
    interface Window {
        kakao: any;
    }
}

interface Props {
    inputAddressValue: string;
}

const MapContainer = ({ inputAddressValue }: Props) => {
    useEffect(() => {
        let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        let options = {
            //지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3, //지도의 레벨(확대, 축소 정도)
        };

        let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 지도를 생성합니다

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
            inputAddressValue,
            function (result: { x: string; y: string }[], status: any) {
                // 정상적으로 검색이 완료됐으면
                if (status === window.kakao.maps.services.Status.OK) {
                    var coords = new window.kakao.maps.LatLng(
                        result[0].y,
                        result[0].x
                    );

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new window.kakao.maps.Marker({
                        map: map,
                        position: coords,
                    });

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);
                }
            }
        );
    }, [inputAddressValue]);

    return <div id="map" style={{ width: "50vw", height: "50vh" }} />;
};

export default MapContainer;
