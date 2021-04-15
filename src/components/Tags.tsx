import React from 'react';
import { Link } from 'react-router-dom';
import { useHomeStyles } from '../pages/Home/theme';
import { Paper, Typography } from '@material-ui/core';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Divider from '@material-ui/core/Divider/Divider';
import { useSelector } from 'react-redux';
import { selectIsTagsLoaded, selectTagsItems } from '../store/ducks/tags/selectors';

interface TagsProps {
  classes: ReturnType<typeof useHomeStyles>
}

const Tweet: React.FC<TagsProps> = ({ classes }: TagsProps): React.ReactElement | null => {
  const items = useSelector(selectTagsItems);
  const isLoaded = useSelector(selectIsTagsLoaded);

  if (!isLoaded) {
    return null;
  }

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper
        className={classes.rightSideBlockHeader}
        variant="outlined"
      >
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {items.map((tag) =>
          <React.Fragment key={tag._id}>
            <ListItem className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${ tag.name }`}>
                <ListItemText
                  primary={tag.name}
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      color="textSecondary"
                    >
                      Твитов: {tag.count}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        )}
      </List>
    </Paper>
  );
};

export default Tweet;
