import React from 'react'
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

function CardComponet(props) {
    const { title, img, imgHeight, summary, onClick, sxImage, sxCard, sxCardContent, titleVariant = "subtitle1", summaryVariant = "subtitle2" } = props;
    return (
        <Card variant="outlined" sx={sxCard}>
            <CardActionArea onClick={onClick}>
                <CardMedia
                    component="img"
                    sx={{ height: { sm: "fit-content" }, ...sxImage }}
                    height={imgHeight}
                    image={img}
                    alt={title}
                />
                <CardContent sx={sxCardContent}>
                    <Typography gutterBottom variant={titleVariant} component="div">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant={summaryVariant} component="div">
                        {summary}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

CardComponet.propTypes = {
    title: PropTypes.string,
    imgHeight: PropTypes.number,
    img: PropTypes.string,
    summary: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node
    ]),
    onClick: PropTypes.func,
    sxImage: PropTypes.object,
    sxCard: PropTypes.object,
    sxCardContent: PropTypes.object,
    titleVariant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline", "inherit"]),
    summaryVariant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline", "inherit"]),
}

export default CardComponet;


