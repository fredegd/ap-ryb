import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import BlogPostPage from './components/BlogPostPage';
import ServiceListPage from './components/ServiceListPage';
import ServicePage from './components/ServicePage';
import Services from './components/Services';
import BlogListPage from './components/BlogListPage';
import BlogPreview from './components/BlogPreview';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="text-gray-50 font-passion relative min-h-screen overflow-x-hidden">
      <BackgroundAnimation />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <BlogPreview />
              <Contacts />
            </>
          } />
          <Route path="/services" element={<ServiceListPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
