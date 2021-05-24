import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item >
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title} <Typography variant="subtitle2">(in {post.tag})</Typography>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                published on {post.date} by {post.author} 
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <div>
                <Button variant="outlined" color="primary">Continue Reading</Button>
                <Button variant="outlined" color="primary"><BookmarksIcon/> Bookmark</Button>
              </div>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
      <br></br>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};