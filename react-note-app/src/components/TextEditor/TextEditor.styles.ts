import styled from "styled-components";

export const Container = styled.div<{ notecolor: string }>`
  .ql-editor {
    height: 200px;
    background-color: ${({ notecolor }) => notecolor};
  }
`;
