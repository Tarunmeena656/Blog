import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Post({ params }: any) {
  const filePath = path.join(
    process.cwd(),
    'content/posts',
    `${params.slug}.mdx`
  );

  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);

  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <h1 style={{ fontSize: 32 }}>{data.title}</h1>
      <p style={{ opacity: 0.6 }}>{data.date}</p>
      <hr />
      <div style={{ marginTop: 20 }}>
        <MDXRemote source={content} />
      </div>
    </div>
  );
}