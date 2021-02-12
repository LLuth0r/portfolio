import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import P2 from "./P2.png";
import "../Card1/Card1.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
	card2: {
		maxWidth: 300,
		maxHeight: 250,
		margin: ".5em .5em",
	},
	media: {
		height: 125,
	},
	"@media (max-width: 1000px)": {
		card2: {
			maxWidth: 200,
			maxHeight: 200,
		},
		media: {
			height: 75,
		},
	},
	'@media (max-width:825px)': {
		card2: {
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

export default function Card2() {
	const classes = useStyles();

	return (
		<Card className={classes.card2}>
			<a
				href="https://vacation-funds.netlify.app"
				target="_blank"
				rel="noreferrer"
			>
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
