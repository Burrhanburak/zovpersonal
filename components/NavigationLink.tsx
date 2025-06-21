'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { Link } from '@/navigation';
import { ComponentProps, ReactNode } from 'react';

interface NavigationLinkProps extends ComponentProps<typeof Link> {
  children: ReactNode;
  className?: string;
}

export default function NavigationLink({ 
  href, 
  children, 
  className = '', 
  ...rest 
}: NavigationLinkProps) {
  const segment = useSelectedLayoutSegment();
  
  // Convert href to string for comparison
  const hrefString = typeof href === 'string' ? href : href.toString();
  const isActive = segment === hrefString.split('/').pop();
  
  const activeClass = isActive 
    ? 'text-blue-600 font-bold' 
    : 'text-gray-700 hover:text-blue-600';
  
  return (
    <Link 
      href={href} 
      className={`${activeClass} ${className}`} 
      {...rest}
    >
      {children}
    </Link>
  );
}
