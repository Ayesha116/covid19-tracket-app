import React from "react";
import CountUp from 'react-countup';
import { Card , Typography , CardContent , makeStyles , Grid  } from '@material-ui/core' ;

const useStyles = makeStyles({
    root: {
      width : "300px",
      backgroundColor: "white",
      border : "2x solid grey",
      display: "flex",
      justifyContent: "spaceAround",
      
    
    },
    num: {
      marginBottom: 12,
      fontSize: 50,
      textAlign: "center",
    },
    pos: {
      marginBottom: 12,
      fontSize: 14,
      textAlign: "center",
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
                <Grid item xs = {4} >
                    <Card className={classes.root} variant="outlined" >
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Total Infected:
                            </Typography>
                            <Typography className={classes.num} color = 'secondary'>
                                <CountUp start = {0} end = {confirmed.value} separator = "," />
                            </Typography>
                            <Typography className={classes.pos} color="text.primary">
                                Last updated: {new Date(lastUpdate).toDateString()}
                            </Typography>
                        </CardContent>
    
                    </Card>
                </Grid>
                <Grid item xs={4}>
                <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Recovered:
                            </Typography>
                            <Typography className={classes.num} color= ''>
                                <CountUp start = {0} end = {recovered.value} separator = "," />
                            </Typography>
                            <Typography className={classes.pos} color="text.primary">
                                Last updated: {new Date(lastUpdate).toDateString()}
                            </Typography>
                        </CardContent>
    
                    </Card>
                </Grid>
                <Grid item xs = {4}>
                <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Deaths:
                            </Typography>
                            <Typography className={classes.num} color="error">
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