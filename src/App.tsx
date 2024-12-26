import React from 'react'
import Header from './components/header/Header'
import './index.scss'
import Hero from './components/hero/Hero'
import Quality from './components/quality/Quality'
import Druk from './components/druk/Druk'
import Landings from './components/landings/Landings'
import Footer from './components/footer/Footer'

const App: React.FC = () => {
	return (
		<>
			<Header />
			<Hero />
			<Quality />
			<Druk />
			<Landings />
			<Footer />
		</>
	)
}

export default App
