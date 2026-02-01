---
layout: default
title: Blog
---

<section class="section blog-header" style="padding-top: 120px;">
    <div class="section-container">
        <div class="section-header">
            <span class="section-tag">&lt;Blog /&gt;</span>
            <h2 class="section-title">
                Work &amp; <span class="text-gradient-cyan">Projects</span>
            </h2>
            <p class="section-subtitle">
                Detailed case studies of my professional experience and side projects.
            </p>
        </div>
    </div>
</section>

<section class="section blog-list">
    <div class="section-container">
        <div class="posts-grid">
            {% for post in site.posts %}
            <article class="post-card scroll-reveal">
                <a href="{{ post.url | relative_url }}" class="post-card-link">
                    <div class="post-card-content">
                        <div class="post-card-meta">
                            <span class="post-date">{{ post.date | date: "%b %Y" }}</span>
                            {% if post.current %}
                            <span class="post-current">Current</span>
                            {% endif %}
                        </div>
                        
                        <h3 class="post-card-title">{{ post.title }}</h3>
                        
                        {% if post.company %}
                        <p class="post-card-company">{{ post.company }} — {{ post.role }}</p>
                        {% endif %}
                        
                        <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
                        
                        {% if post.categories %}
                        <div class="post-card-tags">
                            {% for category in post.categories limit: 3 %}
                            <span class="post-tag">{{ category }}</span>
                            {% endfor %}
                        </div>
                        {% endif %}
                        
                        <span class="read-more">Read more →</span>
                    </div>
                </a>
            </article>
            {% endfor %}
        </div>
    </div>
</section>

<style>
.blog-header {
    background: linear-gradient(to bottom, transparent, rgba(0, 245, 255, 0.02));
}

.posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
}

.post-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 1rem;
    overflow: hidden;
    transition: 0.3s ease;
}

.post-card:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 245, 255, 0.2);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.post-card-link {
    display: block;
    color: inherit;
    text-decoration: none;
    padding: 1.5rem;
}

.post-card-meta {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
}

.post-date {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: #71717a;
}

.post-current {
    padding: 0.125rem 0.5rem;
    background: rgba(0, 245, 255, 0.1);
    border: 1px solid rgba(0, 245, 255, 0.3);
    border-radius: 9999px;
    font-size: 0.625rem;
    font-weight: 600;
    color: #00f5ff;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.post-card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #ffffff;
    line-height: 1.3;
}

.post-card-company {
    font-size: 0.875rem;
    color: #00f5ff;
    margin-bottom: 1rem;
}

.post-card-excerpt {
    font-size: 0.9375rem;
    color: #a1a1aa;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.post-card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.post-tag {
    padding: 0.25rem 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.25rem;
    font-size: 0.75rem;
    color: #71717a;
}

.read-more {
    font-size: 0.875rem;
    font-weight: 500;
    color: #00f5ff;
}

@media (max-width: 768px) {
    .posts-grid {
        grid-template-columns: 1fr;
    }
}
</style>