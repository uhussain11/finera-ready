'use client';
import PropTypes from 'prop-types';
import { usePathname } from 'next/navigation';
import Header from './components/homepage/Header';
import './styles/globals.css'; // Import global styles

const Layout = ({ children }) => {
    const pathname = usePathname(); // Use the usePathname hook to get the current route
    const showHeader = pathname !== '/dashboard'; // Conditionally show the header

    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
                <title>FINERA</title>
                <meta name="description" content="Discover Your Perfect Investment Strategy with our Services." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                {showHeader && <Header />}
                <main>{children}</main>
            </body>
        </html>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
