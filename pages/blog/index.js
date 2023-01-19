import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
// Components
import Layout from '@/components/Layout';
import Post from '@/components/Post';
// Utils
import { sortByDate } from '../../utils';

export default function BlogPage({ posts }) {
    return (
        <Layout>
            <h1 className='text-5xl border-b-4 p-5 font-bold'>Blog</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {posts.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('posts'));
    const posts = files.map((file) => {
        const slug = file.replace('.md', '');
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', file),
            'utf-8'
        );
        const { data: frontmatter } = matter(markdownWithMeta);
        return { slug, frontmatter };
    });
    return {
        props: { posts: posts.sort(sortByDate) },
    };
}
