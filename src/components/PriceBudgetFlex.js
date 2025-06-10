import PriceComparison from './priceComparison.js';
import BudgetTracker from './budgetTracker.js';

export default function PriceBudgetFlex() {
    const container = document.createElement('div');
    container.className = 'price-budget-flex';

    const price = PriceComparison();
    const budget = BudgetTracker();

    price.style.flex = '1 1 0';
    budget.style.flex = '1 1 0';

    container.appendChild(price);
    container.appendChild(budget);

    // Inject flex styles (only once)
    if (!document.getElementById('price-budget-flex-css')) {
        const style = document.createElement('style');
        style.id = 'price-budget-flex-css';
        style.textContent = `
        .price-budget-flex {
            display: flex;
            gap: 2rem;
            align-items: flex-start;
            justify-content: center;
            max-width: 1200px;
            margin: 2rem auto;
        }
        @media (max-width: 900px) {
            .price-budget-flex {
                flex-direction: column;
                gap: 1.5rem;
            }
        }
        `;
        document.head.appendChild(style);
    }

    return container;
}