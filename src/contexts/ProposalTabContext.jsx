import { createContext, useContext, useState } from 'react'

const ProposalTabContext = createContext()

export const PROPOSAL_TABS = [
  { id: 'objective', label: 'The Objective' },
  { id: 'research', label: 'Phase 1' },
  { id: 'next-steps', label: 'Phase 2' },
  { id: 'timeline', label: 'Phase 3' },
]

export function ProposalTabProvider({ children }) {
  const [activeTab, setActiveTab] = useState(0)

  const goTo = (index) => {
    setActiveTab(index)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ProposalTabContext.Provider value={{ activeTab, goTo }}>
      {children}
    </ProposalTabContext.Provider>
  )
}

export function useProposalTab() {
  return useContext(ProposalTabContext)
}
