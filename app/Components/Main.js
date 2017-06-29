// Include React
var React = require("react");
import { Row , Col } from "antd";
import Header from "./Section/Header";
import Footer from "./Section/Footer";


var Main = React.createClass({

  render(){

    return (
      //Grid from antd
      <Row type="flex" justify="center">

        <Col span={12} >

          <Header selectedKeys="mail"/>
               <h1 className="header_title">{this.props.title}</h1>
               <p className="head_description">the desc would be hear</p>          
          <Footer/>

        </Col>

      </Row>
   
       
    );

    }

});

// Export the component back for use in other files
module.exports = Main;