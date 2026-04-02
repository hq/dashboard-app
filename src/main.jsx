import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { ProjectProvider } from './hooks/useProject'
import { ProposalTabProvider } from './contexts/ProposalTabContext'
import Layout from './components/Layout'
import Capture from './pages/Capture'
import Estimate from './pages/Estimate'
import ProposalDaniel from './pages/ProposalDaniel'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProjectProvider>
        <ProposalTabProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ProposalDaniel />} />
              <Route path="/tools/capture" element={<Capture />} />
              <Route path="/tools/estimate" element={<Estimate />} />
            </Route>
          </Routes>
        </ProposalTabProvider>
      </ProjectProvider>
    </BrowserRouter>
  </StrictMode>,
)
