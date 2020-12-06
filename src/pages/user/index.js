import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Sitebarleft from '../../components/sidebar-left'
import Sitebarsubleft from '../../components/sidebarsub-left'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
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

  render() {
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
                            <div className="col-7 text-center text-middle">
                                ส่งแบบคำขอจดทะเบียนบริษัท <br />
                                โปรดรอการตรวจสอบและยืนยันการจองชื่อ
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        
        
      </Layout>
    )
  }
}
