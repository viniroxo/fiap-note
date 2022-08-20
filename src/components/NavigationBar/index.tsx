import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Box, Toolbar, Typography, IconButton} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';


function NavigationBar({ title }: {title: string}) {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

NavigationBar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default NavigationBar;
