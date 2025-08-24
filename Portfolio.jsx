
// Bubacar Nget Portfolio Website

import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="white" fillOpacity="1" d="M0,160L40,149.3C80,139,160,117,240,106.7C320,96,400,96,480,117.3C560,139,640,181,720,192C800,203,880,181,960,165.3C1040,149,1120,139,1200,149.3C1280,160,1360,192,1400,208L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
      </div>
      <header className="text-center mb-10 relative z-10">
        <h1 className="text-4xl font-bold">Bubacar Nget</h1>
        <p className="text-lg text-gray-300">Digital Marketer | Automation | Web Developer | Content Creator</p>
        <img src="/logo-bntech.png" alt="BN TECH Logo" className="mx-auto mt-4 h-16" />
        <img src="/bubacar-photo.jpg" alt="Bubacar Nget" className="mx-auto mt-6 rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg" />
      </header>
      <main className="relative z-10">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <li>✅ Digital Marketing (SEO, Ads, Funnels)</li>
            <li>✅ Automation & AI Tools</li>
            <li>✅ Web Development (HTML, JS, React)</li>
            <li>✅ Data Analysis (Excel, Python, Power BI)</li>
            <li>✅ Content Creation (TikTok, YouTube)</li>
            <li>✅ Community Building & Diaspora Projects</li>
            <li>✅ Business Development (Africa/Europe)</li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="space-y-4">
            <li><strong>YouTube Channel:</strong> Reaction videos, diaspora talks, cultural breakdowns.</li>
            <li><strong>BN Tech Solutions:</strong> Branding, digital marketing, and tech help for small businesses.</li>
            <li><strong>Data Analysis Services:</strong> Interactive dashboards and insights using Excel, Python, and Power BI to help businesses and individuals make smarter decisions.</li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Media Gallery (Coming Soon)</h2>
          <p className="text-gray-400 mb-2">We are working on a section where you’ll be able to view videos and photos from events, behind-the-scenes, and client success stories. Stay tuned!</p>
          <div className="border border-gray-700 rounded p-4 text-center text-gray-500 bg-gray-800">📸🎥 Media content uploading feature will be available soon.</div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Blog & Insights</h2>
          <ul className="space-y-2">
            <li>📌 Building Diaspora Power: Helping without Burning Out</li>
            <li>📌 Tech & Tools to Grow Your Side Hustle in The Gambia</li>
            <li>📌 The Hidden Struggles of African Immigrants in Europe</li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
          <div className="flex gap-4 flex-wrap">
            <a href="https://tiktok.com/@pmoney186" target="_blank" className="underline text-blue-400 hover:text-blue-300">TikTok</a>
            <a href="https://youtube.com/@pmoney186" target="_blank" className="underline text-blue-400 hover:text-blue-300">YouTube</a>
            <a href="https://instagram.com" target="_blank" className="underline text-blue-400 hover:text-blue-300">Instagram</a>
            <a href="https://linkedin.com" target="_blank" className="underline text-blue-400 hover:text-blue-300">LinkedIn</a>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <form className="grid gap-4 max-w-xl mx-auto">
            <input type="text" placeholder="Your Name" className="border border-gray-700 p-2 rounded bg-white text-black" required />
            <input type="email" placeholder="Your Email" className="border border-gray-700 p-2 rounded bg-white text-black" required />
            <textarea placeholder="Your Message" className="border border-gray-700 p-2 rounded h-32 bg-white text-black" required></textarea>
            <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Send Message</button>
          </form>
        </section>
      </main>
      <footer className="text-center text-gray-500 mt-12 relative z-10">© 2025 Bubacar Nget. All rights reserved.</footer>
    </div>
  );
}
