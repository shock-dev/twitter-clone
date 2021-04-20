import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Avatar, IconButton, Paper, Typography } from '@material-ui/core';
import { useHomeStyles } from '../pages/theme';
import { formatDate } from '../utils/formatDate';

interface TweetProps {
  _id: string;
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
  createdAt: string
  classes: ReturnType<typeof useHomeStyles>;
}

const Tweet: React.FC<TweetProps> = ({
  _id,
  text,
  user,
  createdAt,
  classes
}: TweetProps): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    history.push(`/home/tweet/${_id}`);
  };


  const handleClick = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <a onClick={handleClickTweet} className={classes.tweetWrapper} href={`/home/tweet/${_id}`}>
      <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя ${user.fullname}`}
          src={user.avatarUrl}
        />
        <div className={classes.tweetContent}>
          <div className={classes.tweetHeader}>
            <div>
              <b>{user.fullname}</b>&nbsp;
              <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
              <span className={classes.tweetUserName}>·</span>&nbsp;
              <span className={classes.tweetUserName}>{formatDate(new Date(createdAt))}</span>
            </div>
            <div>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}

              >
                <MenuItem onClick={handleClose}>
                  Редактировать
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  Удалить твит
                </MenuItem>
              </Menu>
            </div>
          </div>
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton>
                <CommentIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepostIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <LikeIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ShareIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </Paper>
    </a>
  );
};

export default Tweet;
