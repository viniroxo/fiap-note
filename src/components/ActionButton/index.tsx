import styled from "styled-components";
import { IconButton } from "@mui/material";

interface ActionButtonProps {
  iconColor: string;
}

export const ActionButton = styled(IconButton)<ActionButtonProps>`
  color: ${props => props.iconColor} !important;
`