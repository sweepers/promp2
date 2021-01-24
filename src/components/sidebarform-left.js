import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import githubs from '../img/github-icon.svg'
import Briefcase from '../assets/briefcase.svg'

const Sidebarformleft = class extends React.Component {
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
      <div className="col-md-12 col-lg-4 bg-yellow" >
    
        <ol>
            <li class="is-active">  
              <Link className="navbar-link" to="/user/form_company">
                ข้อมูลบริษัท
              </Link>
              </li>
            <li>ที่อยู่บริษัท</li>
            <li>ข้อมูลผู้ถือหุ้น</li>
            <li>ทุนจดทะเบียน</li>
            <li>ข้อมูลผู้ก่อตั้ง</li>
            <li>ข้อมูลกรรมการ</li>
            <li>การประชุมผู้จัดตั้ง</li>

        </ol>
      </div>
    )
  }
}

export default Sidebarformleft
