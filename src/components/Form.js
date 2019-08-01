import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
// import withStyles




const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};






const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing(1),
    },
}));


class Inputs extends React.Component {

    state = {}

    render() {


        const classes = useStyles;
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;


        return (
            <div className={classes.container}>

                {/* <Input
                    placeholder="Username"
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'description',
                    }}
                />
                <Input
                    placeholder="Password"
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'description',
                    }}
                /> */}
                <Grid container spacing={3}>
                    {
                        user
                            ? <p>Hello, {user.displayName}</p>
                            : <p>Please sign in.</p>
                    }
                    {
                        user
                            ? <button variant="contained" color="primary" className={classes.button} onClick={signOut}>Sign out</button>
                            : <button variant="contained" color="primary" className={classes.button} onClick={signInWithGoogle}>Sign in with Google</button>
                    }
                    {/* <Grid item xs={12} sm={6}>
                        <Button id="sign-up" variant="contained" color="primary" className={classes.button}>
                            Sign Up
      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button id="login" variant="contained" color="primary" className={classes.button}>
                            Sign In
      </Button>
                    </Grid> */}
                </Grid>
            </div>
        );
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Inputs);