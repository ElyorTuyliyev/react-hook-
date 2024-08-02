import styled from "styled-components";

const AsideStyle = styled.div`
  .aside {
    background-color: #000;
    max-width: 300px;
    width: 100%;
  }

  .aside__link-wrapper {
    height: 93.4vh;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0 auto;
    flex-direction: column;
    padding: 20px 0;
  }

  .aside__links {
    list-style: none;
    color: #fff;
  }
`;
export default AsideStyle;
