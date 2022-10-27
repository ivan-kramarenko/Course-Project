import React, { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import Guests from './components/Guests'
import Layout from './components/Layout'
import GuestsPage from './pages/GuestsPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'

const App = (): ReactElement => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="guests" element={<GuestsPage />} />
      </Route>
    </Routes>
    <Guests />
  </>
)
export default App
