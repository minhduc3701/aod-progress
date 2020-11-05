import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width:100%;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#333333" : "#ffffff"};
  .toggle-wrapper {
    margin-bottom: 15px;
    display: flex;
    .ms-Toggle {
      margin-right: 10px;
      .ms-Label {
        color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#333333")};
      }
    }
  }
`;
