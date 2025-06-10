export default function ShareableLink() {
    const section = document.createElement('section');
    section.className = 'shareable-link-section';
    section.innerHTML = `
        <h2>Shareable Link</h2>
        <div class="shareable-link-row">
            <button id="generate-link-btn">Generate Link</button>
            <input type="text" id="share-link" readonly />
            <button id="copy-link-btn" title="Copy to clipboard">📋</button>
            <button id="qr-link-btn" title="Show QR Code">🔗</button>
            <button id="email-link-btn" title="Email Link">✉️</button>
            <button id="reset-link-btn" title="Reset Link">♻️</button>
        </div>
        <div class="shareable-link-info">
            <small>
                Generate a unique link to share your trip plan with friends or collaborators.<br>
                <span id="shareable-link-status"></span>
            </small>
        </div>
        <div id="qr-code-container" style="display:none; margin-top:1rem;"></div>
        <div class="shareable-link-tips">
            <strong>Tips:</strong>
            <ul>
                <li>Share your link via email, chat, or social media.</li>
                <li>Use the QR code for quick mobile access.</li>
                <li>Links expire after 7 days for security.</li>
                <li>You can reset and generate a new link anytime.</li>
            </ul>
        </div>
        <div class="shareable-link-advanced">
            <details>
                <summary>Advanced Options</summary>
                <label>
                    <input type="checkbox" id="set-expiry" />
                    Set custom expiry (24h)
                </label>
            </details>
        </div>
    `;

    // Generate link
    section.querySelector('#generate-link-btn').onclick = () => {
        const expiry = section.querySelector('#set-expiry').checked ? '&exp=24h' : '';
        const link = window.location.href.split('#')[0] + '?share=' + Math.random().toString(36).substr(2, 8) + expiry;
        section.querySelector('#share-link').value = link;
        section.querySelector('#shareable-link-status').textContent = "Link generated!";
        section.querySelector('#qr-code-container').style.display = "none";
    };

    // Copy link to clipboard
    section.querySelector('#copy-link-btn').onclick = () => {
        const input = section.querySelector('#share-link');
        if (input.value) {
            input.select();
            document.execCommand('copy');
            section.querySelector('#shareable-link-status').textContent = "Copied to clipboard!";
        } else {
            section.querySelector('#shareable-link-status').textContent = "Generate a link first.";
        }
    };

    // Show QR code for the link
    section.querySelector('#qr-link-btn').onclick = () => {
        const input = section.querySelector('#share-link');
        const qrContainer = section.querySelector('#qr-code-container');
        if (input.value) {
            qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input.value)}" alt="QR Code" />`;
            qrContainer.style.display = "block";
            section.querySelector('#shareable-link-status').textContent = "QR code generated!";
        } else {
            section.querySelector('#shareable-link-status').textContent = "Generate a link first.";
        }
    };

    // Email link
    section.querySelector('#email-link-btn').onclick = () => {
        const input = section.querySelector('#share-link');
        if (input.value) {
            window.location.href = `mailto:?subject=My Trip Plan&body=Here is my trip plan: ${encodeURIComponent(input.value)}`;
            section.querySelector('#shareable-link-status').textContent = "Email client opened!";
        } else {
            section.querySelector('#shareable-link-status').textContent = "Generate a link first.";
        }
    };

    // Reset link
    section.querySelector('#reset-link-btn').onclick = () => {
        section.querySelector('#share-link').value = '';
        section.querySelector('#shareable-link-status').textContent = "Link reset.";
        section.querySelector('#qr-code-container').style.display = "none";
    };

    // Inject styles only once
    if (!document.getElementById('shareable-link-css')) {
        const style = document.createElement('style');
        style.id = 'shareable-link-css';
        style.textContent = `
        .shareable-link-section {
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.06);
            padding: 1.5rem;
            max-width: 600px;
            margin: 2rem auto;
        }
        .shareable-link-row {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            margin-top: 1rem;
            flex-wrap: wrap;
        }
        .shareable-link-row input[type="text"] {
            flex: 1 1 0;
            padding: 0.5rem;
            border: 1px solid #cfd8dc;
            border-radius: 6px;
            font-size: 1rem;
            background: #f7f9fa;
        }
        .shareable-link-row button {
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 0.6rem 1rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
        }
        .shareable-link-row button[title] {
            padding: 0.6rem 0.8rem;
            font-size: 1.2rem;
        }
        .shareable-link-row button#qr-link-btn {
            background: #ffb300;
            color: #222;
        }
        .shareable-link-row button#qr-link-btn:hover {
            background: #ffa000;
        }
        .shareable-link-row button#email-link-btn {
            background: #43a047;
        }
        .shareable-link-row button#email-link-btn:hover {
            background: #388e3c;
        }
        .shareable-link-row button#reset-link-btn {
            background: #e53935;
        }
        .shareable-link-row button#reset-link-btn:hover {
            background: #b71c1c;
        }
        .shareable-link-row button:hover {
            background: #1565c0;
        }
        .shareable-link-info {
            margin-top: 0.7rem;
            color: #607d8b;
        }
        .shareable-link-info small {
            font-size: 0.95rem;
        }
        #shareable-link-status {
            color: #388e3c;
            font-weight: bold;
            margin-left: 0.5rem;
        }
        #qr-code-container img {
            border-radius: 8px;
            border: 1px solid #eee;
        }
        .shareable-link-tips {
            margin-top: 1.2rem;
            background: #f7f9fa;
            border-radius: 8px;
            padding: 0.7rem 1rem;
            color: #333;
            font-size: 0.98rem;
        }
        .shareable-link-tips ul {
            margin: 0.5rem 0 0 1.2rem;
            padding: 0;
        }
        .shareable-link-tips li {
            margin-bottom: 0.2rem;
        }
        .shareable-link-advanced {
            margin-top: 1rem;
            font-size: 0.97rem;
        }
        .shareable-link-advanced details {
            background: #f1f8e9;
            border-radius: 6px;
            padding: 0.5rem 1rem;
        }
        @media (max-width: 600px) {
            .shareable-link-section {
                padding: 1rem;
            }
            .shareable-link-row {
                flex-direction: column;
                gap: 0.7rem;
                align-items: stretch;
            }
        }
        `;
        document.head.appendChild(style);
    }

    return section;
}