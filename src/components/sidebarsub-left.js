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
        let urlElements = window.location.href.split('/')
        if(!urlElements[4]){
            urlElements[4] = '';

        }
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
               
            </div>
        )
      }
}
export default Sidebarsubleft