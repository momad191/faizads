import React, { Fragment, useEffect ,useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import moment from 'moment';

const Signup = ({ setAlert ,register,addvisual, isAuthenticated, match }) => {


	const  freeDate= moment();
	freeDate.add(5,'days') 
  
	
	const [showalertI,setshowalertI]= useState('no')
  
	const [registerInfo,setRegisterInfo]= useState([])
  
	const [search,setSearch]= useState("")
	
	const [visualCode,setVisualCode]= useState([])
	const [userInfo,setUserInfo]= useState([])
	// const [alert,setAlert]= useState('')
	const [geolocation,setgeolocation]= useState([])


	const country_name = geolocation.country_name;
	const country_code = geolocation.country_code;
	const city = geolocation.city;
	const state = geolocation.state;
	const postal = geolocation.postal;
	const latitude = geolocation.latitude;
	const longitude = geolocation.longitude;
	const IPv4 = geolocation.IPv4;
	const validity='normal';
	const shopname = '';
	const shopstatus='closed'; 
	const ref = registerInfo.r_ref;
	const membership_class = 'free';
	const Payment_status ='no'
	const available_ads = 2;
	const membership_renewal_date = Date.now();
	const membership_renewal_expiry_date = freeDate;
   const visualCodeShow = visualCode.visual_code+1;
  
   const Lang = match.params.lang;

	const [data, setData] = useState({
		first_name: "",
		last_name: "",
        username: "",
		email: "",
		password: "",
	});
	const { first_name,last_name,username, password, email} = data;

	const [error, setError] = useState("");
	const [msg, setMsg] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	}; 

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/api/users";
			const body = JSON.stringify({ first_name,last_name,username, email, password, validity,country_name,country_code,city,state,latitude,longitude,IPv4,shopname,shopstatus,ref,membership_class,available_ads,membership_renewal_date,membership_renewal_expiry_date });
			const config = {
				headers: {
				  'Content-Type': 'application/json'
				}
			  };

			const { data: res } = await axios.post(url, body, config);
		                        	
			setMsg(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	useEffect(() => {

		axios.get('https://geolocation-db.com/json/297364b0-2bc6-11ec-a8a6-1fc54772a803')
		.then(res => {
		  setgeolocation(res.data)
		})
		.catch((err) => {
		  console.log(err);
		})

	}, []);

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="first_name"
							onChange={handleChange}
							value={data.first_name}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="last_name"
							onChange={handleChange}
							value={data.last_name}
							required
							className={styles.input}
						/>


                          <input
							type="text"
							placeholder="user name"
							name="username"
							onChange={handleChange}
							value={data.username}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						{msg && <div className={styles.success_msg}>{msg}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;