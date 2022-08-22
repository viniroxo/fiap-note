import React from 'react';
import PropTypes from 'prop-types';
import {Card} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {Add} from "@mui/icons-material";

interface CreateNewNoteProps {
    onClick: () => void;
}

function CreateNewNote({onClick}: CreateNewNoteProps) {
    const theme = useTheme();
    return (
        <Card sx={{
            width: 250,
            height: 250,
            backgroundColor: theme.palette.primary.main + '40',
            margin: '5px'
        }}
              onClick={onClick}
        >
            <Add sx={{
                fontSize: 250,
                opacity: 0.25
            }}/>
        </Card>
    );
}

CreateNewNote.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default CreateNewNote;


