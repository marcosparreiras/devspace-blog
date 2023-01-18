// Components
import Layout from '@/components/Layout';

function AboutPage() {
    return (
        <Layout title='About DevSpace'>
            <h1 className='text-5xl border-b-4 pb-5 font-bold'>About Page</h1>
            <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
                <h3 className='text-2xl mb-5'>DevSpace Blog</h3>
                <p className='mb-3'>A blog built with Next.js and Markdown</p>
                <p className='font-bold'>Version: 1.0.0</p>
            </div>
        </Layout>
    );
}

export default AboutPage;
