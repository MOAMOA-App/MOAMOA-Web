import Card from "../components/Card";
import goods from "../data/goods.json";
import search from "../assets/images/search_orange.svg";
import Category from "../components/Category";
import HomeTitle from "../components/HomeTitle";
import * as S from "../style/Home.styled";

export default function Home() {
    console.log(goods.goods);
    const titleArr = [
        ["마감임박", "마감이 가까워요"],
        ["인기순", "사용자들이 선호하는 상품"],
        ["최신순", "What’s new?"],
    ];

    return (
        <S.Wrap>
            {/* <S.HomeSearchBar>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="검색어를 입력해주세요."
                />
                <img src={search} alt="" />
            </S.HomeSearchBar> */}
            <Category />

            {titleArr.map((title) => (
                <>
                    <HomeTitle title={title}/>
                    <S.ContCard>
                        {goods.goods.map((good) => (
                            <Card good={good}></Card>
                        ))}
                    </S.ContCard>
                </>
            ))}
        </S.Wrap>
    );
}
