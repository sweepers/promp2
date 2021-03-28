import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import firebase from 'gatsby-plugin-firebase';
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
import linces_1 from '../../images/linces_1.png'
import arrowleft from '../../images/arrow-left.png'
import arrowright from '../../images/arrow-right.png'
import { Link } from 'gatsby'
//import { navigate } from "gatsby"

import { addLooseExports } from 'acorn'
import { forInRight } from 'lodash'


//upload-cloud
export default class Form_company extends React.Component {
    constructor(props) {
        super(props)
        //this.state = { isValidated: false }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.state = {step: 1,counth:4,countha:4,counthb:4, qty:1,data:[],clicksign:[]};

        this.clickStep = this.clickStep.bind(this);
        this.clickBack = this.clickBack.bind(this);
        this.clickHolder = this.clickHolder.bind(this);
        this.clickHoldera = this.clickHoldera.bind(this);
        this.clickHolderb = this.clickHolderb.bind(this);
        this.changeQty = this.changeQty.bind(this);
        this.chengedirect_title_name = this.chengedirect_title_name.bind(this);

      }
      handleDateChange(event){
          
        const items = this.state.data;
       items['meeting_date'] = event;
       this.setState({data: items});
        //const { name, value,id } = event.target;
        console.log('datepicker',event);
      }
      handleChange(event) {

        const { name, value,id } = event.target;

       // console.log(name,event.target.value);
       // let dat = data.event.target.name;
       const items = this.state.data;
       items[name] = value;
       console.log('value',value);
       if(event.target.classList.contains('calshare')){

           this.calshare();
       }
       if(event.target.classList.contains('calnormal')){

            this.calnormal();
       }
       if(event.target.classList.contains('sendsign')){

          // let aid = id.replace('sendsign');
          let checked = event.target.checked;
          const items = this.state.data;
          var y = [];
          if(items['clicksign']){
            y = items['clicksign']
          }
          if(checked){

            y.push(value);
            console.log('y',y);
            //y.push(val);

            //this.clicksign.push(value);
          }else{
            const index = y.indexOf(value, 0);
            if (index > -1) {
               y.splice(index, 1);
            }

          /*  y = [].map.call(y, function( input ) {
                console.log('input',input);
                if(input != value){
                    v .push(value);
                }
                //return {'value':input.value};
            });*/

            console.log('y',y);

          }
        items['clicksign'] = y;
          this.setState({data: items});

           console.log('aid',items);

       }
       if(name == 'purposecompany'){
            var eleo = document.getElementById('purposecompany_other');
           if(value == 'อื่น ๆ'){

            eleo.classList.remove("hide");
           }else{
            eleo.classList.add("hide");
           }

       }

       if(event.target.required){
            var elementc = document.getElementById('div-'+id);
            var ele = document.getElementById(id);
           if(!value){
            elementc.style.display = 'block';
            ele.classList.add("has-errors");
           }else{
            elementc.style.display = 'none';
            ele.classList.remove("has-errors");
           }

       }

       //items.company_name = event.target.value;
       this.setState({data: items});
      }

      changeQty(type){
        let qty = this.state.qty;
        if(type == 'plus'){
            qty = qty+1;
        }else{
            qty = qty-1;
        }
        if(qty < 1){
            qty = 1;
        }

        this.setState({ qty:qty})
      }
      clickHolder(value){

          if(value <= 4){
            this.state.counth = 4;
            this.setState({ counth:4})
          }else{
            this.state.counth = value;
            this.setState({ counth:value})
          }

          if(this.state.countha < this.state.counth){
            this.setState({ countha:this.state.counth})

          }

      }
      clickHoldera(value){

        if(value <= 4){
          this.state.countha = 4;
          this.setState({ countha:4})
        }else{
          this.state.countha = value;
          this.setState({ countha:value})
        }



    }
    clickHolderb(value){

        if(value <= 2){
          this.state.counthb = 2;
          this.setState({ counthb:2})
        }else{
          this.state.counthb = value;
          this.setState({ counthb:value})
        }



    }
      clickStep(e) {
          let id = e-1;
          console.log('id',id);
          if(e == 5){
            let items = this.state.data;
            if(!items['sharestart_firstname[1]']){
              let b = 1;
               for (let i = 1; i < this.state.counth; i++) {


                    if(items['shareholder_type['+i+']'] == 'บุคคลธรรมดา'){

                        items['sharestart_title['+b +']'] = items['shareholder_title['+i+']'];
                        items['sharestart_firstname['+b +']'] = items['shareholder_firstname['+i+']'];
                        items['sharestart_lastname['+b +']'] = items['shareholder_lastname['+i+']'];
                        items['sharestart_phone['+b +']'] = items['shareholder_phone['+i+']'];



                        b++;
                    }



              }
              console.log('items',items);
              this.setState({data: items});

            }
            console.log(id);
          }
          if(e == 6){
            let items = this.state.data;
            if(!items['sharedirect_firstname[1]']){
              let b = 1;
               for (let i = 1; i < this.state.counth; i++) {


                    if(items['shareholder_type['+i+']'] == 'บุคคลธรรมดา'){
                        items['sharesdirect_title['+b +']'] = items['shareholder_title['+i+']'];
                        items['sharedirect_firstname['+b +']'] = items['shareholder_firstname['+i+']'];
                        items['sharedirect_lastname['+b +']'] = items['shareholder_lastname['+i+']'];
                        items['sharedirect_phone['+b +']'] = items['shareholder_phone['+i+']'];



                        b++;
                    }


                    this.setState({counthb: b});
              }
              console.log('items',items);
              this.setState({data: items});

            }
            console.log(id);
          }

          let error = false;
          var formdata = document.getElementById('form_'+id).getElementsByTagName('input')
            var form = [].map.call(formdata, function( input ) {

                if(input.required && !input.value){
                    var elementc = document.getElementById('div-'+input.id);
                    var ele = document.getElementById(input.id);
                    elementc.style.display = 'block';
                    ele.classList.add("has-errors");
                    error = true;

                }
                //return {'value':input.value};
            });
       //   let valid1 = this.form_validate('form_1');
            if(error){
                return false;
            }

        this.setState({ step:e})
      }
      clickBack(e) {


        this.setState({ step:e})
    }
      handleSubmit(e){
        /*let id = 7;
        let error = false;
        var formdata = document.getElementById('form_'+id).getElementsByTagName('input')
          var form = [].map.call(formdata, function( input ) {

              if(input.required && !input.value){
                  var elementc = document.getElementById('div-'+input.id);
                  var ele = document.getElementById(input.id);
                  elementc.style.display = 'block';
                  ele.classList.add("has-errors");
                  error = true;

              }
              //return {'value':input.value};
          });
     //   let valid1 = this.form_validate('form_1');
          if(error){
              return false;
          }*/

          //firebase.database().ref('company').push(this.state.data);
        navigate("/user")
      }

    chenge_title_name(e){
        let id = e.target.id
        let value = e.target.value
        id = id.replace('shareholder_title','');

        //let  element = document.getElementById("shareholder_titleother"+id);
        if(value == 'other'){
             document.getElementById("shareholder_titleother"+id).style.display = 'block';

           // $('.'+id).show();
        }else{
            document.getElementById("shareholder_titleother"+id).style.display = 'none';
        //    $('.'+id).hide();
        }
        let name = e.target.name;
        let items = this.state.data;
        items[name] = value;
        this.setState({data: items});

    }
    chengestart_title_name(e){
        let name = e.target.name;
        let id = e.target.id
        let value = e.target.value
        id = id.replace('sharestart_title','');

        //let  element = document.getElementById("shareholder_titleother"+id);
        if(value == 'other'){
             document.getElementById("sharestart_titleother"+id).style.display = 'block';

           // $('.'+id).show();
        }else{
            document.getElementById("sharestart_titleother"+id).style.display = 'none';
        //    $('.'+id).hide();
        }
        let items = this.state.data;
        items[name] = value;
        this.setState({data: items});

    }
    chengedirect_title_name(e){
        let name = e.target.name;
        let id = e.target.id
        let value = e.target.value
        id = id.replace('sharesdirect_title','');
        let items = this.state.data;
        items[name] = value;
        //let  element = document.getElementById("shareholder_titleother"+id);
        if(value == 'other'){
             document.getElementById("sharedirect_titleother"+id).style.display = 'block';

           // $('.'+id).show();
        }else{
            document.getElementById("sharedirect_titleother"+id).style.display = 'none';
        //    $('.'+id).hide();
        }
        this.setState({data: items});

    }
    change_typeholder(e){
      let name = e.target.name;
        let id = e.target.name
        let value = e.target.value
        id = id.replace('shareholder_type[','');
        id = id.replace(']','');
        let items = this.state.data;
       items[name] = value;

        if(value == 'บุคคลธรรมดา'){
            document.getElementById("block-shareholder_title"+id).style.display = 'block';
            document.getElementById("block-shareholder_lastname"+id).style.display = 'block';
            document.getElementById("block-shareholder_occ"+id).style.display = 'block';
            document.getElementById("shareholder_lastname"+id).setAttribute('required',true);
            document.getElementById("shareholder_occ"+id).setAttribute('required',true);

            //setAttribute
            document.getElementById("shareholder_fname"+id).innerHTML = 'ชื่อ *';
            document.getElementById("shareholder_idcard"+id).innerHTML = 'เลขบัตรประชาขน *';
            document.getElementById("shareholder_file"+id).innerHTML = 'อัพโหลดบัตรประชาชน';

          // $('.'+id).show();
       }else{
           //removeAttribute

            document.getElementById("block-shareholder_title"+id).style.display = 'none';
            document.getElementById("block-shareholder_lastname"+id).style.display = 'none';
            document.getElementById("block-shareholder_occ"+id).style.display = 'none';
            document.getElementById("shareholder_lastname"+id).removeAttribute('required');
            document.getElementById("shareholder_occ"+id).removeAttribute('required');

            document.getElementById("shareholder_lastname"+id).classList.remove("has-errors");
            document.getElementById("shareholder_occ"+id).classList.remove("has-errors");
           document.getElementById("shareholder_fname"+id).innerHTML= 'ชื่อนิติบุคคล *';
           document.getElementById("shareholder_idcard"+id).innerHTML = 'เลขทะเบียนนิติบุคคล *';
           document.getElementById("shareholder_file"+id).innerHTML = 'อัพโหลดหนังสือรับรองบริษัท';
       //    $('.'+id).hide();
       }
       this.setState({data: items});

    }

