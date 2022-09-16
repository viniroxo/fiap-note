import styled from "styled-components";

interface AppContainerProps {
  background: string;
}

export const AppContainer = styled.div<AppContainerProps>`
  background-color: ${props => props.background};
  height: 100%;
`;