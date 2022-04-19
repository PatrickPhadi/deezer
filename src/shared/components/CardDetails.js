import React from 'react';
import PropTypes from 'prop-types';
import { fansNumToString } from '../utils';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MusicVideoSharpIcon from '@mui/icons-material/MusicVideoSharp';
import EventIcon from '@mui/icons-material/Event';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function CardContent({ amount, release, album }) {
    const getAlbum = (no_album) => {
        if (no_album > 1) {
            return `${no_album} albums`;
        } else {
            return `${no_album} album`;
        }
    };

    return (
        <Grid container direction="row">
            {album && <Grid container item spacing={0.5} sm={12} md={6}>
                <Grid item><MusicVideoSharpIcon fontSize="small" /></Grid>
                <Grid item><Typography variant="subtitle2">{getAlbum(album)}</Typography></Grid>
            </Grid>}
            {release && <Grid container item spacing={0.5} sm={12} md="auto">
                <Grid item><EventIcon fontSize="small" /></Grid>
                <Grid item><Typography variant="subtitle2">{release} </Typography></Grid>
            </Grid>}
            {amount && <Grid container item spacing={0.5} md="auto" sm={12}>
                <Grid item><FavoriteBorderOutlinedIcon fontSize="small" /></Grid>
                <Grid item><Typography variant="subtitle2">{fansNumToString(amount)} fans</Typography></Grid>
            </Grid>}
        </Grid>
    )
}

CardContent.propTypes = {
    amount: PropTypes.number,
    release: PropTypes.number,
}

export default CardContent

