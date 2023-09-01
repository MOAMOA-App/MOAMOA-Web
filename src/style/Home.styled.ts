import styled, { keyframes } from "styled-components";

export const Wrap = styled.div`
    display: flex;
    /* margin-top: 40px; */
    flex-wrap: wrap;
`;

export const SearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 661px;
    margin: 0 auto;
    height: 40px;
    border: 1px solid #ff952c;
    border-radius: 30px;
    margin-bottom: 15px;
    padding: 15px;
    background-color: white;
    z-index: 999;

    ${"input"} {
        margin: 10px;
        padding: 5px;
        width: 100%;
        background-color: white;

        opacity: 1;
    }
`;

const scale = keyframes` 
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
    
            }
    100% {
      -webkit-transform: translateY(-80px);
              transform: translateY(-80px);
    width:30%;
    margin-bottom: -50px;
    }
  `;

export const HomeSearchBar = styled(SearchBar)`
    position: fixed;
    margin-left: 250px;

    animation: ${scale} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    margin-bottom: 50px;
`;

export const ContCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 26px;
    @media (max-width: 768px) {
        overflow-x: scroll;
        padding: 26px 10%;
        margin: 0 -40px 40px;
        padding: 10px 40px;
    }
`;
