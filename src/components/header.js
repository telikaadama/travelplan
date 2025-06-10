// Header component for Wanderlog Lite

export default function Header() {
    const header = document.createElement('header');
    header.className = 'app-header';
    header.innerHTML = `
        <div class="logo-container">
            <div class="logo">
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#fbfdff" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    <path fill="#fbfdff" d="M19 12h-2v-1h-1v1h-1v1h1v1h1v-1h2v-1z"/>
                </svg>
            </div>
            <h1>Travel Planner </h1>
        </div>
        <nav class="nav-links">
            <a href="#/" class="nav-home"><i class="fas fa-home"></i> Home</a>
            <a href="#/trips" class="nav-mytrips"><i class="fas fa-map-marked-alt"></i> My Trips</a>
            <a href="#/weather" class="nav-weather"><i class="fas fa-cloud-sun"></i> Weather</a>
            <a href="#/flights" class="nav-flights"><i class="fas fa-plane"></i> Flights</a>
            <a href="#/events" class="nav-events"><i class="fas fa-calendar-alt"></i> Events</a>
            <button class="login-btn"><i class="fas fa-user"></i> Sign In</button>
             <a href="#/settings" class="nav-settings"><i class="fas fa-cog"></i> Settings</a>
        </nav>
        <button class="mobile-menu-btn" aria-label="Open menu"><i class="fas fa-bars"></i></button>
    `;

    // Burger menu functionality
    setTimeout(() => {
        const nav = header.querySelector('.nav-links');
        const burger = header.querySelector('.mobile-menu-btn');
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
            burger.classList.toggle('active');
        });
        // Close menu when a link or button is clicked (for mobile UX)
        nav.querySelectorAll('a,button').forEach(el => {
            el.addEventListener('click', () => {
                nav.classList.remove('nav-open');
                burger.classList.remove('active');
            });
        });
        // Sign In button routing
        const loginBtn = header.querySelector('.login-btn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                window.location.hash = '#/superuser';
            });
        }
    }, 0);

    // Responsive CSS for burger menu (inject only once)
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
        }
        .logo-container {
            display: flex;
            align-items: center;
            gap: 0.7rem;
        }
        .logo svg {
            display: block;
        }
        .nav-links {
            display: flex;
            gap: 1.2rem;
            align-items: center;
            transition: max-height 0.3s;
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
            transition: background 0.2s, color 0.2s;
            outline: none;
        }
        .nav-links a:hover, .nav-links button:hover,
        .nav-links a:focus, .nav-links button:focus {
            background: #1565c0;
            color: #bbdefb;
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
            }
            .logo-container {
                justify-content: space-between;
            }
            .nav-links {
                flex-direction: column;
                align-items: stretch;
                background: #1976d2;
                position: absolute;
                top: 60px;
                left: 0;
                right: 0;
                max-height: 0;
                overflow: hidden;
                overflow-y: auto;
                width: 100%;
                z-index: 100;
                box-shadow: 0 2px 8px rgba(66,133,244,0.13);
                padding-bottom: 0;
                transition: max-height 0.3s, padding-bottom 0.3s;
                visibility: hidden;
                opacity: 0;
            }
            .nav-links.nav-open {
                max-height: 600px;
                padding-bottom: 1rem;
                visibility: visible;
                opacity: 1;
            }
            .nav-links a, .nav-links button {
                width: 100%;
                text-align: left;
                padding: 1rem 1.2rem;
                font-size: 1.1rem;
                border-radius: 0;
                border-bottom: 1px solid #2156a0;
            }
            .nav-links a:last-child, .nav-links button:last-child {
                border-bottom: none;
            }
            .mobile-menu-btn {
                display: block;
            }
        }
        `;
        document.head.appendChild(style);
    }

    return header;
}