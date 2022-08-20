import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardContent, Typography, IconButton} from '@mui/material';
import {Delete, Edit} from '@mui/icons-material';

function CardNote({description}: { description: string }) {
    return (
        <Card sx={{maxWidth: 200}}>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton color="primary">
                    <Delete />
                </IconButton>
                <IconButton color="primary">
                    <Edit />
                </IconButton>
            </CardActions>
        </Card>
    );
}

CardNote.propTypes = {
    description: PropTypes.string.isRequired,
};

export default CardNote;


