import React from 'react';
import Card, {CardActions, CardContent, CardMedia} from '@material-ui/core/Card';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function MediaCard() {
    return (
        <div className="col-md-8">
            <Card>
                <CardMedia className="height-200" image="http://via.placeholder.com/500x330"
                           title="Contemplative Reptile" />
                <CardContent>
                    <Typography type="headline" component="h2">
                        Lizard
                    </Typography>
                    <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default MediaCard;