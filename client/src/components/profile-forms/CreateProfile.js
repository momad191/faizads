import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
 
const CreateProfile = ({
	createProfile,
	getCurrentProfile,
	profile: { profile, loading },
	history
}) => {
	const [formData, setFormData] = useState({
		company: '',
		website: '',
		location: '',
		status: '',
		skills: '',
		githubusername: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
		instagram: ''
	});
	const [displaySocialInputs, toggleSocialInputs] = useState(false);
	const {
		company,
		website,
		location,
		status,
		skills,
		githubusername,
		bio,
		twitter,
		facebook,
		linkedin,
		youtube,
		instagram
	} = formData;
	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = e => {
		e.preventDefault();
		createProfile(formData, history);
	}; 
	useEffect(() => {
		getCurrentProfile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getCurrentProfile]);
	return loading && profile !== null ? (
		<Redirect to='/dashboard/main' />
	) : (
		<Fragment>
			<div className="login-title"> بعض المعلومات الهامة عن متجرك</div>
	 
			  
			<center>
			
			{/* <small className="loginSmalltitle">* = حقول هامة</small> */}
			<form className='login-form' onSubmit={e => onSubmit(e)}>
			<div className='FormCover'>
			  <span>  تخصص المتجر   </span>
					<select className="Forminput" name='status' value={status} onChange={e => onChange(e)}>
						<option value='0'>* اختر المجال الذي تود العمل من خلاله</option>
						<option value='Developer'>مطور</option>
						<option value='Junior Developer'>محاسب</option>
						<option value='Senior Developer'>صيدلي</option>
						<option value='Manager'>ادارة</option>
						<option value='Student or Learning'>التعليم والدراسة</option>
						<option value='Instructor'>تقني</option>
						<option value='Intern'>تجارة الكترونية</option>
						<option value='Other'>اخرى</option>
					</select>
				


				
				<span className='form-text'>
						اسم الشركة 
					</span>
					<input
					className="Forminput"
						type='text'
						name='company'
						value={company}
						onChange={e => onChange(e)}
					/>
					
			 



 
				<span className='form-text'>
						موقعك
					</span>
					<input
					className="Forminput"
						type='text'
						placeholder=''
						name='website'
						value={website}
						onChange={e => onChange(e)}
					/>
					
		 





			 
				<span className='form-text'>
						المدينة 
					</span>
					<input
					className="Forminput"
						type='text'
						placeholder=''
						name='location'
						value={location}
						onChange={e => onChange(e)}
					/>
					
			 




			 
				<span className='form-text'>
						مهاراتك
					</span>
					<input
					className="Forminput"
						type='text'
						placeholder=''
						name='skills'
						value={skills}
						onChange={e => onChange(e)}
					/>
				
			 



			 
				<span className='form-text'>
						صفحتك على القيت هب
					</span>
					<input
					className="Forminput"
						type='text'
						placeholder=''
						name='githubusername'
						value={githubusername}
						onChange={e => onChange(e)}
					/>
					
			 





			 
				<span className='form-text'>نبذه مختصرة عنك </span>
					<textarea
					className="Forminput"
						placeholder=''
						name='bio'
						value={bio}
						onChange={e => onChange(e)}
					/>
					
		 

				
			 
			 
					<Fragment>
						<div className='form-group social-input'>
							<i className='fa fa-twitter fa-2x' />
							<input
							className="Forminput"
								type='text'
								placeholder=''
								name='twitter'
								value={twitter}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fa fa-facebook fa-2x' />
							<input
							className="Forminput"
								type='text'
								placeholder=''
								name='facebook'
								value={facebook}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fa fa-youtube fa-2x' />
							<input
							className="Forminput"
								type='text'
								placeholder=''
								name='youtube'
								value={youtube}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fa fa-linkedin fa-2x' />
							<input
							className="Forminput"
								type='text'
								placeholder=''
								name='linkedin'
								value={linkedin}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fa fa-instagram fa-2x' />
							<input
							className="Forminput"
								type='text'
								placeholder=''
								name='instagram'
								value={instagram}
								onChange={e => onChange(e)}
							/>
						</div>
					</Fragment>
			 
 
				<button type='submit' className="Formbutton" > حفظ  </button>
				</div>
			</form>
			
			</center>
		</Fragment>
	); 
};

CreateProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	profile: state.profile
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	withRouter(CreateProfile)
);
