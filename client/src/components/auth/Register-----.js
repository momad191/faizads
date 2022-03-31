
// import React, { Fragment, useState } from 'react';
// import { connect } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';
// import { setAlert } from '../../actions/alert';
// import { register } from '../../actions/auth';
// import PropTypes from 'prop-types';

// const Register = ({ setAlert, register, isAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     pic: '',
//     password2: ''
//   });

//   const { name, email, pic, password, password2 } = formData;
      

//   const onChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();
 

//     if (password !== password2) {
//       setAlert('Passwords do not match', 'danger');
//     } else {
//       register({ name, email,pic, password,password2 });
//     }
//   };

//   if (isAuthenticated) {
//     return <Redirect to='/dashboard' />;
//   }

//   return (
//     <Fragment>
//       <h1 className='large text-primary'>Sign Up</h1>
//       <p className='lead'>
//         <i className='fas fa-user' /> Create Your Account
//       </p>
//       <form className='form' onSubmit={e => onSubmit(e)}>



//       <div className='form-group'>
//           <input
//             type='file'
//             placeholder='pic'
//             name='pic'
//             value={pic}
//             onChange={e => onChange(e)}
//           />
//         </div>



//         <div className='form-group'>
//           <input
//             type='text'
//             placeholder='Name'
//             name='name'
//             value={name}
//             onChange={e => onChange(e)}
//           />
//         </div>


//         <div className='form-group'>
//           <input
//             type='email'
//             placeholder='Email Address'
//             name='email'
//             value={email}
//             onChange={e => onChange(e)}
//           />
//           <small className='form-text'>
//             This site uses Gravatar so if you want a profile image, use a
//             Gravatar email
//           </small>
//         </div>
//         <div className='form-group'>
//           <input
//             type='password'
//             placeholder='Password'
//             name='password'
//             value={password}
//             onChange={e => onChange(e)}
//           />
//         </div>
//         <div className='form-group'>
//           <input
//             type='password'
//             placeholder='Confirm Password'
//             name='password2'
//             value={password2}
//             onChange={e => onChange(e)}
//           />
//         </div>
//         <input type='submit' className='btn btn-primary' value='Register' />
//       </form>
//       <p className='my-1'>
//         Already have an account? <Link to='/login'>Sign In</Link>
//       </p>
//     </Fragment>
//   );
// };

// Register.propTypes = {
//   setAlert: PropTypes.func.isRequired,
//   register: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(
//   mapStateToProps,
//   { setAlert, register }
// )(Register);




import React, { Component } from 'react';
import axios from 'axios';

export default class register extends Component {

    constructor(props) {
        super(props);

       
        this.onSubmit = this.onSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangepassword2 = this.onChangepassword2.bind(this);
      

        this.state = {
            
            name: '',
            pic: '',
            email: '',
            password: '',
            password2: ''
        }
    }

    onFileChange(e) {
        this.setState({ pic: e.target.files[0] })
    }

    onChangename(e) {
        this.setState({
          name: e.target.value
        })
      }

      onChangeemail(e) {
        this.setState({
          email: e.target.value
        })
      }


      onChangepassword(e) {
        this.setState({
          password: e.target.value
        })
      }

      onChangepassword2(e) {
        this.setState({
          password2: e.target.value
        })
      }

    onSubmit(e) {
        e.preventDefault();
    
        const formData = new FormData()
        formData.append('pic', this.state.pic);
        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        formData.append("password2", this.state.password2);
           
       
        axios.post("/api/users", formData, {
        }).then(res => {
            console.log(res)

            this.setState({
              pic: '',
              name: '',
              email: '',
              password: '',
              password2: ''
              })
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>


                    <div className="form-group">
                            <input type="file" 
                            name="pic"
                            
                            
                            onChange={this.onFileChange} />
                        </div>


                           <input  type="text"
                            required
                            className="form-group"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChangename}
                            />


                          <input  type="email"
                            required
                            className="form-group"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeemail}
                            />


                          <input  type="password"
                            required
                            className="form-group"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangepassword}
                            />



                          <input  type="password2"
                            required
                            className="form-group"
                            name="password2"
                            value={this.state.password2}
                            onChange={this.onChangepassword2}
                            />

                        






                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

