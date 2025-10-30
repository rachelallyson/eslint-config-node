'use client'

// Import your theme provider or other client-side providers here
// Example for HeroUI:
// import { HeroUIProvider } from '@heroui/react'

export function Providers({ children }) {
    // Wrap with your theme provider if needed
    // Example:
    // return <HeroUIProvider>{children}</HeroUIProvider>
    return <>{children}</>
}
