import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

// Layout Components
import Header from './components/Header'
import Footer from './components/Footer'

// Main Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import Careers from './pages/Careers'
import Blog from './pages/Blog'

// Recruitment Pages
import Recruitment from './pages/recruitment/Recruitment'
import PayrollManagement from './pages/recruitment/PayrollManagement'
import POSHConsulting from './pages/recruitment/POSHConsulting'
import BackgroundVerification from './pages/recruitment/BackgroundVerification'

// Legal Pages
import LegalConsulting from './pages/legal/LegalConsulting'
import CompanyRegistration from './pages/legal/CompanyRegistration'
import Compliance from './pages/legal/Compliance'
import MSMEStartup from './pages/legal/MSMEStartup'
import LegalDrafting from './pages/legal/LegalDrafting'
import LegalAbout from './pages/legal/LegalAbout'
import PracticeAreas from './pages/legal/PracticeAreas'

// Tech Pages
import TechServices from './pages/tech/TechServices'
import MVPDevelopment from './pages/tech/MVPDevelopment'
import WebsiteDevelopment from './pages/tech/WebsiteDevelopment'
import SoftwareDevelopment from './pages/tech/SoftwareDevelopment'
import MobileAppDevelopment from './pages/tech/MobileAppDevelopment'
import SupportMaintenance from './pages/tech/SupportMaintenance'
import TechCareers from './pages/tech/TechCareers'
import TechContact from './pages/tech/TechContact'

// Industries
import Industries from './pages/Industries'

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/industries" element={<Industries />} />

            {/* Recruitment Routes */}
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/recruitment/payroll-management" element={<PayrollManagement />} />
            <Route path="/recruitment/posh-consulting" element={<POSHConsulting />} />
            <Route path="/recruitment/background-verification" element={<BackgroundVerification />} />

            {/* Legal Routes */}
            <Route path="/legal" element={<LegalConsulting />} />
            <Route path="/legal/company-registration" element={<CompanyRegistration />} />
            <Route path="/legal/compliance" element={<Compliance />} />
            <Route path="/legal/msme-startup" element={<MSMEStartup />} />
            <Route path="/legal/drafting-vetting" element={<LegalDrafting />} />
            <Route path="/legal/about" element={<LegalAbout />} />
            <Route path="/legal/practice-areas" element={<PracticeAreas />} />

            {/* Tech Routes */}
            <Route path="/tech" element={<TechServices />} />
            <Route path="/tech/mvp-development" element={<MVPDevelopment />} />
            <Route path="/tech/website-development" element={<WebsiteDevelopment />} />
            <Route path="/tech/software-development" element={<SoftwareDevelopment />} />
            <Route path="/tech/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/tech/support-maintenance" element={<SupportMaintenance />} />
            <Route path="/tech/careers" element={<TechCareers />} />
            <Route path="/tech/contact" element={<TechContact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
