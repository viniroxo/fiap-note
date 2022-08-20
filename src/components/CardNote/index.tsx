import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardContent, Typography, IconButton} from '@mui/material';
import {Delete, Edit} from '@mui/icons-material';
import {useTheme} from "@mui/material/styles";
import styled, {keyframes} from "styled-components";

interface ActionButtonProps {
    iconColor: string;
}

const ActionButton = styled(IconButton)<ActionButtonProps>`
  color: ${props => props.iconColor} !important;
`

const fadeIn = keyframes`
  from {
    transform: scale(0.2) rotate(180deg);
    opacity: 0;
  }
  to {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
`;

const AnimatedCard = styled(Card)`
  animation: ${fadeIn} ease-in 1s;
`;

function CardNote({description}: { description: string }) {
    const theme = useTheme();
    return (
        <AnimatedCard sx={{
            width: 250,
            height: 250,
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "5px",
        }}>
            <CardContent>
                <Typography variant="body2"
                            color={theme.palette.primary.contrastText}
                            sx={{fontWeight: "bold", fontSize: "1.2rem"}}
                >
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: "flex",
                justifyContent: "flex-end",
            }}>
                <ActionButton iconColor={theme.palette.primary.contrastText}>
                    <Delete/>
                </ActionButton>
                <ActionButton iconColor={theme.palette.primary.contrastText}>
                    <Edit/>
                </ActionButton>
            </CardActions>
        </AnimatedCard>
    );
}

CardNote.propTypes = {
    description: PropTypes.string.isRequired,
};

export default CardNote;


