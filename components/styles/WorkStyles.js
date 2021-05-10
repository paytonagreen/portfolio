import styled from 'styled-components';

const WorkStyles = styled.div`
  @media (min-width: 700px) {
    div:nth-child(even) {
      flex-direction: row-reverse;
      .content {
        text-align: right;
      }
    }
  }
  @media (max-width: 700px) {
    border-left: none;
    div {
      flex-direction: column;
      border-bottom: 1px solid ${props => props.theme.tan};
      img {
        flex: 1;
        width: 100%;
      }
      .content {
        align-items: center;
        justify-content: center;
        text-align: center;
        h1 {
          font-size: 2rem;
          margin-bottom: 0;
        }
        p {
          margin: .5rem;
        }
      }
    }
  }
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
  border-left: 1px solid ${(props) => props.theme.blue};
  box-shadow: 3px 3px 5px grey;
  h2 {
    text-align: center;
    color: ${(props) => props.theme.vermillion};
  }
  div {
    display: flex;
    @media (min-width: 700px) {
      min-height: 50vh;
      max-height: 75vh;
    }
    img {
      object-fit: cover;
      @media (min-width: 700px) {
        flex: 2;
        max-width: 75%;
      }
    }
    .content {
      @min-width (700px) {
        flex: 1;
      }
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      background: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.tan};
      padding: 1rem;
      h1 {
        color: ${(props) => props.theme.lightblue};
      }
      ul {
        padding: 0;
      }
      li {
        list-style: none;
        padding: 0;
      }
    }
    .divider {
      height: 100%;
      width: 2px;
      background-color: ${(props) => props.theme.vermillion};
    }
  }
`;

export default WorkStyles;
