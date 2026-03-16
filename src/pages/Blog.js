import { useEffect, useState } from "react";
import "./Blog.css";

export default function Blog() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://tvojwordpress.com/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="blog-page">

      {/* HERO */}

      <section className="blog-hero">

        <video className="hero-video" autoPlay loop muted playsInline>
          <source
            src={`${process.env.PUBLIC_URL}/DV-materijali/video-za-hero.mp4`}
            type="video/mp4"
/>
        </video>

        <div className="blog-hero-inner">

          <h1 className="blog-hero-title">
            Blog
          </h1>

          <p className="blog-hero-subtitle">
            Razmišljanja, procesi i ideje iza kreativnih i digitalnih rješenja.
          </p>

        </div>

      </section>


      {/* BLOG LIST */}

      <section className="blog-section">

        <div className="blog-container">

          <div className="blog-grid">

            {posts.map(post => (

              <article key={post.id} className="blog-card">

                <h2
                  className="blog-title"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                <div
                  className="blog-excerpt"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />

                <a
                  className="blog-readmore"
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pročitaj više
                </a>

              </article>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}