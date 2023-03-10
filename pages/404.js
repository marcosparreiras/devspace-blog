import Link from 'next/link';
import Image from 'next/image';
// Components
import Layout from '@/components/Layout';

function NotFoundPage() {
    return (
        <Layout title='Page Not Found'>
            <div className='flex flex-col items-center mt-20'>
                <Image
                    src='/images/logo.png'
                    width={70}
                    height={70}
                    className='bg-gray-800 rounded-2xl'
                    alt=''
                />
                <h1 className='text-6xl my-5'>Whoop&apos;s</h1>
                <h2 className='text-4xl text-gray-400 mb-5'>
                    This page does not exist
                </h2>
            </div>
        </Layout>
    );
}

export default NotFoundPage;
