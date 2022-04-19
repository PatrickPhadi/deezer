import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Page from '../shared/components/HOC/Page';
import { Card as CustomCard, Fans } from '../shared/components';
import { getFullArtistDetails } from './slice/artistSlice';
import { durationToRatio, getYear } from '../shared/utils';

function Details({ artistId, navigate }) {
    const { artist, tracks, albums, searching } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFullArtistDetails(artistId));
        if (searching) {
            navigate('/');
        }
    }, [dispatch, artistId, searching, navigate]);

    return (
        <Grid container spacing={3}>
            <Grid item container spacing={0}>
                <Grid item xs={12} md={5} sm={5}>
                    <CustomCard
                        sxImage={styleSx.cardImage}
                        titleVariant="h6"
                        sxCard={styleSx.card}
                        title={artist.name}
                        summaryVariant="subtitle1"
                        sxCardContent={styleSx.container}
                        summary={<Fans amount={artist.nb_fan} />}
                        img={artist?.picture_xl}
                    />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Paper elevation={0} sx={{ padding: { sm: 3 }, paddingTop: { xs: 2 } }}>
                        <Grid item container>
                            <Typography gutterBottom variant="h6" component="div">Top Tracks</Typography>
                        </Grid>
                        <Grid container spacing={4} sx={{ padding: '15px 0' }}>
                            {tracks.map((track, key) =>
                                <Grid item container spacing={0} key={key}>
                                    <Grid item xs={10}>
                                        <Typography variant="subtitle2" component="div">{key + 1}. {track.title}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="subtitle2" component="div">{durationToRatio(track.duration)}</Typography>
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography gutterBottom variant="h5" sx={{ marginTop: 2 }} component="div">Albums</Typography>
            </Grid>
            {albums.map((album, key) =>
                <Grid item xs={12} sm={4} md={3} key={key}>
                    <CustomCard
                        title={album?.title}
                        titleVariant="subtitle2"
                        img={album?.cover_big}
                        summaryVariant="caption"
                        sxCardContent={styleSx.cardContent}
                        summary={<Fans release={getYear(album.release_date)} />}
                    />
                </Grid>
            )}
        </Grid>
    )
}

const styleSx = {
    card: {
        borderWidth: { xs: 0 }
    },
    cardImage: {
        height: {
            sm: 370
        }
    },
    cardContent: {
        height: { sm: 60 }
    },
    container: {
        position: { sm: "absolute" },
        backgroundColor: { sm: '#000' },
        opacity: { sm: 0.8 },
        color: { sm: '#fff' },
        top: { sm: 200 },
        height: { sm: 70 },
        padding: { xs: '20px 1px', sm: 2 },
        width: { md: 350, sm: 250 }
    },
};

Details.propTypes = {
    artistId: PropTypes.string.isRequired
}

export default Page(Details);

