"use client"
import { useAuth } from '@/context/authContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const ProtectedRoute = ({children}) => {
    const { user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.replace('/login')
        }
    }, [user, loading, router])
  
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <div className="relative flex items-center justify-center">
                    <div className="absolute h-16 w-16 rounded-full border-2 border-indigo-500/20 animate-ping"></div>
                    <div className="absolute h-12 w-12 rounded-full border-2 border-indigo-500/40 animate-pulse"></div>
                    <div className="h-10 w-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin shadow-lg shadow-indigo-500/20"></div>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-sm font-bold text-foreground tracking-wider uppercase">
                        Street<span className="text-indigo-600 dark:text-indigo-400">Wear</span>
                    </span>
                    <span className="text-xs text-muted-foreground animate-pulse">
                        Securing session...
                    </span>
                </div>
            </div>
        )
    }

    if(!user) return null;

    return children
}

export default ProtectedRoute
