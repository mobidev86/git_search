import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
    minWidth: 200,
    margin: 4,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  header: {
    padding: theme.spacing(1),
  },
  link: {
    color: '#3f51b5',
    textTransform: 'capitalize',
  },
}));
export default function CustomCard({
  projectName,
  Stargazers_count,
  Watchers_count,
  page_url,
}) {
  const classes = useStyles();
  const CardCustomHeader = () => (
    <div className={classes.header}>
      <a
        target="_blank"
        rel="noreferrer"
        className={classes.link}
        href={page_url}
      >
        {projectName}
      </a>
    </div>
  );
  return (
    <Card className={classes.root}>
      <CardHeader component={CardCustomHeader} />
      <CardContent>
        <List>
          <ListItem>
            <ListItemText
              primary="Stargazerscount:"
              secondary={Stargazers_count}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Watchers count:"
              secondary={Watchers_count}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
