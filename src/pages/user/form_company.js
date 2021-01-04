import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Sitebarleft from '../../components/sidebar-left'
import Sitebarsubleft from '../../components/sidebarsub-left'
import Documentsvg from '../../assets/document.svg'
import Sitebarsformleft from '../../components/sidebarform-left'
import Arrowright from '../../assets/arrow-right.svg'
import Uploadcloud from '../../assets/upload-cloud.svg'
import DatePicker from 'react-date-picker'
import { Link } from 'gatsby'
//import { navigate } from "gatsby"

import { addLooseExports } from 'acorn'

//upload-cloud
export default class Form_company extends React.Component {
    constructor(props) {
        super(props)
        //this.state = { isValidated: false }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {step: 1};
        this.clickStep = this.clickStep.bind(this);
        
       
      }
      clickStep(e) {
        
        this.setState({ step:e})
      }
      handleSubmit(e){
        navigate("/user")
      }
    
      render() {
        
        let content_right = this.company();
        if(this.state.step == 2){
            content_right = this.addess_company();
        }
        if(this.state.step == 3){
            content_right = this.shareholder();
        }
        if(this.state.step == 4){
            content_right = this.capital();
        }
        if(this.state.step == 5){
            content_right = this.startcompany();
        }
        if(this.state.step == 6){
            content_right = this.directinformation();
            

        }
        if(this.state.step == 7){
            content_right = this.meeting();
            

        }
          return (
            <Layout > 
                <Navbar />
                <div className="bg-grey">
        <div className="container pt-5">
            <div className="row ">
                    <Sitebarsformleft />

                <div className="col-md-12 col-lg-8 bg-white">
                    <div className="bg-white">
                        <div className="row">
                           
                            { content_right }
                            
                          
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
            </Layout>
          );
      }
      meeting(){
       
          return (
            <div className="col-12 mt-5 text-grey pb-3">
                <h3>การประชุมจัดตั้ง</h3>
                <div className="row">
                    <div className="form-group  col-lg-6">
                        <label className="label" for="meeting_date">เลือกวัน</label>
                        <DatePicker
                    
                                isOpen="true"
                        />
                    </div>
                    <div className="form-group  col-lg-6">
                        <label className="label" for="meeting_date">เลือกเวลา</label>
                        <ul className="row">
                            <li className="col-4  "><div className="time-bg">09:00 น.</div></li>
                            <li className="col-4  "><div className="time-bg">10:00 น.</div></li>
                            <li className="col-4  "><div className="time-bg">11:00 น.</div></li>
                            <li className="col-4  "><div className="time-bg">12:00 น.</div></li>
                            <li className="col-4  "><div className="time-bg">13:00 น.</div></li>
                            <li className="col-4  "><div className="time-bg time-active">14:00 น.</div></li>
                            <li className="col-4  "><div className="time-bg">15:00 น.</div></li>
                            <li className="col-4  "><div className="time-bg">16:00 น.</div></li>
                            <li className="col-4  "><div className="time-bg">17:00 น.</div></li>
                        </ul>
                    </div>

                </div>
                <h3>สถานที่</h3>
                <div className="row">
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="meeting_address_no">เลขที่*</label>
                        <input type="text" name="meeting_address_no" class="form-control" id="meeting_address_no" placeholder="เลขที่"></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="meeting_address_tower">อาคาร</label>
                        <input type="text" name="meeting_address_tower" class="form-control" id="meeting_address_tower" placeholder="อาคารบ้าน"></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="meeting_address_level">ชั้น</label>
                        <input type="text" name="meeting_address_level" class="form-control" id="meeting_address_level" placeholder="ชั้น"></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="meeting_address_level">ห้องเลขที่</label>
                        <input type="text" name="meeting_address_room" class="form-control" id="meeting_address_room" placeholder="ห้องเลขที่"></input>
                    </div>

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="meeting_address_no">ซอย</label>
                        <input type="text" name="meeting_address_soi" class="form-control" id="meeting_address_soi" placeholder="ซอย"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="meeting_address_road">ถนน</label>
                        <input type="text" name="meeting_address_road" class="form-control" id="meeting_address_road" placeholder="ถนน"></input>
                    </div>
                    <div className="form-group col-lg-4">
                        <label className="label" for="meeting_address_province">จังหวัด</label>
                        <select class="form-control" name="meeting_address_province" id="meeting_address_province">
                            <option value="" selected>--------- เลือกจังหวัด ---------</option>
                            <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                            <option value="กระบี่">กระบี่ </option>
                            <option value="กาญจนบุรี">กาญจนบุรี </option>
                            <option value="กาฬสินธุ์">กาฬสินธุ์ </option>
                            <option value="กำแพงเพชร">กำแพงเพชร </option>
                            <option value="ขอนแก่น">ขอนแก่น</option>
                            <option value="จันทบุรี">จันทบุรี</option>
                            <option value="ฉะเชิงเทรา">ฉะเชิงเทรา </option>
                            <option value="ชัยนาท">ชัยนาท </option>
                            <option value="ชัยภูมิ">ชัยภูมิ </option>
                            <option value="ชุมพร">ชุมพร </option>
                            <option value="ชลบุรี">ชลบุรี </option>
                            <option value="เชียงใหม่">เชียงใหม่ </option>
                            <option value="เชียงราย">เชียงราย </option>
                            <option value="ตรัง">ตรัง </option>
                            <option value="ตราด">ตราด </option>
                            <option value="ตาก">ตาก </option>
                            <option value="นครนายก">นครนายก </option>
                            <option value="นครปฐม">นครปฐม </option>
                            <option value="นครพนม">นครพนม </option>
                            <option value="นครราชสีมา">นครราชสีมา </option>
                            <option value="นครศรีธรรมราช">นครศรีธรรมราช </option>
                            <option value="นครสวรรค์">นครสวรรค์ </option>
                            <option value="นราธิวาส">นราธิวาส </option>
                            <option value="น่าน">น่าน </option>
                            <option value="นนทบุรี">นนทบุรี </option>
                            <option value="บึงกาฬ">บึงกาฬ</option>
                            <option value="บุรีรัมย์">บุรีรัมย์</option>
                            <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์ </option>
                            <option value="ปทุมธานี">ปทุมธานี </option>
                            <option value="ปราจีนบุรี">ปราจีนบุรี </option>
                            <option value="ปัตตานี">ปัตตานี </option>
                            <option value="พะเยา">พะเยา </option>
                            <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา </option>
                            <option value="พังงา">พังงา </option>
                            <option value="พิจิตร">พิจิตร </option>
                            <option value="พิษณุโลก">พิษณุโลก </option>
                            <option value="เพชรบุรี">เพชรบุรี </option>
                            <option value="เพชรบูรณ์">เพชรบูรณ์ </option>
                            <option value="แพร่">แพร่ </option>
                            <option value="พัทลุง">พัทลุง </option>
                            <option value="ภูเก็ต">ภูเก็ต </option>
                            <option value="มหาสารคาม">มหาสารคาม </option>
                            <option value="มุกดาหาร">มุกดาหาร </option>
                            <option value="แม่ฮ่องสอน">แม่ฮ่องสอน </option>
                            <option value="ยโสธร">ยโสธร </option>
                            <option value="ยะลา">ยะลา </option>
                            <option value="ร้อยเอ็ด">ร้อยเอ็ด </option>
                            <option value="ระนอง">ระนอง </option>
                            <option value="ระยอง">ระยอง </option>
                            <option value="ราชบุรี">ราชบุรี</option>
                            <option value="ลพบุรี">ลพบุรี </option>
                            <option value="ลำปาง">ลำปาง </option>
                            <option value="ลำพูน">ลำพูน </option>
                            <option value="เลย">เลย </option>
                            <option value="ศรีสะเกษ">ศรีสะเกษ</option>
                            <option value="สกลนคร">สกลนคร</option>
                            <option value="สงขลา">สงขลา </option>
                            <option value="สมุทรสาคร">สมุทรสาคร </option>
                            <option value="สมุทรปราการ">สมุทรปราการ </option>
                            <option value="สมุทรสงคราม">สมุทรสงคราม </option>
                            <option value="สระแก้ว">สระแก้ว </option>
                            <option value="สระบุรี">สระบุรี </option>
                            <option value="สิงห์บุรี">สิงห์บุรี </option>
                            <option value="สุโขทัย">สุโขทัย </option>
                            <option value="สุพรรณบุรี">สุพรรณบุรี </option>
                            <option value="สุราษฎร์ธานี">สุราษฎร์ธานี </option>
                            <option value="สุรินทร์">สุรินทร์ </option>
                            <option value="สตูล">สตูล </option>
                            <option value="หนองคาย">หนองคาย </option>
                            <option value="หนองบัวลำภู">หนองบัวลำภู </option>
                            <option value="อำนาจเจริญ">อำนาจเจริญ </option>
                            <option value="อุดรธานี">อุดรธานี </option>
                            <option value="อุตรดิตถ์">อุตรดิตถ์ </option>
                            <option value="อุทัยธานี">อุทัยธานี </option>
                            <option value="อุบลราชธานี">อุบลราชธานี</option>
                            <option value="อ่างทอง">อ่างทอง </option>
                            <option value="อื่นๆ">อื่นๆ</option>
                        </select>

                    </div>
                   

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="meeting_address_state">เขต</label>
                        <input type="text" name="meeting_address_state" class="form-control" id="meeting_address_state" placeholder="เขต"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="meeting_address_dist">แขวง</label>
                        <input type="text" name="meeting_address_dist" class="form-control" id="meeting_address_dist" placeholder="แขวง"></input>
                    </div>
                    <div className="form-group col-lg-4">
                        <label className="label" for="meeting_address_postcode">รหัสไปรษณีย์</label>
                        <input type="text" name="meeting_address_postcode" class="form-control" id="meeting_address_postcode" placeholder="รหัสไปรษณีย์"></input>

                    </div>
                    

                </div>
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-4">
                        <button className="btn-company-add"  onClick={(e) => { this.handleSubmit() }}  value="1">SAVE </button>
                    </div>

                </div>
            </div>
          );
      }
      directinformation(){
        return (
            <div className="col-12 mt-5 text-grey pb-3">
                <h3>ข้อมูลกรรมการ</h3>
                <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label" >กรรมการ คนที่ 1</label>
                    
                    </div>
                    
                    

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharedirect_title1">คำนำหน้า</label>
                        <select class="form-control" name="sharedirect_title1" id="sharedirect_title1">
                            <option value="" selected>--------- คำนำหน้า ---------</option>
                            <option value="นางสาว">นางสาว</option>
                            <option value="นาง">นาง</option>
                            <option value="นาง">นาย</option>
                            
                        </select>
                       
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharedirect_firstname1">ชื่อ</label>
                        <input type="text" name="sharestart_firssharedirect_firstname1tname1" class="form-control" id="sharedirect_firstname1" placeholder="ชื่อ"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharedirect_lastname1">นามสกุล</label>
                        <input type="text" name="sharedirect_lastname1" class="form-control" id="sharedirect_lastname1" placeholder="นามสกุล"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharesdirect_phone1">หมายเลขโทรศัพท์</label>
                        <input type="text" name="sharestart_psharesdirect_phone1hone1" class="form-control" id="sharesdirect_phone1" placeholder="หมายเลขโทรศัพท์"></input>
                    </div>
                    <div className="form-group  col-lg-8">
                        <label className="label" for="sharedirect_firstname1">อัพโหลดบัตรประชาชน</label>
                        <label class="custom-file-upload">
                            <input type="file"/>
                            <Uploadcloud /> 
                            Choose File
                        </label>
                    </div>

                </div>
                <hr className="hr_organge" />
                <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label" >กรรมการ คนที่ 2</label>
                    
                    </div>
                    
                    

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharesdirect_title2">คำนำหน้า</label>
                        <select class="form-control" name="sharesdirect_title2" id="sharesdirect_title2">
                            <option value="" selected>--------- คำนำหน้า ---------</option>
                            <option value="นางสาว">นางสาว</option>
                            <option value="นาง">นาง</option>
                            <option value="นาง">นาย</option>
                            
                        </select>
                       
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharedirect_firstname2">ชื่อ</label>
                        <input type="text" name="sharedirect_firstname2" class="form-control" id="sharedirect_firstname2" placeholder="ชื่อ"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharedirect_lastname2">นามสกุล</label>
                        <input type="text" name="sharestart_lasharedirect_lastname2stname2" class="form-control" id="sharedirect_lastname2" placeholder="นามสกุล"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharedirect_phone2">หมายเลขโทรศัพท์</label>
                        <input type="text" name="sharedirect_phone2" class="form-control" id="sharedirect_phone2" placeholder="หมายเลขโทรศัพท์"></input>
                    </div>
                    <div className="form-group  col-lg-8">
                        <label className="label" for="sharedirect_firstname2">อัพโหลดบัตรประชาชน</label>
                        <label class="custom-file-upload">
                            <input type="file"/>
                            <Uploadcloud /> 
                            Choose File
                        </label>
                    </div>

                </div>
                <hr className="hr_organge" />
                <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label" >กรรมการ คนที่ 3</label>
                    
                    </div>
                    
                    

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharedirect_title3">คำนำหน้า</label>
                        <select class="form-control" name="sharedirect_title3" id="sharedirect_title3">
                            <option value="" selected>--------- คำนำหน้า ---------</option>
                            <option value="นางสาว">นางสาว</option>
                            <option value="นาง">นาง</option>
                            <option value="นาง">นาย</option>
                            
                        </select>
                       
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharedirect_firstname3">ชื่อ</label>
                        <input type="text" name="sharedirect_firstname3" class="form-control" id="sharedirect_firstname3" placeholder="ชื่อ"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharedirect_lastname3">นามสกุล</label>
                        <input type="text" name="sharestart_lastnsharedirect_lastname3ame3" class="form-control" id="sharedirect_lastname3" placeholder="นามสกุล"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharedirect_phone3">หมายเลขโทรศัพท์</label>
                        <input type="text" name="sharedirect_phone3" class="form-control" id="sharedirect_phone3" placeholder="หมายเลขโทรศัพท์"></input>
                    </div>
                    <div className="form-group  col-lg-8">
                        <label className="label" for="sharedirect_firstname3">อัพโหลดบัตรประชาชน</label>
                        <label class="custom-file-upload">
                            <input type="file"/>
                            <Uploadcloud /> 
                            Choose File
                        </label>
                    </div>

                </div>
                <hr className="hr_organge" />
                <div className="form-group">
                    <label lassName="label" for="sharedirect_sign">การลงอำนาจของกรรมการ*</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sharedirect_sign" id="sharedirect_sign" value="อำนาจกรรมการแบบไม่ระบุชื่อ (กรรมการ x คน ลงลายมือชื่อ และประทับตราบริษัท)"  />
                        <label class="form-check-label" for="exampleRadios1">
                        อำนาจกรรมการแบบไม่ระบุชื่อ (กรรมการ x คน ลงลายมือชื่อ และประทับตราบริษัท)
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sharedirect_sign" id="sharedirect_sign2" value="อำนาจกรรมการแบบระบุชื่อ"  />
                        <label class="form-check-label" for="exampleRadios2">
                        อำนาจกรรมการแบบระบุชื่อ
                        </label>
                    </div>
                    
                </div>
                <hr className="hr_organge" />
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-4">
                        <button className="btn-company-add"  onClick={(e) => { this.clickStep(7) }}  value="1">NEXT <Arrowright /></button>
                    </div>

                </div>
                
            </div>
            
            
          );

      }
      startcompany(){

        return (
            <div className="col-12 mt-5 text-grey pb-3">
                <h3>ข้อมูลผู้ก่อตั้งบริษัท</h3>
                <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label" >ผู้ก่อตั้ง คนที่ 1</label>
                    
                    </div>
                    
                    

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_title1">คำนำหน้า</label>
                        <select class="form-control" name="sharestart_title1" id="sharestart_title1">
                            <option value="" selected>--------- คำนำหน้า ---------</option>
                            <option value="นางสาว">นางสาว</option>
                            <option value="นาง">นาง</option>
                            <option value="นาง">นาย</option>
                            
                        </select>
                       
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_firstname1">ชื่อ</label>
                        <input type="text" name="sharestart_firstname1" class="form-control" id="sharestart_firstname1" placeholder="ชื่อ"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_lastname1">นามสกุล</label>
                        <input type="text" name="sharestart_lastname1" class="form-control" id="sharestart_lastname1" placeholder="นามสกุล"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_phone1">หมายเลขโทรศัพท์</label>
                        <input type="text" name="sharestart_phone1" class="form-control" id="sharestart_phone1" placeholder="หมายเลขโทรศัพท์"></input>
                    </div>
                    <div className="form-group  col-lg-8">
                        <label className="label" for="shareholder_firstname1">อัพโหลดบัตรประชาชน</label>
                        <label class="custom-file-upload">
                            <input type="file"/>
                            <Uploadcloud /> 
                            Choose File
                        </label>
                    </div>

                </div>
                <hr className="hr_organge" />
                <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label" >ผู้ก่อตั้ง คนที่ 2</label>
                    
                    </div>
                    
                    

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_title2">คำนำหน้า</label>
                        <select class="form-control" name="sharestart_title2" id="sharestart_title2">
                            <option value="" selected>--------- คำนำหน้า ---------</option>
                            <option value="นางสาว">นางสาว</option>
                            <option value="นาง">นาง</option>
                            <option value="นาง">นาย</option>
                            
                        </select>
                       
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_firstname2">ชื่อ</label>
                        <input type="text" name="sharestart_firstname2" class="form-control" id="sharestart_firstname2" placeholder="ชื่อ"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_lastname2">นามสกุล</label>
                        <input type="text" name="sharestart_lastname2" class="form-control" id="sharestart_lastname2" placeholder="นามสกุล"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_phone2">หมายเลขโทรศัพท์</label>
                        <input type="text" name="sharestart_phone2" class="form-control" id="sharestart_phone2" placeholder="หมายเลขโทรศัพท์"></input>
                    </div>
                    <div className="form-group  col-lg-8">
                        <label className="label" for="shareholder_firstname2">อัพโหลดบัตรประชาชน</label>
                        <label class="custom-file-upload">
                            <input type="file"/>
                            <Uploadcloud /> 
                            Choose File
                        </label>
                    </div>

                </div>
                <hr className="hr_organge" />
                <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label" >ผู้ก่อตั้ง คนที่ 3</label>
                    
                    </div>
                    
                    

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_title3">คำนำหน้า</label>
                        <select class="form-control" name="sharestart_title3" id="sharestart_title3">
                            <option value="" selected>--------- คำนำหน้า ---------</option>
                            <option value="นางสาว">นางสาว</option>
                            <option value="นาง">นาง</option>
                            <option value="นาง">นาย</option>
                            
                        </select>
                       
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_firstname3">ชื่อ</label>
                        <input type="text" name="sharestart_firstname3" class="form-control" id="sharestart_firstname3" placeholder="ชื่อ"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_lastname3">นามสกุล</label>
                        <input type="text" name="sharestart_lastname3" class="form-control" id="sharestart_lastname3" placeholder="นามสกุล"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_phone3">หมายเลขโทรศัพท์</label>
                        <input type="text" name="sharestart_phone3" class="form-control" id="sharestart_phone3" placeholder="หมายเลขโทรศัพท์"></input>
                    </div>
                    <div className="form-group  col-lg-8">
                        <label className="label" for="shareholder_firstname2">อัพโหลดบัตรประชาชน</label>
                        <label class="custom-file-upload">
                            <input type="file"/>
                            <Uploadcloud /> 
                            Choose File
                        </label>
                    </div>

                </div>
                <hr className="hr_organge" />
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-4">
                        <button className="btn-company-add"  onClick={(e) => { this.clickStep(6) }}  value="1">NEXT <Arrowright /></button>
                    </div>

                </div>
                
            </div>
            
            
          );
      }
      capital(){
        return (
            <div className="col-12 mt-5 text-grey pb-3">
                 <h3>ทุนจดทะเบียน</h3>
                 <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label" for="capital_share">จำนวนหุ้น</label>
                        <input class="form-check-input-inline" type="radio" name="capital_share"  value="มีหุ้นบริสุทธิ์" />
                        <label class="form-check-label" for="inlineRadio1">มีหุ้นบริสุทธิ์</label>
                    </div>
                    <div className="form-group  col-lg-3">
                        <label>มูลค่าหุ้น</label>
                        <input type="text" name="capital_shareprice" class="form-control" id="capital_shareprice" placeholder="จำนวน"></input>
                    </div>

                 </div>
                 <div className="row">
                    <div className="form-group  col-lg-3">
                        <label>ชำระค่าหุ้นในวันจดทะเบียน</label>
                       
                    </div>
                    <div className="form-group  col-lg-3">
                        <label>25% 50% 75% 100%</label>
                       
                    </div>

                 </div>
                 <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label">ผู้ถือหุ้นที่ 1</label>
                       
                    </div>
                    <div className="form-group  col-lg-3">
                        <input type="text" name="capital_sharenumber1" class="form-control" id="capital_sharenumber1" placeholder="จำนวนหุ้นสามัญ"></input><br />
                        <input type="text" name="capital_sharenumber1" class="form-control" id="capital_sharepure1" placeholder="จำนวนหุ้นบุริมสิทธิ์"></input>
                       
                    </div>

                 </div>
                 <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label">ผู้ถือหุ้นที่ 2</label>
                       
                    </div>
                    <div className="form-group  col-lg-3">
                        <input type="text" name="capital_sharenumber2" class="form-control" id="capital_sharenumber2" placeholder="จำนวนหุ้นสามัญ"></input><br />
                        <input type="text" name="capital_sharenumber2" class="form-control" id="capital_sharepure2" placeholder="จำนวนหุ้นบุริมสิทธิ์"></input>
                       
                    </div>

                 </div>
                 <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label">ผู้ถือหุ้นที่ 3</label>
                       
                    </div>
                    <div className="form-group  col-lg-3">
                        <input type="text" name="capital_sharenumber3" class="form-control" id="capital_sharenumber3" placeholder="จำนวนหุ้นสามัญ"></input><br />
                        <input type="text" name="capital_sharenumber3" class="form-control" id="capital_sharepure3" placeholder="จำนวนหุ้นบุริมสิทธิ์"></input>
                       
                    </div>

                 </div>
                 <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-4">
                        <button className="btn-company-add"  onClick={(e) => { this.clickStep(5) }}  value="1">NEXT <Arrowright /></button>
                    </div>

                </div>
            </div>
        );

      }
      shareholder(){
        return (
            <div className="col-12 mt-5 text-grey pb-3">
                <h3>ข้อมูลผู้ถือหุ้น</h3>
                <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label" >ผู้ถือหุ้น คนที่ 1</label>
                    
                    </div>
                    <div className="form-group col-lg-2">
                        <input class="form-check-input" type="radio" name="shareholder_type1"  value="บุคคลธรรมดา" />
                        <label class="form-check-label" for="inlineRadio1">บุคคลธรรมดา</label>
                    </div>
                    <div className="form-group col-lg-2">
                        <input class="form-check-input" type="radio" name="shareholder_type1"  value="นิติบุคคล" />
                        <label class="form-check-label" for="inlineRadio1">นิติบุคคล</label>
                    </div>
                    

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="shareholder_title1">คำนำหน้า</label>
                        <select class="form-control" name="shareholder_title1" id="shareholder_title1">
                            <option value="" selected>--------- คำนำหน้า ---------</option>
                            <option value="นางสาว">นางสาว</option>
                            <option value="นาง">นาง</option>
                            <option value="นาง">นาย</option>
                            
                        </select>
                       
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="shareholder_firstname1">ชื่อ</label>
                        <input type="text" name="shareholder_firstname1" class="form-control" id="shareholder_firstname1" placeholder="ชื่อ"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="shareholder_lastname1">นามสกุล</label>
                        <input type="text" name="shareholder_lastname1" class="form-control" id="shareholder_lastname1" placeholder="นามสกุล"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="shareholder_firstname1">หมายเลขโทรศัพท์</label>
                        <input type="text" name="shareholder_phone1" class="form-control" id="shareholder_phone1" placeholder="หมายเลขโทรศัพท์"></input>
                    </div>
                    <div className="form-group  col-lg-8">
                        <label className="label" for="shareholder_firstname1">อัพโหลดบัตรประชาชน</label>
                        <label class="custom-file-upload">
                            <input type="file"/>
                            <Uploadcloud /> 
                            Choose File
                        </label>
                    </div>

                </div>
                <hr className="hr_organge" />
                <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label" >ผู้ถือหุ้น คนที่ 2</label>
                    
                    </div>
                    <div className="form-group col-lg-2">
                        <input class="form-check-input" type="radio" name="shareholder_type2"  value="บุคคลธรรมดา" />
                        <label class="form-check-label" for="inlineRadio2">บุคคลธรรมดา</label>
                    </div>
                    <div className="form-group col-lg-2">
                        <input class="form-check-input" type="radio" name="shareholder_type2"  value="นิติบุคคล" />
                        <label class="form-check-label" for="inlineRadio2">นิติบุคคล</label>
                    </div>
                    

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="shareholder_title2">คำนำหน้า</label>
                        <select class="form-control" name="shareholder_title2" id="shareholder_title2">
                            <option value="" selected>--------- คำนำหน้า ---------</option>
                            <option value="นางสาว">นางสาว</option>
                            <option value="นาง">นาง</option>
                            <option value="นาง">นาย</option>
                            
                        </select>
                       
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="shareholder_firstname2">ชื่อ</label>
                        <input type="text" name="shareholder_firstname2" class="form-control" id="shareholder_firstname2" placeholder="ชื่อ"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="shareholder_lastname2">นามสกุล</label>
                        <input type="text" name="shareholder_lastname2" class="form-control" id="shareholder_lastname2" placeholder="นามสกุล"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="shareholder_firstname2">หมายเลขโทรศัพท์</label>
                        <input type="text" name="shareholder_phone2" class="form-control" id="shareholder_phone2" placeholder="หมายเลขโทรศัพท์"></input>
                    </div>
                    <div className="form-group  col-lg-8">
                        <label className="label" for="shareholder_firstname2">อัพโหลดบัตรประชาชน</label>
                        <label class="custom-file-upload">
                            <input type="file"/>
                            <Uploadcloud /> 
                            Choose File
                        </label>
                    </div>

                </div>
                <hr className="hr_organge" />
                <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label" >ผู้ถือหุ้น คนที่ 3</label>
                    
                    </div>
                    <div className="form-group col-lg-2">
                        <input class="form-check-input" type="radio" name="shareholder_type3"  value="บุคคลธรรมดา" />
                        <label class="form-check-label" for="inlineRadio3">บุคคลธรรมดา</label>
                    </div>
                    <div className="form-group col-lg-2">
                        <input class="form-check-input" type="radio" name="shareholder_type3"  value="นิติบุคคล" />
                        <label class="form-check-label" for="inlineRadio3">นิติบุคคล</label>
                    </div>
                    

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="shareholder_title3">คำนำหน้า</label>
                        <select class="form-control" name="shareholder_title3" id="shareholder_title3">
                            <option value="" selected>--------- คำนำหน้า ---------</option>
                            <option value="นางสาว">นางสาว</option>
                            <option value="นาง">นาง</option>
                            <option value="นาง">นาย</option>
                            
                        </select>
                       
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="shareholder_firstname3">ชื่อ</label>
                        <input type="text" name="shareholder_firstname3" class="form-control" id="shareholder_firstname3" placeholder="ชื่อ"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="shareholder_lastname3">นามสกุล</label>
                        <input type="text" name="shareholder_lastname3" class="form-control" id="shareholder_lastname3" placeholder="นามสกุล"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="shareholder_firstname3">หมายเลขโทรศัพท์</label>
                        <input type="text" name="shareholder_phone3" class="form-control" id="shareholder_phone3" placeholder="หมายเลขโทรศัพท์"></input>
                    </div>
                    <div className="form-group  col-lg-8">
                        <label className="label" for="shareholder_firstname1">อัพโหลดบัตรประชาชน</label>
                        <label class="custom-file-upload">
                            <input type="file"/>
                            <Uploadcloud /> 
                            Choose File
                        </label>
                    </div>

                </div>
                <hr className="hr_organge" />
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-4">
                        <button className="btn-company-add"  onClick={(e) => { this.clickStep(4) }}  value="1">NEXT <Arrowright /></button>
                    </div>

                </div>
                
            </div>
            
            
          );

      }
      addess_company(){
     
        return (
            <div className="col-12 mt-5 text-grey pb-3">
                <h3>ที่อยู่บริษัท</h3>
                <div className="row">
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="address_no">เลขที่*</label>
                        <input type="text" name="address_no" class="form-control" id="address_no" placeholder="เลขที่"></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="address_tower">อาคาร</label>
                        <input type="text" name="address_tower" class="form-control" id="address_tower" placeholder="อาคารบ้าน"></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="address_level">ชั้น</label>
                        <input type="text" name="address_level" class="form-control" id="address_level" placeholder="ชั้น"></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="address_level">ห้องเลขที่</label>
                        <input type="text" name="address_room" class="form-control" id="address_room" placeholder="ห้องเลขที่"></input>
                    </div>

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="address_no">ซอย</label>
                        <input type="text" name="address_soi" class="form-control" id="address_soi" placeholder="ซอย"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="address_road">ถนน</label>
                        <input type="text" name="address_road" class="form-control" id="address_road" placeholder="ถนน"></input>
                    </div>
                    <div className="form-group col-lg-4">
                        <label className="label" for="address_province">จังหวัด</label>
                        <select class="form-control" name="address_province" id="address_province">
                            <option value="" selected>--------- เลือกจังหวัด ---------</option>
                            <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                            <option value="กระบี่">กระบี่ </option>
                            <option value="กาญจนบุรี">กาญจนบุรี </option>
                            <option value="กาฬสินธุ์">กาฬสินธุ์ </option>
                            <option value="กำแพงเพชร">กำแพงเพชร </option>
                            <option value="ขอนแก่น">ขอนแก่น</option>
                            <option value="จันทบุรี">จันทบุรี</option>
                            <option value="ฉะเชิงเทรา">ฉะเชิงเทรา </option>
                            <option value="ชัยนาท">ชัยนาท </option>
                            <option value="ชัยภูมิ">ชัยภูมิ </option>
                            <option value="ชุมพร">ชุมพร </option>
                            <option value="ชลบุรี">ชลบุรี </option>
                            <option value="เชียงใหม่">เชียงใหม่ </option>
                            <option value="เชียงราย">เชียงราย </option>
                            <option value="ตรัง">ตรัง </option>
                            <option value="ตราด">ตราด </option>
                            <option value="ตาก">ตาก </option>
                            <option value="นครนายก">นครนายก </option>
                            <option value="นครปฐม">นครปฐม </option>
                            <option value="นครพนม">นครพนม </option>
                            <option value="นครราชสีมา">นครราชสีมา </option>
                            <option value="นครศรีธรรมราช">นครศรีธรรมราช </option>
                            <option value="นครสวรรค์">นครสวรรค์ </option>
                            <option value="นราธิวาส">นราธิวาส </option>
                            <option value="น่าน">น่าน </option>
                            <option value="นนทบุรี">นนทบุรี </option>
                            <option value="บึงกาฬ">บึงกาฬ</option>
                            <option value="บุรีรัมย์">บุรีรัมย์</option>
                            <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์ </option>
                            <option value="ปทุมธานี">ปทุมธานี </option>
                            <option value="ปราจีนบุรี">ปราจีนบุรี </option>
                            <option value="ปัตตานี">ปัตตานี </option>
                            <option value="พะเยา">พะเยา </option>
                            <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา </option>
                            <option value="พังงา">พังงา </option>
                            <option value="พิจิตร">พิจิตร </option>
                            <option value="พิษณุโลก">พิษณุโลก </option>
                            <option value="เพชรบุรี">เพชรบุรี </option>
                            <option value="เพชรบูรณ์">เพชรบูรณ์ </option>
                            <option value="แพร่">แพร่ </option>
                            <option value="พัทลุง">พัทลุง </option>
                            <option value="ภูเก็ต">ภูเก็ต </option>
                            <option value="มหาสารคาม">มหาสารคาม </option>
                            <option value="มุกดาหาร">มุกดาหาร </option>
                            <option value="แม่ฮ่องสอน">แม่ฮ่องสอน </option>
                            <option value="ยโสธร">ยโสธร </option>
                            <option value="ยะลา">ยะลา </option>
                            <option value="ร้อยเอ็ด">ร้อยเอ็ด </option>
                            <option value="ระนอง">ระนอง </option>
                            <option value="ระยอง">ระยอง </option>
                            <option value="ราชบุรี">ราชบุรี</option>
                            <option value="ลพบุรี">ลพบุรี </option>
                            <option value="ลำปาง">ลำปาง </option>
                            <option value="ลำพูน">ลำพูน </option>
                            <option value="เลย">เลย </option>
                            <option value="ศรีสะเกษ">ศรีสะเกษ</option>
                            <option value="สกลนคร">สกลนคร</option>
                            <option value="สงขลา">สงขลา </option>
                            <option value="สมุทรสาคร">สมุทรสาคร </option>
                            <option value="สมุทรปราการ">สมุทรปราการ </option>
                            <option value="สมุทรสงคราม">สมุทรสงคราม </option>
                            <option value="สระแก้ว">สระแก้ว </option>
                            <option value="สระบุรี">สระบุรี </option>
                            <option value="สิงห์บุรี">สิงห์บุรี </option>
                            <option value="สุโขทัย">สุโขทัย </option>
                            <option value="สุพรรณบุรี">สุพรรณบุรี </option>
                            <option value="สุราษฎร์ธานี">สุราษฎร์ธานี </option>
                            <option value="สุรินทร์">สุรินทร์ </option>
                            <option value="สตูล">สตูล </option>
                            <option value="หนองคาย">หนองคาย </option>
                            <option value="หนองบัวลำภู">หนองบัวลำภู </option>
                            <option value="อำนาจเจริญ">อำนาจเจริญ </option>
                            <option value="อุดรธานี">อุดรธานี </option>
                            <option value="อุตรดิตถ์">อุตรดิตถ์ </option>
                            <option value="อุทัยธานี">อุทัยธานี </option>
                            <option value="อุบลราชธานี">อุบลราชธานี</option>
                            <option value="อ่างทอง">อ่างทอง </option>
                            <option value="อื่นๆ">อื่นๆ</option>
                        </select>

                    </div>
                   

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="address_state">เขต</label>
                        <input type="text" name="address_state" class="form-control" id="address_state" placeholder="เขต"></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="address_dist">แขวง</label>
                        <input type="text" name="address_dist" class="form-control" id="address_dist" placeholder="แขวง"></input>
                    </div>
                    <div className="form-group col-lg-4">
                        <label className="label" for="address_postcode">รหัสไปรษณีย์</label>
                        <input type="text" name="address_postcode" class="form-control" id="address_postcode" placeholder="รหัสไปรษณีย์"></input>

                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="address_home_code">รหัสประจำบ้าน</label>
                        <input type="text" name="address_home_code" class="form-control" id="address_home_code" placeholder="รหัสประจำบ้าน"></input>
                    </div>

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="address_phone">โทรศัพท์</label>
                        <input type="text" name="address_phone" class="form-control" id="address_phone" placeholder="โทรศัพท์"></input>
                    </div>
                    <div className="form-group  col-lg-8">
                        <label className="label" for="address_email">E-mail</label>
                        <input type="text" name="address_email" class="form-control" id="address_email" placeholder="E-mail"></input>
                    </div>
                    <div className="form-group  col-lg-12">
                        <label className="label" for="address_map">แผนที่</label>
                        <input type="text" name="address_map" class="form-control" id="address_map" placeholder="Link Google Map"></input>
                    </div>
                    
                </div>
                
                
                <div className="form-group">
                    <label className="label" >สำเนาทะเบียนบ้านของที่ตั้งสำนักงาน</label>
                    Upload สำเนาทะเบียนบ้านของที่ตั้งสำนักงาน
                </div>
                <div className="row">
                   
                    <div className="col-5 mt-5 text-center">
                    <label class="custom-file-upload">
                        <input type="file"/>
                         อัพโหลดสำเนาทะเบียนบ้าน
                    </label>
                    </div>
                    <div className="col-7 mt-5">
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-4">
                        <button className="btn-company-add"  onClick={(e) => { this.clickStep(3) }}  value="1">NEXT <Arrowright /></button>
                    </div>

                </div>
                
            </div>
            
            
          );

      }
      company(){
       
        return (
            <div className="col-12 mt-5 text-grey pb-3">
                <h3>ข้อมูลบริษัท</h3>
                <div className="form-group">
                    <label className="label" for="CompanyNameInput">ชื่อบริษัท</label>
                    <input type="text" class="form-control" id="CompanyNameInput" placeholder="ชื่อบริษัท(ภาษาอังกฤษ)"></input>
                </div>
                <div className="form-group">
                    <label className="label" >ตราประทับ</label>
                    ในกรณีที่ตราประทับมีชื่อบริษัท จะต้องระบุคำว่า บริษัท นำหน้าชื่อ และคำว่า จำกัด ตามหลังชื่อด้วย
                </div>
                <div className="row">
                   
                    <div className="col-5 mt-5 text-center">
                    <label class="custom-file-upload">
                        <input type="file"/>
                         Upload Stamp
                    </label>
                    </div>
                    <div className="col-7 mt-5">
                        <label for="StampInput">เลือกตราประทับแบบมาตรฐาน*</label>
                        <div className="form-group">
                            
                         
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="select_stamp"  value="circle" />
                                <label class="form-check-label" for="inlineRadio1">วงกลม</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="select_stamp"  value="ellipse" />
                                <label class="form-check-label" for="inlineRadio1">วงรี</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="select_stamp"  value="squre" />
                                <label class="form-check-label" for="inlineRadio1">สี่เหลี่ยม</label>
                            </div>

                        </div>
                        <label for="BuyStampInput">สั่งทำตรายาง</label>
                        <div className="form-group">
                            <div  class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="buy_stamp"  value="buy" />
                                <label class="form-check-label" for="inlineRadio1">สั่งทำตรายาง</label>
                            </div>
                            <div class="block-qty clearfix">
											  <div class="quantity-grup quantity-box clearfix"  >
											
												<div class="le-quantity">

													 <a class="minus" href="#reduce">-</a>
													 <input name="qty[0]" type="text" value="1" id="qty_val" />
													 <a class="plus" href="#add">+</a>

												</div>
												
											  </div>   
										</div> 
                        </div>
                    </div>
                
                </div>
                <div className="form-group">
                    <label lassName="label" for="purposecompany">วัตถุประสงค์บริษัท*</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="purposecompany" id="exampleRadios1" value="ธุรกิจค้าขาย"  />
                        <label class="form-check-label" for="exampleRadios1">
                            ธุรกิจค้าขาย
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="purposecompany" id="exampleRadios2" value="ธุรกิจบริการ"  />
                        <label class="form-check-label" for="exampleRadios2">
                        ธุรกิจบริการ
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="purposecompany" id="exampleRadios3" value="ธุรกิจการผลิตสินค้าอุตสาหกรรมหรือหัตถกรรม"  />
                        <label class="form-check-label" for="exampleRadios3">
                        ธุรกิจการผลิตสินค้าอุตสาหกรรมหรือหัตถกรรม
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="purposecompany" id="exampleRadios4" value="ธุรกิจเกษตรกรรม"  />
                        <label class="form-check-label" for="exampleRadios4">
                        ธุรกิจเกษตรกรรม
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="purposecompany" id="exampleRadios5" value="สำนักงานผู้แทน"  />
                        <label class="form-check-label" for="exampleRadios5">
                        สำนักงานผู้แทน
                        </label>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-4">
                        <button className="btn-company-add"  onClick={(e) => { this.clickStep(2) }}  value="1">NEXT <Arrowright /></button>
                    </div>

                </div>
                
            </div>
            
            
          );
      }
}