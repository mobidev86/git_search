import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { loadRepos } from '../../store/actions';
import Header from '../common/Header';
import CustomCard from '../common/Card';
import { GITHUB_API } from '../../apis/github';

const useStyles = makeStyles({
  card: {
    width: '80%',
    padding: 10,
    margin: 'auto',
    marginTop: 20,
    height: 550,
    overflowY: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  snap: {
    fontSize: 25,
    color: '#ddd',
    textAlign: 'center',
    marginLeft: '30%',
  },
});
export default function HomeScreen() {
  const searchAPIDebounced = AwesomeDebouncePromise(GITHUB_API.loadRepos, 500);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [subject, setSubject] = useState('');
  const data = useSelector(({ general }) => general.data);

  const onTextChange = async (text) => {
    setSubject(text);
    if (text.length && text.length > 3) {
      const result = await searchAPIDebounced(text);
      dispatch(loadRepos(result));
    }
  };

  // eslint-disable-next-line consistent-return
  const noDataRender = () => {
    if (!data || !data.items || data.items.length <= 0) {
      return (
        <Typography variant="h2" color="secondary" className={classes.snap}>
          AWW snap! no data found.
        </Typography>
      );
    }
  };
  return (
    <div>
      <Header subject={subject} setSubject={onTextChange} />
      <div className={classes.card}>
        {noDataRender()}
        {data?.items?.map((value, index) => (
          <CustomCard
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            projectName={value.name}
            page_url={value.html_url}
            Watchers_count={value.watchers_count}
            Stargazers_count={value.stargazers_count}
          />
        ))}
      </div>
    </div>
  );
}
