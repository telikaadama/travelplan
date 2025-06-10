// Super User Login Page Component with responsive CSS and JS

export default function SuperUserLogin({ onLogin } = {}) {
    const container = document.createElement('div');
    container.className = 'superuser-login-container';
    container.innerHTML = `
        <form class="superuser-login-form" autocomplete="off">
            <h2>Super User Login</h2>
            <input type="text" id="superuser-username" placeholder="Username" required />
            <input type="password" id="superuser-password" placeholder="Password" required />
            <button type="submit">Login</button>
            <div class="superuser-login-error" id="superuser-login-error"></div>
        </form>
    `;

    // Responsive CSS
    if (!document.getElementById('superuser-login-css')) {
        const style = document.createElement('style');
        style.id = 'superuser-login-css';
        style.textContent = `
        .superuser-login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80vh;
            background: #f7f9fa;
        }
        .superuser-login-form {
            background: #fff;
            padding: 2rem 2.5rem;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.08);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            max-width: 350px;
        }
        .superuser-login-form h2 {
            margin-bottom: 0.5rem;
            color: #1a237e;
            text-align: center;
        }
        .superuser-login-form input {
            padding: 0.75rem 1rem;
            border: 1px solid #cfd8dc;
            border-radius: 6px;
            font-size: 1rem;
        }
        .superuser-login-form button {
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 0.75rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
        }
        .superuser-login-form button:hover {
            background: #1565c0;
        }
        .superuser-login-error {
            color: #d32f2f;
            font-size: 0.95rem;
            min-height: 1.2em;
            text-align: center;
        }
        @media (max-width: 500px) {
            .superuser-login-form {
                padding: 1rem;
                max-width: 95vw;
            }
        }
        `;
        document.head.appendChild(style);
    }

    // JS: Handle login
    const form = container.querySelector('.superuser-login-form');
    const errorDiv = container.querySelector('#superuser-login-error');
    form.onsubmit = (e) => {
        e.preventDefault();
        const username = form.querySelector('#superuser-username').value.trim();
        const password = form.querySelector('#superuser-password').value;
        // Simple demo check (replace with real auth in production)
        if (username === 'admin' && password === 'supersecret') {
            errorDiv.textContent = '';
            if (typeof onLogin === 'function') onLogin({ username });
        } else {
            errorDiv.textContent = 'Invalid credentials. Please try again.';
        }
    };

    return container;
}