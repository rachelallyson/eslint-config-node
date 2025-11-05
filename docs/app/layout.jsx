import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Providers } from './providers'
import './globals.css'
import 'nextra-theme-docs/style.css'

export const metadata = {
    title: '@rachelallyson/eslint-config-node',
    description: 'Modular ESLint configuration for Node.js projects - pick and choose the configs you need',
}

const navbar = <Navbar logo={<b>@rachelallyson/eslint-config-node</b>} />
const footer = <Footer>ISC License © {new Date().getFullYear()} Kuzu Media.</Footer>

// Normalize pageMap to strip /content prefix since contentDirBasePath handles routing
function normalizePageMap(pages) {
    if (!pages || !Array.isArray(pages)) return []
    return pages.map(page => {
        const strippedRoute = typeof page.route === 'string' ? page.route.replace(/^\/content/, '') : page.route
        const strippedUrl = typeof page.url === 'string' ? page.url.replace(/^\/content/, '') : page.url
        const newRoute = strippedRoute === '' ? '/' : strippedRoute
        const newUrl = strippedUrl === '' ? '/' : strippedUrl
        const normalized = {
            ...page,
            route: newRoute,
            url: newUrl,
        }
        // Recursively normalize children if they exist
        if (page.children) {
            normalized.children = normalizePageMap(page.children)
        }
        return normalized
    })
}

export default async function RootLayout({ children }) {
    const pageMap = await getPageMap()
    // Strip /content prefix from pageMap URLs since contentDirBasePath handles routing
    const normalizedPageMap = normalizePageMap(pageMap)

    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
            <Head />
            <body>
                <Providers>
                    <Layout
                        navbar={navbar}
                        pageMap={normalizedPageMap}
                        docsRepositoryBase="https://github.com/rachelallyson/eslint-config-node/blob/main/docs/content"
                        footer={footer}
                    >
                        {children}
                    </Layout>
                </Providers>
            </body>
        </html>
    )
}

