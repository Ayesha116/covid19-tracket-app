import React from "react";
import CountUp from 'react-countup';
import { Card , Typography , CardContent , makeStyles , Grid  } from '@material-ui/core' ;

const useStyles = makeStyles({
    root: {
      width : "300px",
      backgroundColor: "#F5F5F5",
      boxShadow: "2px 3p black",
      display: "flex",
      justifyContent: "spaceAround",
      
    
    },
    num: {
      marginBottom: 12,
      fontSize: 45,
      textAlign: "center",
    },
    pos: {
      marginBottom: 12,
      fontSize: 14,
      textAlign: "center",
    },
    active: {
        color:"FFFF00"
      },
    deaths: {
        color:"#D50000"
    },
    recovered: {
        color:"green"
    },
  });


export const Cards = ( { data : {confirmed , recovered , deaths , lastUpdate}} ) => {
    const classes = useStyles();
    if (!confirmed) {
        return 'Loading...';
      }
    console.log(confirmed.value)
    return (
        <div>
            <Grid container spacing={3} className = "gridClass" >
                <Grid item xs = {12} md = {3} >
                    <Card className={classes.root} variant="outlined" >
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Total Infected:
                            </Typography>
                            <Typography className={classes.num} color = 'primary'>
                                <CountUp start = {0} end = {confirmed.value} separator = "," />
                            </Typography>
                            <Typography className={classes.pos} color="text.primary">
                                Last updated: {new Date(lastUpdate).toDateString()}
                            </Typography>
                        </CardContent>
    
                    </Card>
                </Grid>
                <Grid item xs={12} md = {3}>
                <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="h2" >
                                Recovered:
                            </Typography>
                            <Typography className={`${classes.num} ${classes.recovered}`} color= ''>
                                <CountUp start = {0} end = {recovered.value} separator = "," />
                            </Typography>
                            <Typography className={classes.pos} color="text.primary">
                                Last updated: {new Date(lastUpdate).toDateString()}
                            </Typography>
                        </CardContent>
    
                    </Card>
                </Grid>
                <Grid item xs = {12} md = {3} >
                    <Card className={classes.root} variant="outlined" >
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Active Cases:
                            </Typography>
                            <Typography className={`${classes.num} ${classes.active}`} color = 'secondary'>
                                <CountUp start = {0} end = {confirmed.value - recovered.value - deaths.value} separator = "," />
                            </Typography>
                            <Typography className={classes.pos} color="text.primary">
                                Last updated: {new Date(lastUpdate).toDateString()}
                            </Typography>
                        </CardContent>
    
                    </Card>
                </Grid>
                <Grid item xs = {12} md = {3}>
                <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Deaths:
                            </Typography>
                            <Typography className={`${classes.num} ${classes.deaths}`} color="error">
                                <CountUp start = {0} end = {deaths.value} separator = "," />
                            </Typography>
                            <Typography className={classes.pos} color="text.primary">
                                Last updated: {new Date(lastUpdate).toDateString()}
                            </Typography>
                        </CardContent>
    
                    </Card>
                </Grid>
                
            </Grid>
        </div>
       
    )
}