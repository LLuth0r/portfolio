import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import P2 from "./P2.png";
import "../Card1/Card1.css";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		maxWidth: 300,
		margin: '.5em .5em',
	},
	media: {
		height: 125,
	},
	'@media (max-width: 1150px)': {
		root: {
			maxWidth: 200,
		},
		media: {
			height: 75,
		},
	}
});

export default function Card2() {
	const classes = useStyles();

	const theme = createMuiTheme({
		'@media (max-width: 1050px)': {
			typography: {
				fontSize: 10,
		},
	}
	});

	return (
		<Card className={classes.root}>
			<a href="https://vacation-funds.netlify.app" target="_blank" rel='noreferrer'>
				<CardActionArea>
					<CardMedia className={classes.media} image={P2} title="Make Cent$" />
					<CardContent>
					<ThemeProvider theme={theme}>
						<Typography gutterBottom variant="h5" component="h2">
							Make Cent$
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							Make Cent$ is an Airtable and React financial planning app.
						</Typography>
						</ThemeProvider>
					</CardContent>
				</CardActionArea>
			</a>
		</Card>
	);
}
