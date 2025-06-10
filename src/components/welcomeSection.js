import Header from './header.js';

// Remove the App function and export only WelcomeSection
function WelcomeSection() {
    const section = document.createElement('section');
    section.className = 'welcome-section';
    section.innerHTML = `
        <div class="welcome-content">
            <h2>Welcome to Wanderlog Lite!</h2>
            <p>
                Plan your next adventure with ease. Search destinations, build your itinerary, 
                compare prices, track your budget, and discover local events—all in one place.
            </p>
            <button class="cta-button">Start Planning Now</button>
        </div>
        <div class="animation-layer"></div>
    `;

    // Add CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        .welcome-section {
            position: relative;
            height: 100vh;
            min-height: 500px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            color: #fff;
            text-align: center;
            padding: 0 20px;
            background: url('src/images/R.jpeg') center center/cover no-repeat;
        }
        
        .welcome-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            background: rgba(0,0,0,0.55); /* semi-transparent dark background */
            border-radius: 18px;
            padding: 2rem 2.5rem;
            margin: 0 auto;
            color: #fff; /* ensure text is white */
            box-shadow: 0 4px 24px rgba(0,0,0,0.18);
        }

        .welcome-section h2,
        .welcome-section p {
            color: #fff; /* force white text */
            text-shadow: 0 2px 8px rgba(0,0,0,0.25);
        }
        
        .welcome-section h2 {
            font-size: clamp(2rem, 5vw, 3.5rem);
            margin-bottom: 20px;
            animation: fadeInUp 1s ease-out;
        }
        
        .welcome-section p {
            font-size: clamp(1rem, 2vw, 1.2rem);
            margin-bottom: 30px;
            animation: fadeInUp 1s ease-out 0.3s forwards;
            opacity: 0;
        }
        
        .cta-button {
            padding: 12px 30px;
            background:rgb(102, 21, 252);
            color: white;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            animation: fadeInUp 1s ease-out 0.6s forwards;
            opacity: 0;
        }
        
        .cta-button:hover {
            background:rgb(51, 28, 255);
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        
        .animation-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg,rgba(8, 194, 123, 0.3),rgba(246, 245, 248, 0.3));
            z-index: 1;
            pointer-events: none;
        }
        
        .animation-layer::before, .animation-layer::after {
            content: '';
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.1);
            animation: float 15s infinite linear;
        }
        
        .animation-layer::before {
            width: 300px;
            height: 300px;
            top: -50px;
            left: -50px;
            animation-delay: 0s;
        }
        
        .animation-layer::after {
            width: 200px;
            height: 200px;
            bottom: -30px;
            right: -30px;
            animation-delay: 0.5s;
        }
        
        @keyframes float {
            0% {
                transform: translate(0, 0) rotate(0deg);
            }
            25% {
                transform: translate(50px, 50px) rotate(90deg);
            }
            50% {
                transform: translate(100px, 0) rotate(180deg);
            }
            75% {
                transform: translate(50px, -50px) rotate(270deg);
            }
            100% {
                transform: translate(0, 0) rotate(360deg);
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @media (max-width: 768px) {
            .welcome-section {
                height: 80vh;
            }
            
            .animation-layer::before {
                width: 200px;
                height: 200px;
            }
            
            .animation-layer::after {
                width: 150px;
                height: 150px;
            }
        }
    `;
    document.head.appendChild(style);

    // Add event listener to CTA button
    section.querySelector('.cta-button').addEventListener('click', () => {
        // Redirect to My Trips page
        window.location.hash = '#/trips';
    });

    return section;
}

export default WelcomeSection;