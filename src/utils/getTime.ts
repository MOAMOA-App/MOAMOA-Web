export const getTime = (dateString: string) => {
    const time = new Date(dateString);
    const today = new Date();

    const betweenTime = Math.floor(
        (today.getTime() - time.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금 전";
    if (betweenTime < 60) {
        return `${betweenTime}분 전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간 전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay}일 전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년 전`;
};

export const getDate = (dateString: string) => {
    const date = new Date(dateString);

    // 년, 월, 일을 추출하고 포매팅
    const year = date.getFullYear().toString().substr(-2); // 마지막 두 자리만 추출
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 +1 필요
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}.${month}.${day}`;
};
