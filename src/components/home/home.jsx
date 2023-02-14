import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Navbar } from "../";

const Home = () => {
    const [name, setName] = useState('');
    // const [posts, setPosts] = useState([]);
    const [navigate, setNavigate] = useState(false);

    // useEffect(() => {
    //             ApiService.apiGet('/api/dj-rest-auth/user/').then(res => {setName(res.username); console.log(res)})
    // }, []);
    useEffect(() => {
                ApiService.apiGet('/api/').then(res => {console.log(res[1]); console.log(res)})
    }, []);

    const logOut = async () => {
        ApiService.logout()
        localStorage.clear()

        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/login"/>;
    }

    return <div className="form-signin mt-5 text-center">
        <Navbar />
        <h3>Hi {name}</h3>

    <Button
						type="submit"
                        Width=""
						variant="contained"
                        onClick={logOut}
						sx={{ mt: 3, mb: 2 }}
					>
						logout
					</Button>
        
    </div>
}

export default Home;