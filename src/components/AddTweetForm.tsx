import React from 'react';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import Alert from '@material-ui/lab/Alert';
import { useHomeStyles } from '../pages/Home/theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddTweet } from '../store/ducks/tweets/actions';
import { AddFormState } from '../store/ducks/tweets/contracts/state';
import { selectAddFormState } from '../store/ducks/tweets/selectors';

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
  maxRows
}: AddTweetFormProps): React.ReactElement => {
  const dispatch = useDispatch();
  const addFormState = useSelector(selectAddFormState);
  const [text, setText] = React.useState('');
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const textCount = MAX_LENGTH - text.length;

  const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    if (text) {
      dispatch(fetchAddTweet(text));
      setText('');
    }
  };

  return (
    <div>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя UserAvatar`}
          src="https://pbs.twimg.com/profile_images/1373925542504902657/nsFPvAlp_bigger.jpg"
        />
        <TextareaAutosize
          onChange={handleChangeTextarea}
          className={classes.addFormTextarea}
          placeholder="Что происходит?"
          value={text}
          rowsMax={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div
          className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={text.length >= MAX_LENGTH ? { color: 'red' } : undefined}
                />
              </div>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            disabled={addFormState === AddFormState.LOADING || !text || text.length >= MAX_LENGTH}
            color="primary"
            variant="contained">
            {addFormState === AddFormState.LOADING ? <CircularProgress size={16} color="inherit" /> : 'Твитнуть'}
          </Button>
        </div>
      </div>
      {addFormState === AddFormState.ERROR && (
        <Alert severity="error">Ошибка при добавлении твита 😳</Alert>
      )}
    </div>
  );
};
