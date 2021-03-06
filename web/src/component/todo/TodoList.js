import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import DoneChip from'./DoneChip.js';
import TextField from '@material-ui/core/TextField';
import EditTask from './EditTask';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  avatar: {
    margin: 10,
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
  defaultTaskColor: {
    backgroundColor: grey[500],
  },
  doneTaskColor: {
    backgroundColor: green[500],
  },
});

const generateKey = (str, str2, str3) => {
  return new Date() + Math.random() + str + str2 + str3;
}

class TodoList extends React.Component{
  render(){
      const { classes } = this.props;
      let indexOfCard = -1;
      let todoitems = [];

      this.props.itemList.forEach((item) => {
        indexOfCard +=1;
          todoitems.push(
            <Grid item key={generateKey(item.Text, item.Content, indexOfCard)} xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                    <CardHeader 
                        className={item.Selected?classes.defaultTaskColor:classes.doneTaskColor}
                        action={
                          <DoneChip selected={item.Selected}/>
                        }
                        title={item.Text}
                    />
                    <CardContent className={classes.cardContent}>
                        <TextField
                          fullWidth={true}
                          disabled={true}
                          value={item.Content}
                          placeholder="Content"
                          multiline={true}
                          rows={5}
                          rowsMax={5}
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" value={indexOfCard} onClick={this.props.handleUpdateSelected} >
                            Done
                        </Button>
                        <EditTask title={item.Text} content={item.Content} indexOfCard={indexOfCard} handleEditOK={this.props.handleEditOK} />
                        <Button size="small" color="primary" value={indexOfCard} onClick={this.props.handleDeleteDialog}>
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
          )
        });

    return (
        <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={16}>
                {todoitems}
            </Grid>
        </div>
    );
  }
}

TodoList.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(TodoList);