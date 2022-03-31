import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
  
const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
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

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram
    });
  }, [loading, getCurrentProfile]);

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
    createProfile(formData, history, true);
  };


  
  return (
    <Fragment>
      <div className="login-title"> تعديل ملفك</div>
 

     <center>
      <small className="loginSmalltitle">* = حقول هامة</small>
      <form className='login-form' onSubmit={e => onSubmit(e)}>

          <div className='FormCover'>

          <small className='form-text'>
            المهنة
          </small>

          <select className='Forminput'  name='status' value={status} onChange={e => onChange(e)}>
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
         
        </div>



        
        <div className='FormCover'>
        <small className='form-text'>  الشركة </small>
          <input
          className="Forminput"
            type='text'
            placeholder='Company'
            name='company'
            value={company}
            onChange={e => onChange(e)}
          />
        </div>




        <div className='FormCover'>
        <small className='form-text'>الموقع الالكتروني</small>
          <input
          className="Forminput"
            type='text'
            placeholder='Website'
            name='website'
            value={website}
            onChange={e => onChange(e)}
          />
        </div>



        <div className='FormCover'>
        <small className='form-text'>
            الدولة
          </small>
          <input
          className="Forminput"
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
         
        </div>



        <div className='FormCover'>
        <small className='form-text'>
            المهارات
          </small>
          <input
          className="Forminput"
            type='text'
            placeholder='* Skills'
            name='skills'
            value={skills}
            onChange={e => onChange(e)}
          />
          
        </div>




        <div className='FormCover'>
        <small className='form-text'>
             قيت هب
          </small>
          <input
            className="Forminput"
            type='text'
            placeholder='Github Username'
            name='githubusername'
            value={githubusername}
            onChange={e => onChange(e)}
          />
         
        </div>


        <div className='FormCover'>
        <small className='form-text'>نبذة مختصرة</small>
          <textarea
          className="Forminput"
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          />
          
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            اضف مواقع التواصل الاجتماعي 
          </button>
          <span>اختياري</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x' />
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x' />
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x' />
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x' />
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        
        <button type='submit' className="Formbutton" > حفظ  </button>
        <Link className='Formbutton' to='/dashboard'>
        لوحة التحكم
        </Link>
       
      </form>
      </center>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
