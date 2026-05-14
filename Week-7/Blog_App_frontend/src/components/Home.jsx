import React from 'react';
import { NavLink } from 'react-router';
import {
  pageWrapper,
  pageTitleClass,
  subHeadingClass,
  bodyText,
  primaryBtn,
  secondaryBtn,
  cardClass,
  headingClass,
  section,
  divider
} from '../styles/common';

function Home() {
  return (
    <div className={pageWrapper}>
      {/* HERO SECTION */}
      <div className={`${section} flex flex-col md:flex-row items-center gap-12 pt-10`}>
        <div className="flex-1 space-y-6">
          <h1 className={pageTitleClass}>
            Share Your Thoughts with the World.
          </h1>
          <p className={`${bodyText} text-xl max-w-lg`}>
            A minimalist platform for writers and thinkers. Create, share, and connect with a community of passionate authors.
          </p>
          <div className="flex gap-4 pt-4">
            <NavLink to="/register" className={primaryBtn}>
              Get Started
            </NavLink>
            <NavLink to="/login" className={secondaryBtn}>
              Sign In
            </NavLink>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0066cc] to-[#5e5ce6] rounded-3xl blur opacity-10"></div>
            <img 
              src="/C:/Users/HASRITHRAO/.gemini/antigravity/brain/fb3e0e72-b6f2-4106-9d77-b7ea3016c535/blog_hero_image_1778770989786.png" 
              alt="Hero" 
              className="relative rounded-3xl shadow-2xl border border-[#e8e8ed] object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </div>

      <div className={divider} />

      {/* FEATURES SECTION */}
      <div className={section}>
        <h2 className={`${headingClass} text-3xl text-center mb-12`}>Why Choose MyBlog?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={cardClass}>
            <div className="text-3xl mb-4">✍️</div>
            <h3 className={subHeadingClass}>Easy Writing</h3>
            <p className={`${bodyText} mt-2`}>
              Our minimalist editor stays out of your way so you can focus on what matters: your story.
            </p>
          </div>

          <div className={cardClass}>
            <div className="text-3xl mb-4">🚀</div>
            <h3 className={subHeadingClass}>Fast Performance</h3>
            <p className={`${bodyText} mt-2`}>
              Built with modern technologies to ensure your content loads instantly for every reader.
            </p>
          </div>

          <div className={cardClass}>
            <div className="text-3xl mb-4">📱</div>
            <h3 className={subHeadingClass}>Fully Responsive</h3>
            <p className={`${bodyText} mt-2`}>
              Your blog looks beautiful on every device, from mobile phones to high-res desktops.
            </p>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="mt-20 bg-[#f5f5f7] rounded-3xl p-12 text-center">
        <h2 className={`${headingClass} text-4xl mb-4`}>Ready to start your journey?</h2>
        <p className={`${bodyText} text-lg mb-8 max-w-2xl mx-auto`}>
          Join thousands of authors who are already sharing their stories on MyBlog.
        </p>
        <NavLink to="/register" className={`${primaryBtn} text-lg px-8 py-3`}>
          Create Your Free Account
        </NavLink>
      </div>
    </div>
  );
}

export default Home;