import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweetData, setTweetData } from '../store/ducks/tweet/actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { selectIsTweetDataLoading, selectTweetData } from '../store/ducks/tweet/selectors';
import { useHomeStyles } from '../pages/Home/theme';
import Tweet from './Tweet';
import { setTweetsLoadingState } from '../store/ducks/tweets/actions';
import { LoadingState } from '../store/ducks/tweets/contracts/state';

const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsTweetDataLoading);
  const tweetData = useSelector(selectTweetData);
  const params: { id: string } = useParams();
  const id = params.id;

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

  if (tweetData) {
    return <Tweet {...tweetData} classes={classes} />;
  }

  return null;
};

export default FullTweet;
