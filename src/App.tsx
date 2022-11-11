import React, { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/ui/Layout'
import GuestPage from './components/pages/GuestPage'
import GuestsPage from './components/pages/GuestsPage'
import AuthPage from './components/pages/AuthPage'
import MainPage from './components/pages/MainPage'
import EditUserForm from './components/ui/form/EditUserForm'

const App = (): ReactElement => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="login" element={<AuthPage />} />
      <Route path="guests" element={<GuestsPage />} />
      <Route path="guests/:guestId" element={<GuestPage />} />
      <Route path="guests/:guestId/edit" element={<EditUserForm />} />
    </Route>
  </Routes>
)
export default App
