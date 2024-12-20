import { useState } from 'react'
import annaLogo from '/logo-a-grey.svg'
import './App.css'
import classes from './components/main.module.css';
import Section from './components/Section';
import githubImg from "./images/github.svg";
import upArrow from './images/arrow-up.svg';
import Project from './components/Project';

let projects = [{
  "name": "Reduction Print Letters",
  "description": "change distribution process from print to digital channals",
  "technologies": ["HTML", "CSS", "JavaScript", "ReactJs"]
},
{
  "name": "Update PB",
  "description": "bla bla bla",
  "technologies": [".Net", "PoweShell", "IT"]
}];

function App() {

  const [isScroll, setIsScroll] = useState(false);

  //   componentDidMount: function() {
  //     window.addEventListener('scroll', this.handleScroll);
  // },componentWillUnmount: function() {
  //     window.removeEventListener('scroll', this.handleScroll);
  // },handleScroll: function(event) {
  //     let scrollTop = event.srcElement.body.scrollTop,
  //         itemTranslate = Math.min(0, scrollTop/3 - 60);this.setState({
  //       transform: itemTranslate
  //     });
  // },

  
  // event.target.scrollTop

  return (
    // <div onScroll={() => setIsScroll(true)} style={{ overflowY: 'scroll', height: '450px' }}>
    <div>
      <div role='banner' id='top' className={classes.row}>
        {/* <a href="https://vite.dev" target="_blank"> */}
        <img src={annaLogo} className={classes.logo} alt="Vite logo" />
        <nav>
          <ul className={classes['nav__items']}>
            {/* <li><a href='#home'>Home</a></li> */}
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
      </div>
      <div role='main'>
        <div className={classes.row}>
          <div>
            <h1>Anna Kreimer Ayash</h1>
            <h2>I build things for the web.</h2>
            <p>I'm a software engineer specializing in building exceptional digital experiences.</p>
            <div className={classes['work__links']}>
              <a target="_blank" className={classes['link__text']}>
                Visit Site <span>→</span>
              </a>
              <a href="https://github.com/nisarhassan12/portfolio" title="View Source Code" target="_blank">
                <img src={githubImg} className={classes['work__code']} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
        <section id='about'>
          <Section sectionName={'About'}>
            {/* new line in React:  {"\n"} */}
            <p>Passionate Frontend Developer with 4+ years of experience designing and developing dynamic, user-centric web applications.
              Proficient in React.js, JavaScript, HTML5, CSS3, and responsive design. Known for creating seamless, scalable, and maintainable code,
              improving user experiences, and collaborating effectively with cross-functional teams to deliver high-quality projects on time.
              Adept at optimizing processes, driving cost savings, and mentoring junior developers.</p>
            <h4>My Skills</h4>
            <ul className={classes['work__list']}>
              <li>JavaScript(ES6+)</li>
              <li>React.js</li>
              <li>JQuery</li>
              <li>Vue.js</li>
              <li>.Net</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </Section>
        </section>
        <section id='projects'>
          {/* <h2>Projects</h2> */}
          <ul>
            <div>
              {projects.map((pro, i) => (
                <Section key={'s' + i} sectionName={`# ${i + 1} Project`}>
                  <Project key={'p' + i} data={pro} />
                </Section>
              ))}
            </div>
          </ul>
        </section>
      </div>
      {/* <a href='#top' className={isScroll? classes['back-to-top'] : classes.hidden} onClick={!isScroll}> */}
      {isScroll && <a href='#top' className={classes['back-to-top']}>
        <img src={upArrow} alt="back-to-top" />
      </a>}
    </div>
  )
}

export default App
