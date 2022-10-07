import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Box, InputBase, Toolbar, Typography} from '@mui/material';
import {alpha, styled} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

interface NavigationBarProps {
    title: string;
    text?: string;
    onChange?: (text: string) => void;
    hasSearch?: boolean;
}

function NavigationBar({title, text, onChange, hasSearch}: NavigationBarProps) {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {title}
                    </Typography>
                    {hasSearch && (
                      <Search>
                          <SearchIconWrapper>
                              <SearchIcon/>
                          </SearchIconWrapper>
                          <StyledInputBase
                            placeholder="Buscar…"
                            inputProps={{'aria-label': 'search'}}
                            onChange={(e) => onChange ? onChange(e.target.value) : null}
                            value={text}
                          />
                      </Search>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavigationBar;
