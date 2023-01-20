import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// Utils
import { sortByDate } from '@/utils/index';

const files = fs.readdirSync(path.join('posts'));

export function getPosts() {
    const posts = files.map((file) => {
        const slug = file.replace('.md', '');
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', file),
            'utf-8'
        );
        const { data: frontmatter } = matter(markdownWithMeta);
        return { slug, frontmatter };
    });
    return posts.sort(sortByDate)
}