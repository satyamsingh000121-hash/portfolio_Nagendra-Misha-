'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ZoomParallax } from '../components/ui/zoom-parallax';
import LogoCloud from '../components/ui/logo-cloud-15';
import { InteractiveFolderGallery } from '../components/ui/interactive-folder-gallery';
import MatrixRain from '../components/ui/matrix-rain';
import CircularShareButton from '../components/ui/circular-share-button';
import RevealHoverButton from '../components/ui/reveal-hover-button';
import SphereImageGrid from '../components/SphereImageGrid';

const parallaxImages = [
  {
    src: '/images/ChatGPT%20Image%20Aug%208,%202026,%2010_11_43%20AM.png',
    alt: 'Marie Forleo on Today Show',
  },
  {
    src: '/images/new2.png',
    alt: 'Full Portrait',
  },
  {
    src: '/images/253.png',
    alt: 'Portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Cityscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Mountain landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Minimalist design',
  },
  {
    src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Ocean view',
  },
  {
    src: '/images/ChatGPT Image Aug 8, 2026, 10_11_43 AM.png',
    alt: 'Forest trees',
  },
];


export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="page_wrap">
      <div className="page_code_wrap">
        <div className="google_tag_manager w-embed w-iframe">
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MZF7GB9"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </div>
      </div>

      {/* Navigation Banner */}
      <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="nav_section w-nav">
        <nav className="nav_container">
          <Link href="/" className="nav_logo_link w-nav-brand w--current">
            <img
              width="245"
              src="/api/asset?path=cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/66df74bad0fcd954123e9818_MarieForleo_Logo.png"
              alt="logo"
              className="nav_logo_image"
            />
          </Link>
          <nav role="navigation" className="nav-menu1 w-nav-menu">
            <nav className="nav_links_wrapper1">
              <Link href="#blog" className="nav_link w-inline-block">
                <div>Blog</div>
              </Link>
              <div data-hover="true" data-delay="0" className="dropdown1 w-dropdown">
                <div className="dropdown-toggle1 w-dropdown-toggle">
                  <div>Shop</div>
                  <img
                    src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/6244ba99e17cc72d0c94ebc7_Navbar arrow.svg"
                    width="12"
                    alt=""
                    className="expand_arrow"
                  />
                </div>
              </div>
              <Link href="#marietv" className="nav_link w-inline-block">
                <div>MarieTV</div>
              </Link>
              <Link href="#podcast" className="nav_link w-inline-block">
                <div>Podcast</div>
              </Link>
              <Link href="#about" className="nav_link w-inline-block">
                <div>About</div>
              </Link>
            </nav>
            <a
              href="https://www.jointimegenius.com/freetraining"
              target="_blank"
              rel="noreferrer"
              className="primary-button lime button-drop-shadow w-button"
            >
              Free Training
            </a>
          </nav>
        </nav>
      </div>

      {/* Main Page Content */}
      <main id="main" className="page_main">

        {/* Hero Section */}
        <section className="video-background-section">
          <div className="hero-down-arrow-push-center">
            <a href="#hey" className="arrow-link w-inline-block">
              <img
                src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/61608eb1f0949b57728706e4_Arrow(White).svg"
                loading="lazy"
                width="15"
                alt=""
                className="hover-fade rotate-right"
              />
            </a>
          </div>
          <div className="watch-video">
            <a
              href="#"
              className="watch-video-lightbox-link w-inline-block w-lightbox"
              onClick={(e) => {
                e.preventDefault();
                setIsVideoModalOpen(true);
              }}
            >
              <img
                src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/61436f5f9ed29907a09f0329_Play.svg"
                loading="lazy"
                width="25"
                alt=""
                className="hero-play-button"
              />
              <h5 className="white no-margin">Watch Video</h5>
            </a>
          </div>
          <div className="center-overlay-block">
            <div className="small-center-container">
              <h1 className="hero-heading">
                Create a Business
                <br />and Life You <span className="script-accent">Love</span>
              </h1>
            </div>
          </div>
          <div className="black-overlay" />
          <div className="desktop-video-hero-background">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/video/gabrielveres.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Video Lightbox Modal */}
        {isVideoModalOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              backdropFilter: 'blur(8px)'
            }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '960px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                background: '#000'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>
              <video
                controls
                autoPlay
                style={{ width: '100%', maxHeight: '80vh', display: 'block' }}
              >
                <source src="/video/gabrielveres.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* Free Audio Training Banner */}
        <section className="home_htgayw_wrap u-section" style={{ padding: '65px 0', background: '#F8F1E9' }}>
          <div className="htgayw_push_contain u-container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="scroll-reveal w-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '30px' }}>

              <div className="center-column w-col w-col-8" style={{ textAlign: 'center', flex: '1 1 auto' }}>
                <h2 style={{ fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", Didot, serif', fontSize: '3.3rem', fontWeight: 200, lineHeight: 1.1, marginBottom: '18px', color: '#040103ff' }}>
                  Learn How to Get <em style={{ fontStyle: 'italic', fontFamily: 'serif', fontWeight: 200 }}>Anything</em> You Want
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#333333', marginBottom: '28px' }}>
                  Listen to this FREE audio from Marie and learn the <strong>3 steps that&#x27;ll change your life, <em>fast.</em></strong>
                </p>

                {/* Expanded Width Input Form */}
                <form onSubmit={(e) => e.preventDefault()} style={{ maxWidth: '780px', margin: '0 auto' }}>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <input
                      type="text"
                      placeholder="First Name"
                      style={{
                        flex: 1,
                        padding: '16px 22px',
                        fontSize: '1.05rem',
                        border: '1.5px solid #1D1B1C',
                        borderRadius: '2px',
                        outline: 'none',
                        background: '#FFFFFF',
                        color: '#000000'
                      }}
                    />
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      style={{
                        flex: 1,
                        padding: '16px 22px',
                        fontSize: '1.05rem',
                        border: '1.5px solid #1D1B1C',
                        borderRadius: '2px',
                        outline: 'none',
                        background: '#FFFFFF',
                        color: '#000000'
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '18px',
                      backgroundColor: '#E4F58E',
                      color: '#1D1B1C',
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      border: '1.5px solid #1D1B1C',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                      marginBottom: '16px'
                    }}
                  >
                    GET INSTANT ACCESS
                  </button>
                </form>

                <p style={{ fontSize: '0.75rem', color: '#666666', lineHeight: '1.45', maxWidth: '720px', margin: '0 auto' }}>
                  By entering your info, you&apos;ll become an MF Insider – with FREE access to exclusive insights, private Q&As, and inspiring episodes of MarieTV, delivered with love to your inbox. (Unsub anytime in a click.) You also agree to our <a href="#terms" style={{ color: '#666', textDecoration: 'underline' }}>Terms of Use</a> and <a href="#privacy" style={{ color: '#666', textDecoration: 'underline' }}>Privacy Policy</a>.
                </p>
              </div>

              <div className="center-column w-col w-col-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, overflow: 'visible', marginLeft: '20px', transform: 'translateX(10px)' }}>
                <SphereImageGrid
                  containerSize={550}
                  sphereRadius={210}
                  baseImageScale={0.18}
                  autoRotate={true}
                  autoRotateSpeed={0.25}
                />
              </div>

            </div>
          </div>
        </section>

        {/* Heya! I'm Marie Section */}
        <section
          id="hey"
          className="home_marie_wrap"
          style={{
            background: '#EAE0D5',
            paddingTop: '110px',
            paddingBottom: '60px',
            marginTop: '0px',
            marginBottom: '0px',
            position: 'relative'
          }}
        >
          <div
            className="hey_marie_contain w-container"
            style={{
              marginTop: '0px',
              paddingTop: '0px',
              paddingBottom: '0px'
            }}
          >
            <div
              className="w-row"
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between'
              }}
            >

              {/* TEXT CONTENT */}
              <div
                className="content-vflex w-col w-col-6"
                style={{
                  paddingTop: '120px',
                  paddingBottom: '30px',
                  transform: 'translateY(-180px)'
                }}
              >
                <div
                  className="eyebrow"
                  style={{
                    marginTop: '0px',
                    paddingTop: '0px'
                  }}
                >
                  Heya!
                </div>

                <MatrixRain
                  text={`I'M\nNAGENDRA MISHRA.`}
                  tag="h2"
                  className="serif_display_heading u-heading"
                  color="#1d1b1c"
                  font={{
                    fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", "Playfair Display", "Prata", Didot, Canela, Georgia, serif',
                    fontSize: 'clamp(6.8rem, 7.5vw, 3.8rem)',
                    fontWeight: 200,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.05,
                    textAlign: 'left',
                    textTransform: 'uppercase'
                  }}
                  startY={-80}
                  startOpacity={0}
                  staggerFrom="start"
                  transition={{
                    type: "tween",
                    duration: 0.6,
                    delay: 0.1,
                    ease: "easeOut",
                    staggerChildren: 0.05,
                  }}
                />

                <p>


                  Nagendra Mishra is a serial entrepreneur, visionary leader, and business strategist with over 16 years of experience building and scaling successful ventures.

                  Since 2011, he has transformed ideas into impactful businesses, driven by innovation, leadership, and sustainable growth.

                </p>




                <section id="buttonui" className="buttonui" style={{ marginTop: '24px' }}>
                  <RevealHoverButton defaultText="Learn More" hoverText="Thanks" />
                </section>
              </div>

              {/* IMAGE */}
              <div
                className="w-col w-col-6"
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end'
                }}
              >
                <img
                  src="/images/Gemini_Generated_Image_3p38tr3p38tr3p38-Photoroom.png"
                  loading="lazy"
                  alt="Marie Image"
                  className="hey-i-m-marie-image"
                  style={{
                    width: '110%',
                    maxWidth: '750px',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    marginBottom: '-92px'
                  }}
                />
              </div>
 

              {/* Circular Share Button Section */}
              <section
                id="uisection"
                className="uisection"
                style={{
                  position: 'absolute',
                  bottom: '25px',
                  right: '35px',
                  zIndex: 60,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <CircularShareButton />
              </section>



            </div>
          </div>
        </section>

        {/* Press Logo Cloud Section */}
        <section className="w-full bg-[#242424] py-0 overflow-hidden">
          <LogoCloud />
        </section>

        {/* Time Genius Section */}
        <section className="home_tg_wrap u-section">
          <div className="w-layout-blockcontainer content_container_fill u-container w-container">
            <div className="content_layout_split">
              <div className="w-layout-vflex u-vflex">
                <h2 className="eyebrow">BUSINESS & LEADERSHIP</h2>
                <MatrixRain
                  text="TURNING VISION INTO REAL BUSINESS GROWTH."
                  tag="h3"
                  className="serif_display_heading section_heading u-heading"
                  color="#1d1b1c"
                  font={{
                    fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", Didot, serif',
                    fontWeight: 200,
                    fontSize: '2.8rem',
                    lineHeight: 1.1,
                    marginBottom: '20px'
                  }}
                  startY={-80}
                  startOpacity={0}
                  staggerFrom="start"
                  transition={{
                    type: "tween",
                    duration: 0.6,
                    delay: 0.1,
                    ease: "easeOut",
                    staggerChildren: 0.05,
                  }}
                />
                <p>
                  Nagendra Mishra combines entrepreneurial experience, strategic leadership, and innovation to drive business growth, create opportunities, and build long-term value.

                  His approach is focused on smart strategy, meaningful connections, and empowering businesses to achieve sustainable success.

                </p>
                <a href="https://www.jointimegenius.com/e/join" target="_blank" rel="noreferrer" className="tg-button u-button w-button">
                  EXPLORE HIS JOURNEY
                </a>
              </div>
              <a href="https://www.jointimegenius.com/e/join" target="_blank" rel="noreferrer" className="fade_hover w-inline-block">
                <img
                  src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/683cb0d0455971148a6919c9_marie-forleo-time-genius.avif"
                  loading="lazy"
                  alt="Time Genius"
                  className="content_image"
                />
              </a>
            </div>
          </div>
        </section>

        {/* MarieTV Section */}
        <section className="home_marietv_wrap u-section">
          <div className="w-layout-blockcontainer content_container_fill u-container w-container">
            <div className="content_layout_split">
              <div className="w-layout-vflex u-vflex">
                <h2 className="eyebrow">Watch and learn</h2>
                <MatrixRain
                  text="POWERFUL SPEECHES ON BUSINESS GROWTH & LEADERSHIP"
                  tag="h3"
                  className="serif_display_heading section_heading u-heading"
                  color="#1d1b1c"
                  font={{
                    fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", Didot, serif',
                    fontWeight: 200,
                    fontSize: '2.8rem',
                    lineHeight: 1.1,
                    marginBottom: '20px'
                  }}
                  startY={-80}
                  startOpacity={0}
                  staggerFrom="start"
                  transition={{
                    type: "tween",
                    duration: 0.6,
                    delay: 0.1,
                    ease: "easeOut",
                    staggerChildren: 0.05,
                  }}
                />
                <p>
                  Watch Nagendra Mishra deliver impactful speeches and keynotes on real-world business strategies, enterprise scaling, and leadership. Drawing from 16+ years of experience across 15+ ventures, his talks deliver actionable insights to help entrepreneurs think bigger and build smarter.
                </p>
                <a href="#marietv" className="u-button w-inline-block">
                  <div className="u-button-content">
                    <div>Watch Now</div>
                  </div>
                </a>
              </div>

              {/* Interactive Folder Gallery Component */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
                <InteractiveFolderGallery
                  folderName="MarieTV Vault"
                  dragHintText="Drag down to close"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Everything is Figureoutable Section */}
        <section className="home_eif_wrap u-section">
          <div className="w-layout-blockcontainer content_container_fill u-container w-container">
            <div className="content_layout_split">
              <div className="w-layout-vflex u-vflex">
                <h2 className="eyebrow">#1 THE DEFINITIVE GUIDE FOR THE NEXT-GEN ENTREPRENEUR</h2>
                <MatrixRain
                  text="HOW TO BUILD MULTIPLE VENTURES WITHOUT BURNOUT"
                  tag="h3"
                  className="serif_display_heading section_heading u-heading"
                  color="#1d1b1c"
                  font={{
                    fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", Didot, serif',
                    fontWeight: 200,
                    fontSize: '2.8rem',
                    lineHeight: 1.1,
                    marginBottom: '20px'
                  }}
                  startY={-80}
                  startOpacity={0}
                  staggerFrom="start"
                  transition={{
                    type: "tween",
                    duration: 0.6,
                    delay: 0.1,
                    ease: "easeOut",
                    staggerChildren: 0.05,
                  }}
                />
                <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: '#333333', marginBottom: '28px' }}>
                  Discover proven systems to manage multiple businesses simultaneously while cutting operational friction. This book empowers you to automate routine workflows and focus exclusively on high-value, strategic growth.
                </p>
                <a href="https://everythingisfigureoutable.com/" target="_blank" rel="noreferrer" className="u-button w-inline-block">
                  <div className="u-button-content">
                    <div>Learn More</div>
                  </div>
                </a>
              </div>
              <a href="https://everythingisfigureoutable.com/" target="_blank" rel="noreferrer" className="fade_hover w-inline-block" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src="/images/67067870b0addf477a398087_Everything-Is-Figureoutable-Paperback-Book.avif"
                  loading="lazy"
                  alt="Everything Is Figureoutable Paperback Book"
                  className="content_image"
                  style={{ maxHeight: '480px', width: 'auto', objectFit: 'contain' }}
                />
              </a>
            </div>
          </div>
        </section>

        {/* The Marie Forleo Podcast Overview Section */}
        <section className="home_podcast_wrap u-section">
          <section className="video-background-section podcast">
            <div className="video-bg-section-mobile">
              <div className="video-wrap">
                <div className="mobile-video-hero-background-copy podcast-video w-embed w-iframe">
                  <iframe
                    loading="lazy"
                    src="https://player.vimeo.com/video/846761232?autoplay=1&api=1&background=1&mute=0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="desktop-video-hero-background podcast-video w-embed w-iframe">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/846761232?autoplay=1&api=1&background=1&mute=0"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
          <section className="home_podcast-overview_wrap">
            <div className="w-layout-blockcontainer page-container podcast-feed w-container">
              <div id="w-node-a5792832-9f80-f114-2a8b-7517d08be5b5-891644b8" className="w-layout-layout podcast-home-columns wf-layout-layout">
                <div id="w-node-a5792832-9f80-f114-2a8b-7517d08be5b6-891644b8" className="w-layout-cell phone-on-mobile">
                  <img
                    src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/67067ff7041698872fe08d2e_The-Marie-Forleo-Podcast.avif"
                    loading="lazy"
                    alt="The Marie Forleo Podcast"
                    className="podcast-mockup-image"
                  />
                </div>
                <div id="w-node-a5792832-9f80-f114-2a8b-7517d08be5b8-891644b8" className="w-layout-cell podcast-block-column">
                  <div className="white-podcast-box">
                    <h2 className="u-section_header_vflex">The Marie Forleo Podcast</h2>
                    <p>
                      Named by Oprah as a thought leader for the next generation and owner of one of Inc.’s 500 fastest
                      growing companies, Marie Forleo’s goal is to help you become the person you most want to be. Marie
                      and her guests share actionable strategies for greater happiness, success, motivation, creativity,
                      productivity, love, health, contribution, and fulfillment — often with a lot of laughs.
                      <br /><br /><strong><em>Listen on:</em></strong>
                    </p>
                    <div id="w-node-a5792832-9f80-f114-2a8b-7517d08be5c3-891644b8" className="w-layout-layout podcast_links_grid wf-layout-layout">
                      <div id="w-node-a5792832-9f80-f114-2a8b-7517d08be5c4-891644b8" className="w-layout-cell">
                        <a href="https://open.spotify.com/show/2BTDPFDY7V3jrtT6JzQ0fX" target="_blank" rel="noreferrer" className="podcast_grid_link w-inline-block">
                          <img src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/64b96f89631c00a7b076be40_spotify-badge.svg" loading="lazy" width="250" alt="Spotify" />
                        </a>
                      </div>
                      <div id="w-node-a5792832-9f80-f114-2a8b-7517d08be5c7-891644b8" className="w-layout-cell">
                        <a href="https://podcasts.apple.com/us/podcast/the-marie-forleo-podcast/id1199977889" target="_blank" rel="noreferrer" className="podcast_grid_link w-inline-block">
                          <img src="/api/asset?path=cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/64b97a1ca582ee03cf1c9298_applepodcasts-badge%202.png" loading="lazy" width="250" alt="Apple Podcasts" />
                        </a>
                      </div>
                      <div id="w-node-a5792832-9f80-f114-2a8b-7517d08be5ca-891644b8" className="w-layout-cell">
                        <a href="https://www.pandora.com/podcast/the-marie-forleo-podcast/PC:1000129875" target="_blank" rel="noreferrer" className="podcast_grid_link w-inline-block">
                          <img src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/64b96e03281061e80229d26f_pandora-badge.svg" loading="lazy" width="250" alt="Pandora" />
                        </a>
                      </div>
                      <div id="w-node-a5792832-9f80-f114-2a8b-7517d08be5cd-891644b8" className="w-layout-cell">
                        <a href="https://pca.st/ofs0" target="_blank" rel="noreferrer" className="podcast_grid_link w-inline-block">
                          <img src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/64b971152ebabf978b1b7832_pocketcasts-badge.svg" loading="lazy" width="250" alt="Pocketcasts" />
                        </a>
                      </div>
                      <div id="w-node-a5792832-9f80-f114-2a8b-7517d08be5d0-891644b8" className="w-layout-cell">
                        <a href="https://castbox.fm/channel/The-Marie-Forleo-Podcast-id2041164" target="_blank" rel="noreferrer" className="podcast_grid_link w-inline-block">
                          <img src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/64b9778bf870b2bd3b2eb132_castbox-badge.svg" loading="lazy" width="250" alt="Castbox" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <img src="/api/asset?path=cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/64ee5f6e8275d03e3254766f_Airpods.png" loading="lazy" width="164" alt="Airpods" className="airpods_image" />
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* The Latest Podcast Feed */}
        <section className="home_podcast-feed_wrap">
          <div className="w-layout-blockcontainer wide-page-container no-top-margin w-container">
            <div id="w-node-_3215a4b7-a27f-08c1-9ea4-aae6a238e3e9-891644b8" className="w-layout-layout podcast_latest_layout wf-layout-layout">
              <div id="w-node-_3215a4b7-a27f-08c1-9ea4-aae6a238e3ea-891644b8" className="w-layout-cell podcast-marie-image">
                <img
                  src="/images/new2.png"
                  loading="lazy"
                  alt="Marie Latest"
                  className="podcast-marie-full-image scroll-reveal"
                  style={{ width: '152%', maxWidth: '700px', height: 'auto', objectFit: 'contain', display: 'block', marginLeft: '-120px', marginBottom: '-40px' }}
                />
              </div>
              <div id="w-node-_3215a4b7-a27f-08c1-9ea4-aae6a238e3ec-891644b8" className="w-layout-cell podcast_latest_vflex">
                <h2 className="serif_display_heading section_heading u-heading" style={{ fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", Didot, serif', fontWeight: 200, fontSize: '2.8rem', lineHeight: 1.1, marginBottom: '20px' }}>
                  The Latest
                </h2>
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <a href="#" className="podcast_link_block_home podcast_link_block w-inline-block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
                          <div className="episode_number">
                            <div>#</div>
                            <div>010</div>
                          </div>
                          <h3 style={{ fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", Didot, serif', fontWeight: 200, fontSize: '2.1rem', lineHeight: 1.15, color: '#1D1B1C' }}>How Nagendra Mishra Turned a Simple Idea Into a Successful 7-Figure Business</h3>
                        </div>
                        <div className="play-icon-circle" style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="#000000">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <a href="#" className="podcast_link_block_home podcast_link_block w-inline-block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
                          <div className="episode_number">
                            <div>#</div>
                            <div>02</div>
                          </div>
                          <h3 style={{ fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", Didot, serif', fontWeight: 200, fontSize: '2.1rem', lineHeight: 1.15, color: '#1D1B1C' }}>The Power of Strategic Leadership, Innovation, and Building Businesses That Last</h3>
                        </div>
                        <div className="play-icon-circle" style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="#000000">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </a>
                    </div>

                    <div role="listitem" className="w-dyn-item">
                      <a href="#" className="podcast_link_block_home podcast_link_block w-inline-block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
                          <div className="episode_number">
                            <div>#</div>
                            <div>03</div>
                          </div>
                          <h3 style={{ fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", Didot, serif', fontWeight: 200, fontSize: '2.1rem', lineHeight: 1.15, color: '#1D1B1C' }}>Building Multiple Ventures Through Leadership, Strategy, and Sustainable Growth</h3>
                        </div>
                        <div className="play-icon-circle" style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="#000000">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </a>
                    </div>

                    <div role="listitem" className="w-dyn-item">
                      <a href="#" className="podcast_link_block_home podcast_link_block w-inline-block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
                          <div className="episode_number">
                            <div>#</div>
                            <div>04</div>
                          </div>
                          <h3 style={{ fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", Didot, serif', fontWeight: 200, fontSize: '2.1rem', lineHeight: 1.15, color: '#1D1B1C' }}>From Challenges to Opportunities: The Entrepreneurial Mindset Behind Business Growth (Arrow wali position ke liye)</h3>
                        </div>
                        <div className="play-icon-circle" style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="#000000">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <a href="#" className="podcast_link_block_home podcast_link_block w-inline-block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
                          <div className="episode_number">
                            <div>#</div>
                            <div>05</div>
                          </div>
                          <h3 style={{ fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", Didot, serif', fontWeight: 200, fontSize: '2.1rem', lineHeight: 1.15, color: '#1D1B1C' }}>Bridging Business and Law: The Journey of an Entrepreneur and Future Barrister</h3>
                        </div>
                        <div className="play-icon-circle" style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="#000000">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                      <a href="#" className="podcast_link_block_home podcast_link_block w-inline-block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
                          <div className="episode_number">
                            <div>#</div>
                            <div>06</div>
                          </div>
                          <h3 style={{ fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", Didot, serif', fontWeight: 200, fontSize: '2.1rem', lineHeight: 1.15, color: '#1D1B1C' }}>Empowering Entrepreneurs to Think Bigger, Build Smarter, and Create Lasting Impact</h3>
                        </div>
                        <div className="play-icon-circle" style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="#000000">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </a>
                    </div>

                  </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '35px' }}>
                  <a
                    href="#podcast"
                    className="u-button u-theme-dark w-button"
                    style={{
                      display: 'inline-block',
                      padding: '14px 32px',
                      borderRadius: '50px',
                      background: '#1D1B1C',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                      fontWeight: '600',
                      textDecoration: 'none'
                    }}
                  >
                    View All Episodes
                  </a>0.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="home_success-stories_wrap u-section">
          <div className="w-layout-blockcontainer success_stories_contain u-container w-container">
            <div className="w-layout-vflex u-section_vflex_wrap">
              <div className="u-section_header_vflex">
                <h3 className="eyebrow">Our students Get Results</h3>
                <MatrixRain
                  text="Will You Be The Next Success Story?"
                  tag="h2"
                  className="serif_display_heading section_heading u-heading"
                  color="#1d1b1c"
                  font={{
                    fontFamily: 'ivypresto-display, "Cormorant Garamond", "Bodoni Moda", Didot, serif',
                    fontWeight: 200,
                    fontSize: '2.8rem',
                    lineHeight: 1.15,
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}
                  startY={-80}
                  startOpacity={0}
                  staggerFrom="start"
                  transition={{
                    type: "tween",
                    duration: 0.6,
                    delay: 0.1,
                    ease: "easeOut",
                    staggerChildren: 0.05,
                  }}
                />
              </div>
            </div>
            <div className="slider-container w-container">
              <div className="in-page-slider w-slider">
                <div className="w-slider-mask">
                  <div className="slide w-slide">
                    <div className="success-stories-slide w-dyn-list">
                      <div role="list" className="success-stories-slide w-dyn-items">
                        <div role="listitem" className="success-stories-slide w-dyn-item">
                          <div className="in-page-slider-caption-right-side u-vflex">
                            <a href="#bschool" className="product-tag">B-School</a>
                            <p>The EXACT messages I needed to hear to kick me in the bum, get me started and, most importantly, to BELIEVE in myself.</p>
                            <div className="secondary_paragraph">Bonnie U.</div>
                            <a href="#success-stories" className="u-button w-inline-block">
                              <div className="u-button-content">
                                <div>Get Inspired</div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zoom Parallax Section */}
        <section className="relative w-full bg-black text-white">
          <div className="relative py-16 text-center z-10 bg-gradient-to-b from-[#191919] via-black to-black">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl" style={{ fontFamily: 'ivypresto-display, "Cormorant Garamond", serif', fontWeight: 300 }}>
              Experience the Journey
            </h2>
            <p className="mt-3 text-sm tracking-widest uppercase text-gray-400">Scroll down to explore</p>
          </div>
          <ZoomParallax images={parallaxImages} />
          {/* Bottom smooth fade to footer */}
          <div className="h-32 w-full bg-gradient-to-b from-black to-[#191919]" />
        </section>

      </main>

      {/* Full Webflow Footer */}
      <footer className="footer_wrap u-theme-dark">
        <div className="footer_contain u-container w-container">
          <a href="/" aria-current="page" className="footer_logo_link w-inline-block w--current">
            <img
              src="/api/asset?path=cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/643eda50c3f39cb3490ac721_MarieForleo_Logo(WHITE)-500px.png"
              loading="lazy"
              width="307"
              alt="Marie Forleo Logo"
            />
          </a>
          <div className="footer_layout">
            <div className="footer_vflex content-vflex" style={{ maxWidth: '440px', width: '100%' }}>
              <h2 className="eyebrow" style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>Become an MF Insider</h2>
              <div className="footer_list_item" style={{ fontSize: '0.95rem', color: '#D4D4D4', marginBottom: '20px', lineHeight: 1.5 }}>
                Sign up for exclusive content, emails &amp; things Marie doesn’t share anywhere else.
              </div>

              {/* MF Insider Subscription Form */}
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', marginBottom: '16px' }}>
                <input
                  type="text"
                  placeholder="First Name"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    fontSize: '0.95rem',
                    borderRadius: '4px',
                    border: 'none',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                    color: '#000000'
                  }}
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    fontSize: '0.95rem',
                    borderRadius: '4px',
                    border: 'none',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                    color: '#000000'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: '#E7D2CE',
                    color: '#1D1B1C',
                    fontSize: '0.95rem',
                    fontWeight: '800',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    marginTop: '4px',
                    transition: 'opacity 0.2s'
                  }}
                >
                  LET&apos;S DO IT
                </button>
              </form>

              <p style={{ fontSize: '0.72rem', color: '#A3A3A3', lineHeight: '1.45', margin: 0 }}>
                By entering your info, you&apos;ll become an MF Insider – with FREE access to exclusive insights, private Q&amp;As, and inspiring episodes of MarieTV, delivered with love to your inbox. (Unsub anytime in a click.) You also agree to our <a href="#terms" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>Terms of Use</a> and <a href="#privacy" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>Privacy Policy</a>.
              </p>
            </div>
            <div className="footer_vflex content-vflex">
              <h2 className="eyebrow">Company</h2>
              <ul role="list" className="footer_list w-list-unstyled">
                <li className="footer_list_item"><a href="#about" className="footer_link">About</a></li>
                <li className="footer_list_item"><a href="#marietv" className="footer_link">MarieTV</a></li>
                <li className="footer_list_item"><a href="#podcast" className="footer_link">The Marie Forleo Podcast</a></li>
                <li className="footer_list_item"><a href="#success-stories" className="footer_link">Success Stories</a></li>
                <li className="footer_list_item"><a href="#new-here" className="footer_link">New Here?</a></li>
                <li className="footer_list_item"><a href="#free-tools" className="footer_link">Free Tools</a></li>
                <li className="footer_list_item"><a href="#press-media" className="footer_link">Press &amp; Media</a></li>
                <li className="footer_list_item"><a href="#giving-back" className="footer_link">Giving Back</a></li>
                <li className="footer_list_item"><a href="#how-we-roll" className="footer_link">How We Roll</a></li>
                <li className="footer_list_item"><a href="#jobs" className="footer_link">Jobs</a></li>
                <li className="need-help-list-item footer_list_item">
                  <a href="#support" className="need-help-hflex w-inline-block">
                    <img
                      src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/61437caae011cd14cf4fa064_HelpIcon.svg"
                      loading="lazy"
                      width="27"
                      alt="Help"
                      className="need-help-icon"
                    />
                    <div className="need-help-link">Need Help?</div>
                  </a>
                </li>
                <li className="list-item-2">
                  <a href="https://programs.marieforleo.com/" target="_blank" rel="noreferrer" className="button-small u-button hollow-button w-button">
                    Program Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_vflex content-vflex">
              <h2 className="eyebrow">SHOP</h2>
              <ul role="list" className="footer_list w-list-unstyled">
                <li className="footer_list_item">
                  <a href="#bschool" className="footer_link">B-School</a>
                  <ul role="list">
                    <li className="footer_list_subitem footer_list_item">
                      <a href="#bschool-reviews" className="footer_link">• B-School Reviews</a>
                    </li>
                  </ul>
                </li>
                <li className="footer_list_item"><a href="#the-copy-cure" className="footer_link">The Copy Cure</a></li>
                <li className="footer_list_item"><a href="#time-genius" className="footer_link">Time Genius</a></li>
                <li className="footer_list_item">
                  <a href="https://checkout.marieforleo.com/build-your-250k-offer/" target="_blank" rel="noreferrer" className="footer_link">
                    Build Your $250k Offer App
                  </a>
                </li>
                <li className="footer_list_item"><a href="#htgayw" className="footer_link">How to Get Anything You Want</a></li>
                <li className="footer_list_item"><a href="#eif" className="footer_link">Everything Is Figureoutable</a></li>
              </ul>
            </div>
          </div>
          <div className="w-layout-hflex footer_legal_layout">
            <ul role="list" className="footer_legal_list w-list-unstyled">
              <li className="footer_legal_list_item"><a href="#terms" className="u-footer-link">Terms</a></li>
              <li className="footer_legal_list_item"><a href="#privacy" className="u-footer-link">Privacy</a></li>
              <li className="footer_legal_list_item"><a href="#cookie-policy" className="u-footer-link">Cookie Policy</a></li>
              <li className="footer_legal_list_item"><a href="#support" className="u-footer-link">Support</a></li>
            </ul>
            <div className="copyright">© 2026 Marie Forleo International</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
