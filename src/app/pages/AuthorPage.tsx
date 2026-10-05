import { Link, useParams } from 'react-router';
import { Clock } from 'lucide-react';
import '../data/registerAdditionalBlogData';
import { blogPosts, getHeroImage } from '../data/blogData';
import { authors, DEFAULT_AUTHOR } from '../data/authors';
import { blogThumbnails } from '../data/blogThumbnails';
import { BlogThumbnail } from '../components/BlogThumbnail';

export default function AuthorPage() {
  const { slug } = useParams();
  const author = authors.find((a) => a.slug === slug);
  if (!author) {
    return (
      <div className="bg-white pt-32 pb-20 px-4 text-center">
        <h1 className="font-['Satoshi',sans-serif] font-bold text-4xl text-[#1f2937]">Author not found</h1>
        <Link to="/blog" className="text-[#1877f2] hover:underline mt-4 inline-block text-xl">← Back to Blog</Link>
      </div>
    );
  }
  const posts = [...blogPosts].reverse().filter((p) => (p.author ?? DEFAULT_AUTHOR) === author.slug);

  return (
    <div className="bg-white pt-24 md:pt-32 pb-24 px-4 sm:px-6 md:px-20">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-[#f1f5f9] pb-10">
          {author.image ? (
            <img src={author.image} alt={author.name} width={128} height={128} className="w-32 h-32 rounded-3xl object-cover" />
          ) : (
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#1877f2] to-[#0d5ed9] text-white flex items-center justify-center font-['Satoshi',sans-serif] font-bold text-4xl">{author.name.charAt(0)}</div>
          )}
          <div className="flex-1">
            <p className="font-['General_Sans',sans-serif] font-medium text-sm text-[#1877f2] bg-[#eff6ff] inline-block px-2.5 py-0.5 rounded-full mb-3">{author.role}</p>
            <h1 className="font-['Satoshi',sans-serif] font-bold text-[#0f172a] text-4xl md:text-5xl tracking-[-1.5px] mb-4">{author.name}</h1>
            <p className="font-['General_Sans',sans-serif] font-medium text-[#475569] text-lg leading-[1.7] max-w-[760px]">{author.bio}</p>
            {author.sameAs && author.sameAs.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-4">
                {author.sameAs.map((u) => <a key={u} href={u} target="_blank" rel="me noopener noreferrer" className="text-sm font-['General_Sans',sans-serif] font-medium text-[#1877f2] hover:underline">{new URL(u).hostname.replace('www.', '')}</a>)}
              </div>
            )}
          </div>
        </div>

        <h2 className="font-['Satoshi',sans-serif] font-bold text-[#0f172a] text-2xl md:text-3xl mt-10 mb-6">{posts.length} articles by {author.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            const thumb = blogThumbnails[post.id] ?? { emoji: '📝', gradient: ['#6d28d9', '#4f46e5'] as [string, string] };
            const hero = getHeroImage(post);
            return (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group flex flex-col rounded-2xl bg-white border border-[#e2e8f0] hover:border-[#1877f2] hover:shadow-lg transition-all overflow-hidden">
                <div className="h-[180px] overflow-hidden"><BlogThumbnail emoji={thumb.emoji} gradient={thumb.gradient} src={hero?.src} alt={hero?.alt} category={post.category} /></div>
                <div className="flex flex-col gap-2 p-5">
                  <span className="text-xs font-['Satoshi',sans-serif] font-bold text-[#1877f2] bg-[#eff6ff] px-2.5 py-0.5 rounded-full self-start">{post.category}</span>
                  <h3 className="font-['Satoshi',sans-serif] font-bold leading-[1.3] text-[#0f172a] text-lg group-hover:text-[#1877f2] line-clamp-2">{post.title}</h3>
                  <span className="flex items-center gap-1 text-xs text-[#94a3b8] font-['General_Sans',sans-serif]"><Clock size={11} />{post.date}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
