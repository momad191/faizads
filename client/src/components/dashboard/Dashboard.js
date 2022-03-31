import React from 'react'
 
import EnglishDashboard from './EnglishDashboard';
import ArabicDashboard from './ArabicDashboard';
  
export const Dashboard = ({match}) => {
  const Lang = match.params.lang;
  return (
    <div>

      {Lang === 'ar'?(
<ArabicDashboard />
      ):(
<EnglishDashboard />

      )}
      
    </div>
  )
}



export default Dashboard;