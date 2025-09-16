import React from 'react'
import { Link, useLocation } from 'react-router-dom'

type Tab = { label: string; to: string }
export function Tabs({ tabs }: { tabs: Tab[] }) {
  const loc = useLocation()
  return (
    <nav style={{ display: 'flex', gap: 12, padding: 8, borderBottom: '1px solid #ddd' }}>
      {tabs.map(t => {
        const active = loc.pathname.startsWith(t.to)
        return (
          <Link key={t.to} to={t.to} style={{ 
            textDecoration: 'none', 
            padding: '6px 10px',
            borderRadius: 8,
            background: active ? '#eef' : 'transparent'
          }}>{t.label}</Link>
        )
      })}
    </nav>
  )
}
