import React , {useContext} from 'react'
import {DataContext} from '../context/DataContext';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
  gridroot: {
    flexGrow: 1,
    // marginLeft: 2,
    // marginRight:4,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardroot: {
    minWidth: 250,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  deaths: {
      color: '#D50000',
      fontWeight:'bold',
    
  },
  confirmed:{
      color:'orange',
      fontWeight:'bold',
  },
  recovered:{
      color:'green',
      fontWeight:'bold',
  },
  active:{
      color:'#1A237E',
      fontWeight:'bold',
  }

}));

export const Cards = () => {
    const classes = useStyles();
    const {data} = useContext(DataContext)
    console.log(data)
    if(!data){
        return(<div>loading...</div>)
    }
    return (
        <div className={classes.gridroot}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm = {6} md = {3}>
                <Card className={classes.cardroot}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Confirmed Cases
                        </Typography>
                        <Typography className={classes.confirmed} gutterBottom variant="h5" component="h3">
                        <CountUp
                            start={0}
                            end={data.Global.TotalConfirmed}
                            duration={2.75}
                            separator=","
                            />
                        </Typography>
                        <Typography variant="body2" >
                            Last Update: {new Date(data.Date).toDateString()}
                        </Typography>
                    </CardContent>
                    </Card>
            </Grid>
            <Grid item xs={12} sm = {6} md = {3}>
                <Card className={classes.cardroot}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Active Cases
                        </Typography>
                        <Typography className={classes.active} variant="h5" component="h2" gutterBottom>
                        <CountUp
                            start={0}
                            end={data.Global.TotalConfirmed - data.Global.TotalDeaths - data.Global.TotalRecovered}
                            duration={2.5}
                            separator=","
                            />
                        </Typography>
                        <Typography variant="body2" >
                            Last Update: {new Date(data.Date).toDateString()}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm = {6} md = {3}>
                <Card className={classes.cardroot}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Tota Recoveries
                        </Typography>
                        <Typography className={classes.recovered} variant="h5" component="h2" gutterBottom>
                        <CountUp
                            start={0}
                            end={data.Global.TotalRecovered}
                            duration={2.75}
                            separator=","
                            />
                        </Typography>
                        <Typography variant="body2" >
                            Last Update: {new Date(data.Date).toDateString()} 
                        </Typography>
                    </CardContent>
                    
                </Card>
            </Grid>
            <Grid item xs={12} sm = {6} md = {3}>
                <Card className={classes.cardroot}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                          Total Deaths
                        </Typography>
                        <Typography className={classes.deaths} variant="h5" component="h2" gutterBottom>
                        <CountUp
                            start={0}
                            end={data.Global.TotalDeaths}
                            duration={2.75}
                            separator=","
                            />
                        </Typography>
                        <Typography variant="body2" >
                            Last Update: {new Date(data.Date).toDateString()}
                        </Typography>
                    </CardContent>
                    
                </Card>
            </Grid>
        </Grid>
    </div>
    )
}
