import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import P1 from "./P1.png";
import "./Card1.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
	card1: {
		maxWidth: 300,
		maxHeight: 250,
		margin: ".5em .5em",
	},
	media: {
		height: 125,
	},
	"@media (max-width: 1000px)": {
		card1: {
			maxWidth: 200,
			maxHeight: 200,
		},
		media: {
			height: 75,
		},
	},
	'@media (max-width:825px)': {
		card1: {
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

export default function Card1() {
	const classes = useStyles();

	return (
		<Card className={classes.card1}>
			<a
				href="https://lluth0r.github.io/Heroes-and-Villains/"
				target="_blank"
				rel="noreferrer"
			>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={P1}
						title="Heroes & Villains"
					/>
					<CardContent>
						<ThemeProvider theme={theme}>
							<Typography gutterBottom variant="h5" component="h2">
								Heroes & Villains
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Heroes & Villains provides a database full of your favorite
								superheroes and comic book villains.
							</Typography>
						</ThemeProvider>
					</CardContent>
				</CardActionArea>
			</a>
		</Card>
	);
}
