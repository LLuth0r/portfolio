import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import P2 from "./P2.png";
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

export default function Card2() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<a href="https://vacation-funds.netlify.app" target="_blank">
				<CardActionArea>
					<CardMedia className={classes.media} image={P2} title="Make Cent$" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Make Cent$
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							Make Cent$ is an Airtable and React financial planning app.
						</Typography>
					</CardContent>
				</CardActionArea>
			</a>
		</Card>
	);
}
