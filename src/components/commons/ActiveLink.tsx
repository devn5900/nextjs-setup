'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ActiveLinkProps {
  href: string
  children: ReactNode
  className?: string
  activeClassName?: string
}

const ActiveLink = ({
  href,
  children,
  className,
  activeClassName,
}: ActiveLinkProps) => {
  const path = usePathname()

  const isActive = path === href

  return (
    <Link href={href} className={`${className} ${isActive && activeClassName}`}>
      {children}
    </Link>
  )
}

export default ActiveLink
