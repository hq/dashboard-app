import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { ProjectProvider } from './hooks/useProject'
import { ProposalTabProvider } from './contexts/ProposalTabContext'
import Layout from './components/Layout'
import Capture from './pages/Capture'
import Estimate from './pages/Estimate'
import Proposal from './pages/Proposal'
import ProposalDaniel from './pages/ProposalDaniel'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProjectProvider>
        <ProposalTabProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Proposal />} />
              <Route path="/tools/capture" element={<Capture />} />
              <Route path="/tools/estimate" element={<Estimate />} />
              <Route path="/proposal-daniel" element={<ProposalDaniel />} />
            </Route>
          </Routes>
        </ProposalTabProvider>
      </ProjectProvider>
    </BrowserRouter>
  </StrictMode>,
)
