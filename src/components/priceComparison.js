// This file exports a component that compares prices for various travel services.

export default function PriceComparison() {
    const section = document.createElement('section');
    section.className = 'price-comparison-section';
    section.innerHTML = `
        <h2>Price Comparison</h2>
        <form class="compare-form">
            <input type="text" name="from" placeholder="From (City or Airport)" required />
            <input type="text" name="to" placeholder="To (City or Airport)" required />
            <input type="date" name="depart" required />
            <input type="date" name="return" />
            <select name="service">
                <option value="flight">Flight</option>
                <option value="hotel">Hotel</option>
                <option value="car">Car Rental</option>
            </select>
            <button type="submit" id="compare-prices-btn">Compare Prices</button>
        </form>
        <div id="price-results"></div>
    `;

    // Responsive styles (inject only once)
    if (!document.getElementById('price-comparison-css')) {
        const style = document.createElement('style');
        style.id = 'price-comparison-css';
        style.textContent = `
        .price-comparison-section {
            max-width: 600px;
            margin: 2rem auto;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.07);
            padding: 1.5rem;
        }
        .compare-form {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        .compare-form input,
        .compare-form select {
            flex: 1 1 140px;
            min-width: 120px;
            padding: 0.5rem;
            border: 1px solid #cfd8dc;
            border-radius: 6px;
            font-size: 1rem;
        }
        .compare-form button {
            flex: 1 1 120px;
            min-width: 100px;
            background: #1976d2;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 0.75rem;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.2s;
        }
        .compare-form button:hover {
            background: #1565c0;
        }
        #price-results {
            background: #f7f9fa;
            border-radius: 8px;
            padding: 1rem;
            min-height: 40px;
            font-size: 1.05rem;
        }
        @media (max-width: 700px) {
            .price-comparison-section {
                padding: 1rem;
            }
            .compare-form {
                flex-direction: column;
                gap: 0.7rem;
            }
        }
        `;
        document.head.appendChild(style);
    }

    // Dynamic mock price fetching
    section.querySelector('.compare-form').onsubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const from = form.from.value.trim();
        const to = form.to.value.trim();
        const depart = form.depart.value;
        const ret = form.return.value;
        const service = form.service.value;
        const results = section.querySelector('#price-results');
        results.textContent = 'Searching...';

        setTimeout(() => {
            // Mocked dynamic results
            let price;
            if (service === 'flight') {
                price = `$${(150 + Math.random() * 300).toFixed(0)}`;
                results.innerHTML = `<b>Flight</b> from <b>${from}</b> to <b>${to}</b> on <b>${depart}</b>: <span style="color:#1976d2">${price}</span>`;
            } else if (service === 'hotel') {
                price = `$${(70 + Math.random() * 120).toFixed(0)}/night`;
                results.innerHTML = `<b>Hotel</b> in <b>${to}</b> from <b>${depart}</b>${ret ? ` to <b>${ret}</b>` : ''}: <span style="color:#1976d2">${price}</span>`;
            } else if (service === 'car') {
                price = `$${(30 + Math.random() * 50).toFixed(0)}/day`;
                results.innerHTML = `<b>Car Rental</b> in <b>${to}</b> from <b>${depart}</b>${ret ? ` to <b>${ret}</b>` : ''}: <span style="color:#1976d2">${price}</span>`;
            }
        }, 900);
    };

    return section;
}