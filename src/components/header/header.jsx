import './header.css';
import headerBg from './images/headerBg.jpeg'
import { Parallax } from 'react-scroll-parallax';
import Carousel from 'nuka-carousel';



export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <Parallax className="overlay" y={[10, -30]} tagOuter="figure">
          <div className='container'>
            <div className='row'>
              <div className='col-md-10 col-sm-12 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
          </Parallax>
        </div>
    </header>

  )
}
