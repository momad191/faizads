import React, { Fragment } from 'react';
 
const reputations = () => {
  return (
    <Fragment>

        
  
     
     <h1 className="middle text-primary"><i className="fas fa-star"></i> SRF reputation system</h1>
     
     <p className="lead"><i class="fas fa-square"></i> Introduction</p>
     <p className="my-1">
       Simply, reputation here is defined as a system of votes gained (and sometimes lost) as a result of members interactions and engagement in the website. The net sum of gains and losses translates into an overall metric that achieves two things: rewards commitment to SRF scope and regulations and penalizes the lack of adherence to these.
       Our aim is to make SRF central to Sudanese research and science hence we have an interest in encouraging creation of good quality posts in this website and preventing proliferation of low quality posts. Success in this responsibility requires the participation of all SRF members. With this aim in mind we devised a reputation system that ensures we all stay within the SRF scope.
       The fairness of this reputation system comes from the fact that it gives all SRF members the ability to cast votes as a form of expression on posts quality and fate. Remember, voting places power in your hand and with power comes a great responsibility and comes the need to know your obligations too. For SRF admins, this voting system removes the need to exercise any form of benevolent dictatorship-a burden we are happy to shed off.
       One final note before getting into details of the reputation system; SRF preserves the right to improve the way the voting & reputation ranking system works and we continue to monitor the various components under the hood that do the bulk of reputation calculations.
     </p>
     
     
   <p className="lead"><i className="fas fa-square"></i> Why</p>
   <p className="my-1">
   Several forums and website use some form of reputation systems (Facebook Like button is an example of a reputation system). There is a remarkable attribute distinguishing the Sudanese SRF members from members of other forums. We boast of being very civic in our online interaction and there is this Sudanese trait of genuinely wishing everyone well. The supportive behavior displayed by our members in the Facebook group encourages us to adopt a voting system that translates this trait into a positive outcome.
   Members will have the chance to take charge in guiding their journey within SRF; effectively building a scientific platform with a core Sudanese spirit. Here are only some of the various ways a voting system will be useful to SRF and to our members experience.
   <li>Give members the responsibility and obligation to participate in website maintenance.</li>
   <li>The upvotes and downvotes help guide the “robots” that do much of the hard work in SRF.</li>
   <li>Highlight featured posts.</li>
   <li>Highlight outperforming members.</li>
   <li>Clean noncompliant content and ensure quality of SRF content.</li>
   </p>
     
     
   
   <p className="lead"><i className="fas fa-square"></i>What are the results of giving and receiving votes?</p>
   <p className="my-1">
   Members are free to dispense their votes however & wherever they see fit. Mind you that any incentives and restrictions in place are only there to encourage positive voting behavior. For instance, if a member spends all his votes within the 24 hour period since receiving them he could be rewarded with an increase in his reputation because he kept being active. If a member decides to act maliciously and all he ever does with his daily vote quota is downvoting other members posts; he might risk losing some of his reputation.
   The owner of a post will be rewarded with reputation gain/loss dependent on the count of upvotes/downvotes they receive. Receiving few downvotes here and there will not result in any loss of points anyways. However, if the post was truly non compliant with SRF rules & regulations, then receiving more downvotes will alert the admins and robots for interventions. If the post was really seriously bad, alba3ati will get mad and he has the power to take appropriate action to correct this.
   </p>
   
   
   
   <p className="lead"><i className="fas fa-square"></i> Who gives the votes, who has them ?:</p>
   <p className="my-1">
   Everyday each member is assigned a finite number of votes to cast on posts published by other SRF members. The votes are minted every 24 hours. The higher the rank of the member the bigger is their votes quota (and therefore the more responsibility they will have). Any unused votes in a given day will not be carried over with the next vote assignment.
   </p>
   
   
   
   <p className="lead"><i className="fas fa-square"></i> What are the results of giving and receiving votes?</p>
   <p className="my-1">
   Members are free to dispense their votes however & wherever they see fit. Mind you that any incentives and restrictions in place are only there to encourage positive voting behavior. For instance, if a member spends all his votes within the 24 hour period since receiving them he could be rewarded with an increase in his reputation because he kept being active. If a member decides to act maliciously and all he ever does with his daily vote quota is downvoting other members posts; he might risk losing some of his reputation.
   The owner of a post will be rewarded with reputation gain/loss dependent on the count of upvotes/downvotes they receive. Receiving few downvotes here and there will not result in any loss of points anyways. However, if the post was truly non compliant with SRF rules & regulations, then receiving more downvotes will alert the admins and robots for interventions. If the post was really seriously bad, alba3ati will get mad and he has the power to take appropriate action to correct this.
   </p>
   
   
   <p className="lead"><i className="fas fa-square"></i>  Calculating reputation gain and loss:</p>
   <p className="my-1">
   The formulas that translate voting into reputation gains are not direct forward, they take into consideration few additional details such as the member’s current reputation; the SRF overall reputation dynamics over the past one week; the age of the post receiving the votes and the member’s current rank. Our tip for you is: your votes and opinions are precious; downvote in a constructive manner, upvote in a constructive manner.
   To simplify it, consider reputation gains and losses to come from two independent sources:
   </p>
   
   <li>Your voting behavior towards a member's post.</li>
   <li>Other members voting behavior towards your post.</li>
   <p class="my-1">
   Your voting behavior is tracked through a moving average bounded between +1 & -1. The more upvotes than downvotes the member gives; his moving average will lean closer to +1 and effectively the odds of him gaining a reputation point add up. As long as that moving average is in the positive range occasional downvotes by you on deserving bad posts will not put you in risk of losing reputation; in fac, you might get rewarded with reputation gains for helping SRF to stay clean from useless content.
   If, on the other hand, you manage to swing your moving average towards the negative side by excessively downvoting others maliciously; you are ncreasinf the odds of losing a reputation point. The negative moving average in this case can be swung back to the positive side if you spend few votes giving upvotes.
   The threshold for calculating reputation gains and losses changes daily based on the collective voting behavior of all SRF members over the past week. If a member creates a post that receives upvotes there is a one to one correspondence between his reputation gain and the first upvote he gets. Beyond that--dependent on how high above the daily threshold his post upvotes are--one of several alternative odds will sum up with every subsequent upvote, these sums will be translated into reputation gains.
   The story is a bit different for downvotes; the intention is to cushion against deep reputation falls. For example, any downvotes received on a post that is older than two weeks will not cause its owner to lose reputation. Similarly, posts receiving few negative downvotes will not negatively have an effect on their owner’s reputation until the downvotes exceed a certain threshold.
   As your reputation increase you will move to the next level.
   </p>
   
   
   <p className="lead"><i className="fas fa-square"></i> Featuring posts:</p>
   <p className="my-1">
   On any given day, week, month and year we will feature the 10 best posts for that time window. This is a very interesting outcome of the voting system idea because your voting will help the robots responsible for this activity identify high quality posts so outperforming members get the recognition they deserve.
   Generally, the robots will decide on the best posts by combining the number of upvotes and downvotes. The candidate posts will then be sorted according to these two criteria. That’s all !.
   </p>
   
   
   <p className="lead"><i className="fas fa-square"></i> Ranks list: </p>
   <p className="my-1">
   
   </p>
   
 
                          <div className="card-body">
                               <div className="table-responsive">
                                   <table className="table table-striped table-bordered first">
                                       <thead>
                                           <tr>
                                               <th><h1 className="middle text-primary">Level</h1></th>
                                               <th><h1 className="middle text-primary">Min Reputation Required</h1></th>
                                               <th><h1 className="middle text-primary">Points Required for Promotion</h1></th>
                                               <th><h1 className="middle text-primary">Daily Votes Quota</h1></th>
                                                
                                           </tr>
                                       </thead>
                                       <tbody>
                                           <tr>
                                               <td><p className="level-gry">Level1</p> </td>
                                               <td>0</td>
                                               <td>40</td>
                                               <td>1</td>
                                                
                                               
                                           </tr>
                                            <tr>
                                               <td><p className="level-gry">Level2</p> </td>
                                               <td>40</td>
                                               <td>40</td>
                                               <td>2</td>
                                              
                                               
                                           </tr>
                                            <tr>
                                               <td><p className="level-gry">Level3</p> </td>
                                               <td>80</td>
                                               <td>80</td>
                                               <td>4</td>
                                           </tr>
                                           
                                             <tr>
                                               <td><p className="level-gry">Level4</p> </td>
                                               <td>160</td>
                                               <td>80</td>
                                               <td>6</td>
                                           </tr>
                                           
                                             <tr>
                                               <td><p className="level-gry">Level5</p> </td>
                                               <td>240</td>
                                               <td>100</td>
                                               <td>8</td>
                                           </tr>
                                           
                                           
                                           <tr>
                                               <td><p className="level-pink">Level6</p> </td>
                                               <td>340</td>
                                               <td>400</td>
                                               <td>10</td>
                                           </tr>
                                           <tr>
                                               <td><p className="level-pink">Level7</p> </td>
                                               <td>740</td>
                                               <td>500</td>
                                               <td>12</td>
                                           </tr>
                                           <tr>
                                               <td><p className="level-pink">Level8</p> </td>
                                               <td>1240</td>
                                               <td>500</td>
                                               <td>14</td>
                                           </tr>
                                           <tr>
                                               <td><p className="level-pink">Level9</p> </td>
                                               <td>1740</td>
                                               <td>860</td>
                                               <td>16</td>
                                           </tr>
                                           <tr>
                                               <td><p className="level-pink">Level10</p> </td>
                                               <td>2600</td>
                                               <td>860</td>
                                               <td>18</td>
                                           </tr>
                                           
                                           
                                           <tr>
                                               <td><p className="level-blue">Level11</p> </td>
                                               <td>3460</td>
                                               <td>1000</td>
                                               <td>20</td>
                                           </tr>
                                           
                                           <tr>
                                               <td><p className="level-blue">Level12</p> </td>
                                               <td>4460</td>
                                               <td>1000</td>
                                               <td>22</td>
                                           </tr>
                                           
                                           
                                           <tr>
                                               <td><p className="level-blue">Level13</p> </td>
                                               <td>5460</td>
                                               <td>1000</td>
                                               <td>24</td>
                                           </tr>
                                           
                                           <tr>
                                               <td><p className="level-blue">Level14</p> </td>
                                               <td>6460</td>
                                               <td>1140</td>
                                               <td>26</td>
                                           </tr>
                                           
                                           
                                           <tr>
                                               <td><p className="level-blue">Level15</p> </td>
                                               <td>7600</td>
                                               <td>1200</td>
                                               <td>28</td>
                                           </tr>
                                           
                                           
                                           
                                           <tr>
                                               <td><p className="level-green">Level16</p> </td>
                                               <td>880</td>
                                               <td>1300</td>
                                               <td>30</td>
                                           </tr>
                                           
                                           
                                           
                                           <tr>
                                               <td><p className="level-green">Level17</p> </td>
                                               <td>10100</td>
                                               <td>1500</td>
                                               <td>32</td>
                                           </tr>
                                           
                                           
                                           
                                           <tr>
                                               <td><p className="level-green">Level18</p> </td>
                                               <td>11600</td>
                                               <td>200</td>
                                               <td>34</td>
                                           </tr>
                                           
                                           
                                           <tr>
                                               <td><p className="level-yellow">Level19</p> </td>
                                               <td>13600</td>
                                               <td>-1</td>
                                               <td>36</td>
                                           </tr>
                                           
                                           
                                           
                                           
                                       </tbody>
                                       <tfoot>
                                           <tr>
                                                <th> .</th>
                                                <th> </th>
                                                <th> </th>
                                                <th> </th>
                                                
                                               
                                               
                                           </tr>
                                       </tfoot>
                                   </table>
                               </div>
                           </div>
                           
                                           
                                        


         
   
    </Fragment>
  );
};






export default reputations;
