import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import P4 from "./P4.png";
import "../Card1/Card1.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		maxWidth: 300,
		maxHeight: 250,
		margin: ".5em .5em",
	},
	media: {
		height: 125,
	},
	"@media (max-width: 1000px)": {
		root: {
			maxWidth: 200,
			maxHeight: 200,
		},
		media: {
			height: 75,
		},
	},
	'@media (max-width:825px)': {
		root: {
			maxWidth: 200,
			maxHeight: 200,
		},
		media: {
			height: 70,
		},
	}
});

const theme = createMuiTheme();

theme.typography.h5 = {
	fontSize: "1.2rem",
	"@media (max-width:900px)": {
		fontSize: "1.25rem",
	},
	'@media (max-width:600px)': {
		fontSize: '.75rem',
	}
};

theme.typography.body2 = {
	fontSize: ".85rem",
	"@media (max-width:900px)": {
		fontSize: ".75rem",
	},
	'@media (max-width:600px)': {
		fontSize: '.6rem',
	}
};


export default function Card4() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<a href="https://the-cellar.netlify.app" target="_blank" rel="noreferrer">
				<CardActionArea>
					<CardMedia className={classes.media} image={P4} title="The Cellar" />
					<CardContent>
						<ThemeProvider theme={theme}>
							<Typography gutterBottom variant="h5" component="h2">
								The Cellar
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								A wine bartering app built with Ruby on Rails and a React
								front-end.
							</Typography>
						</ThemeProvider>
					</CardContent>
				</CardActionArea>
			</a>
		</Card>
	);
}
