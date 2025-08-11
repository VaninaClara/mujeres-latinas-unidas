import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

type PostMeta = {
  slug: string;
  title: string;
  date: string;      // ISO string
  excerpt: string;
  cover?: string;
  tags?: string[];
};

export default function Blog() {
  const [posts, setPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    fetch("/blog/index.json")
      .then(r => r.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <section className="blog">
      <div className="blog__container">
        <h2>Blog</h2>
        <p className="blog__intro">
          Novedades, actividades y contenidos de Mujeres Latinas Unidas+.
        </p>

        <div className="blog__grid">
          {posts.map(p => (
            <article key={p.slug} className="post-card">
              {p.cover && <img src={p.cover} alt={p.title} />}
              <div className="post-card__body">
                <h3><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
                <time className="post-card__date">
                  {new Date(p.date).toLocaleDateString()}
                </time>
                <p>{p.excerpt}</p>
                <Link to={`/blog/${p.slug}`} className="post-card__link">
                  Leer más →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
