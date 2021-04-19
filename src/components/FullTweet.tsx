import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweetData, setTweetData } from '../store/ducks/tweet/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { selectIsTweetDataLoading, selectTweetData } from '../store/ducks/tweet/selectors';
import { useHomeStyles } from '../pages/Home/theme';
import { Divider, IconButton } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import { setTweetsLoadingState } from '../store/ducks/tweets/actions';
import { LoadingState } from '../store/ducks/tweets/contracts/state';
import classNames from 'classnames';
import { Avatar, Paper, Typography } from '@material-ui/core';
import Tweet from './Tweet';

const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsTweetDataLoading);
  const tweetData = useSelector(selectTweetData);
  const params: { id: string } = useParams();
  const id = params.id;

  console.log(tweetData);

  useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }

    return () => {
      dispatch(setTweetData(undefined));
      dispatch(setTweetsLoadingState(LoadingState.NEVER));
    };
  }, []);

  if (isLoading) {
    return (
      <div className={classes.tweetsCentred}>
        <CircularProgress />
      </div>
    );
  }

  if (!tweetData) {
    return null;
  }

  return (
    <React.Fragment>
      <Paper className={classes.fullTweet}>
        <div className={classNames(classes.tweetsHeaderUser)}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватарка пользователя ${tweetData.user.fullname}`}
            src={tweetData.user.avatarUrl}
          />
          <Typography component={'span'} variant={'body2'}>
            <b>{tweetData.user.fullname}</b>&nbsp;
            <div>
              <span className={classes.tweetUserName}>@{tweetData.user.username}</span>
              &nbsp;
              <span className={classes.tweetUserName}>·</span>
              &nbsp;
              <span className={classes.tweetUserName}>1 ч</span>
            </div>
          </Typography>
        </div>
        <Typography className={classes.fullTweetText} gutterBottom>
          {tweetData.text}
        </Typography>
        <Typography>
          <span className={classes.tweetUserName}>2:19 PM · 18 апр. 2021 г. · </span>
          <span className={classes.tweetUserName}>Twitter for Android</span>
        </Typography>
        <div className={classNames(classes.tweetFooter, classes.fullTweetFooter)}>
          <IconButton>
            <CommentIcon style={{ fontSize: 25 }} />
          </IconButton>
          <IconButton>
            <RepostIcon style={{ fontSize: 25 }} />
          </IconButton>
          <IconButton>
            <LikeIcon style={{ fontSize: 25 }} />
          </IconButton>
          <IconButton>
            <ShareIcon style={{ fontSize: 25 }} />
          </IconButton>
        </div>
      </Paper>
      <Divider />
      <Tweet
        _id="1"
        text="Any more to move? You might need to adjust your stretching routines!"
        createdAt={new Date().toString()}
        user={{
          fullname: 'Arlene Andrews',
          username: 'ArleneAndrews_1',
          avatarUrl:
            'https://pbs.twimg.com/profile_images/1172922412029136897/gFRmgn1W_bigger.jpg'
        }}
        classes={classes}
      />

    </React.Fragment>
  );
};

export default FullTweet;
