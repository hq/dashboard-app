import { createContext, useContext, useState } from 'react'

const ProposalTabContext = createContext()

export const PROPOSAL_TABS = [
  { id: 'opportunity', label: 'The Opportunity' },
  { id: 'discovery', label: 'What We Found' },
  { id: 'scope', label: 'The Scope' },
  { id: 'delivery', label: 'How We Deliver' },
  { id: 'next-steps', label: 'Next Steps' },
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
