import React, { useEffect } from 'react';
import { Card, Fans } from '../shared/components';
import Page from '../shared/components/HOC/Page';
import Grid from '@mui/material/Grid';
import { clearDetails } from './slice/artistSlice';
import { useSelector, useDispatch } from 'react-redux';

const ArtistList = (props) => {
    const { navigate } = props;
    const dispatch = useDispatch();
    const { artists } = useSelector(state => state);

    useEffect(() => {
        dispatch(clearDetails());
    }, [dispatch])

    const getDetails = (artist) => {
        if (!artist) return;
        return navigate(`/artist/${artist.id}/details`);
    };

    return (
        <Grid container spacing={2}>
            {artists.map((artist, key) =>
                <Grid key={key} item xs={12} sm={3}>
                    <Card
                        title={artist.name}
                        img={artist.picture_big}
                        summary={<Fans amount={(artist.nb_fan)} album={artist.nb_album} />}
                        onClick={() => getDetails(artist)} />
                </Grid>
            )}
        </Grid>
    )
}

export default Page(ArtistList);
