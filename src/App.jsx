import { useEffect, useState, useRef } from 'react'
import './App.css'
import gh_logo from './assets/github-mark-white.png';
import li_logo from './assets/li_logo.png';
import headshot from './assets/headshot.png'

import img_01 from './assets/gallery/img_01.png';
import img_02 from './assets/gallery/img_02.png';

import c_logo from './assets/tool_images/c.png';
import cpp_logo from './assets/tool_images/cpp.png';
import css_logo from './assets/tool_images/css.png';
import html_logo from './assets/tool_images/html.png';
import java_logo from './assets/tool_images/java.png';
import js_logo from './assets/tool_images/js.png';
import python_logo from './assets/tool_images/python.png';
import react_logo from './assets/tool_images/react.png';
import tailwind_logo from './assets/tool_images/tailwind.png';
import mongo_logo from './assets/tool_images/mongo.png';

import album_site from './assets/project_images/album-site.png'
import crate_site from './assets/project_images/crate-site.png'
import color_site from './assets/project_images/color-site.png'

import resume from './assets/resume/cl_resume.pdf'

import ImageGallery from './components/ImageGallery';
import ProjectDisplay from './components/ProjectDisplay';

import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="flex-grow">
        <Element name="home">
          <Header />
        </Element>
        <Element name="about">
          <AboutMe />
        </Element>
        <Element name="tools">
          <Tools />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="resume">
          <Resume />
        </Element>
      </div>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateBgOnScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', updateBgOnScroll);

    return () => window.removeEventListener('scroll', updateBgOnScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''} hidden text-xl flex-row justify-between p-2 items-center fixed w-screen sm:flex`}>
      <div className='name-text mx-2 p-2 font-bold'>
        <h1 className='text-2xl'>CL.</h1>
      </div>
      <div className='flex flex-row'>
        <ul className='flex flex-row p-2 lg:ml-10'>
          <li className='w-16 lg:text-lg text-sm lg:w-24 flex justify-center mx-6'>
            <Link to="home" smooth={true} duration={500} offset={-100}>Home</Link>
          </li>
          <li className='w-16 lg:text-lg text-sm lg:w-24 flex justify-center mx-6'>
            <Link to="about" smooth={true} duration={500} offset={-100}>About</Link>
          </li>
          <li className='w-16 lg:text-lg text-sm lg:w-24 flex justify-center mx-6'>
            <Link to="projects" smooth={true} duration={500} offset={-90}>Projects</Link>
          </li>
          <li className='w-16 lg:text-lg text-sm lg:w-24 flex justify-center mx-6'>
            <Link to="resume" smooth={true} duration={500} offset={-100}>Resume</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className='flex flex-row'>
          <li className='text-sm lg:w-16 flex justify-center mx-6 lg:flex hidden'>
            <a href='https://github.com/Clester31' target='_blank' rel='noopener noreferrer'>
              <img className='w-8' src={gh_logo} alt="GitHub" />
            </a>
          </li>
          <li className='text-sm lg:w-16 flex justify-center mx-6 lg:flex hidden'>
            <a href='https://www.linkedin.com/in/christian-lester-b71412239/' target='_blank' rel='noopener noreferrer'>
              <img className='w-8' src={li_logo} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className='flex justify-center sm:mt-32 mt-16 mb-16 items-center lg:flex-row flex-col'>
      <div className='about-me flex flex-col mx-10 text-2xl sm:text-4xl leading-10 p-4 rounded-xl lg:mb-0 mb-10'>
        <h1>Hi there!</h1>
        <h1>My name is <span className='name-text font-bold'>Christian Lester</span></h1>
      </div>
      <div className='mx-10'>
        <img src={headshot} alt="" className='rounded-full w-72 border-4' />
      </div>
    </div>
  )
}

function AboutMe() {
  const [imgGallery, setImgGallery] = useState([img_01, img_02]);

  return (
    <div className='about-me flex flex-col items-center w-3/5 items-center justify-center m-auto rounded-xl p-2 text-center'>
      <h1 className='text-3xl my-6'>About Me</h1>
      <div className='flex flex-row justify-around mb-4'>
        <div className='leading-8 p-2 text-md'>
          <h1>I am a currently a student at the University of Pittsburgh pursuing a degree in Computer Science.</h1>
          <h1>I have over six years of programming experience with Java, C, C++, Python, and JavaScript, etc.</h1>
          <h1>Currently, I am aspiring to become a front-end developer with a primary focus on React.</h1>
          <h1>Outside of programming, I also enjoy music production as well. <a href='https://open.spotify.com/artist/6i8lLCMSQ1pBgIt2B5XH3e?si=WyII-thIS5qOMkIHPjuCJw' target='_blank' className='text-white hover:text-black'>Check it out here!</a></h1>
        </div>
      </div>
    </div>
  )
}

function Tools() {
  const [langIcons, setLangIcons] = useState([c_logo, cpp_logo, java_logo, python_logo, html_logo, css_logo, js_logo, react_logo, tailwind_logo, mongo_logo]);

  return (
    <div className='about-me flex flex-col items-center w-3/5 justify-center m-auto rounded-xl p-2 mt-10'>
      <h1 className='text-3xl my-6'>Languages/Tools</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 flex mb-6'>
        {langIcons.map((item, idx) => (
          <button key={idx} className='aero tool-icon p-2'>
            <img src={item} alt="" className='w-12' />
          </button>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className='about-me flex flex-col items-center w-3/5 items-center justify-center m-auto rounded-xl p-2 mt-10'>
      <h1 className='text-3xl my-6'>Projects</h1>
      <div className='flex flex-col lg:flex-row '>
        <ProjectDisplay image={album_site} description={'A site where users can rate, review, and maintain a collection of albums.'} link={'https://github.com/Clester31/album-review-site'} />
        <ProjectDisplay image={crate_site} description={'A loot box opening simulator based off of Team Fortress 2.'} link={'https://github.com/Clester31/tf2-unboxing-simulator'} />
        <ProjectDisplay image={color_site} description={'A simple color gradient generator that creates a seamless transition.'} link={'https://github.com/Clester31/Color-Gradient-Generator'} />
      </div>
    </div>
  )
}

function Resume() {
  return (
    <div className='about-me flex flex-col items-center w-3/5 items-center justify-center m-auto rounded-xl p-2 mt-10'>
      <h1 className='text-3xl my-6'>Resume</h1>
      <button className='aero mb-6 hover:bg-amber-500'><a href={resume} download={'Christian Lester Resume'}>Download PDF</a></button>
      <div className='shadow-xl lg:flex hidden'>
        <Document file={resume}>
          <Page pageNumber={1} renderMode='canvas' />
        </Document>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className='footer flex flex-row m-auto justify-center p-3 w-screen mt-5 bottom-0'>
      <h1 className='px-5'>Developed by Christian Lester</h1>
      <h1 className='px-5'>Copyright © 2024 CL</h1>
    </div>
  )
}
