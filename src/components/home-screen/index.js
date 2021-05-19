import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRepos } from '../../store/actions';
import Header from '../common/Header';
import CustomCard from '../common/Card';
import { addDebounceEvents, cancelEvent } from '../../utils/utils';

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
  const classes = useStyles();
  const dispatch = useDispatch();
  const [subject, setSubject] = useState('');
  const data = useSelector(({ general }) => general.data);
  const onTextChange = (ev) => {
    if (ev.target.value.length > 2) {
      setSubject(ev.target.value);
      dispatch(loadRepos(ev.target.value));
    }
  };
  useEffect(() => () => {
    cancelEvent();
  }, []);
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
      <Header subject={subject} setSubject={addDebounceEvents(onTextChange)} />
      <div className={classes.card}>
        {noDataRender()}
        {data?.items?.map((value, index) => (
          <CustomCard
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
