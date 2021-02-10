import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import P4 from "./P4.png";
import "../Card1/Card1.css";

const useStyles = makeStyles({
	root: {
		maxWidth: 300,
		margin: ".5em .5em",
	},
	media: {
		height: 125,
	},
});

export default function Card4() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<a href="https://the-cellar.netlify.app" target="_blank">
				<CardActionArea>
					<CardMedia className={classes.media} image={P4} title="The Cellar" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							The Cellar
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							A wine bartering app built with Ruby on Rails and a React
							front-end.
						</Typography>
					</CardContent>
				</CardActionArea>
			</a>
		</Card>
	);
}
