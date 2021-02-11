import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import ResumeSnap from "./ResumeSnap.png";
import Resume from "./michaelpakulak.pdf";

const useStyles = makeStyles({
	resume: {
		maxWidth: 300,
		maxHeight: 250,
		margin: "2em .5em",
	},
	media: {
		height: 125,
	},
	"@media (max-width: 1000px)": {
		resume: {
			maxWidth: 200,
			maxHeight: 200,
		},
		media: {
			height: 75,
		},
	},
	'@media (max-width:825px)': {
		resume: {
			maxWidth: 200,
			maxHeight: 200,
		},
		media: {
			height: 70,
		},
	}
});

export default function Card1() {
	const classes = useStyles();

	return (
		<Card className={classes.resume}>
			<a href={Resume} target="_blank" rel='noreferrer'>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={ResumeSnap}
						title="The Cellar"
					/>
					<CardContent>
						<Typography gutterBottom variant="h6" component="h2">
							My Resume
						</Typography>
					</CardContent>
				</CardActionArea>
			</a>
		</Card>
	);
}
