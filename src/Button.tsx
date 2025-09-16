import React from 'react'
export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props} style={{ padding: '6px 12px', borderRadius: 8, border: '1px solid #ccc', cursor: 'pointer' }} />
}
