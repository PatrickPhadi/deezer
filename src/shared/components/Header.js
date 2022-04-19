import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { Search, SearchIconWrapper } from './Header.Style'
import { searchArtist } from '../../artist/slice/artistSlice';
import TextInput from './TextInput';

export default function Header() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const onSearch = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length > 2) {
            dispatch(searchArtist(e.target.value));
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Deezer App
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <TextInput
                            placeholder="Search Artist"
                            value={search}
                            onChange={(e) => onSearch(e)}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

