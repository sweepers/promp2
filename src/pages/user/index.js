import React from 'react'
//import * as firebase from "firebase/app"
import firebase from 'firebase';
import 'firebase/database'
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"
import "firebase/storage"
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Sitebarleft from '../../components/sidebar-left'
import Sitebarsubleft from '../../components/sidebarsub-left'
import Documentsvg from '../../assets/document.svg'
import Arrowright from '../../assets/arrow-right.svg'
import { Link } from 'gatsby'


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    if (!firebase.apps.length) {
      var firebaseConfig = {
          apiKey: "AIzaSyAh-79toPF9pZO3kBUlUBA4Dy8X-7EWQ4U",
          authDomain: "promp-c6f68.firebaseapp.com",
          databaseURL: "https://promp-c6f68-default-rtdb.firebaseio.com",
          projectId: "promp-c6f68",
          storageBucket: "promp-c6f68.appspot.com",
          messagingSenderId: "234208904228",
          appId: "1:234208904228:web:56988528a850f030de04b1",
          measurementId: "G-2BM5S48DB0"
      };
      firebase.initializeApp(firebaseConfig);
  }
    let companies = firebase.database().ref('company/');
    var lists = [];
    companies.on('value',snapshot=>{
      snapshot.forEach(function(data){
            
          var dat = data.val();
          dat.app_id = data.key;
          //console.log('ab'+data.key,data.val());
        
                  
          lists.push(dat);
         
          
          
      });
      
      this.setState({ lists: lists });
    //  lists.push(snapshot.val());
       
    }).bind(this);
   
   
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
    console.log('list_data',this.state.lists);
    var listdata = '';
    if(this.state.lists){
      listdata = this.state.lists.map((data) =>
      <div className="border-orange mt-3 mr-3">
        <div className="row">
          <div className="col-2 pl-4 align-self-center"><Documentsvg /></div>
          
          <div className="col-6 p-3 align-self-center">
            <Link className="c-main cursor"  to={"/user/form_company?id="+data.app_id}>
            ตรวจสอบ
            </Link><br />
            <b>Company Name</b> : { data.company_name_en }<br />
            <b>ชื่อบริษัท</b> : { data.company_name }
          </div>
          
        
        </div>
        
      </div>
      );
    }
    return (
      <div className="col-7 mt-5 text-grey">
        
          โปรดรอการตรวจสอบและยืนยันการจองชื่อ<br />
          
         { listdata }
          
          
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
