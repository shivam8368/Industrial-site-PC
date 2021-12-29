import './navigation.css'
import { Link } from 'react-router-dom'
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <Link className='navbar-brand page-scroll' to='/'>
            React Landing Page
          </Link>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <Link to='/about' className='page-scroll'>
                About
              </Link>
            </li>
            <li>
              <Link to='/contact' className='page-scroll'>
                Contact
              </Link>
            </li>
            <li>
              <Link to='/service' className='page-scroll'>
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
