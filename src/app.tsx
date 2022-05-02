import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import PageLayout from './components/page-layout';
import HomePage from './pages/homepage';
import ContactsPage from './pages/contactspage';
import OrdersPage from './pages/orderspage';
import AboutPage from './pages/aboutpage';
import ReviewsPage from './pages/reviewspage';
import LoginPage from './pages/loginpage';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/uzsakymai" element={<OrdersPage />} />
        <Route path="/apie" element={<AboutPage />} />
        <Route path="/kontaktai" element={<ContactsPage />} />
        <Route path="/atsiliepimai" element={<ReviewsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
