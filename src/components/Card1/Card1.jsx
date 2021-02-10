import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import P1 from './P1.png';
import './Card1.css';

const useStyles = makeStyles({
	root: {
		maxWidth: 300,
		margin: '.5em .5em',
	},
	media: {
		height: 125,
	},
});

export default function Card1() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<a href='https://lluth0r.github.io/Heroes-and-Villains/' target='_blank' rel='noreferrer'>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={P1}
					title="Heroes & Villains"
					/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Heroes & Villains
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Heroes & Villains provides a database full of 
						your favorite superheroes and comic book villains.
					</Typography>
				</CardContent>
			</CardActionArea>
			</a>
		</Card>
	);
}
