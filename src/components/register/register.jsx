import { useState,React } from "react";
import { Navigate } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { allColors } from "../../constants/colors";
import { ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


const Register = () => {
const [username, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password1, setPassword1] = useState("");
const [password2, setPassword2] = useState("");
const [navigate, setNavigate] = useState(false);

const handleSubmit = async (e) => {
	e.preventDefault();
	ApiService.register({
		username: username,
		email: email,
		password1: password1,
		password2: password2,
	});


	setNavigate(true);
};

if (navigate) {
	return <Navigate to="/login" />;
}

return (
	<ThemeProvider theme={allColors}  >

		<Box Width="100vw" height="100vh" 
		sx={{
			bgcolor: 'primary.light', 
			display: "flex",
			flexDirection: "row",
			alignItems: "center", }} > 
		<Container component="main" maxWidth="xs" 
			sx={{ 
				p: 3, 
				bgcolor: 'bg.light',
				borderRadius: '16px',
				}} >
			<CssBaseline  />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
			<LockOutlinedIcon />
			</Avatar>
				<Typography component="h1" variant="h4">
					Sign up
				</Typography>
				<Box
					component="form"
					noValidate
					onSubmit={handleSubmit}
					sx={{ mt: 3 }}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} >
							<TextField
								autoComplete="user-name"
								required
								fullWidth
								id="userName"
								label="User Name"
								autoFocus
								onChange={e => setUserName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={e => setEmail(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password1"
								autoComplete="new-password"
								onChange={e => setPassword1(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password takrorlang"
								type="password"
								id="password2"
								autoComplete="new-password"
								onChange={e => setPassword2(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox value="allowExtraEmails" color="primary" />
								}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						
					>
						Sign Up
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
						
							<Link href="/login" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
		</Box> 
		
	</ThemeProvider>
);
};

export default Register;
