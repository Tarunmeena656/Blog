import Link from 'next/link';
import { getPublishedPosts } from '@/lib/posts';

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <h1 style={{ fontSize: 32, marginBottom: 20 }}>🚀 My Blog</h1>

      {posts.map((post: any) => (
        <div
          key={post.slug}
          style={{
            padding: 20,
            border: '1px solid #333',
            borderRadius: 10,
            marginBottom: 20,
          }}
        >
          <Link href={`/blog/${post.slug}`}>
            <h2 style={{ color: '#38bdf8' }}>{post.title}</h2>
          </Link>
          <p style={{ opacity: 0.7 }}>{post.date}</p>
        </div>
      ))}
    </div>
  );
}