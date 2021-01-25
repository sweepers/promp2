import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import '../css/home.css'
import Logo from '../assets/logo_prompt.svg'
import Docs from '../assets/doc.svg'
import IdCard from '../assets/idcard.svg'
import Stamp from '../assets/stamp.svg'
import Arrowright from '../assets/arrow-right.svg'
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
   
      <div className="container">
        <div className="row mt-5 mb-5">
            <div className="col-lg-6 bg-home-left" style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
      
    }}>
              <div class="row  justify-content-center">
                <div className="col-10 pt-5">
                    <Logo />
                    <div class="pt-3">
                      <h1>
                        ยินดีต้อนรับสู่บริการ<br/>
                        จดทะเบียนจัดตั้งบริษัท
                      </h1>
                      
                    </div>
                    <div class="pt-25  font-22">
                      <span className="white">PROMPT Corpate Registration</span><br />
                      <span  >ก้าวแรกสู่</span><span className="white bold" >ความสำเร็จ</span><span>ของธุรกิจคุณ</span>
                    </div>
                    
                    
                </div>
              </div>
      
              
            
            
            </div>
            <div className="col-lg-6 text-center">
                <div class="pt-3">
                <h2>โปรดเตรียมเอกสารและข้อมูลต่อไปนี้ให้พร้อม</h2>
                <h2>ก่อนเริ่มขั้นตอนต่อไป</h2>
              
                </div>
                
                
                <div class="row justify-content-center pt-5">
                  <div class="col-3 text-center ">
                    <div className="number_border">1</div>
                    <div className="h-7">
                      <Docs />
                    </div>
                    
                    
                    ทะเบียนบ้าน<br />
                    ของที่ตั้งสำนักงาน
                  </div>
                  <div class="col-3 ">
                  <div className="number_border">2</div>
                    <div className="h-7">
                      <IdCard />
                    </div>
                    
                    บัตรประชาชน/<br />
                    หนังสือผู้รับรองผู้ถือหุ้น
                  </div>
                  <div class="col-3 ">
                  <div className="number_border">3</div>
                  <div className="h-7">
                      <IdCard />
                    </div>
                    บัตรประชาชน<br />
                    ผู้ก่อตั้ง
                  </div>
              </div>
              <div class="row justify-content-center pt-5 pb-5">
                  <div class="col-3 ">
                  <div className="number_border">4</div>
                    <div className="h-7">
                      <IdCard />
                    </div>
                    
                    บัตรประชาชน<br />
                    กรรมการ
                  </div>
                  <div class="col-3 ">
                    <div className="number_border">5</div>
                    <div className="h-7">
                      <Stamp />
                    </div>
                    
                     ไฟล์ตราประทับ<br />
                    (ถ้ามี)
                  </div>
                 
              </div>
            
              <Link className="navbar-item" className="btn-start" to="/user/form_company">
                เริ่มดำเนินการ <Arrowright  />
              </Link>
             
            </div>
        </div>
        
      </div>
   
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
