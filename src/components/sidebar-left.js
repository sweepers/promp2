import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import githubs from '../img/github-icon.svg'
import Briefcase from '../assets/briefcase.svg'

const Sidebarleft = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <div className="col-md-12 col-lg-4">
          <p className="fcg"><b>จัดการโปรไฟล์</b></p>
          <div className="row">
            <div className="col-2"> <img src={githubs} alt="Github" /></div>
            <div className="col-10">
                <h4>NEDCHANOK</h4>
                <Link to="/" className="navbar-item c-main" title="Logo">
                    Edit Profile
                </Link>
            </div>

          </div>
          <hr />
          <b className="fcg">จัดการบริษัท</b>
          <div className="collapse show d-md-flex  pt-2 pl-0 min-vh-100 mb-5">
          <ul class="nav flex-column flex-nowrap overflow-hidden w-10">
                
                <li class="nav-item slmain">
                    <a class="nav-link collapsed text-truncate" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><Briefcase /><b class="pl-2">NEDCHANOK CO.,LTD.</b></a>
                    <div class="collapse" id="submenu1" aria-expanded="false">
                        <ul class="flex-column pl-2 nav">
                            <li class="nav-item"><a class="nav-link py-0" href="#"><span>ข้อมูลบริษัท</span></a></li>
                            <li class="nav-item">
                                <a class="nav-link collapsed py-1" href="#submenu1sub1" data-toggle="collapse" data-target="#submenu1sub1"><span>การจดทะเบียนบริษัท</span></a>
                                <div class="collapse" id="submenu1sub1" aria-expanded="false">
                                    <ul class="flex-column nav pl-4">
                                        <li class="nav-item">
                                            <a class="nav-link p-1" href="#">
                                                <i class="fa fa-fw fa-clock-o"></i> Daily </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link p-1" href="#">
                                                <i class="fa fa-fw fa-dashboard"></i> Dashboard </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link p-1" href="#">
                                                <i class="fa fa-fw fa-bar-chart"></i> Charts </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link p-1" href="#">
                                                <i class="fa fa-fw fa-compass"></i> Areas </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <Link to="/" className="navbar-item c-main" title="Logo">
                                   สมุดทะเบียนผู้ถือหุ้น
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/" className="navbar-item c-main" title="Logo">
                                   สมุดใบหุ้น
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/" className="navbar-item c-main" title="Logo">
                                   การประชุมบริษัท
                                </Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link collapsed py-1" href="#submenu1sub2" data-toggle="collapse" data-target="#submenu1sub2"><span>กฏหมายและใบอนุญาต</span></a>
                                <div class="collapse" id="submenu1sub2" aria-expanded="false">
                                    <ul class="flex-column nav pl-4">
                                        <li class="nav-item">
                                            <a class="nav-link p-1" href="#">
                                                การขออนุญาตประกอบกิจการ
                                             </a>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item slmain">
                    <a class="nav-link collapsed text-truncate" href="#submenu2" data-toggle="collapse" data-target="#submenu2"><Briefcase /> <b class=" pl-2"> CHANT CO.,LTD.</b></a>
                    <div class="collapse" id="submenu2" aria-expanded="false">
                        <ul class="flex-column pl-2 nav">
                            <li class="nav-item"><a class="nav-link py-0" href="#"><span>ข้อมูลบริษัท</span></a></li>
                            <li class="nav-item">
                                <a class="nav-link collapsed py-1" href="#submenu2sub1" data-toggle="collapse" data-target="#submenu2sub1"><span>การจดทะเบียนบริษัท</span></a>
                                <div class="collapse" id="submenu2sub1" aria-expanded="false">
                                    <ul class="flex-column nav pl-4">
                                        <li class="nav-item">
                                            <a class="nav-link p-1" href="#">
                                                <i class="fa fa-fw fa-clock-o"></i> Daily </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link p-1" href="#">
                                                <i class="fa fa-fw fa-dashboard"></i> Dashboard </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link p-1" href="#">
                                                <i class="fa fa-fw fa-bar-chart"></i> Charts </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link p-1" href="#">
                                                <i class="fa fa-fw fa-compass"></i> Areas </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <Link to="/" className="navbar-item c-main" title="Logo">
                                   สมุดทะเบียนผู้ถือหุ้น
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/" className="navbar-item c-main" title="Logo">
                                   สมุดใบหุ้น
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/" className="navbar-item c-main" title="Logo">
                                   การประชุมบริษัท
                                </Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link collapsed py-1" href="#submenu2sub2" data-toggle="collapse" data-target="#submenu2sub2"><span>กฏหมายและใบอนุญาต</span></a>
                                <div class="collapse" id="submenu2sub2" aria-expanded="false">
                                    <ul class="flex-column nav pl-4">
                                        <li class="nav-item">
                                            <a class="nav-link p-1" href="#">
                                                การขออนุญาตประกอบกิจการ
                                             </a>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
               
               
            </ul>
            
          </div>
          <div className="text-center">
          <Link  className="btn-company-add" to="/user">
              +  เพิ่มบริษัทใหม่
            </Link>
          </div>
         
        
      </div>
    )
  }
}

export default Sidebarleft
