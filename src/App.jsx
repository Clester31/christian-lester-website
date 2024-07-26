import { useEffect, useState } from 'react'
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

import album_site from './assets/project_images/album-site.png'
import crate_site from './assets/project_images/crate-site.png'
import color_site from './assets/project_images/color-site.png'

import resume from './assets/resume/cl_resume.pdf'

import ImageGallery from './components/ImageGallery';
import ProjectDisplay from './components/ProjectDisplay';

import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
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
        <Header />
        <AboutMe />
        <Tools />
        <Projects />
        <Resume />
      </div>
      <Footer />
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateBgOnScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', updateBgOnScroll);
  }, [])

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''} hidden text-xl flex-row justify-between p-2 items-center fixed w-screen sm:flex`}>
      <div className='name-text mx-2 p-2 font-bold'>
        <h1 className='text-2xl'>CL.</h1>
      </div>
      <div className='flex flex-row'>
        <ul className='flex flex-row p-2 ml-10'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
        </ul>
      </div>
      <div className='mx-2'>
        <button className='aero w-16 mx-2 hover:bg-amber-500'><a href='https://github.com/Clester31' target='_blank'><img src={gh_logo} alt="" /></a></button>
        <button className='aero w-16 mx-2 hover:bg-amber-500'><a href='https://www.linkedin.com/in/christian-lester-b71412239/' target='_blank'><img src={li_logo} alt="" /></a></button>
      </div>
    </div>
  )
}

function Header() {
  return (
    <div className='flex justify-center my-32 items-center'>
      <div className='about-me flex flex-col mx-10 text-4xl leading-10 p-4 rounded-xl'>
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
    <div className='about-me flex flex-col items-center w-1/2 items-center justify-center m-auto rounded-xl p-2'>
      <h1 className='text-3xl my-6'>About Me</h1>
      <div className='flex flex-row justify-around'>
        <div className='leading-8 p-2 text-lg'>
          <h1>I am a currently a student at the University of Pittsburgh pursuing a degree in Computer Science.</h1>
          <h1>I have over six years of programming experience with lagnauges such as Java, C, C++, Python, and JavaScript.</h1>
          <h1>Currently, I am aspiring to become a front-end developer with a primary focus on React.</h1>
          <h1>Outside of programming, I also enjoy music production as well. <a href='https://open.spotify.com/artist/6i8lLCMSQ1pBgIt2B5XH3e?si=WyII-thIS5qOMkIHPjuCJw' target='_blank' className='text-white hover:text-black'>Check it out here!</a></h1>
        </div>
      </div>
    </div>
  )
}

function Tools() {
  const [langIcons, setLangIcons] = useState([c_logo, cpp_logo, java_logo, python_logo, html_logo, css_logo, js_logo, react_logo, tailwind_logo]);

  return (
    <div className='about-me flex flex-col items-center w-1/2 items-center justify-center m-auto rounded-xl p-2 mt-10'>
      <h1 className='text-3xl my-6'>Languages/Tools</h1>
      <div>
        {langIcons.map((item, idx) => {
          return <button key={idx} className='aero tool-icon'><img src={item} alt="" /></button>
        })}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className='about-me flex flex-col items-center w-1/2 items-center justify-center m-auto rounded-xl p-2 mt-10'>
      <h1 className='text-3xl my-6'>Projects</h1>
      <div className='flex flex-row'>
        <ProjectDisplay image={album_site} description={'A site where users can rate, review, and maintain a collection of albums.'} link={'https://github.com/Clester31/album-review-site'} />
        <ProjectDisplay image={crate_site} description={'A loot box opening simulator based off Team Fortress 2.'} link={'https://github.com/Clester31/album-review-site'} />
        <ProjectDisplay image={color_site} description={'A simple color gradient generator that creates a seamless transition.'} link={'https://github.com/Clester31/Color-Gradient-Generator'} />
      </div>
    </div>
  )
}

function Resume() {
  return (
    <div className='about-me flex flex-col items-center w-1/2 items-center justify-center m-auto rounded-xl p-2 mt-10'>
      <h1 className='text-3xl my-6'>Resume</h1>
      <button className='aero mb-6 hover:bg-amber-500'><a href={resume} download={'Christian Lester Resume'}>Download PDF</a></button>
      <div className='shadow-xl'>
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
