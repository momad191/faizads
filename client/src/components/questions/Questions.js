import React, { Fragment, useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { deleteQuestion } from '../../actions/question';
import ConfirmButton from "./ConfirmButton";
import axios from 'axios';
  
const Questions = ({loading , deleteQuestion}) => {

    const [getQuestions,setQuestions]= useState([])
    const [visible,setVisible]= useState(1)
 
    const currentResults = getQuestions.slice(0,visible);

 
    const loadMore = async e => {
        setVisible(visible+10)
    }
 

    useEffect(() => {
        axios.get('/api/questions')
        .then(res => {
          //console.log(res);
          setQuestions(res.data)
        })
        .catch((err) => {
          console.log(err);
        })

 
      }, [getQuestions]);



      return loading ? (
        <Spinner />
      ) : ( 
        <div>
            <center>
                <form class="search-form">
                <input type="text" name="search" id="search" placeholder="Search Markets"/>
                </form>
            </center>

        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">

        <div className="dash-title"> Questions </div>
        <Link to="/Addquestion" className="Action-button-plus">  <i className="fa fa-plus fa-1x"></i> Ask new  </Link>




  {currentResults
   .map(question => (
  <div class="main-list" key={question._id}>
  <div colspan="2">
  <a class="list-title" href="#">
  {question.q_title}  </a>
  </div>
  {question.q_image && (
    <img src={question.q_image} style={{ width: '120px', height:'80px',marginBottom:''}} />
    )}

  
    <div>
	<p class="list-details"><span className="redColor">Category:</span>{question.q_category} | <span className="redColor">Description:</span>{question.q_description} </p>
	<p class="list-button">
	<button class="Action-button-update"> <Link to={`/editQuestion/${question._id}`} style={{color:'#fff',textDecoration:'none'}} >   <i class="fa fa-database fa-1x"></i> Update </Link>  </button> 
	<button class="Action-button-open">  <i class="fa fa-eye fa-1x"></i>  </button> 

    <ConfirmButton
            dialog={["", "Are You Sure?", "Once more to delete"]}
            action={() => deleteQuestion(question._id)}
              />


	{/* <button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button> */}
	</p>
	</div> 
</div>
 ))}




{visible < getQuestions.length && (
  <button   onClick={loadMore} 
      class=" momadbtn">  <i class="fa fa-arrow-down fa-1x"></i> loadMore </button> 
  )}


        </div>
        </div>
        </div>


        </div>
    )
}
 

Questions.propTypes = {
    //getMarkets: PropTypes.func.isRequired,
    //market: PropTypes.object.isRequired,
    deleteQuestion: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = state => ({
    question: state.question
  });
  
  export default connect(
    mapStateToProps,
    {deleteQuestion}
  )(Questions);
