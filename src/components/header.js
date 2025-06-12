// Header component for Wanderlog Lite

export default function Header() {
    // Remove any existing header to avoid duplicates
    const oldHeader = document.querySelector('.app-header');
    if (oldHeader) oldHeader.remove();

    const header = document.createElement('header');
    header.className = 'app-header';
    header.innerHTML = `
    <div class="logo-container">
        <a href="#/" class="logo" aria-label="Home">
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="#fbfdff" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                <path fill="#fbfdff" d="M19 12h-2v-1h-1v1h-1v1h1v1h1v-1h2v-1z"/>
            </svg>
        </a>
        <h1>
          <a href="/" style={{ textDecoration: 'none', color: '#fff' }}>
            Travel Planner
          </a>
        </h1>
        <button class="mobile-menu-btn" aria-label="Open menu" type="button">
            <span class="burger-bg"></span>
            <i class="fas fa-bars"></i>
        </button>
    </div>
    <div class="nav-overlay"></div>
    <nav class="nav-links" aria-label="Main navigation">
        <button class="close-menu-btn" aria-label="Close menu" type="button">&times;</button>
        <a href="#/" class="nav-home"><i class="fas fa-home"></i> Home</a>
        <a href="#/trips" class="nav-mytrips"><i class="fas fa-map-marked-alt"></i> My Trips</a>
        <a href="#/weather" class="nav-weather"><i class="fas fa-cloud-sun"></i> Weather</a>
        <a href="#/flights" class="nav-flights"><i class="fas fa-plane"></i> Flights</a>
        <a href="#/events" class="nav-events"><i class="fas fa-calendar-alt"></i> Events</a>
        <button class="login-btn" type="button"><i class="fas fa-user"></i> Sign In</button>
        <a href="#/settings" class="nav-settings"><i class="fas fa-cog"></i> Settings</a>
    </nav>
    `;

    // Wait for DOM to attach before querying
    setTimeout(() => {
        const nav = header.querySelector('.nav-links');
        const burger = header.querySelector('.mobile-menu-btn');
        const overlay = header.querySelector('.nav-overlay');
        const closeBtn = header.querySelector('.close-menu-btn');

        function closeMenu() {
            nav.classList.remove('nav-open');
            overlay.classList.remove('show');
            burger.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }

        function openMenu() {
            nav.classList.add('nav-open');
            overlay.classList.add('show');
            burger.classList.add('active');
            document.body.classList.add('no-scroll');
        }

        burger.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);

        // Make all nav links/buttons close the menu and handle navigation
        nav.querySelectorAll('a,button:not(.close-menu-btn)').forEach(el => {
            el.addEventListener('click', (e) => {
                closeMenu();
                if (el.tagName === 'A' && el.getAttribute('href')) {
                    // Only update hash if not already at that hash
                    if (window.location.hash !== el.getAttribute('href')) {
                        window.location.hash = el.getAttribute('href').replace('#', '');
                    }
                    e.preventDefault();
                }
                if (el.classList.contains('login-btn')) {
                    window.location.hash = '/superuser';
                }
            });
        });
    }, 0);

    // Responsive CSS with animation and burger background
    if (!document.getElementById('header-burger-css')) {
        const style = document.createElement('style');
        style.id = 'header-burger-css';
        style.textContent = `
        .app-header {
            background: rgb(51, 9, 240);
            color: #fff;
            padding: 1rem 0.5rem;
            box-shadow: 0 2px 8px rgba(66,133,244,0.07);
            position: relative;
            z-index: 1000;
            min-height: 60px;
        }
        .logo-container {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            position: relative;
        }
        .logo svg {
            display: block;
        }
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: #fff;
            font-size: 1.7rem;
            margin-left: auto;
            cursor: pointer;
            transition: color 0.2s;
            z-index: 2001;
            position: relative;
            outline: none;
        }
        .mobile-menu-btn .burger-bg {
            position: absolute;
            inset: -8px;
            background: linear-gradient(135deg, #1976d2 60%, #512da8 100%);
            border-radius: 50%;
            z-index: -1;
            transition: background 0.3s, box-shadow 0.3s;
            box-shadow: 0 2px 8px rgba(66,133,244,0.13);
            width: 40px;
            height: 40px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.95;
        }
        .mobile-menu-btn.active .burger-bg {
            background: linear-gradient(135deg, #512da8 60%, #1976d2 100%);
            box-shadow: 0 4px 16px rgba(66,133,244,0.25);
        }
        .nav-overlay {
            display: none;
        }
        .nav-links {
            display: flex;
            gap: 1.2rem;
            align-items: center;
            transition: none;
        }
        .nav-links a, .nav-links button {
            color: #fff;
            background: none;
            border: none;
            font-size: 1rem;
            text-decoration: none;
            cursor: pointer;
            padding: 0.5rem 0.8rem;
            border-radius: 6px;
            transition: background 0.2s, color 0.2s, transform 0.2s;
            outline: none;
        }
        .nav-links a:hover, .nav-links button:hover,
        .nav-links a:focus, .nav-links button:focus {
            background: #1565c0;
            color: #bbdefb;
            transform: scale(1.08);
        }
        .close-menu-btn {
            display: none;
        }
        .no-scroll {
            overflow: hidden !important;
        }
        .nav-links a.nav-home {
            margin-top: 1.9rem;
        }
        h1 a {
          color: #fff;
          text-decoration: none;
        }
        @media (max-width: 900px) {
            .logo-container h1 {
                font-size: 1.2rem;
            }
            .nav-links a, .nav-links button {
                font-size: 0.98rem;
                padding: 0.5rem 0.6rem;
            }
        }
        @media (max-width: 700px) {
            .app-header {
                position: relative;
                min-height: 60px;
            }
            .logo-container {
                justify-content: space-between;
            }
            .nav-overlay {
                display: block;
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(0,0,0,0.35);
                z-index: 1999;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s;
            }
            .nav-overlay.show {
                opacity: 1;
                pointer-events: auto;
            }
            .nav-links {
                flex-direction: column;
                align-items: stretch;
                background: linear-gradient(135deg, #1976d2 60%, #512da8 100%);
                position: fixed;
                top: 0;
                right: 0;
                height: 100vh;
                width: 80vw;
                max-width: 340px;
                z-index: 2000;
                box-shadow: -2px 0 16px rgba(66,133,244,0.13);
                padding: 1.5rem 0 0 0;
                transform: translateX(100%) scale(0.98);
                opacity: 0;
                visibility: hidden;
                transition: transform 0.4s cubic-bezier(.4,0,.2,1), opacity 0.3s, visibility 0.3s;
                pointer-events: none;
            }
            .nav-links.nav-open {
                transform: translateX(0) scale(1);
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
            }
            .nav-links a, .nav-links button {
                width: 100%;
                text-align: left;
                padding: 1rem 1.2rem;
                font-size: 1.1rem;
                border-radius: 0;
                border-bottom: 1px solid #2156a0;
                background: none;
                transition: background 0.2s, color 0.2s, transform 0.2s;
                display: block;
            }
            .nav-links a:last-child, .nav-links button:last-child {
                border-bottom: none;
            }
            .mobile-menu-btn {
                display: block;
                position: static;
                margin-left: auto;
            }
            .close-menu-btn {
                display: block;
                background: none;
                border: none;
                color: #fff;
                font-size: 2rem;
                position: absolute;
                top: 1rem;
                right: 1rem;
                z-index: 2100;
                cursor: pointer;
            }
            .nav-links {
                border-radius: 18px 0 0 18px;
                /* Top-right and bottom-right corners are square, left corners are rounded */
                /* You can adjust the values for your preferred roundness */
            }
        }
        `;
        document.head.appendChild(style);
    }

    document.body.prepend(header);
}