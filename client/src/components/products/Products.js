import React from 'react'
import { Link } from 'react-router-dom';
const Markets = () => {
    return (
        <div>
            <center>
                <form class="search-form">
                <input type="text" name="search" id="search" placeholder="Search Markets"/>
                </form>
            </center>

        <div className="aqle3-main">
        <div className="mainword2">
        <div className="mainForm">

        <div className="dash-title"> Products </div>
        <Link to='/Addproduct' className="Action-button-plus">  <i className="fa fa-plus fa-1x"></i> Add New </Link>



  <div class="main-list">
  <div colspan="2">
  <a class="list-title" href="#">
  I want to buy a new car where can I find a new one in USA LA?  </a>
  </div>
 
    <div>
	<p class="list-details"><span className="redColor">Category:</span>Electonics | <span className="redColor">Description:</span>asd s;ldksm sdsdlkmsd  lkmsd </p>
	<p class="list-button">
	<button class="Action-button-update">  <i class="fa fa-database fa-1x"></i> Update </button> 
	<button class="Action-button-open">  <i class="fa fa-eye fa-1x"></i>  </button> 
	<button class="Action-button-delete">  <i class="fa fa-close fa-1x"></i>  </button>
	</p>
	</div> 
</div>



        </div>
        </div>
        </div>


        </div>
    )
}
 
export default Markets
