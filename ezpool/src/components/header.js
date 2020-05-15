import React from 'react';
import logo from './pool-together--white-logo@2x.png';
import logo2 from './argent.png';
import logo3 from './appstore.png';
import '../App.css';

console.log(logo);

function Header(){
 

    return (
        <div id="header">
        <img id="logo" src={logo} alt="pool together logo" />
        
            <hr />
            <h1>WELCOME TO EZ POOL</h1>
            <h2>A Fast and Easy Gateway to Saving Money with Pool Together for New Users</h2>
                   
                    <div class="grid-container">
                        <div class="item1">
                       
                        <h2>Features:  (will be word art or animated)</h2>
                            
                            <h3>Zero transaction fees</h3>
                            <h3>Start saving within 10 minutes</h3>
                            <h3>Instant "Know your Customer" Verification</h3>
                            <h3>Tutorial on converting your Dai back into Dollars</h3>
                        
                        </div>
                        <div class="item2">
                        <center><iframe title="EZ Pool Welcome Video" src="https://www.youtube.com/embed/TzhaJ4XyNdE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>


                        </div>
                        <div class="item3">
                        <h2>Requirements: (will be animated)</h2>
                            
                            <h3>Android or Apple Smart Phone</h3>
                            <h3>Government Issued Identity Document</h3>
                            <h3>Debit or Credit Card</h3>
                        

                        </div>
                            <div class="item4">
<h3>STEP 1: Install Argent Wallet</h3>
<center><img id="logo2" src={logo2} alt="Argent Wallet Logo" /></center><br /> 
<center><img id="logo3" src={logo3} alt="pool together logo" /></center>

                            </div>
                            <div class="item5">
                            This flexbox will link to Pool Together with the instructions to "connect wallet" via wallet connect



                            </div>
                            <div class="item6">
                                
                        
                            </div>
                             <div class="item7"></div> 
                    </div>
                    <hr />
                    

        </div>

    );
  

  
}

export default Header;
