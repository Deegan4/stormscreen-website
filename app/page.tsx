"use client"

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    // Rain Animation
    const canvas = document.getElementById("rain-canvas") as HTMLCanvasElement
    const ctx = canvas.getContext("2d")
    const flash = document.getElementById("lightning-flash")

    if (!ctx || !flash) return

    let raindrops: Array<{
      x: number
      y: number
      length: number
      speed: number
      opacity: number
      thickness: number
    }> = []
    const RAINDROP_COUNT = 200
    const WIND = 2
    let animationId: number

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function createRaindrop() {
      return {
        x: Math.random() * canvas.width * 1.5 - canvas.width * 0.25,
        y: Math.random() * -canvas.height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 15 + 10,
        opacity: Math.random() * 0.3 + 0.1,
        thickness: Math.random() * 1.5 + 0.5,
      }
    }

    function initRain() {
      raindrops = []
      for (let i = 0; i < RAINDROP_COUNT; i++) {
        raindrops.push(createRaindrop())
        raindrops[i].y = Math.random() * canvas.height
      }
    }

    function drawRain() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      raindrops.forEach((drop) => {
        ctx.beginPath()
        ctx.moveTo(drop.x, drop.y)
        ctx.lineTo(drop.x + WIND, drop.y + drop.length)
        ctx.strokeStyle = `rgba(120, 180, 255, ${drop.opacity})`
        ctx.lineWidth = drop.thickness
        ctx.lineCap = "round"
        ctx.stroke()

        // Update position
        drop.y += drop.speed
        drop.x += WIND * 0.5

        // Reset if off screen
        if (drop.y > canvas.height) {
          drop.y = -drop.length
          drop.x = Math.random() * canvas.width * 1.5 - canvas.width * 0.25
        }
      })

      animationId = requestAnimationFrame(drawRain)
    }

    // Lightning Effect
    function triggerLightning() {
      flash.style.opacity = "0.15"
      setTimeout(() => {
        flash.style.opacity = "0"
      }, 50)
      setTimeout(() => {
        flash.style.opacity = "0.1"
      }, 100)
      setTimeout(() => {
        flash.style.opacity = "0"
      }, 150)
    }

    function scheduleLightning() {
      const delay = Math.random() * 15000 + 8000 // 8-23 seconds
      setTimeout(() => {
        triggerLightning()
        scheduleLightning()
      }, delay)
    }

    // Initialize
    resizeCanvas()
    initRain()
    drawRain()
    scheduleLightning()

    const handleResize = () => {
      resizeCanvas()
      initRain()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <style jsx global>{`
        :root {
          --bg-deep: #080c14;
          --bg-dark: #0d1220;
          --bg-card: #141c2e;
          --bg-card-hover: #1a2540;
          --cyan-glow: #00d4ff;
          --cyan-bright: #4ae3ff;
          --cyan-pale: #a8f0ff;
          --white: #ffffff;
          --gray-100: #e8edf5;
          --gray-300: #9ba8c2;
          --gray-500: #5c6a85;
          --purple-glow: #8b5cf6;
          --rain-color: rgba(120, 180, 255, 0.6);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--bg-deep);
          color: var(--gray-100);
          line-height: 1.6;
          overflow-x: hidden;
        }

        #rain-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        #lightning-flash {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          opacity: 0;
          pointer-events: none;
          z-index: 2;
          transition: opacity 0.05s ease-out;
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
        }

        .ambient-glow {
          position: fixed;
          border-radius: 50%;
          filter: blur(150px);
          opacity: 0.15;
          pointer-events: none;
          z-index: 0;
        }

        .glow-1 {
          width: 600px;
          height: 600px;
          background: var(--cyan-glow);
          top: -200px;
          right: -100px;
          animation: float 20s ease-in-out infinite;
        }

        .glow-2 {
          width: 500px;
          height: 500px;
          background: var(--purple-glow);
          bottom: -150px;
          left: -100px;
          animation: float 25s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }

        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(to bottom, var(--bg-deep) 0%, transparent 100%);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--white);
          text-decoration: none;
        }

        .logo img {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-links a {
          color: var(--gray-300);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: var(--white);
        }

        .nav-cta {
          background: var(--cyan-glow);
          color: var(--bg-deep) !important;
          padding: 0.65rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.2s ease;
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }

        .nav-cta:hover {
          background: var(--cyan-bright);
          box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
          transform: translateY(-2px);
        }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 8rem 2rem 4rem;
          position: relative;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          color: var(--cyan-bright);
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-badge::before {
          content: '';
          width: 8px;
          height: 8px;
          background: var(--cyan-glow);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        .hero h1 {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.8s ease-out 0.1s both;
        }

        .hero h1 .gradient-text {
          background: linear-gradient(135deg, var(--cyan-glow) 0%, var(--cyan-pale) 50%, var(--white) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: var(--gray-300);
          max-width: 600px;
          margin-bottom: 3rem;
          font-weight: 400;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-cta-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--cyan-glow);
          color: var(--bg-deep);
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 40px rgba(0, 212, 255, 0.4);
        }

        .btn-primary:hover {
          background: var(--cyan-bright);
          box-shadow: 0 0 60px rgba(0, 212, 255, 0.6);
          transform: translateY(-3px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: transparent;
          color: var(--white);
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          border: 2px solid var(--gray-500);
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          border-color: var(--cyan-glow);
          color: var(--cyan-bright);
          background: rgba(0, 212, 255, 0.05);
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
          margin-top: 4rem;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--white);
          font-family: 'JetBrains Mono', monospace;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--gray-500);
          margin-top: 0.25rem;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-preview {
          margin-top: 4rem;
          width: 100%;
          max-width: 900px;
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }

        .preview-window {
          background: var(--bg-card);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05),
            0 0 80px rgba(0, 212, 255, 0.1);
        }

        .preview-titlebar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 16px;
          background: rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .preview-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .preview-dot.red {
          background: #ff5f57;
        }
        .preview-dot.yellow {
          background: #ffbd2e;
        }
        .preview-dot.green {
          background: #28ca42;
        }

        .preview-content {
          aspect-ratio: 16/10;
          background: linear-gradient(180deg, #0d1220 0%, #151d30 100%);
          position: relative;
          overflow: hidden;
        }

        .preview-content video,
        .preview-content img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
        }

        .features {
          padding: 8rem 2rem;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--cyan-glow);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.15rem;
          color: var(--gray-300);
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          background: var(--bg-card);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--cyan-glow), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover {
          background: var(--bg-card-hover);
          border-color: rgba(0, 212, 255, 0.2);
          transform: translateY(-5px);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          background: rgba(0, 212, 255, 0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          font-size: 1.75rem;
        }

        .feature-card h3 {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--white);
        }

        .feature-card p {
          color: var(--gray-300);
          font-size: 1rem;
          line-height: 1.7;
        }

        .showcase {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 212, 255, 0.02) 50%, transparent 100%);
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .showcase-item {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
        }

        .showcase-item:hover {
          border-color: rgba(0, 212, 255, 0.3);
          transform: scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .showcase-item img {
          width: 100%;
          height: auto;
          display: block;
        }

        .specs {
          padding: 8rem 2rem;
        }

        .specs-container {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .specs-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .specs-content p {
          color: var(--gray-300);
          font-size: 1.1rem;
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .spec-list {
          list-style: none;
        }

        .spec-list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 1.05rem;
        }

        .spec-list li:last-child {
          border-bottom: none;
        }

        .spec-icon {
          width: 24px;
          height: 24px;
          color: var(--cyan-glow);
        }

        .specs-visual {
          position: relative;
        }

        .specs-card {
          background: var(--bg-card);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
        }

        .specs-card-title {
          font-size: 0.85rem;
          color: var(--gray-500);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .spec-row:last-child {
          border-bottom: none;
        }

        .spec-key {
          color: var(--gray-300);
        }

        .spec-value {
          color: var(--white);
          font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
        }

        .cta-section {
          padding: 8rem 2rem;
          text-align: center;
          position: relative;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-section h2 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .cta-section p {
          font-size: 1.25rem;
          color: var(--gray-300);
          margin-bottom: 2.5rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .price-tag {
          display: inline-block;
          margin-bottom: 2rem;
        }

        .price-amount {
          font-size: 4rem;
          font-weight: 800;
          color: var(--white);
          font-family: 'JetBrains Mono', monospace;
        }

        .price-period {
          font-size: 1.25rem;
          color: var(--gray-500);
          margin-left: 0.5rem;
        }

        footer {
          padding: 4rem 2rem 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--white);
        }

        .footer-logo img {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.2);
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-links a {
          color: var(--gray-500);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--gray-300);
        }

        .footer-right {
          color: var(--gray-500);
          font-size: 0.9rem;
        }

        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }

          .showcase-grid {
            grid-template-columns: 1fr;
          }

          .specs-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-stats {
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .hero {
            padding: 7rem 1.5rem 3rem;
          }

          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .footer-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-left {
            flex-direction: column;
          }
        }
      `}</style>

      {/* Ambient Glow */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      {/* Rain Effect Canvas */}
      <canvas id="rain-canvas"></canvas>

      {/* Lightning Flash */}
      <div id="lightning-flash"></div>

      {/* Content */}
      <div className="content-wrapper">
        {/* Navigation */}
        <nav>
          <a href="#" className="logo">
            <img src="/images/unknown-5.jpg" alt="StormScreen Logo" />
            StormScreen
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#showcase">Screenshots</a>
            <a href="#specs">Requirements</a>
            <a href="https://cybertech44.gumroad.com/l/stormscreen" className="nav-cta">
              Get StormScreen
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-badge">
            <span>Now available for macOS</span>
          </div>
          <h1>
            Rain on your
            <br />
            <span className="gradient-text">desktop.</span>
          </h1>
          <p className="hero-subtitle">
            Transform your Mac with beautiful, animated rain and lightning effects. Smooth 60fps performance. Completely
            click-through. Pure atmosphere.
          </p>
          <div className="hero-cta-group">
            <a href="https://cybertech44.gumroad.com/l/stormscreen" className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Now
            </a>
            <a href="#features" className="btn-secondary">
              Learn More
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">60fps</div>
              <div className="stat-label">Smooth Animation</div>
            </div>
            <div className="stat">
              <div className="stat-value">{"<5%"}</div>
              <div className="stat-label">CPU Usage</div>
            </div>
            <div className="stat">
              <div className="stat-value">Metal</div>
              <div className="stat-label">GPU Accelerated</div>
            </div>
          </div>

          <div className="hero-preview">
            <div className="preview-window">
              <div className="preview-titlebar">
                <div className="preview-dot red"></div>
                <div className="preview-dot yellow"></div>
                <div className="preview-dot green"></div>
              </div>
              <div className="preview-content">
                <video autoPlay loop muted playsInline>
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-rhco0veMNZeo6lYMopvtLMerZKzmei.mov" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features" id="features">
          <div className="section-header">
            <div className="section-label">Features</div>
            <h2 className="section-title">
              Everything you need.
              <br />
              Nothing you don&apos;t.
            </h2>
            <p className="section-subtitle">
              Crafted for ambiance enthusiasts who want atmosphere without distraction.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌧️</div>
              <h3>Realistic Rain</h3>
              <p>
                Thousands of raindrops with realistic physics. Adjust intensity, size, speed, wind direction, and more.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Dynamic Lightning</h3>
              <p>Procedurally generated lightning bolts with stunning screen flash effects. Every strike is unique.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🖱️</div>
              <h3>Click-Through</h3>
              <p>
                The overlay never interferes with your work. Raindrops fall around your cursor, clicks pass through.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Fully Customizable</h3>
              <p>Every parameter adjustable. Colors, intensity, frequency, wind — make it yours.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🖥️</div>
              <h3>Multi-Monitor</h3>
              <p>Enable or disable per display. Storm across all your screens or keep it to one.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⌨️</div>
              <h3>Keyboard Shortcuts</h3>
              <p>Toggle effects instantly. Increase or decrease intensity without opening preferences.</p>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="showcase" id="showcase">
          <div className="section-header">
            <div className="section-label">In Action</div>
            <h2 className="section-title">See it for yourself.</h2>
            <p className="section-subtitle">Every detail designed to create the perfect ambient atmosphere.</p>
          </div>
          <div className="showcase-grid">
            <div className="showcase-item">
              <img
                src="/images/screenshot-202026-01-06-20at-207.png"
                alt="StormScreen settings panel showing startup and display options"
              />
            </div>
            <div className="showcase-item">
              <img
                src="/images/screenshot-202026-01-05-20at-2011.png"
                alt="Built-in weather presets panel with custom presets"
              />
            </div>
            <div className="showcase-item">
              <img
                src="/images/screenshot-202026-01-05-20at-2011-2.png"
                alt="Lightning effect parameters and screen flash settings"
              />
            </div>
            <div className="showcase-item">
              <img
                src="/images/screenshot-202026-01-06-20at-206.png"
                alt="Intense rain with lightning effect controls"
              />
            </div>
          </div>
        </section>

        {/* Specs Section */}
        <section className="specs" id="specs">
          <div className="specs-container">
            <div className="specs-content">
              <h2>Built for performance.</h2>
              <p>
                StormScreen uses Metal for GPU-accelerated rendering, ensuring buttery smooth animations without taxing
                your system. Perfect for leaving on all day while you work.
              </p>
              <ul className="spec-list">
                <li>
                  <svg className="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Native Swift and SwiftUI
                </li>
                <li>
                  <svg className="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Metal GPU acceleration
                </li>
                <li>
                  <svg className="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Automatic power management
                </li>
                <li>
                  <svg className="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Menu bar integration
                </li>
              </ul>
            </div>
            <div className="specs-visual">
              <div className="specs-card">
                <div className="specs-card-title">System Requirements</div>
                <div className="spec-row">
                  <span className="spec-key">macOS</span>
                  <span className="spec-value">15.6+</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">Chip</span>
                  <span className="spec-value">Apple Silicon / Intel</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">RAM</span>
                  <span className="spec-value">{"<100 MB"}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">GPU</span>
                  <span className="spec-value">Metal Required</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">CPU Usage</span>
                  <span className="spec-value">{"<5%"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready for the storm?</h2>
            <p>Free to download. Optional Pro features available via in-app purchase.</p>
            <a href="https://cybertech44.gumroad.com/l/stormscreen" className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Get StormScreen
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <img src="/images/unknown-5.jpg" alt="StormScreen Logo" />
                StormScreen
              </div>
              <div className="footer-links">
                <a href="/support">Support</a>
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
              </div>
            </div>
            <div className="footer-right">© 2026 StormScreen. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </>
  )
}
