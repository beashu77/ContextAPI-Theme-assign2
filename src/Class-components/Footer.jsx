import React from 'react';


const Footer = () => {
  let footerStyle={
    width:"100%",
    marginTop:"300px",
    positon:"relative",
    backgroundColor:"grey",
    color:"white",
    padding:"25px",
    height:"400px"

  }
  return (
    
        <footer style={footerStyle}>
          <div>
            copyright "&" todos
             <br></br>
            
A web-based app to manage your tasks, timesheets, documents and expenses.

Follow Us
   
NAVIGATION
Home
Pricing
Team
Reviews
Mobile
Login
Sign Up
Contact Us
Information
Tour
Privacy Policy
Security Policy
Terms of Service
Cancellation
Contact Us
USA/Canada: 866.259.2454
International: +1.418.907.5184

Websystems Inc.
400-1280 Boul Lebourgneuf
Quebec, QC, G2K 0H1
Canada


          </div>
        </footer>
      
  )
} 

export default Footer