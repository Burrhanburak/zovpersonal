import React from 'react'
import { Handshake } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`flex items-center space-x-2 ${className || ''}`}>
      <Handshake className="text-current" />
      <span className="text-xl font-bold text-current">Zov Personal</span>
    </div>
  )
}
