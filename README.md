<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Xeranov — Roblox Developer. Gameplay systems, Luau scripting, and scalable player experiences."
    />
    <meta property="og:title" content="Xeranov — Roblox Developer" />
    <meta
      property="og:description"
      content="Roblox Developer specializing in gameplay systems, Luau scripting, and scalable player experiences."
    />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#0d1117" />
    <title>Xeranov — Roblox Developer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body data-lang="en">
    <!-- NAVBAR -->
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <a href="#home" class="nav-logo">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-name">Xeranov</span>
          <span class="logo-bracket">/&gt;</span>
        </a>
        <div class="nav-links" id="navLinks">
          <a href="#projects" data-id="Proyek" data-en="Projects">Projects</a>
          <a href="#skills" data-id="Keahlian" data-en="Skills">Skills</a>
          <a href="#about" data-id="Tentang" data-en="About">About</a>
          <a href="#contact" data-id="Kontak" data-en="Contact">Contact</a>
        </div>
        <div class="nav-actions">
          <button
            class="lang-toggle"
            id="langToggle"
            aria-label="Toggle Language"
          >
            <span class="lang-id">ID</span>
            <span class="lang-divider">|</span>
            <span class="lang-en">EN</span>
          </button>
          <button
            class="hamburger"
            id="hamburger"
            aria-label="Open Menu"
            aria-expanded="false"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
        <a href="#projects" data-id="Proyek" data-en="Projects">Projects</a>
        <a href="#skills" data-id="Keahlian" data-en="Skills">Skills</a>
        <a href="#about" data-id="Tentang" data-en="About">About</a>
        <a href="#contact" data-id="Kontak" data-en="Contact">Contact</a>
      </div>
    </nav>

    <!-- HERO -->
    <section class="hero" id="home">
      <div class="hero-bg" aria-hidden="true">
        <div class="grid-pattern"></div>
        <div class="hero-glow"></div>
      </div>
      <div class="hero-layout">

        <!-- LEFT: text -->
        <div class="hero-content">
          <div class="hero-badge reveal">
            <span class="status-dot"></span>
            <span data-id="Terbuka untuk Peluang Baru" data-en="Open to New Opportunities">Open to New Opportunities</span>
          </div>

          <h1 class="hero-title reveal">
            <span class="gradient-text">Xeranov</span>
          </h1>

          <div class="hero-subtitle reveal">
            <span class="typewriter" id="typewriter"></span>
          </div>

          <p class="hero-desc reveal"
             data-id="Roblox Developer dengan pengalaman studio profesional — berkontribusi pada experience yang dijangkau lebih dari 60 juta pemain."
             data-en="Roblox Developer with professional studio experience — contributed to experiences reached by over 60 million players.">
            Roblox Developer with professional studio experience — contributed to
            experiences reached by over 60 million players.
          </p>

          <div class="hero-stats reveal" aria-label="Key stats">
            <div class="hstat">
              <span class="hstat-num">60M+</span>
              <span class="hstat-lbl" data-id="Pemain Dijangkau" data-en="Players Reached">Players Reached</span>
            </div>
            <div class="hstat-sep" aria-hidden="true"></div>
            <div class="hstat">
              <span class="hstat-num">150K+</span>
              <span class="hstat-lbl" data-id="Total Favorit" data-en="Total Favorites">Total Favorites</span>
            </div>
            <div class="hstat-sep" aria-hidden="true"></div>
            <div class="hstat">
              <span class="hstat-num">110K+</span>
              <span class="hstat-lbl" data-id="Anggota Komunitas" data-en="Community Members">Community Members</span>
            </div>
          </div>

          <div class="hero-actions reveal">
            <a href="#projects" class="btn btn-primary" data-id="Lihat Proyek" data-en="View Projects">View Projects</a>
            <a href="#contact"  class="btn btn-ghost"   data-id="Hubungi Saya" data-en="Get in Touch">Get in Touch</a>
          </div>
        </div>

        <!-- RIGHT: character -->
        <div class="hero-char reveal" aria-hidden="true">
          <img src="images/profilenew.webp" alt="Xeranov Roblox character">
        </div>

      </div>
      <div class="scroll-indicator" aria-hidden="true">
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="section-alt" id="projects">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">01</span>
          <h2 data-id="Showcase Proyek" data-en="Project Showcase">
            Project Showcase
          </h2>
        </div>
        <div class="showcase-grid">
          <!-- Fishing System -->
          <article class="showcase-card reveal">
            <div class="thumb fishing-thumb">
              <!-- Replace with actual screenshot: images/fishing-thumb.jpg -->
              <img
                src="images/fishing-thumb.jpg"
                alt="Fishing System screenshot"
                class="thumb-img"
                onerror="
                  this.src = 'images/fishing.png';
                  this.onerror = null;
                "
              />
              <div class="thumb-overlay" aria-hidden="true"></div>
              <span class="badge-status live">
                <span class="badge-dot" aria-hidden="true"></span>
                Live
              </span>
            </div>
            <div class="card-body">
              <div class="card-top">
                <div>
                  <h3 class="card-title">Fishing System</h3>
                  <p class="card-sub">
                    Mt. Talamau &middot; Imaginature Studio
                  </p>
                </div>
                <!-- Update href to actual Roblox game URL -->
                <a
                  href="https://www.roblox.com/games/86710642002144/MOUNT-TALAMAU"
                  class="card-ext"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on Roblox"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    width="14"
                    height="14"
                  >
                    <path
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                </a>
              </div>
              <p
                class="card-desc"
                data-id="Sistem fishing lengkap dari nol. gameplay mechanics, inventory, ekonomi, progression, dan monetization. Dibangun dengan React Luau untuk  dan ProfileStore untukUI persistent data."
                data-en="Complete fishing system built from scratch. gameplay mechanics, inventory, economy, progression, and monetization. Built with React Luau for UI and ProfileStore for persistent data."
              >
                Complete fishing system built from scratch. gameplay mechanics,
                inventory, economy, progression, and monetization. Built with
                React Luau for UI and ProfileStore for persistent data.
              </p>
              <div class="card-metrics">
                <div class="metric-pill">
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    />
                  </svg>
                  42.4M+
                  <span data-id="kunjungan" data-en="visits">visits</span>
                </div>
                <div class="metric-pill">
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zM5.216 14A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                    />
                  </svg>
                  100–200+
                  <span data-id="aktif harian" data-en="daily active"
                    >daily active</span
                  >
                </div>
              </div>
              <div class="card-tags">
                <span>Luau</span>
                <span>React Luau</span>
                <span>ProfileStore</span>
                <span>Rojo</span>
                <span>Wally</span>
                <span>GitHub</span>
              </div>
            </div>
          </article>

          <!-- Farming Simulator -->
          <article class="showcase-card reveal">
            <div class="thumb farming-thumb">
              <!-- Replace with actual screenshot: images/farming-thumb.jpg -->
              <img
                src="images/farming-thumb.jpg"
                alt="Farming Simulator screenshot"
                class="thumb-img"
                onerror="
                  this.src = 'images/farming.png';
                  this.onerror = null;
                "
              />
              <div class="thumb-overlay" aria-hidden="true"></div>
              <span class="badge-status dev">In Dev</span>
            </div>
            <div class="card-body">
              <div class="card-top">
                <div>
                  <h3 class="card-title">Lihat Kebunku</h3>
                  <p class="card-sub">
                    Lihat Kebunku
                  </p>
                </div>
              </div>
              <p
                class="card-desc"
                data-id="Farming experience realistis dengan crop progression, sistem ekonomi, persistent data, dan mekanik gameplay untuk engagement jangka panjang."
                data-en="Realistic farming experience with crop progression, economy systems, persistent data, and gameplay mechanics designed for long-term engagement."
              >
                Realistic farming experience with crop progression, economy
                systems, persistent data, and gameplay mechanics designed for
                long-term engagement.
              </p>
              <div class="card-metrics">
                <div class="metric-pill metric-muted">
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z"
                    />
                    <path
                      d="M8 16A8 8 0 108 0a8 8 0 000 16zm7-8A7 7 0 111 8a7 7 0 0114 0z"
                    />
                  </svg>
                  <span data-id="Belum Dirilis" data-en="Not Yet Released"
                    >Not Yet Released</span
                  >
                </div>
              </div>
              <div class="card-tags">
                <span>Luau</span>
                <span>React Luau</span>
                <span>ProfileStore</span>
                <span>Roblox Studio</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">02</span>
          <h2 data-id="Keahlian" data-en="Skills">Skills</h2>
        </div>
        <div class="skills-layout">
          <div class="skill-group reveal">
            <h3
              data-id="Bahasa &amp; Framework"
              data-en="Languages &amp; Frameworks"
            >
              Languages &amp; Frameworks
            </h3>
            <div class="tag-row">
              <span class="tag tag-hi">Lua / Luau</span>
              <span class="tag tag-hi">React Luau</span>
            </div>
          </div>

          <div class="skill-group reveal">
            <h3 data-id="Tools &amp; Teknologi" data-en="Tools &amp; Tech">
              Tools &amp; Tech
            </h3>
            <div class="tag-row">
              <span class="tag">Roblox Studio</span>
              <span class="tag">VS Code</span>
              <span class="tag">Rojo</span>
              <span class="tag">GitHub</span>
              <span class="tag">ProfileStore</span>
              <span class="tag">Wally</span>
              <span class="tag">DataStore API</span>
              <span class="tag">Remote Events</span>
            </div>
          </div>

          <div class="skill-group reveal">
            <h3 data-id="Sistem yang Dibangun" data-en="Systems Built">
              Systems Built
            </h3>
            <div class="tag-row">
              <span class="tag">Inventory</span>
              <span class="tag">Quest</span>
              <span class="tag">Trading</span>
              <span class="tag">Vehicle</span>
              <span class="tag">Shop &amp; Monetization</span>
              <span class="tag">Data Persistence</span>
              <span class="tag">Achievement</span>
              <span class="tag">Daily Reward</span>
              <span class="tag">Progression</span>
              <span class="tag">Teleportation</span>
              <span class="tag">And more</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT & EXPERIENCE -->
    <section class="section-alt" id="about">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">03</span>
          <h2
            data-id="Tentang &amp; Pengalaman"
            data-en="About &amp; Experience"
          >
            About &amp; Experience
          </h2>
        </div>
        <div class="about-layout">
          <div class="about-bio reveal">
            <p
              data-id="Roblox Developer dengan pengalaman profesional di studio pengembangan game. Berkontribusi pada live experience dengan jutaan pemain aktif, bekerja dalam tim multidisiplin untuk merancang dan merilis gameplay systems dan features."
              data-en="Roblox Developer with professional experience at a game development studio. Contributed to live experiences with millions of active players, working within multidisciplinary teams to design and ship gameplay systems and features."
            >
              Roblox Developer with professional experience at a game
              development studio. Contributed to live experiences with millions
              of active players, working within multidisciplinary teams to
              design and ship gameplay systems and features.
            </p>
            <div class="lang-list">
              <div class="lang-item">
                <span class="lang-name" data-id="Indonesia" data-en="Indonesian"
                  >Indonesian</span
                >
                <span class="lang-badge" data-id="Native" data-en="Native"
                  >Native</span
                >
              </div>
              <div class="lang-item">
                <span class="lang-name" data-id="Inggris" data-en="English"
                  >English</span
                >
                <span
                  class="lang-badge"
                  data-id="Menengah"
                  data-en="Intermediate"
                  >Intermediate</span
                >
              </div>
            </div>
          </div>

          <div class="timeline reveal">
            <div class="tl-item">
              <div class="tl-dot"></div>
              <div class="tl-body">
                <div class="tl-role">Roblox Luau Scripter</div>
                <div class="tl-company">
                  Imaginature Studio
                  <span class="tl-loc">&middot; Jakarta (Remote)</span>
                </div>
                <div class="tl-period">Sep 2025 &ndash; May 2026</div>
              </div>
            </div>

            <div class="tl-item">
              <div class="tl-dot"></div>
              <div class="tl-body">
                <div class="tl-role">
                  Student Intern — Full-Stack &amp; DevOps
                </div>
                <div class="tl-company">
                  Viyaverse Pvt Ltd
                  <span class="tl-loc">&middot; Maldives (Remote)</span>
                </div>
                <div class="tl-period">Jun 2024 &ndash; Sep 2025</div>
              </div>
            </div>

            <div class="tl-item">
              <div class="tl-dot"></div>
              <div class="tl-body">
                <div class="tl-role">DevOps Engineer Intern</div>
                <div class="tl-company">
                  PT. IDE KREATIF SEJAHTERA GLOBAL
                  <span class="tl-loc">&middot; Jakarta (Remote)</span>
                </div>
                <div class="tl-period">Oct 2024 &ndash; Jan 2025</div>
              </div>
            </div>

            <div class="tl-item">
              <div class="tl-dot tl-dot-edu"></div>
              <div class="tl-body">
                <div class="tl-role">Professional Cert — Web Development</div>
                <div class="tl-company">
                  CCIT FTUI <span class="tl-loc">&middot; GPA 3.30 / 4.00</span>
                </div>
                <div class="tl-period">Aug 2022 &ndash; Dec 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">04</span>
          <h2 data-id="Kontak" data-en="Contact">Contact</h2>
        </div>
        <p
          class="contact-desc reveal"
          data-id="Terbuka untuk freelance, kolaborasi proyek, maupun posisi penuh waktu."
          data-en="Open to freelance work, project collaborations, or full-time positions."
        >
          Open to freelance work, project collaborations, or full-time
          positions.
        </p>
        <div class="contact-links reveal">
          <a href="mailto:taufik.strix@gmail.com" class="contact-card">
            <div class="contact-icon email" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div class="contact-info">
              <div class="contact-platform">Email</div>
              <div class="contact-handle">taufik.strix@gmail.com</div>
            </div>
            <div class="contact-arrow" aria-hidden="true">&#8594;</div>
          </a>

          <a
            href="https://discord.com/users/xeranov"
            class="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="contact-icon discord" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.136 18.116a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                />
              </svg>
            </div>
            <div class="contact-info">
              <div class="contact-platform">Discord</div>
              <div class="contact-handle">xeranov</div>
            </div>
            <div class="contact-arrow" aria-hidden="true">&#8594;</div>
          </a>
          <a
            href="https://www.roblox.com/users/3924093456/profile"
            class="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="contact-icon roblox" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M5.005 0L0 18.992 18.994 24 24 5.008zm9.415 14.165l-4.586-1.225 1.224-4.587 4.586 1.225z"
                />
              </svg>
            </div>
            <div class="contact-info">
              <div class="contact-platform">Roblox</div>
              <div class="contact-handle">@Xeranov21</div>
            </div>
            <div class="contact-arrow" aria-hidden="true">&#8594;</div>
          </a>

          <a
            href="https://github.com/Xeranov"
            class="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="contact-icon github" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </div>
            <div class="contact-info">
              <div class="contact-platform">GitHub</div>
              <div class="contact-handle">Xeranov</div>
            </div>
            <div class="contact-arrow" aria-hidden="true">&#8594;</div>
          </a>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="container">
        <a href="#home" class="footer-logo">
          <span class="logo-bracket">&lt;</span>
          <span>Xeranov</span>
          <span class="logo-bracket">/&gt;</span>
        </a>
        <p class="footer-copy">&copy; 2026 Xeranov. All rights reserved.</p>
      </div>
    </footer>

    <script src="js/script.js"></script>
  </body>
</html>
