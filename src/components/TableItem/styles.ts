import styled from "styled-components";

export const tableLine = styled.tr``;
export const tableColumn = styled.td`
  padding: 10px 0px;
`;
export const category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
`;
export const value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