    change_buy(e){

        let checked = e.target.checked
        if(checked){
            document.getElementById("block-type").style.display = 'block';
            document.getElementById("block-qty").style.display = 'block';


        }else{
            document.getElementById("block-type").style.display = 'none';
            document.getElementById("block-qty").style.display = 'none';

        }



    }
     iterate(item, index, array) {
        console.log(item);
        if (index === array.length - 1) {
          console.log('The last iteration!');
        }
      }

     calnormal(){
        const items = this.state.data;

        var cal = 0*1;
        var elems = document.querySelectorAll(".calnormal");
        /*this.state.data.capital_sharepure.forEach(function(newItem) {
            alert(newItem);
          }, this);    */
          [].forEach.call(elems, function(el) {
              if(el.value > 0){
                cal += el.value*1
              }

         });
         items['capital_sharecount'] = cal
         console.log('cal',cal);
        this.setState({ data:items})
         //capital_sharecount
     }
      // logs "blue"
    calshare(){
        const items = this.state.data;

        var cal = 0*1;
        var elems = document.querySelectorAll(".calshare");
        /*this.state.data.capital_sharepure.forEach(function(newItem) {
            alert(newItem);
          }, this);    */
          [].forEach.call(elems, function(el) {
              if(el.value > 0){
                cal += el.value*1
              }

         });
         items['capital_shareallstock'] = cal
         console.log('cal',cal);
        this.setState({ data:items})
    }
    change_capital_share(e){
       // alert( );
      //var class_share =  document.getElementsByClassName("capital_sharepure");
      //var ele = document.getElementsByClassName('capital_sharepure');
      var elems = document.querySelectorAll(".capital_sharepure");

        [].forEach.call(elems, function(el) {
           if(e.target.checked == true){
            el.classList.remove("hide");
            el.setAttribute('required',true);

      }else{
        el.classList.add("hide");
        el.removeAttribute('required');
      }
        });
     //class_share.disabled = false;

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
        if(this.state.step == 8){
            content_right = this.presave();


        }
          return (
            <Layout >
                <Navbar />
                <div className="bg-grey">
        <div className="container pt-5">
            <div className="row ">
                   { this.sidebarleft() }
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
      sidebarleft(){
          return (
              <div className="col-md-12 col-lg-4 bg-yellow sidebar-form" >

                <ol>
                    <li onClick={(e) => { this.clickBack(1) }} className={ (this.state.step==1 ? 'is-active' : '')}>
                        ข้อมูลบริษัท
                    </li>
                    <li onClick={(e) => { this.clickBack(2) }} className={ (this.state.step==2 ? 'is-active' : '')}  >ที่อยู่บริษัท</li>
                    <li onClick={(e) => { this.clickBack(3) }}  className={ (this.state.step==3 ? 'is-active' : '')}>ข้อมูลผู้ถือหุ้น</li>
                    <li onClick={(e) => { this.clickBack(4) }} className={ (this.state.step==4 ? 'is-active' : '')}>ทุนจดทะเบียน</li>

                    <li onClick={(e) => { this.clickBack(5) }} className={ (this.state.step==5 ? 'is-active' : '')}>ข้อมูลผู้ก่อตั้ง</li>
                    <li onClick={(e) => { this.clickBack(6) }} className={ (this.state.step==6? 'is-active' : '')} >ข้อมูลกรรมการ</li>
                    <li onClick={(e) => { this.clickBack(7) }} className={ (this.state.step==7? 'is-active' : '')}>การประชุมผู้จัดตั้ง</li>

                </ol>
                <div id="linces_notice" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <h5>คำแนะนำการกรอกข้อมูล</h5>
                        <b>ทุนจดทะเบียน</b><br />
                        ระบบจะทำการตรวจสอบและยืนยันผลการจองชื่อบริษัท ในกรณีที่ชื่อบริษัทที่ท่านต้องการ ซ้ำ หรือออกเสียงตรงกัน หรือคล้ายคลึงกับนิติบุคคลอื่น ท่านจะได้รับการติดต่อจาก
พนักงานของเราเพื่อแก้ไขชื่อบริษัท
                        <div className="row">
                            <div className="col-6 mt-4">
                                <span>1</span>/3
                            </div>
                            <div className="col-6 text-right">
                            <img src={linces_1} />
                            </div>
                        </div>

                        </div>
                        <div class="carousel-item">
                            <h5>คำแนะนำการกรอกข้อมูล</h5>
                            <b>ทุนจดทะเบียน</b><br />
                            ระบบจะทำการตรวจสอบและยืนยันผลการจองชื่อบริษัท ในกรณีที่ชื่อบริษัทที่ท่านต้องการ ซ้ำ หรือออกเสียงตรงกัน หรือคล้ายคลึงกับนิติบุคคลอื่น ท่านจะได้รับการติดต่อจาก
    พนักงานของเราเพื่อแก้ไขชื่อบริษัท
                            <div className="row">
                                <div className="col-6 mt-4">
                                    <span>2</span>/3
                                </div>
                                <div className="col-6 text-right">
                                <img src={linces_1} />
                                </div>
                            </div>

                        </div>
                        <div class="carousel-item">
                            <h5>คำแนะนำการกรอกข้อมูล</h5>
                            <b>ทุนจดทะเบียน</b><br />
                            ระบบจะทำการตรวจสอบและยืนยันผลการจองชื่อบริษัท ในกรณีที่ชื่อบริษัทที่ท่านต้องการ ซ้ำ หรือออกเสียงตรงกัน หรือคล้ายคลึงกับนิติบุคคลอื่น ท่านจะได้รับการติดต่อจาก
    พนักงานของเราเพื่อแก้ไขชื่อบริษัท
                            <div className="row">
                                <div className="col-6 mt-4">
                                    <span>3</span>/3
                                </div>
                                <div className="col-6 text-right">
                                <img src={linces_1} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#linces_notice" role="button" data-slide="prev">
                        <img src={arrowleft} />
                    </a>
                    <a class="carousel-control-next" href="#linces_notice" role="button" data-slide="next">
                    <img src={arrowright} />
                    </a>
                </div>




            </div>
          );
      }
      pre_shareholder(i){

        return (
            <div>
                 <div className="row">
                  <div className="form-group  col-lg-3">
                      <label className="label" >ผู้ถือหุ้น คนที่ {i}</label>

                  </div>
                  <div className="form-group col-lg-2">
                    {this.state.data["shareholder_type["+i+"]"]}
                  </div>



              </div>
              <div className="row">
                  <div className="form-group  col-lg-4 row">
                      <label className="label col-6" for="shareholder_title1">คำนำหน้า</label>
                      <span className="col-6">{this.state.data['shareholder_title['+i+']']}</span>



                  </div>
                  <div className="form-group  col-lg-4 row">
                      <label className="label col-3" for="shareholder_title1">ชื่อ</label>
                      <span className="col-9">{this.state.data['shareholder_firstname['+i+']']}</span>



                  </div>
                  <div className="form-group  col-lg-4 row">
                      <label className="label col-3" for="shareholder_title1">นามสกุล</label>
                      <span className="col-9">{this.state.data['shareholder_lastname['+i+']']}</span>



                  </div>



                  <div className="form-group  col-lg-4 row">
                      <label className="label col-12" for={"shareholder_idcard"+i}>เลขบัตรประชาชน</label>
                      <span className="col-12">{this.state.data["shareholder_idcard["+i+"]"]}</span>
                  </div>
                  <div className="form-group  col-lg-4 row">
                      <label className="label col-3" for="shareholder_title1">อาชีพ</label>
                      <span className="col-9">{this.state.data['shareholder_occ['+i+']']}</span>



                  </div>

                  <div className="form-group  col-lg-4 row">
                      <label className="label col-12" for={"shareholder_idcard"+i}>หมายเลขโทรศัพท์</label>
                      <span className="col-12">{this.state.data["shareholder_phone["+i+"]"]}</span>
                  </div>


              </div>


            </div>
        );

    }
    pre_capital(i){

        return (
            <div>
                 <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label">ผู้ถือหุ้นที่ { i }</label>

                    </div>
                    <div className="form-group  col-lg-3">
                        {this.state.data["capital_sharenumber["+i+"]"]}
                    </div>

                 </div>
            </div>
        );

    }
    pre_startcompany(i){

        return (
            <div>
                 <div className="row">
                  <div className="form-group  col-lg-3">
                      <label className="label" >ผู้ก่อตั้ง คนที่ {i}</label>

                  </div>




              </div>
              <div className="row">
                  <div className="form-group  col-lg-4 row">
                      <label className="label col-6" for="shareholder_title1">คำนำหน้า</label>
                      <span className="col-6">{this.state.data['sharestart_title['+i+']']}</span>



                  </div>
                  <div className="form-group  col-lg-4 row">
                      <label className="label col-3" for="shareholder_title1">ชื่อ</label>
                      <span className="col-9">{this.state.data['sharestart_firstname['+i+']']}</span>



                  </div>
                  <div className="form-group  col-lg-4 row">
                      <label className="label col-3" for="shareholder_title1">นามสกุล</label>
                      <span className="col-9">{this.state.data['sharestart_lastname['+i+']']}</span>



                  </div>





                  <div className="form-group  col-lg-4 row">
                      <label className="label col-12" for={"shareholder_idcard"+i}>หมายเลขโทรศัพท์</label>
                      <span className="col-12">{this.state.data["sharestart_phone["+i+"]"]}</span>
                  </div>


              </div>


            </div>
        );

    }
    pre_directcompany(i){
        return (
            <div>
                <div className="row">
                  <div className="form-group  col-lg-3">
                      <label className="label" >กรรมการs คนที่ {i}</label>

                  </div>



              </div>

              <div className="row">
                <div className="form-group  col-lg-4 row">
                      <label className="label col-6" for="shareholder_title1">คำนำหน้า</label>
                      <span className="col-6">{this.state.data['sharesdirect_title['+i+']']}</span>



                  </div>
                  <div className="form-group  col-lg-4 row">
                      <label className="label col-3" for="shareholder_title1">ชื่อ</label>
                      <span className="col-9">{this.state.data['sharesdirect_firstname['+i+']']}</span>



                  </div>
                  <div className="form-group  col-lg-4 row">
                      <label className="label col-3" for="shareholder_title1">นามสกุล</label>
                      <span className="col-9">{this.state.data['sharesdirect_lastname['+i+']']}</span>



                  </div>





                  <div className="form-group  col-lg-4 row">
                      <label className="label col-12" for={"shareholder_idcard"+i}>หมายเลขโทรศัพท์</label>
                      <span className="col-12">{this.state.data["sharestart_phone["+i+"]"]}</span>
                  </div>



                  <div className="form-group  col-lg-4">
                  <div  class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox"  class="sendsign" id={"sendsign"+i}  checked={this.state.data["sharedirect_sign["+i+"]"] == i} onChange={this.handleChange.bind(this)} name={"sharedirect_sign["+i+"]"} value={i} />
                                <label class="form-check-label" for="inlineRadio1">มีอำนาจลงนาม</label>
                            </div>

                    </div>

              </div>

            </div>
        )
    }
    pre_related(m,r){
        let name = this.state.data["sharedirect_firstname["+r+"]"]+' '+this.state.data["sharedirect_lastname["+r+"]"];
        return (
          <div  class="form-check form-check-inline">

              <label class="form-check-label" for="inlineRadio1">{this.state.data["sharesdirect_title["+r+"]"]}{this.state.data["sharedirect_firstname["+r+"]"]} {this.state.data["sharedirect_lastname["+r+"]"]}</label>
          </div>
        );
    }
    pre_directsign(i,v, c,sign){
        let cb = [];
        for (let a = 0; a < c;a++) {
           // const index = y.indexOf(value, 0);
            if(a != i){
                cb.push(this.pre_related(v,sign[a]));
            }


        }

          return (
            <div className="row">
            <div className="form-group  pt-3 col-lg-12">
                <div className="row">
                    <label className=" col-3" for="power_type" >{ i+1 }.{this.state.data["sharesdirect_title["+v+"]"]} {this.state.data["sharedirect_firstname["+v+"]"]}  {this.state.data["sharedirect_lastname["+v+"]"]}</label>

                    <div className="col-2">
                        {this.state.data["types_sign["+v+"]"]}

                    </div>
                    <div  className={ (this.state.data["types_sign["+v+"]"]== 'คนเดียว' || !this.state.data["types_sign["+v+"]"] ? 'col-7 hide' : 'col-7')}>

                        { cb }
                    </div>
                </div>



            </div>

        </div>

          );
      }
      presave(){
        let content = [];
        let counth = 4;

        //alert(this.state.counth);
        for (let i = 1; i < this.state.counth; i++) {
          content.push(this.pre_shareholder(i)) ;

        }
        let contentcap = [];


        //alert(this.state.counth);
        for (let i = 1; i < this.state.counth; i++) {
            contentcap.push(this.pre_capital(i)) ;

        }
        let contentstart = [];



        for (let i = 1; i < this.state.countha; i++) {
            contentstart.push(this.pre_startcompany(i)) ;

        }

        let contentsa = [];
        let signs = [];
       let clicksign = [];
       if(this.state.data.clicksign){
        clicksign = this.state.data.clicksign;
       }

        for (let i = 1; i < this.state.counthb; i++) {
            contentsa.push(this.pre_directcompany(i)) ;

        }
        console.log('l',this.state.clicksign);
        if(clicksign.length > 0){
            for (let i = 0; i < clicksign.length; i++) {
                signs.push(this.pre_directsign(i,clicksign[i], clicksign.length,clicksign)) ;

            }
        }

          return (
            <div className="col-12 mt-5 text-grey pb-3">
                <h3>ข้อมูลบริษัท</h3>
                <div className="form-group row" >
                    <label className="label col-sm-3" for="CompanyNameInput">ชื่อบริษัท </label>
                    <span className="col-sm-9">{this.state.data.company_name}/{this.state.data.company_name_en}</span>

                </div>
                <div className="form-group row" >
                    <label className="label col-sm-3" for="CompanyNameInput">วัตถุประสงค์บริษัท </label>
                    <span className="col-sm-9">{this.state.data.purposecompany}</span>

                </div>
                <hr />
                <h3>ที่อยู่บริษัท</h3>
                <div className="row">
                    <div className="form-group col-md-6 col-lg-3 row">
                        <label className="label col-5" for="address_no">เลขที่ </label> <span className="col-7">{this.state.data.address_no }</span>


                    </div>
                    <div className="form-group col-md-6 col-lg-3 row">
                        <label className="label col-5" for="address_no">อาคาร </label> <span className="col-7">{this.state.data.address_tower }</span>

                    </div>
                    <div className="form-group col-md-6 col-lg-3 row">
                        <label className="label col-5" for="address_no">ชั้น </label> <span className="col-7">{this.state.data.address_level }</span>

                    </div>
                    <div className="form-group col-md-6 col-lg-3 row">
                        <label className="label col-6" for="address_no">ห้องเลขที่ </label> <span className="col-6">{this.state.data.address_room }</span>

                    </div>


                </div>
                <div className="row">
                    <div className="form-group col-lg-4 row">
                        <label className="label col-4" for="address_no">ซอย </label> <span className="col-7">{this.state.data.address_soi }</span>

                    </div>
                    <div className="form-group col-lg-4 row">
                        <label className="label col-4" for="address_no">ถนน </label> <span className="col-7">{this.state.data.address_road }</span>

                    </div>


                    <div className="form-group col-lg-4 row">
                        <label className="label col-4" for="address_no">จังหวัด </label> <span className="col-7">{this.state.data.address_province }</span>

                    </div>


                </div>
                <div className="row">
                    <div className="form-group col-lg-4 row">
                        <label className="label col-4" for="address_no">เขต </label> <span className="col-7">{this.state.data.address_state }</span>

                    </div>
                    <div className="form-group col-lg-4 row">
                        <label className="label col-4" for="address_no">แขวง </label> <span className="col-7">{this.state.data.address_dist }</span>

                    </div>
                    <div className="form-group col-lg-4 row">
                        <label className="label col-6" for="address_no">รหัสไปรษณีย์ </label> <span className="col-6">{this.state.data.address_postcode }</span>

                    </div>
                    <div className="form-group col-lg-4 row">
                        <label className="label col-6" for="address_no">รหัสประจำบ้าน </label> <span className="col-6">{this.state.data.address_home_code }</span>

                    </div>
                    <div className="form-group col-lg-4 row">
                        <label className="label col-6" for="address_no">โทรศัพท์ </label> <span className="col-6">{this.state.data.address_phone }</span>

                    </div>
                    <div className="form-group col-lg-4 row">
                        <label className="label col-6" for="address_no">E-mail </label> <span className="col-6">{this.state.data.address_email }</span>

                    </div>



                </div>
                <hr />
                <h3>ผู้ถือหุ้น</h3>
                {  content }
                <hr />
                <h3>ทุนจดทะเบียน</h3>
                <div className="row">
                     <div className="form-group  col-lg-6 row">
                        <label className="label col-6" for="capital_invencount">จำนวนทุนจดทะเบียน</label>
                        <span className="col-6">{this.state.data.capital_invencount} </span>

                     </div>
                     <div className="form-group  col-lg-6 row">
                        <label className="label col-6" for="capital_invencount">จำนวนหุ้น</label>
                        <span className="col-6">{this.state.data.capital_sharecount} </span>

                     </div>




                 </div>
                 <div className="row">
                    <div className="form-group  col-lg-3">
                        <label>ชำระค่าหุ้นในวันจดทะเบียน</label>

                    </div>
                    <div className="form-group  col-lg-3">
                        {this.state.data.capital_shareprice}25%

                    </div>

                 </div>
                 { contentcap }
                 <hr />
                 <h3>ข้อมูลผู้ก่อตั้งบริษัท</h3>
                 { contentstart }
                 <hr />
                 <h3>ข้อมูลกรรมการ</h3>
                 { contentsa }
                 <div className="row">
                    <div className="form-group  col-lg-12 row">
                        <label className="label col-4" for="power_type" >อำนาจกรรมการแบบไม่ระบุชื่อ </label>
                        <span className="col-6">{this.state.data.power_type}</span>
                    </div>

                </div>
                <h4>กรรมการที่มีอำนาจลงนาม</h4>
                { signs }
                <hr />
                <h3>การประชุมจัดตั้ง</h3>
                <div className="row">
                    <div className="form-group  col-lg-6 row">
                        <label className="label col-4" for="meeting_date">เลือกวัน</label>
                        <span className="col-8">{ this.state.data.meeting_date}</span>
                    </div>
                    <div className="form-group  col-lg-6 row">
                        <label className="label col-4" for="meeting_date">เลือกเวลา</label>
                        <span className="col-8">{ this.state.data.meetingtime_hours }:{ this.state.data.meetingtime_minute }</span>
                    </div>

                </div>
                <h3>สถานที่</h3>
                <div className="row">

                    <div className="form-group col-md-6 col-lg-3 row">
                        <label className="label col-5" for="meeting_address_no">เลขที่</label>
                        <span className="col-7">{this.state.data.meeting_address_no }</span>
                    </div>
                    <div className="form-group col-md-6 col-lg-3 row">
                        <label className="label col-5" for="meeting_address_no">อาคาร</label>
                        <span className="col-7">{this.state.data.meeting_address_tower }</span>
                    </div>
                    <div className="form-group col-md-6 col-lg-3 row">
                        <label className="label col-5" for="meeting_address_no">ชั้น</label>
                        <span className="col-7">{this.state.data.meeting_address_level }</span>
                    </div>
                    <div className="form-group col-md-6 col-lg-3 row">
                        <label className="label col-5" for="meeting_address_no">ห้องเลขที่</label>
                        <span className="col-7">{this.state.data.meeting_address_room }</span>
                    </div>


                </div>
                <div className="row">
                    <div className="form-group  col-lg-4 row">
                        <label className="label col-3" for="meeting_address_no">ซอย</label>
                        <span className="col-9">{ this.state.data.meeting_address_soi }</span>
                    </div>
                    <div className="form-group  col-lg-4 row">
                        <label className="label col-3" for="meeting_address_no">ถนน</label>
                        <span className="col-9">{ this.state.data.meeting_address_road }</span>
                    </div>
                    <div className="form-group  col-lg-4 row">
                        <label className="label col-3" for="meeting_address_no">จังหวัด</label>
                        <span className="col-9">{ this.state.data.meeting_address_province }</span>
                    </div>




                </div>
                <div className="row">
                    <div className="form-group col-md-6 col-lg-3 row">
                        <label className="label col-5" for="meeting_address_no">เขต</label>
                        <span className="col-7">{this.state.data.meeting_address_state }</span>
                    </div>
                    <div className="form-group col-md-6 col-lg-3 row">
                        <label className="label col-5" for="meeting_address_no">แขวง</label>
                        <span className="col-7">{this.state.data.meeting_address_dist }</span>
                    </div>
                    <div className="form-group col-md-6 col-lg-3 row">
                        <label className="label col-9" for="meeting_address_no">รหัสไปรษณีย์</label>
                        <span className="col-3">{this.state.data.meeting_address_postcode }</span>
                    </div>




                </div>
                <hr />
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-5">
                    <button className="btn-company-next"  onClick={(e) => { this.clickBack(6) }}  value="1">ย้อนกลับ</button>
                        <button className="btn-company-next"  onClick={(e) => { this.handleSubmit() }}  value="1">SAVE </button>
                    </div>

                </div>
            </div>
          );
      }
      meeting(){
        //const [startDate, setStartDate] = useState(new Date());
        //const [value, onChange] = useState(new Date());
          return (
            <div className="col-12 mt-5 text-grey pb-3">
                <h3>การประชุมจัดตั้ง</h3>
                <form id="form_7">
                <div className="row">
                    <div className="form-group  col-lg-6">
                        <label className="label" for="meeting_date">เลือกวัน</label>
                        <DatePicker
                               onChange={this.handleDateChange}
                                isOpen="true"
                                value={this.state.data.meeting_date}

                        />
                    </div>
                    <div className="form-group  col-lg-6">
                        <label className="label" for="meeting_date">เลือกเวลา</label>
                        <select name="meetingtime_hours" onChange={this.handleChange.bind(this)}>
                            <option selected={this.state.data.meetingtime_hours == '00'}>00</option>
                            <option selected={this.state.data.meetingtime_hours == '01'}>01</option>
                            <option selected={this.state.data.meetingtime_hours == '02'}>02</option>
                            <option selected={this.state.data.meetingtime_hours == '03'}>03</option>
                            <option selected={this.state.data.meetingtime_hours == '04'}>04</option>
                            <option selected={this.state.data.meetingtime_hours == '05'}>05</option>
                            <option selected={this.state.data.meetingtime_hours == '06'}>06</option>
                            <option selected={this.state.data.meetingtime_hours == '07'}>07</option>
                            <option selected={this.state.data.meetingtime_hours == '08'}>08</option>
                            <option selected={this.state.data.meetingtime_hours == '09'}>09</option>
                            <option selected={this.state.data.meetingtime_hours == '10'}>10</option>
                            <option selected={this.state.data.meetingtime_hours == '11'}>11</option>
                            <option selected={this.state.data.meetingtime_hours == '12'}>12</option>
                            <option selected={this.state.data.meetingtime_hours == '13'}>13</option>
                            <option selected={this.state.data.meetingtime_hours == '14'}>14</option>
                            <option selected={this.state.data.meetingtime_hours == '15'}>15</option>
                            <option selected={this.state.data.meetingtime_hours == '16'}>16</option>
                            <option selected={this.state.data.meetingtime_hours == '17'}>17</option>
                            <option selected={this.state.data.meetingtime_hours == '18'}>18</option>
                            <option selected={this.state.data.meetingtime_hours == '19'}>19</option>
                            <option selected={this.state.data.meetingtime_hours == '20'}>20</option>
                            <option selected={this.state.data.meetingtime_hours == '21'}>21</option>
                            <option selected={this.state.data.meetingtime_hours == '22'}>22</option>
                            <option selected={this.state.data.meetingtime_hours == '23'}>23</option>


                        </select>
                        :
                        <select name="meetingtime_minute" onChange={this.handleChange.bind(this)}>
                            <option selected={this.state.data.meetingtime_minute == '00'}>00</option>
                            <option selected={this.state.data.meetingtime_minute == '01'}>01</option>
                            <option selected={this.state.data.meetingtime_minute == '02'}>02</option>
                            <option selected={this.state.data.meetingtime_minute == '03'}>03</option>
                            <option selected={this.state.data.meetingtime_minute == '04'}>04</option>
                            <option selected={this.state.data.meetingtime_minute == '05'}>05</option>
                            <option selected={this.state.data.meetingtime_minute == '06'}>06</option>
                            <option selected={this.state.data.meetingtime_minute == '07'}>07</option>
                            <option selected={this.state.data.meetingtime_minute == '08'}>08</option>
                            <option selected={this.state.data.meetingtime_minute == '09'}>09</option>
                            <option selected={this.state.data.meetingtime_minute == '10'}>10</option>
                            <option selected={this.state.data.meetingtime_minute == '11'}>11</option>
                            <option selected={this.state.data.meetingtime_minute == '12'}>12</option>
                            <option selected={this.state.data.meetingtime_minute == '13'}>13</option>
                            <option selected={this.state.data.meetingtime_minute == '14'}>14</option>
                            <option selected={this.state.data.meetingtime_minute == '15'}>15</option>
                            <option selected={this.state.data.meetingtime_minute == '16'}>16</option>
                            <option selected={this.state.data.meetingtime_minute == '17'}>17</option>
                            <option selected={this.state.data.meetingtime_minute == '18'}>18</option>
                            <option selected={this.state.data.meetingtime_minute == '19'}>19</option>
                            <option selected={this.state.data.meetingtime_minute == '20'}>20</option>
                            <option selected={this.state.data.meetingtime_minute == '21'}>21</option>
                            <option selected={this.state.data.meetingtime_minute == '22'}>22</option>
                            <option selected={this.state.data.meetingtime_minute == '23'}>23</option>
                            <option selected={this.state.data.meetingtime_minute == '23'}>23</option>
                            <option selected={this.state.data.meetingtime_minute == '24'}>24</option>
                            <option selected={this.state.data.meetingtime_minute == '25'}>25</option>
                            <option selected={this.state.data.meetingtime_minute == '26'}>26</option>
                            <option selected={this.state.data.meetingtime_minute == '27'}>27</option>
                            <option selected={this.state.data.meetingtime_minute == '28'}>28</option>
                            <option selected={this.state.data.meetingtime_minute == '29'}>28</option>
                            <option selected={this.state.data.meetingtime_minute == '30'}>30</option>
                            <option selected={this.state.data.meetingtime_minute == '31'}>31</option>
                            <option selected={this.state.data.meetingtime_minute == '32'}>32</option>
                            <option selected={this.state.data.meetingtime_minute == '33'}>33</option>
                            <option selected={this.state.data.meetingtime_minute == '34'}>34</option>
                            <option selected={this.state.data.meetingtime_minute == '35'}>35</option>
                            <option selected={this.state.data.meetingtime_minute == '36'}>36</option>
                            <option selected={this.state.data.meetingtime_minute == '37'}>37</option>
                            <option selected={this.state.data.meetingtime_minute == '38'}>38</option>
                            <option selected={this.state.data.meetingtime_minute == '39'}>39</option>
                            <option selected={this.state.data.meetingtime_minute == '40'}>40</option>
                            <option selected={this.state.data.meetingtime_minute == '41'}>41</option>
                            <option selected={this.state.data.meetingtime_minute == '42'}>42</option>
                            <option selected={this.state.data.meetingtime_minute == '43'}>43</option>
                            <option selected={this.state.data.meetingtime_minute == '44'}>44</option>
                            <option selected={this.state.data.meetingtime_minute == '45'}>45</option>
                            <option selected={this.state.data.meetingtime_minute == '46'}>46</option>
                            <option selected={this.state.data.meetingtime_minute == '47'}>47</option>
                            <option selected={this.state.data.meetingtime_minute == '48'}>48</option>
                            <option selected={this.state.data.meetingtime_minute == '49'}>49</option>
                            <option selected={this.state.data.meetingtime_minute == '50'}>50</option>
                            <option selected={this.state.data.meetingtime_minute == '51'}>51</option>
                            <option selected={this.state.data.meetingtime_minute == '52'}>52</option>
                            <option selected={this.state.data.meetingtime_minute == '53'}>53</option>
                            <option selected={this.state.data.meetingtime_minute == '54'}>54</option>
                            <option selected={this.state.data.meetingtime_minute == '55'}>55</option>
                            <option selected={this.state.data.meetingtime_minute == '56'}>56</option>
                            <option selected={this.state.data.meetingtime_minute == '57'}>57</option>
                            <option selected={this.state.data.meetingtime_minute == '58'}>58</option>
                            <option selected={this.state.data.meetingtime_minute == '59'}>59</option>



                        </select>
                    </div>

                </div>
                <h3>สถานที่</h3>
                <div className="row">
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="meeting_address_no">เลขที่*</label>
                        <input type="text" name="meeting_address_no" class="form-control" id="meeting_address_no" placeholder="เลขที่" onChange={this.handleChange.bind(this)}></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="meeting_address_tower">อาคาร</label>
                        <input type="text" name="meeting_address_tower" class="form-control" id="meeting_address_tower" placeholder="อาคารบ้าน" onChange={this.handleChange.bind(this)}></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="meeting_address_level">ชั้น</label>
                        <input type="text" name="meeting_address_level" class="form-control" id="meeting_address_level" placeholder="ชั้น" onChange={this.handleChange.bind(this)}></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="meeting_address_level">ห้องเลขที่</label>
                        <input type="text" name="meeting_address_room" class="form-control" id="meeting_address_room" placeholder="ห้องเลขที่" onChange={this.handleChange.bind(this)}></input>
                    </div>

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="meeting_address_no">ซอย</label>
                        <input type="text" name="meeting_address_soi" class="form-control" id="meeting_address_soi" placeholder="ซอย" onChange={this.handleChange.bind(this)}></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="meeting_address_road">ถนน</label>
                        <input type="text" name="meeting_address_road" class="form-control" id="meeting_address_road" placeholder="ถนน" onChange={this.handleChange.bind(this)}></input>
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
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="meeting_address_state">เขต*</label>
                        <input type="text" name="meeting_address_state" class="form-control" id="meeting_address_state" placeholder="เขต" value={this.state.data.meeting_address_state} required onChange={this.handleChange.bind(this)}></input>
                        <span id="div-meeting_address_state" className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="meeting_address_dist">แขวง*</label>
                        <input type="text" name="meeting_address_dist" class="form-control" id="meeting_address_dist" placeholder="เขต" value={this.state.data.meeting_address_dist} required onChange={this.handleChange.bind(this)}></input>
                        <span id="div-meeting_address_dist" className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="meeting_address_postcode">รหัสไปรษณีย์*</label>
                        <input type="text" name="meeting_address_postcode" class="form-control" id="meeting_address_postcode" placeholder="เขต" value={this.state.data.meeting_address_postcode} required onChange={this.handleChange.bind(this)}></input>
                        <span id="div-meeting_address_postcode" className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>




                </div>
                </form>
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-5">
                    <button className="btn-company-next"  onClick={(e) => { this.clickBack(6) }}  value="1">ย้อนกลับ</button>
                        <button className="btn-company-next"  onClick={(e) => { this.clickStep(8) }}  value="1">SAVE </button>
                    </div>

                </div>
            </div>
          );
      }
      form_related(m,r){
          let name = this.state.data["sharedirect_firstname["+r+"]"]+' '+this.state.data["sharedirect_lastname["+r+"]"];
          return (
            <div  class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox"  onChange={this.handleChange.bind(this)} name={'related['+m+'][]'} value={name} />
                <label class="form-check-label" for="inlineRadio1">{this.state.data["sharesdirect_title["+r+"]"]}{this.state.data["sharedirect_firstname["+r+"]"]} {this.state.data["sharedirect_lastname["+r+"]"]}</label>
            </div>
          );
      }
      form_directsign(i,v, c,sign){
        let cb = [];
        for (let a = 0; a < c;a++) {
           // const index = y.indexOf(value, 0);
            if(a != i){
                cb.push(this.form_related(v,sign[a]));
            }


        }

          return (
            <div className="row">
            <div className="form-group  pt-3 col-lg-12">
                <div className="row">
                    <label className=" col-3" for="power_type" >{ i+1 }.{this.state.data["sharesdirect_title["+v+"]"]} {this.state.data["sharedirect_firstname["+v+"]"]}  {this.state.data["sharedirect_lastname["+v+"]"]}</label>

                    <div className="col-2">
                        <select className="form-control"  name={"types_sign["+v+"]"} id={"types_sign"+i} onChange={this.handleChange.bind(this)}>
                                <option  selected={this.state.data["types_sign["+v+"]"] == '' || this.state.data["types_sign["+v+"]"] == 'คนเดียว'} value="คนเดียว">คนเดียว</option>
                                <option selected={this.state.data["types_sign["+v+"]"] == 'ร่วมกับ'} value="ร่วมกับ" >ร่วมกับ</option>
                        </select>

                    </div>
                    <div  className={ (this.state.data["types_sign["+v+"]"]== 'คนเดียว' || !this.state.data["types_sign["+v+"]"] ? 'col-7 hide' : 'col-7')}>

                        { cb }
                    </div>
                </div>



            </div>

        </div>

          );
      }
      form_directcompany(i){
        return (
            <div>
                <div className="row">
                  <div className="form-group  col-lg-3">
                      <label className="label" >กรรมการs คนที่ {i}</label>

                  </div>



              </div>

              <div className="row">
              <div className="form-group  col-lg-4">
                      <label className="label" for="sharesdirect_title1">คำนำหน้า</label>
                      <select   onChange={this.chengedirect_title_name.bind(this)}  class="form-control"   name={"sharesdirect_title["+i+"]"} id={"sharesdirect_title"+i} >
                          <option value="" selected={this.state.data['sharesdirect_title['+i+']'] == ''} >--------- คำนำหน้า ---------</option>
                          <option value="นางสาว" selected={this.state.data['sharesdirect_title['+i+']'] == 'นางสาว'}>นางสาว</option>
                          <option value="นาง" selected={this.state.data['sharesdirect_title['+i+']'] == 'นาง'}>นาง</option>
                          <option value="นาย" selected={this.state.data['sharesdirect_title['+i+']'] == 'นาย'}>นาย</option>
                          <option value="other" selected={this.state.data['sharesdirect_title['+i+']'] == 'other'}>อื่น ๆ</option>

                      </select>
                     <div id={"sharedirect_titleother"+i} className="hide pt-3">
                      <input type="text" name={"sharedirect_titleother["+i+"]"}  className="form-control" placeholder="คำนำหน้าชื่อ" value={this.state.data["sharedirect_titleother["+i+"]"]}  onChange={this.handleChange.bind(this)} />
                     </div>


                  </div>
                  <div className="form-group  col-lg-4">
                      <label className="label" for="sharedirect_firstname1" id={"sharedirect_firstname"+i}>ชื่อ</label>
                      <input type="text"  name={"sharedirect_firstname["+i+"]" } class="form-control" id={"sharedirect_firstname"+i} placeholder="ชื่อ" value={this.state.data["sharedirect_firstname["+i+"]"]}  required onChange={this.handleChange.bind(this)}></input>
                      <span id={"div-sharedirect_firstname"+i} className="hide has-error">กรุณากรอกข้อมูล!</span>
                  </div>
                  <div className="form-group  col-lg-4">
                      <label className="label" for="sharedirect_lastname1">นามสกุล</label>
                      <input type="text" name={"sharedirect_lastname["+i+"]"}  class="form-control" id={"sharedirect_lastname"+i} placeholder="นามสกุล" value={this.state.data["sharedirect_lastname["+i+"]"]} required onChange={this.handleChange.bind(this)}></input>
                      <span id={"div-sharedirect_lastname"+i} className="hide has-error">กรุณากรอกข้อมูล!</span>
                  </div>

                  <div className="form-group  col-lg-4">
                      <label className="label" for="sharedirect_phone1">หมายเลขโทรศัพท์</label>
                      <input type="text" name={"sharedirect_phone["+i+"]"}  class="form-control" id={"sharedirect_phone"+i} placeholder="หมายเลขโทรศัพท์"  value={this.state.data["sharedirect_phone["+i+"]"]}   required onChange={this.handleChange.bind(this)}></input>
                      <span id={"div-sharedirect_phone"+i} className="hide has-error">กรุณากรอกข้อมูล!</span>
                  </div>

                  <div className="form-group  col-lg-4">
                  <div  class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox"  class="sendsign" id={"sendsign"+i}  onChange={this.handleChange.bind(this)} name={"sharedirect_sign["+i+"]"} value={i} />
                                <label class="form-check-label" for="inlineRadio1">มีอำนาจลงนาม</label>
                            </div>

                    </div>

              </div>
              <hr className="hr_organge" />
            </div>
        )
    }
      directinformation(){
        let content = [];
        let signs = [];
       let clicksign = [];
       if(this.state.data.clicksign){
        clicksign = this.state.data.clicksign;
       }

        for (let i = 1; i < this.state.counthb; i++) {
          content.push(this.form_directcompany(i)) ;

        }
        console.log('l',this.state.clicksign);
        if(clicksign.length > 0){
            for (let i = 0; i < clicksign.length; i++) {
                signs.push(this.form_directsign(i,clicksign[i], clicksign.length,clicksign)) ;

            }
        }

        return (
            <div className="col-12 mt-5 text-grey pb-3">
                <h3>ข้อมูลกรรมการ</h3>

                <form id="form_6">
                    { content }
                    <button type="button" className="btn-company-next" onClick={(e) => { this.clickHolderb(this.state.counthb-1) }}>-</button> <button className="btn-company-next" type="button" onClick={(e) => { this.clickHolderb(this.state.counthb+1) }}>+</button>
                    <div className="row">
                        <div className="form-group  col-lg-4">
                            <label className="label" for="power_type" >อำนาจกรรมการแบบไม่ระบุชื่อ </label>
                            <input type="text" name="power_type"  class="form-control" id="power_type" placeholder="กรรมการ x คน"  value={this.state.data.power_type}    onChange={this.handleChange.bind(this)}></input>
                        </div>

                    </div>
                    <h4>กรรมการที่มีอำนาจลงนาม</h4>
                        { signs }
                </form>

                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-5 text-right">
                    <button className="btn-company-next"  onClick={(e) => { this.clickBack(5) }}  value="1">ย้อนกลับ</button>
                        <button className="btn-company-next"  onClick={(e) => { this.clickStep(7) }}  value="1">ดำเนินการต่อ <Arrowright /></button>
                    </div>

                </div>

            </div>


          );

      }
      form_startcompany(i){

          return (
              <div>
                  <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label" >ผู้ก่อตั้ง คนที่ {i}</label>

                    </div>



                </div>

                <div className="row">
                <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_title1">คำนำหน้า</label>

                        <select   onChange={this.chengestart_title_name.bind(this)}  class="form-control"   name={"sharestart_title["+i+"]"} id={"sharestart_title"+i} >

                            <option value="" selected={this.state.data['sharestart_title['+i+']'] == ''} >--------- คำนำหน้า ---------</option>
                            <option value="นางสาว" selected={this.state.data['sharestart_title['+i+']'] == 'นางสาว'}>นางสาว</option>
                            <option value="นาง" selected={this.state.data['sharestart_title['+i+']'] == 'นาง'}>นาง</option>
                            <option value="นาย" selected={this.state.data['sharestart_title['+i+']'] == 'นาย'}>นาย</option>
                            <option value="other" selected={this.state.data['sharestart_title['+i+']'] == 'other'}>อื่น ๆ</option>

                        </select>
                       <div id={"sharestart_titleother"+i} className="hide pt-3">
                        <input type="text" name={"sharestart_titleother["+i+"]"}  className="form-control" placeholder="คำนำหน้าชื่อ" value={this.state.data["sharestart_titleother["+i+"]"]}  onChange={this.handleChange.bind(this)} />
                       </div>


                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_firstname1" id={"sharestart_firstname"+i}>ชื่อ</label>
                        <input type="text"  name={"sharestart_firstname["+i+"]" } class="form-control" id={"sharestart_firstname"+i} placeholder="ชื่อ" value={this.state.data["sharestart_firstname["+i+"]"]}  required onChange={this.handleChange.bind(this)}></input>
                        <span id={"div-sharestart_firstname"+i} className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_lastname1">นามสกุล</label>
                        <input type="text" name={"sharestart_lastname["+i+"]"}  class="form-control" id={"sharestart_lastname"+i} placeholder="นามสกุล" value={this.state.data["sharestart_lastname["+i+"]"]} required onChange={this.handleChange.bind(this)}></input>
                        <span id={"div-sharestart_lastname"+i} className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>

                    <div className="form-group  col-lg-4">
                        <label className="label" for="sharestart_phone1">หมายเลขโทรศัพท์</label>
                        <input type="text" name={"sharestart_phone["+i+"]"}  class="form-control" id={"sharestart_phone"+i} placeholder="หมายเลขโทรศัพท์"  value={this.state.data["sharestart_phone["+i+"]"]}   required onChange={this.handleChange.bind(this)}></input>
                        <span id={"div-sharestart_phone"+i} className="hide has-error">กรุณากรอกข้อมูล!</span>
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
              </div>
          )
      }
      startcompany(){
        let content = [];



        for (let i = 1; i < this.state.countha; i++) {
          content.push(this.form_startcompany(i)) ;

        }
        return (
            <div className="col-12 mt-5 text-grey pb-3">
                 <form id="form_5">
                <h3>ข้อมูลผู้ก่อตั้งบริษัท</h3>
                    { content}
                    <button type="button" className="btn-company-next" onClick={(e) => { this.clickHoldera(this.state.countha-1) }}>-</button> <button className="btn-company-next" type="button" onClick={(e) => { this.clickHoldera(this.state.countha+1) }}>+</button>
                </form>
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-5 text-right">
                    <button className="btn-company-next"  onClick={(e) => { this.clickBack(4) }}  value="1">ย้อนกลับ</button>
                        <button className="btn-company-next"  onClick={(e) => { this.clickStep(6) }}  value="1">ดำเนินการต่อ <Arrowright /></button>
                    </div>

                </div>

            </div>


          );
      }

      form_capital(i){

        return (
            <div>
                 <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label">ผู้ถือหุ้นที่ { i }</label>

                    </div>
                    <div className="form-group  col-lg-3">
                        <input type="text" name={"capital_sharenumber["+i+"]"} class="form-control calnormal" id={"capital_sharenumber"+i} placeholder="จำนวนหุ้นสามัญ" value={this.state.data["capital_sharenumber["+i+"]"]}  onChange={this.handleChange.bind(this)}></input><br />
                        <input type="text" name={"capital_sharepure["+i+"]"} class="form-control capital_sharepure calshare hide"  id={"capital_sharepure"+i} placeholder="จำนวนหุ้นบุริมสิทธิ์" value={this.state.data["capital_sharepure["+i+"]"]}  onChange={this.handleChange.bind(this)}></input>
                        <span id={"div-capital_sharepure"+i} className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>

                 </div>
            </div>
        );

    }
      capital(){
        let content = [];
        let counth = 4;

        //alert(this.state.counth);
        for (let i = 1; i < this.state.counth; i++) {
          content.push(this.form_capital(i)) ;

        }
        return (
            <div className="col-12 mt-5 text-grey pb-3">
                 <h3>ทุนจดทะเบียน</h3>
                 <form id="form_4">
                 <div className="row">
                     <div className="form-group  col-lg-3">
                     <label className="label" for="capital_invencount">จำนวนทุนจดทะเบียน</label>
                     <input class="form-control" type="text" name="capital_invencount" placeholder="จำนวนทุนจดทะเบียน" value={this.state.data.capital_invencount}  onChange={this.handleChange.bind(this)} />

                     </div>
                     <div className="form-group  col-lg-3">
                        <label className="label" for="capital_sharecount">จำนวนหุ้น</label>
                        <input class="form-control" type="text" name="capital_sharecount"  placeholder="จำนวนหุ้น" readOnly value={this.state.data.capital_sharecount}  onChange={this.handleChange.bind(this)} />

                     </div>



                 </div>
                 <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label" for="capital_share">จำนวนทุนจดทะเบียน</label>
                        <input class="form-check-input-inline" type="checkbox" name="capital_share" onClick={this.change_capital_share}  value="มีหุ้นบริสุทธิ์" value={this.state.data.capital_share}  onChange={this.handleChange.bind(this)} />
                        <label class="form-check-label" for="inlineRadio1">มีหุ้นบริสุทธิ์</label>
                    </div>
                    <div className="form-group  col-lg-3">
                        <label>จำนวนหุ้น</label>
                        <input type="text" name="capital_shareallstock" class="form-control capital_sharepure hide" id="capital_shareallstock" readOnly placeholder="จำนวน"value={this.state.data.capital_shareallstock} ></input>
                        <span id="div-capital_shareallstock" className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>

                 </div>
                 <div className="row">
                    <div className="form-group  col-lg-3">
                        <label>ชำระค่าหุ้นในวันจดทะเบียน</label>

                    </div>
                    <div className="form-group  col-lg-3">
                        <select name="capital_shareprice" className="form-control" value={this.state.data.capital_shareprice}  onChange={this.handleChange.bind(this)}>
                            <option value="25">25%</option>
                            <option value="50">50%</option>
                            <option value="775">75%</option>
                            <option value="100">100%</option>
                        </select>

                    </div>

                 </div>


                 { content }
                 </form>
                 <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-5 text-right">
                    <button className="btn-company-next"  onClick={(e) => { this.clickBack(3) }}  value="1">ย้อนกลับ</button>
                        <button className="btn-company-next"  onClick={(e) => { this.clickStep(5) }}  value="1">ดำเนินการต่อ <Arrowright /></button>
                    </div>

                </div>
            </div>
        );

      }
      form_shareholder(i){

          return (
              <div>
                   <div className="row">
                    <div className="form-group  col-lg-3">
                        <label className="label" >ผู้ถือหุ้น คนที่ {i}</label>

                    </div>
                    <div className="form-group col-lg-2">
                        <input class="form-check-input" type="radio" name={"shareholder_type["+i+"]"} id={"shareholder_type"+i} onClick={this.change_typeholder.bind(this)}    value="บุคคลธรรมดา" />
                        <label class="form-check-label" for="inlineRadio1">บุคคลธรรมดา</label>
                    </div>
                    <div className="form-group col-lg-2">
                        <input class="form-check-input" type="radio" name={"shareholder_type["+i+"]"}  onClick={this.change_typeholder.bind(this)}   value="นิติบุคคล"  />
                        <label class="form-check-label" for="inlineRadio1">นิติบุคคล</label>
                    </div>


                </div>
                <div className="row">
                    <div className="form-group  col-lg-4" id={"block-shareholder_title"+i}>
                        <label className="label" for="shareholder_title1">คำนำหน้า</label>
                        <select   onChange={this.chenge_title_name.bind(this)}  class="form-control"   name={"shareholder_title["+i+"]"} id={"shareholder_title"+i} >
                            <option value="" selected={this.state.data['shareholder_title['+i+']'] == ''}>--------- คำนำหน้า ---------</option>
                            <option value="นางสาว"  selected={this.state.data['shareholder_title['+i+']'] == 'นางสาว'}>นางสาว</option>
                            <option value="นาง"  selected={this.state.data['shareholder_title['+i+']'] == 'นาง'}>นาง</option>
                            <option value="นาย"  selected={this.state.data['shareholder_title['+i+']'] == 'นาย'}>นาย</option>
                            <option value="other"  selected={this.state.data['shareholder_title['+i+']'] == 'other'}>อื่น ๆ</option>

                        </select>
                       <div id={"shareholder_titleother"+i} className="hide pt-3">
                        <input type="text" name={"shareholder_titleother["+i+"]"}  className="form-control" placeholder="คำนำหน้าชื่อ" value={this.state.data["shareholder_titleother["+i+"]"]}  onChange={this.handleChange.bind(this)} />
                       </div>


                    </div>

                    <div className="form-group  col-lg-4">
                        <label className="label" for="shareholder_firstname1" id={"shareholder_fname"+i}>ชื่อ *</label>
                        <input type="text"  name={"shareholder_firstname["+i+"]" } class="form-control" id={"shareholder_firstname"+i} placeholder="ชื่อ" value={this.state.data["shareholder_firstname["+i+"]"]}  required onChange={this.handleChange.bind(this)}></input>
                        <span id={"div-shareholder_firstname"+i} className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>
                    <div className="form-group  col-lg-4" id={"block-shareholder_lastname"+i}>
                        <label className="label" for="shareholder_lastname1">นามสกุล *</label>
                        <input type="text" name={"shareholder_lastname["+i+"]"}  class="form-control" id={"shareholder_lastname"+i} placeholder="นามสกุล" value={this.state.data["shareholder_lastname["+i+"]"]} required onChange={this.handleChange.bind(this)}></input>
                        <span id={"div-shareholder_lastname"+i} className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for={"shareholder_idcard"+i} id={"shareholder_idcard"+i}>เลขบัตรประชาชน *</label>
                        <input type="text" name={"shareholder_idcard["+i+"]"}  class="form-control" id={"shareholder_idcard"+i} placeholder="เลขบัตรประชาชน"  value={this.state.data["shareholder_idcard["+i+"]"]} required onChange={this.handleChange.bind(this)}></input>
                        <span id={"div-shareholder_idcard"+i} className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>
                    <div className="form-group  col-lg-4" id={"block-shareholder_occ"+i}>
                        <label className="label" for={"shareholder_occ"+i}>อาชีพ *</label>
                        <input type="text" name={"shareholder_occ["+i+"]"} class="form-control" id={"shareholder_occ"+i} placeholder="อาชีพ"   value={this.state.data["shareholder_occ["+i+"]"]}  required onChange={this.handleChange.bind(this)}></input>
                        <span id={"div-shareholder_occ"+i} className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="shareholder_firstname1">หมายเลขโทรศัพท์ *</label>
                        <input type="text" name={"shareholder_phone["+i+"]"}  class="form-control" id={"shareholder_phone"+i} placeholder="หมายเลขโทรศัพท์"  value={this.state.data["shareholder_phone["+i+"]"]}   required onChange={this.handleChange.bind(this)}></input>
                        <span id={"div-shareholder_phone"+i} className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>

                    <div className="form-group  col-lg-8">
                        <label className="label" for="shareholder_firstname1" id={"shareholder_file"+i}>อัพโหลดบัตรประชาชน</label>
                        <label class="custom-file-upload">
                            <input type="file"/>
                            <Uploadcloud />
                            Choose File
                        </label>
                    </div>

                </div>
                <hr className="hr_organge" />
              </div>
          );

      }
      shareholder(){
          let content = [];
          let counth = 4;

          //alert(this.state.counth);
          for (let i = 1; i < this.state.counth; i++) {
            content.push(this.form_shareholder(i)) ;

          }
          //let content_d = content.join('');

        return (
            <div className="col-12 mt-5 text-grey pb-3">
                 <form id="form_3">
                {  content }
                </form>
                <button type="button" className="btn-company-next" onClick={(e) => { this.clickHolder(this.state.counth-1) }}>-</button> <button className="btn-company-next" type="button" onClick={(e) => { this.clickHolder(this.state.counth+1) }}>+</button>
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-5 text-right">
                         <button className="btn-company-next"  onClick={(e) => { this.clickBack(2) }}  value="1">ย้อนกลับ</button>
                        <button className="btn-company-next"  onClick={(e) => { this.clickStep(4) }}  value="1">ดำเนินการต่อ <Arrowright /></button>
                    </div>

                </div>

            </div>


          );

      }
      addess_company(){

        return (
            <div className="col-12 mt-5 text-grey pb-3">
                <h3>ที่อยู่บริษัท</h3>
                <form id="form_2">
                <div className="row">
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="address_no">เลขที่*</label>
                        <input type="text" name="address_no" class="form-control" id="address_no" placeholder="เลขที่" value={this.state.data.address_no} required onChange={this.handleChange.bind(this)}></input>
                        <span id="div-address_no" className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="address_tower">อาคาร</label>
                        <input type="text" name="address_tower" class="form-control" id="address_tower" placeholder="อาคารบ้าน" value={this.state.data.address_tower}  onChange={this.handleChange.bind(this)}></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="address_level">ชั้น</label>
                        <input type="text" name="address_level" class="form-control" id="address_level" placeholder="ชั้น" value={this.state.data.address_level}  onChange={this.handleChange.bind(this)}></input>
                    </div>
                    <div className="form-group col-md-6 col-lg-3">
                        <label className="label" for="address_level">ห้องเลขที่</label>
                        <input type="text" name="address_room" class="form-control" id="address_room" placeholder="ห้องเลขที่" value={this.state.data.address_room}  onChange={this.handleChange.bind(this)}></input>
                    </div>

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="address_no">ซอย</label>
                        <input type="text" name="address_soi" class="form-control" id="address_soi" placeholder="ซอย" value={this.state.data.address_soi}  onChange={this.handleChange.bind(this)}></input>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="address_road">ถนน</label>
                        <input type="text" name="address_road" class="form-control" id="address_road" placeholder="ถนน" value={this.state.data.address_road}  onChange={this.handleChange.bind(this)}></input>
                    </div>
                    <div className="form-group col-lg-4">
                        <label className="label" for="address_province">จังหวัด *</label>
                        <select class="form-control" name="address_province" id="address_province" value={this.state.data.address_province} required onChange={this.handleChange.bind(this)}>
                            <option value="" selected={this.state.data.address_province == ''}>--------- เลือกจังหวัด ---------</option>
                            <option value="กรุงเทพมหานคร" selected={this.state.data.address_province == 'กรุงเทพมหานคร'}>กรุงเทพมหานคร</option>
                            <option value="กระบี่" selected={this.state.data.address_province == 'กระบี่'}>กระบี่ </option>
                            <option value="กาญจนบุรี" selected={this.state.data.address_province == 'กาญจนบุรี'}>กาญจนบุรี </option>
                            <option value="กาฬสินธุ์" selected={this.state.data.address_province == 'กาฬสินธุ์'}>กาฬสินธุ์ </option>
                            <option value="กำแพงเพชร" selected={this.state.data.address_province == 'กำแพงเพชร'}>กำแพงเพชร </option>
                            <option value="ขอนแก่น" selected={this.state.data.address_province == 'ขอนแก่น'}>ขอนแก่น</option>
                            <option value="จันทบุรี" selected={this.state.data.address_province == 'จันทบุรี'}>จันทบุรี</option>
                            <option value="ฉะเชิงเทรา" selected={this.state.data.address_province == 'ฉะเชิงเทรา'}>ฉะเชิงเทรา </option>
                            <option value="ชัยนาท" selected={this.state.data.address_province == 'ชัยนาท'}>ชัยนาท </option>
                            <option value="ชัยภูมิ" selected={this.state.data.address_province == 'ชัยภูมิ'}>ชัยภูมิ </option>
                            <option value="ชุมพร" selected={this.state.data.address_province == 'ชุมพร'}>ชุมพร </option>
                            <option value="ชลบุรี" selected={this.state.data.address_province == 'ชลบุรี'}>ชลบุรี </option>
                            <option value="เชียงใหม่" selected={this.state.data.address_province == 'เชียงใหม่'}>เชียงใหม่ </option>
                            <option value="เชียงราย" selected={this.state.data.address_province == 'เชียงราย'}>เชียงราย </option>
                            <option value="ตรัง" selected={this.state.data.address_province == 'ตรัง'}>ตรัง </option>
                            <option value="ตราด" selected={this.state.data.address_province == 'ตราด'}>ตราด </option>
                            <option value="ตาก" selected={this.state.data.address_province == 'ตาก'}>ตาก </option>
                            <option value="นครนายก" selected={this.state.data.address_province == 'นครนายก'}>นครนายก </option>
                            <option value="นครปฐม" selected={this.state.data.address_province == 'นครปฐม'}>นครปฐม </option>
                            <option value="นครพนม" selected={this.state.data.address_province == 'นครพนม'}>นครพนม </option>
                            <option value="นครราชสีมา" selected={this.state.data.address_province == 'นครราชสีมา'}>นครราชสีมา </option>
                            <option value="นครศรีธรรมราช" selected={this.state.data.address_province == 'นครศรีธรรมราช'}>นครศรีธรรมราช </option>
                            <option value="นครสวรรค์" selected={this.state.data.address_province == 'นครสวรรค์'}>นครสวรรค์ </option>
                            <option value="นราธิวาส" selected={this.state.data.address_province == 'นราธิวาส'}>นราธิวาส </option>
                            <option value="น่าน" selected={this.state.data.address_province == 'น่าน'}>น่าน </option>
                            <option value="นนทบุรี" selected={this.state.data.address_province == 'นนทบุรี'}>นนทบุรี </option>
                            <option value="บึงกาฬ" selected={this.state.data.address_province == 'บึงกาฬ'}>บึงกาฬ</option>
                            <option value="บุรีรัมย์" selected={this.state.data.address_province == 'บุรีรัมย์'}>บุรีรัมย์</option>
                            <option value="ประจวบคีรีขันธ์" selected={this.state.data.address_province == 'ประจวบคีรีขันธ์'}>ประจวบคีรีขันธ์ </option>
                            <option value="ปทุมธานี" selected={this.state.data.address_province == 'ปทุมธานี'}>ปทุมธานี </option>
                            <option value="ปราจีนบุรี" selected={this.state.data.address_province == 'ปราจีนบุรี'}>ปราจีนบุรี </option>
                            <option value="ปัตตานี" selected={this.state.data.address_province == 'ปัตตานี'}>ปัตตานี </option>
                            <option value="พะเยา" selected={this.state.data.address_province == 'พะเยา'}>พะเยา </option>
                            <option value="พระนครศรีอยุธยา" selected={this.state.data.address_province == 'พระนครศรีอยุธยา'}>พระนครศรีอยุธยา </option>
                            <option value="พังงา" selected={this.state.data.address_province == 'พังงา'}>พังงา </option>
                            <option value="พิจิตร" selected={this.state.data.address_province == 'พิจิตร'}>พิจิตร </option>
                            <option value="พิษณุโลก" selected={this.state.data.address_province == 'พิษณุโลก'}>พิษณุโลก </option>
                            <option value="เพชรบุรี" selected={this.state.data.address_province == 'เพชรบุรี'}>เพชรบุรี </option>
                            <option value="เพชรบูรณ์" selected={this.state.data.address_province == 'เพชรบูรณ์'}>เพชรบูรณ์ </option>
                            <option value="แพร่" selected={this.state.data.address_province == 'แพร่'}>แพร่ </option>
                            <option value="พัทลุง" selected={this.state.data.address_province == 'พัทลุง'}>พัทลุง </option>
                            <option value="ภูเก็ต" selected={this.state.data.address_province == 'ภูเก็ต'}>ภูเก็ต </option>
                            <option value="มหาสารคาม" selected={this.state.data.address_province == 'มหาสารคาม'}>มหาสารคาม </option>
                            <option value="มุกดาหาร" selected={this.state.data.address_province == 'มุกดาหาร'}>มุกดาหาร </option>
                            <option value="แม่ฮ่องสอน" selected={this.state.data.address_province == 'แม่ฮ่องสอน'}>แม่ฮ่องสอน </option>
                            <option value="ยโสธร" selected={this.state.data.address_province == 'ยโสธร'}>ยโสธร </option>
                            <option value="ยะลา" selected={this.state.data.address_province == 'ยะลา'}>ยะลา </option>
                            <option value="ร้อยเอ็ด" selected={this.state.data.address_province == 'ร้อยเอ็ด'}>ร้อยเอ็ด </option>
                            <option value="ระนอง" selected={this.state.data.address_province == 'ระนอง'}>ระนอง </option>
                            <option value="ระยอง" selected={this.state.data.address_province == 'ระยอง'}>ระยอง </option>
                            <option value="ราชบุรี" selected={this.state.data.address_province == 'ราชบุรี'}>ราชบุรี</option>
                            <option value="ลพบุรี" selected={this.state.data.address_province == 'ลพบุรี'}>ลพบุรี </option>
                            <option value="ลำปาง" selected={this.state.data.address_province == 'ลำปาง'}>ลำปาง </option>
                            <option value="ลำพูน" selected={this.state.data.address_province == 'ลำพูน'}>ลำพูน </option>
                            <option value="เลย" selected={this.state.data.address_province == 'เลย'}>เลย </option>
                            <option value="ศรีสะเกษ" selected={this.state.data.address_province == 'ศรีสะเกษ'}>ศรีสะเกษ</option>
                            <option value="สกลนคร" selected={this.state.data.address_province == 'สกลนคร'}>สกลนคร</option>
                            <option value="สงขลา" selected={this.state.data.address_province == 'สงขลา'}>สงขลา </option>
                            <option value="สมุทรสาคร" selected={this.state.data.address_province == 'สมุทรสาคร'}>สมุทรสาคร </option>
                            <option value="สมุทรปราการ" selected={this.state.data.address_province == 'สมุทรปราการ'}> สมุทรปราการ </option>
                            <option value="สมุทรสงคราม" selected={this.state.data.address_province == 'สมุทรสงคราม'}>สมุทรสงคราม </option>
                            <option value="สระแก้ว" selected={this.state.data.address_province == 'สระแก้ว'}>สระแก้ว </option>
                            <option value="สระบุรี" selected={this.state.data.address_province == 'สระบุรี'}>สระบุรี </option>
                            <option value="สิงห์บุรี" selected={this.state.data.address_province == 'สิงห์บุรี'}>สิงห์บุรี </option>
                            <option value="สุโขทัย" selected={this.state.data.address_province == 'สุโขทัย'}>สุโขทัย </option>
                            <option value="สุพรรณบุรี" selected={this.state.data.address_province == 'สุพรรณบุรี'}>สุพรรณบุรี </option>
                            <option value="สุราษฎร์ธานี" selected={this.state.data.address_province == 'สุราษฎร์ธานี'}>สุราษฎร์ธานี </option>
                            <option value="สุรินทร์" selected={this.state.data.address_province == 'สุรินทร์'}>สุรินทร์ </option>
                            <option value="สตูล" selected={this.state.data.address_province == 'สตูล'}>สตูล </option>
                            <option value="หนองคาย" selected={this.state.data.address_province == 'หนองคาย'}>หนองคาย </option>
                            <option value="หนองบัวลำภู" selected={this.state.data.address_province == 'หนองบัวลำภู'}>หนองบัวลำภู </option>
                            <option value="อำนาจเจริญ" selected={this.state.data.address_province == 'อำนาจเจริญ'}>อำนาจเจริญ </option>
                            <option value="อุดรธานี" selected={this.state.data.address_province == 'อุดรธานี'}>อุดรธานี </option>
                            <option value="อุตรดิตถ์" selected={this.state.data.address_province == 'อุตรดิตถ์'}>อุตรดิตถ์ </option>
                            <option value="อุทัยธานี" selected={this.state.data.address_province == 'อุทัยธานี'}>อุทัยธานี </option>
                            <option value="อุบลราชธานี" selected={this.state.data.address_province == 'อุบลราชธานี'}>อุบลราชธานี</option>
                            <option value="อ่างทอง" selected={this.state.data.address_province == 'อ่างทอง'}>อ่างทอง </option>
                            <option value="อื่นๆ" selected={this.state.data.address_province == 'อื่นๆ'}>อื่นๆ</option>
                        </select>
                        <span id="div-address_province" className="hide has-error">กรุณากรอกข้อมูล!</span>

                    </div>


                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="address_state">เขต *</label>
                        <input type="text" name="address_state" class="form-control" id="address_state" placeholder="เขต" value={this.state.data.address_state} required onChange={this.handleChange.bind(this)}></input>
                        <span id="div-address_state" className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="address_dist">แขวง *</label>
                        <input type="text" name="address_dist" class="form-control" id="address_dist" placeholder="แขวง" value={this.state.data.address_dist} required onChange={this.handleChange.bind(this)}></input>
                        <span id="div-address_dist" className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>
                    <div className="form-group col-lg-4">
                        <label className="label" for="address_postcode">รหัสไปรษณีย์ *</label>
                        <input type="text" name="address_postcode" class="form-control" id="address_postcode" placeholder="รหัสไปรษณีย์" value={this.state.data.address_postcode} required onChange={this.handleChange.bind(this)}></input>
                        <span id="div-address_postcode" className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>
                    <div className="form-group  col-lg-4">
                        <label className="label" for="address_home_code">รหัสประจำบ้าน *</label>
                        <input type="text" name="address_home_code" class="form-control" id="address_home_code" placeholder="รหัสประจำบ้าน" value={this.state.data.address_home_code} required onChange={this.handleChange.bind(this)}></input>
                        <span id="div-address_home_code" className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>

                </div>
                <div className="row">
                    <div className="form-group  col-lg-4">
                        <label className="label" for="address_phone">โทรศัพท์ *</label>
                        <input type="text" name="address_phone" class="form-control" id="address_phone" placeholder="โทรศัพท์" value={this.state.data.address_phone} required onChange={this.handleChange.bind(this)}></input>
                        <span id="div-address_phone" className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>
                    <div className="form-group  col-lg-8">
                        <label className="label" for="address_email">E-mail *</label>
                        <input type="text" name="address_email" class="form-control" id="address_email" placeholder="E-mail" value={this.state.data.address_email} required onChange={this.handleChange.bind(this)}></input>
                        <span id="div-address_email" className="hide has-error">กรุณากรอกข้อมูล!</span>
                    </div>
                    <div className="form-group  col-lg-12">
                        <label className="label" for="address_map">แผนที่</label>
                        <input type="text" name="address_map" class="form-control" id="address_map" placeholder="Link Google Map"></input>
                    </div>
                    <div className="form-group  col-lg-12">
                    <input
                    id="pac-input"
                    class="controls"
                    type="text"
                    placeholder="Search Box"
                    />
                <div id="map"></div>

                <Helmet>
                <script
                    src="https://maps.googleapis.com/maps/api/js?key=Ph_rR1L5H9X-wIs1eVxUiLBd7qQaZDpa0gz5UotYwPQ"
                    async
                    ></script>
                    
                </Helmet>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8286885262137!2d100.56079501527863!3d13.728819401523383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f1cb62263b5%3A0x2b7050b946a75a78!2sMillennium%20Residence%20Tower%20A!5e0!3m2!1sth!2sth!4v1616368626008!5m2!1sth!2sth" width="100%" height="450px" ></iframe>
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
            </form>
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-5 text-right">
                        <button className="btn-company-next" type="button"  onClick={(e) => { this.clickBack(1) }}  value="1">ย้อนกลับ</button>
                        <button className="btn-company-next" type="button"  onClick={(e) => { this.clickStep(3) }}  value="1">ดำเนินการต่อ <Arrowright /></button>
                    </div>

                </div>

            </div>


          );

      }
      company(){
        let qty = this.state.qty;

        return (
            <div className="col-12 mt-5 text-grey pb-3">
                <form id="form_1">
                <h3>ข้อมูลบริษัท</h3>
                <div className="form-group" >
                    <label className="label" for="CompanyNameInput">ชื่อบริษัท *</label>
                    <input type="text" class="form-control" id="CompanyNameInputTh" name="company_name" placeholder="ชื่อบริษัท(ภาษาไทย)" value={this.state.data.company_name} required onChange={this.handleChange.bind(this)} ></input>
                    <span id="div-CompanyNameInputTh" className="hide has-error">กรุณากรอกข้อมูล!</span>

                </div>
                <div className="form-group" >
                    <input type="text" class="form-control" id="CompanyNameInputEn" name="company_name_en" placeholder="ชื่อบริษัท(ภาษาอังกฤษ)" value={this.state.data.company_name_en} required  onChange={this.handleChange.bind(this)} ></input>
                    <span id="div-CompanyNameInputEn" className="hide has-error">กรุณากรอกข้อมูล!</span>
                </div>
                <div className="form-group">
                    <label className="label" >ตราประทับ</label>
                    ในกรณีที่ตราประทับมีชื่อบริษัท จะต้องระบุคำว่า บริษัท นำหน้าชื่อ และคำว่า จำกัด ตามหลังชื่อด้วย
                </div>
                <div className="row">

                    <div className="col-5 mt-5 text-center">
                    <label class="custom-file-upload">
                        <input type="file"/>
                        อัพโหลด ตราประทับ
                    </label>
                    </div>
                    <div className="col-7 mt-5">
                    <div className="form-group">
                            <div  class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" onClick={this.change_buy} onChange={this.handleChange.bind(this)}  name="buy_stamp"   value="buy" />
                                <label class="form-check-label" for="inlineRadio1">สั่งทำตรายาง (ราคา ตรายาง 200 บาท)</label>
                            </div>

                        </div>
                        <div class="block-qty clearfix hide" id="block-qty">
                            <div class="quantity-grup quantity-box clearfix"  >

                            <div class="le-quantity">

                                    <button type="button" class="minus" name="minus" onClick={(e) => { this.changeQty('minus') }} value="minus"  >-</button>
                                    <input name="qty[0]" type="text" value={this.state.qty} id="qty_val" />
                                    <button type="button" class="plus" name="plus" onClick={(e) => { this.changeQty('plus') }} className={ (this.state.step==2 ? 'is-active' : '')} value="plus">+</button>

                            </div>

                            </div>
                        </div>
                        <div class="clearfix hide" id="block-type">
                        <label for="StampInput">เลือกตราประทับแบบมาตรฐาน*</label>
                        <div className="form-group">


                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" onChange={this.handleChange.bind(this)}  name="select_stamp"  value="circle" />
                                <label class="form-check-label" for="inlineRadio1" onChange={this.handleChange.bind(this)} >วงกลม</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="select_stamp" onChange={this.handleChange.bind(this)}   value="ellipse" />
                                <label class="form-check-label" for="inlineRadio1">วงรี</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="select_stamp"  onChange={this.handleChange.bind(this)}  value="squre" />
                                <label class="form-check-label" for="inlineRadio1">สี่เหลี่ยม</label>
                            </div>

                        </div>

                        </div>
                    </div>

                </div>
                <div className="form-group">
                    <label lassName="label" for="purposecompany">วัตถุประสงค์บริษัท*</label>
                    <div class="form-check">
                        <input class="form-check-input" checked={this.state.data.purposecompany == 'ธุรกิจค้าขาย'}   type="radio" onChange={this.handleChange.bind(this)}  name="purposecompany" id="exampleRadios1"
                        value="ธุรกิจค้าขาย"

                         />
                        <label class="form-check-label"   for="exampleRadios1">
                            ธุรกิจค้าขาย
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" checked={this.state.data.purposecompany == 'ธุรกิจบริการ'}  type="radio" name="purposecompany" id="exampleRadios2" onChange={this.handleChange.bind(this)}  value="ธุรกิจบริการ"  />
                        <label class="form-check-label" for="exampleRadios2">
                        ธุรกิจบริการ
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" checked={this.state.data.purposecompany == 'ธุรกิจการผลิตสินค้าอุตสาหกรรมหรือหัตถกรรม'} name="purposecompany" id="exampleRadios3" onChange={this.handleChange.bind(this)}  value="ธุรกิจการผลิตสินค้าอุตสาหกรรมหรือหัตถกรรม"  />
                        <label class="form-check-label" for="exampleRadios3">
                        ธุรกิจการผลิตสินค้าอุตสาหกรรมหรือหัตถกรรม
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" checked={this.state.data.purposecompany == 'ธุรกิจเกษตรกรรม'} name="purposecompany" id="exampleRadios4" onChange={this.handleChange.bind(this)}  value="ธุรกิจเกษตรกรรม"  />
                        <label class="form-check-label" for="exampleRadios4">
                        ธุรกิจเกษตรกรรม
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" checked={this.state.data.purposecompany == 'สำนักงานผู้แทน'} name="purposecompany" id="exampleRadios5" onChange={this.handleChange.bind(this)}  value="สำนักงานผู้แทน"  />
                        <label class="form-check-label" for="exampleRadios5">
                        สำนักงานผู้แทน
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" checked={this.state.data.purposecompany == 'อื่น ๆ'} name="purposecompany" id="exampleRadios5" onChange={this.handleChange.bind(this)}  value="อื่น ๆ"  />
                        <label class="form-check-label" for="exampleRadios5">
                        อื่น ๆ
                        </label>

                        <input type="text" name="purposecompany_other"  className="ml-3 hide" id="purposecompany_other" placeholder="อื่น ๆ"  onChange={this.handleChange.bind(this)} value={this.state.data.purposecompany_other}  />
                    </div>



                </div>
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-4 text-right">
                        <button className="btn-company-next" type="button"  onClick={(e) => { this.clickStep(2) }}  value="1">ดำเนินการต่อ <Arrowright /></button>
                    </div>

                </div>
                </form>
            </div>


          );
      }
}
