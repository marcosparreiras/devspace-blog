import Head from 'next/head';
// Components
import Header from './Header';

function Layout({ title, keywords, description, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords} />
                <meta name='description' content={description} />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <main className='container mx-auto my-7'>{children}</main>
        </>
    );
}

Layout.defaultProps = {
    title: 'Welcome to DevSpace',
    keywords: 'development, coding, programming',
    description: 'the best info and news in development',
};

export default Layout;
