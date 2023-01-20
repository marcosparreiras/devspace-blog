import Link from 'next/link';
// Lib
import { getPosts } from "@/lib/posts";
// Components
import Layout from '@/components/Layout';
import Post from '@/components/Post';


export default function HomePage({ posts }) {
    return (
        <Layout>
            <h1 className='text-5xl border-b-4 p-5 font-bold'>Latest Posts</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {posts.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </div>
            <Link
                href='/blog'
                className='block text-center border border-gray-500 text-gray-800 
                rounded-md py-5 my-5 transition duration-500 easy select-none hover:text-white
                hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'
            >
                All Posts
            </Link>
        </Layout>
    );
}

export async function getStaticProps() {
   const posts = getPosts();
    return {
        props: { posts: posts.slice(0, 6) },
    };
}
