import { Box, Button, ButtonGroup, Popper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import styles from "./Styles";
const BottomNavBar = () => {
	const classes = styles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popper" : undefined;

	return (
		<ButtonGroup className={classes.BottomNavBar} size="large">
			<Button
				className={classes.button}
				aria-describedby={id}
				type="button"
				onClick={handleClick}
			>
				location Where are you going
			</Button>
			<Popper id={id} open={open} anchorEl={anchorEl}>
				<Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
					The content of the Popper.
				</Box>
			</Popper>
			<Button className={classes.button}>Check in</Button>
			<Button className={classes.button}>Check out</Button>
			<Button className={classes.button}>Guests</Button>
			<Button
				className={classes.button}
				endIcon={
					<SearchIcon
						className={classes.searchIcon}
						size="small"
						htmlColor="white"
					/>
				}
			></Button>
		</ButtonGroup>
	);
};

export default BottomNavBar;
