import React from 'react'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

const App = () => {
	return (
		<>
			<Nav/>
			<About/>
			<Experience/>
			<Projects/>
			<Skills/>
			<Contact/>
			<Footer/>
		</>
	)
}

export default App