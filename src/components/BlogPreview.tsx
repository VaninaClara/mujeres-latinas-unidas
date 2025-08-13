import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogPreview.css";

type PostMeta = {
  slug: string;
  title: string;
  date: string;      // ISO
  excerpt: string;
  cover?: string;
  tags?: string[];
};

const BlogPreview = () => {
  const [posts, setPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    fetch("/blog/index.json")
      .then((r) => r.json())
      .then((all: PostMeta[]) => {
        const sorted = [...all].sort(
          (a, b) => +new Date(b.date) - +new Date(a.date)
        );
        setPosts(sorted.slice(0, 3));
      })
      .catch((err) => {
        console.error("No pude cargar /blog/index.json", err);
        setPosts([]);
      });
  }, []);

  if (!posts.length) return null;

  return (
    <section className="blog-preview">
      <div className="blog-preview__head">
        <h2>Últimas publicaciones</h2>
        <Link to="/blog" className="blog-preview__more">Ver todo →</Link>
      </div>

      <div className="blog-preview__grid">
        {posts.map((p) => (
          <article key={p.slug} className="blog-preview__card">
            {p.cover && <img src={p.cover} alt={p.title} />}
            <div className="blog-preview__body">
              <h3><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
              <time>{new Date(p.date).toLocaleDateString()}</time>
              <p>{p.excerpt}</p>
              <Link to={`/blog/${p.slug}`} className="blog-preview__link">Leer más</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
