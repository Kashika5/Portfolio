import React, { Component } from "react";
import { greeting } from '../Name';
import './footer.css'

class Footer extends Component {
    render() {
      console.log("")
      return (
        <div className="foot">
          
 
      


          <p>Made with <a href="https://github.com/kashika5"></a> <span role="img" aria-label="Heart"> ❤️ </span> by { greeting.full_name } </p>
          
        </div>
      );
    }
  }
  
  export default Footer;