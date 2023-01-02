import Navbar from './AppHeader'
import Footer from './AppFooter'
import { useRouter } from 'next/router'

export default function Layout({ children }) {

    const router = useRouter()

    return (
        <>
        <Navbar lang={router.locale} />
        <main>{children}</main>
        <Footer lang={router.locale} />
        </>
    )
}