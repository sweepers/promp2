import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Sitebarleft from '../../components/sidebar-left'
import Sitebarsubleft from '../../components/sidebarsub-left'
import Documentsvg from '../../assets/document.svg'
import { Link } from 'gatsby'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
    this.handleClick = this.handleClick.bind(this);
    this.state = {step: 1};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }
  handleClick(e) {
   
    this.setState({ step:'last'})
  }

  render() {
    
    let content_right = this.step1();
    if(this.state.step == 1){
      
    }else{
       content_right = this.steplast();
    }
   
    return (
   
      <Layout >
        <Navbar />
       
        <div className="bg-grey">
        <div className="container pt-5">
            <div className="row ">
                <Sitebarleft />

                <div className="col-md-12 col-lg-8 ">
                    <div className="bg-white">
                        <div className="row">
                            <Sitebarsubleft />
                            
                            { content_right }
                          
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        
        
      </Layout>
    )
  }
  step1(){
    return (
      <div className="col-7 mt-5 text-grey">
          <b>แบบฟอร์มกรอกข้อมูล</b> <br />
          โปรดรอการตรวจสอบและยืนยันการจองชื่อ
          <div className="border-orange mt-3 mr-3">
            <div className="row">
              <div className="col-2 pl-4 align-self-center"><Documentsvg /></div>
              <div className="col-7 p-2">
                <h4 className="c-main">แบบฟอร์มการจดทะเบียน
จัดตั้งบริษัท</h4>
              </div>
              <div className="col-3 p-3 align-self-center"><span className="c-main cursor" onClick={this.handleClick}>ตรวจสอบ</span></div>
              
            
            </div>
          </div>
          
      </div>
    );
  }
  steplast(){
    return (
      <div className="col-7 text-center align-self-center">
          ส่งแบบคำขอจดทะเบียนบริษัท <br />
          กรุณาตรวจสอบความถูกต้องของข้อมูลก่อนส่งแบบคำขอ
       
      </div>
    );
  }
}
