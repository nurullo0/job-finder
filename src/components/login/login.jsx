
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


const Login = () => {
        const [username, setUserName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [navigate, setNavigate] = useState(false);
    
        const handleSubmit = async e => {
            e.preventDefault();
            ApiService.login({username,email,password})
    
            setNavigate(true);
        }
    
        if (navigate) {
            return <Navigate to="/"/>;
        }
return (
	<ThemeProvider theme={allColors}  >
		<Box Width="100vw" height="100vh"
            sx={{  
                bgcolor: 'primary.light', 
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }} > 
		<Container component="main" maxWidth="xs" sx={{py: 3, bgcolor: 'bg.light', borderRadius: '16px' }} >
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
					Login
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
								onChange={e => setPassword(e.target.value)}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Login
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
						
							<Link href="/register" variant="body2">
								Already have an account? sign up
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

export default Login;





// import {Navigate} from "react-router-dom";
// import {useState} from "react";
// import { ApiService} from "../../service/api.service";


// const Login = () => {
//     const [username, setUserName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [navigate, setNavigate] = useState(false);

//     const submit = async e => {
//         e.preventDefault();
//         ApiService.login({username,email,password})

//         setNavigate(true);
//     }

//     if (navigate) {
//         return <Navigate to="/"/>;
//     }

//     return <main className="form-signin">
//         <form onSubmit={submit}>
//             <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

//             <div className="form-floating">
//                 <input className="form-control" placeholder="Name"
//                        onChange={e => setUserName(e.target.value)}
//                 />
//                 <label>Name</label>
//             </div>

//             <div className="form-floating">
//                 <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
//                        onChange={e => setEmail(e.target.value)}
//                 />
//                 <label htmlFor="floatingInput">Email address</label>
//             </div>

//             <div className="form-floating">
//                 <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
//                        onChange={e => setPassword(e.target.value)}
//                 />
//                 <label htmlFor="floatingPassword">Password</label>
//             </div>

//             <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
//         </form>
//     </main>
// }


// export default Login;

