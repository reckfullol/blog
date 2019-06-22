import * as React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core';
import {StyleRules} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

type PostCardProps = BlogModel.Post;

const useStyles = makeStyles(
  (theme: Theme): StyleRules =>
    createStyles({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)'
      }
    })
);

const POST_URL_PREFIX = '/posts';

const PostCard: React.ComponentType<PostCardProps> = (props: PostCardProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
      className={classes.root}
    >
      <Card className={classes.card}>
        <CardActionArea
          href=""
        >
          {
            props.metadata.cover &&
            <CardMedia
              component="img"
              alt={props.metadata.title}
              height="140"
              image={props.metadata.cover}
              title={props.metadata.title}
            />
          }
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.metadata.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href={POST_URL_PREFIX + props.permalink} size="small">
            More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PostCard;