import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import P3 from "./P3.png";
import "../Card1/Card1.css";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// const useStyles = makeStyles({
// 	card3: {
// 		maxWidth: 300,
// 		maxHeight: 250,
// 		margin: ".5em .5em",
// 	},
// 	media3: {
// 		height: 125,
// 	},
// 	"@media (max-width: 1000px)": {
// 		card3: {
// 			maxWidth: 200,
// 			maxHeight: 200,
// 		},
// 		media3: {
// 			height: 75,
// 		},
// 	},
// 	'@media (max-width:825px)': {
// 		card3: {
// 			maxWidth: 200,
// 			maxHeight: 200,
// 		},
// 		media3: {
// 			height: 70,
// 		},
// 	}
// });

// const theme3 = createMuiTheme();

// theme3.typography.h5 = {
// 	fontSize: "1.2rem",
// 	"@media (max-width:900px)": {
// 		fontSize: "1.25rem",
// 	},
// 	'@media (max-width:600px)': {
// 		fontSize: '.75rem',
// 	}
// };

// theme3.typography.body2 = {
// 	fontSize: ".85rem",
// 	"@media (max-width:900px)": {
// 		fontSize: ".75rem",
// 	},
// 	'@media (max-width:600px)': {
// 		fontSize: '.6rem',
// 	}
// };

export default function Card3() {
	// const classes = useStyles();


	return (
		<div class="card">
    <h3 class="title">Card 3</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
    
    </div>
  </div>

		// <Card className={classes.card3}>
		// 	<a href="https://geosmin.netlify.app/" target="_blank" rel='noreferrer'>
		// 		<CardActionArea>
		// 			<CardMedia className={classes.media3} image={P3} title="Geosmin" />
		// 			<CardContent>
		// 				<ThemeProvider theme={theme3}>
		// 				<Typography gutterBottom variant="h5" component="h2">
		// 					Geosmin
		// 				</Typography>
		// 				<Typography variant="body2" color="textSecondary" component="p">
		// 					Geosmin is a gourmet mushroom and microgreen urban farm store
		// 					built with MERN stack.
		// 				</Typography>
		// 				</ThemeProvider>
		// 			</CardContent>
		// 		</CardActionArea>
		// 	</a>
		// </Card>
	);
}
