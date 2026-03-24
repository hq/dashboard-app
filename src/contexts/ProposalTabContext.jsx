import { createContext, useContext, useState } from 'react'

const ProposalTabContext = createContext()

export const PROPOSAL_TABS = [
  { id: 'intro', label: 'Intro' },
  { id: 'scope', label: 'Scope' },
  { id: 'scenarios', label: 'Scenarios' },
  { id: 'estimate', label: 'Estimate' },
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
