import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import Arrowright from '../assets/arrow_right.svg'
import Barchart from '../assets/bar-chart_active.svg'
import Feather from '../assets/feather.svg'
import Creditcard from '../assets/credit-card.svg'
import Iconcalendar from '../assets/calendar.svg'
const Sidebarsubleft = class extends React.Component {
    constructor(props) {
        super(props)
        /*let urlElements = window.location.href.split('/')
        if(!urlElements[4]){
            urlElements[4] = '';

        }*/
        let urlElements = [];
        urlElements[4] = '';
        console.log(urlElements);
        this.state = {
          active: false,
          menu:urlElements[4],
          navBarActiveClass: '',
        }
      }
      render() {
        return (
            <div className="col-lg-5 sub">
               <div  className={"lits-menu  " + (this.state.menu == '' ? 'active' : '')}>
                    
                    <div className="row">
                        <div className="col-1">
                            <Barchart className="h-6" />
                        </div>
                        <div className="col-9">
                        <Link   to="/user">
                            <h5>กรอกข้อมูล</h5>
                        </Link>
                           
                            <span>Lorem ipsum dolorsit met</span>

                        </div>
                        <div className="col-1">
                            <Arrowright className="h-6" />
                        </div>
                    </div>
               </div>
               <div className={"lits-menu  " + (this.state.menu == 'confirm_buy' ? 'active' : '')}>
                    
                    <div className="row">
                        <div className="col-1">
                            <Feather className="h-6" />
                        </div>
                        <div className="col-9">
                            <Link   to="/user/confirm_buy">
                                <h5>ยืนยันการซื้อ</h5>
                            </Link>
                          
                            <span>Lorem ipsum dolorsit met</span>

                        </div>
                        <div className="col-1">
                            <Arrowright className="h-6" />
                        </div>
                    </div>
               </div>
               <div  className={"lits-menu  " + (this.state.menu == 'payments' ? 'active' : '')}>
                    
                    <div className="row">
                        <div className="col-1">
                            <Creditcard className="h-6" />
                        </div>
                        <div className="col-9">
                            <Link   to="/user/payments">
                                <h5>ชำระค่าบริการ</h5>
                            </Link>
                           
                            <span>Lorem ipsum dolorsit met</span>

                        </div>
                        <div className="col-1">
                            <Arrowright className="h-6" />
                        </div>
                    </div>
               </div>
               <div className={"lits-menu  " + (this.state.menu == 'confirm_booking' ? 'active' : '')}>
                    
                    <div className="row">
                        <div className="col-1">
                            <Iconcalendar className="h-6" />
                        </div>
                        <div className="col-9">
                            <Link   to="/user/confirm_booking">
                                <h5>ยืนยันการนับหมาย</h5>
                            </Link>
                          
                            
                            <span>Lorem ipsum dolorsit met</span>

                        </div>
                        <div className="col-1">
                            <Arrowright className="h-6" />
                        </div>
                    </div>
               </div>

               <div className={"lits-menu  " + (this.state.menu == 'register_complete' ? 'active' : '')}>
                    
                    <div className="row">
                        <div className="col-1">
                            <Feather className="h-6" />
                        </div>
                        <div className="col-9">
                        <Link   to="/user/register_complete">
                                <h5>จดทะเบียนบริษัทแล้วเสร็จ</h5>
                            </Link>
                            
                            <span>Lorem ipsum dolorsit met</span>

                        </div>
                        <div className="col-1">
                            <Arrowright className="h-6" />
                        </div>
                    </div>
               </div> 
            </div>
        )
      }
}
export default Sidebarsubleft