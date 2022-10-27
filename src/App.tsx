import React, { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import GuestPage from './pages/GuestPage'
import GuestsPage from './pages/GuestsPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'

const App = (): ReactElement => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="guests" element={<GuestsPage />} />
      <Route path="guests/:guestId" element={<GuestPage />} />
    </Route>
  </Routes>
)
export default App
