import React from 'react'
import { ThemeProvider } from './whiteboard/contexts/ThemeContext';
import { IsScreenSmallProvider } from './whiteboard/contexts/ScreenSmallContext';
import Paint from './whiteboard/components/App/Paint';
import Header from '../components/Header';
function Work() {
  return (
    <ThemeProvider>
			<IsScreenSmallProvider>
				<Header/>
				<Paint />
			</IsScreenSmallProvider>
		</ThemeProvider>

  )
}

export default Work
