import styled from 'styled-components';

const HomeStyles = styled.div`
  min-height: 80vh;
  padding: 1rem;
  position: absolute;
  h2 {
    padding: 0 1rem;
    margin: 1rem;
    font-size: 2.5rem;
    color: ${(props) => props.theme.blue};
  }
  .container {
    max-width: 1100px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      text-align: left;
    }
    p {
      font-size: 1.75rem;
      padding: 0 1rem;
      margin: 1rem;
      span {
        color: ${(props) => props.theme.blue};
      }
    }
  }
  .img-container {
    position: relative;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    img {
      border-radius: 40%;
      height: 60vh;
      @media (max-width: 700px) {
        margin-bottom: 80px;
      }
    }
  }
`;

export default HomeStyles;
