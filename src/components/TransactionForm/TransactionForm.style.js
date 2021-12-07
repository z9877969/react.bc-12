import styled from "styled-components";

export const Form = styled.form`
  //   background-color: green;
  .label {
    color: grey;
  }

  .title {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .input:placeholder {
    color: grey;
    text-align: right;
    font-size: 24px;
  }

  .input[type="date"] {
    color: blue;
  }
`;
