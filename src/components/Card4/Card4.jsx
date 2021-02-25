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

// const useStyles = makeStyles({
// 	card4: {
// 		maxWidth: 300,
// 		maxHeight: 250,
// 		margin: ".5em .5em",
// 	},
// 	media4: {
// 		height: 125,
// 	},
// 	"@media (max-width: 1000px)": {
// 		card4: {
// 			maxWidth: 200,
// 			maxHeight: 200,
// 		},
// 		media4: {
// 			height: 75,
// 		},
// 	},
// 	"@media (max-width:825px)": {
// 		card4: {
// 			maxWidth: 200,
// 			maxHeight: 200,
// 		},
// 		media4: {
// 			height: 70,
// 		},
// 	},
// });

export default function Card4() {
	// const classes = useStyles();

	// const theme4 = createMuiTheme();

	// theme4.typography.h5 = {
	// 	fontSize: 18,
	// 	"@media (max-width:600px)": {
	// 		fontSize: 16,
	// 	},
	// };

	// theme4.typography.body2 = {
	// 	fontSize: 12,
	// 	"@media (max-width:600px)": {
	// 		fontSize: 10,
	// 	},
	// };

	return (
		<div class="card">
    <h3 class="title">The Cellar</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      <p>A wine bartering app utilizing Ruby on Rails and Javascript/React.</p>
    </div>
  </div>

		// <Card className={classes.card4}>
		// 	<a href="https://the-cellar.netlify.app" target="_blank" rel="noreferrer">
		// 		<CardActionArea>
		// 			<CardMedia className={classes.media4} image={P4} title="The Cellar" />
		// 			<CardContent>
		// 				<ThemeProvider theme={theme4}>
		// 					<Typography gutterBottom variant="h5" component="h2">
		// 						The Cellar
		// 					</Typography>
		// 					<Typography variant="body2" color="textSecondary" component="p">
		// 						A wine bartering app built with Ruby on Rails and a React
		// 						front-end.
		// 					</Typography>
		// 				</ThemeProvider>
		// 			</CardContent>
		// 		</CardActionArea>
		// 	</a>
		// </Card>
	);
}
