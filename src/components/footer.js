// Responsive Footer Component for Wanderlog Lite

export default function Footer() {
    const footer = document.createElement('footer');
    footer.className = 'app-footer';
    footer.innerHTML = `
        <div class="footer-content">
            <span>&copy; ${new Date().getFullYear()} Wanderlog Lite Developed By: Bundu Kallon, Freetown Sierra Leone</span>
            <nav class="footer-links">
                <a href="#/">Home</a>
                <a href="#/trips">My Trips</a>
                <a href="#/settings">Settings</a>
            </nav>
            <div class="footer-social">
                <a href="https://twitter.com/" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="https://facebook.com/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                <a href="https://instagram.com/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://linkedin.com/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="https://youtube.com/" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                <a href="https://t.me/" target="_blank" aria-label="Telegram"><i class="fab fa-telegram"></i></a>
                <a href="https://pinterest.com/" target="_blank" aria-label="Pinterest"><i class="fab fa-pinterest"></i></a>
                <a href="mailto:support@wanderloglite.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
            </div>
        </div>
    `;

    // Inject responsive CSS with animation only once
    if (!document.getElementById('footer-css')) {
        const style = document.createElement('style');
        style.id = 'footer-css';
        style.textContent = `
        .app-footer {
            width: 100%;
            background: #1976d2;
            color: #fff;
            padding: 1.2rem 0 1rem 0;
            margin-top: 2rem;
            animation: fadeInUp 0.7s;
        }
        .footer-content {
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1rem;
            font-size: 1rem;
        }
        .footer-links {
            display: flex;
            gap: 1.2rem;
        }
        .footer-links a {
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s;
        }
        .footer-links a:hover {
            color: #bbdefb;
        }
        .footer-social {
            display: flex;
            gap: 0.8rem;
        }
        .footer-social a {
            color: #fff;
            font-size: 1.3rem;
            transition: color 0.2s, transform 0.2s;
        }
        .footer-social a:hover {
            color: #bbdefb;
            transform: scale(1.15);
        }
        @media (max-width: 700px) {
            .footer-content {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.5rem;
                font-size: 0.98rem;
            }
            .footer-links {
                gap: 0.8rem;
            }
            .footer-social {
                margin-top: 0.5rem;
            }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
        }
        `;
        document.head.appendChild(style);
    }

    return footer;
}