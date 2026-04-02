import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useSearchParams, Navigate } from 'react-router-dom'
import './index.css'
import { ProjectProvider } from './hooks/useProject'
import { ProposalTabProvider } from './contexts/ProposalTabContext'
import Layout from './components/Layout'
import Capture from './pages/Capture'
import Estimate from './pages/Estimate'
import Proposal from './pages/Proposal'

// Internal tools gate: only render tool pages when ?internal=true is present.
// Without the flag, redirects to the proposal root.
function InternalGate({ children }) {
  const [params] = useSearchParams()
  if (params.get('internal') !== 'true') {
    return <Navigate to="/" replace />
  }
  // Wrap tool pages in ProjectProvider since they need annotation/screenshot state
  return <ProjectProvider>{children}</ProjectProvider>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProposalTabProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Proposal />} />
            <Route path="/tools/capture" element={<InternalGate><Capture /></InternalGate>} />
            <Route path="/tools/estimate" element={<InternalGate><Estimate /></InternalGate>} />
          </Route>
        </Routes>
      </ProposalTabProvider>
    </BrowserRouter>
  </StrictMode>,
)
