export default function BudgetTracker() {
    const section = document.createElement('section');
    section.innerHTML = `
        <h2>
            <img src="https://img.icons8.com/color/48/000000/budget.png" alt="Budget Icon" style="vertical-align:middle;width:32px;height:32px;margin-right:0.5rem;">
            Budget Tracker
        </h2>
        <form id="budget-form" style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <input type="number" placeholder="Amount" id="budget-input" required min="0" step="0.01" />
            <input type="text" placeholder="Description" id="budget-desc" maxlength="40" />
            <select id="budget-category">
                <option value="General">General</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Lodging">Lodging</option>
                <option value="Activity">Activity</option>
                <option value="Other">Other</option>
            </select>
            <button id="budget-add-btn" type="submit">
                <img src="https://img.icons8.com/fluency/24/plus-math.png" alt="Add" style="vertical-align:middle;width:20px;height:20px;">
                Add
            </button>
        </form>
        <ul id="budget-list"></ul>
        <div id="budget-total">
            <img src="https://img.icons8.com/fluency/24/money-bag.png" alt="Total" style="vertical-align:middle;width:20px;height:20px;margin-right:0.3rem;">
            Total: $0
        </div>
        <button id="budget-clear-btn" style="margin-top:1rem;">
            <img src="https://img.icons8.com/color/24/000000/delete-forever.png" alt="Clear" style="vertical-align:middle;width:20px;height:20px;margin-right:0.3rem;">
            Clear All
        </button>
    `;

    // Load from localStorage if available
    let items = JSON.parse(localStorage.getItem('budgetItems') || '[]');
    let total = 0;

    function renderList() {
        const ul = section.querySelector('#budget-list');
        ul.innerHTML = '';
        total = 0;
        items.forEach((item, idx) => {
            const li = document.createElement('li');
            li.className = 'budget-item';
            li.innerHTML = `
                <span class="budget-amount">
                    <img src="https://img.icons8.com/fluency/20/money.png" alt="Amount" style="vertical-align:middle;width:16px;height:16px;margin-right:0.2rem;">
                    $${item.amount.toFixed(2)}
                </span>
                <span class="budget-desc">${item.desc ? item.desc : ''}</span>
                <span class="budget-category">
                    <img src="https://img.icons8.com/ios-filled/16/tags.png" alt="Category" style="vertical-align:middle;width:14px;height:14px;margin-right:0.1rem;">
                    ${item.category}
                </span>
                <button class="budget-delete" title="Delete" style="margin-left:0.5rem;">
                    <img src="https://img.icons8.com/color/20/000000/delete-sign.png" alt="Delete" style="vertical-align:middle;width:16px;height:16px;">
                </button>
            `;
            li.querySelector('.budget-delete').onclick = () => {
                items.splice(idx, 1);
                saveAndRender();
            };
            ul.appendChild(li);
            total += item.amount;
        });
        section.querySelector('#budget-total').innerHTML = `
            <img src="https://img.icons8.com/fluency/24/money-bag.png" alt="Total" style="vertical-align:middle;width:20px;height:20px;margin-right:0.3rem;">
            Total: $${total.toFixed(2)}
        `;
    }

    function saveAndRender() {
        localStorage.setItem('budgetItems', JSON.stringify(items));
        renderList();
    }

    // Add item
    section.querySelector('#budget-form').onsubmit = e => {
        e.preventDefault();
        const input = section.querySelector('#budget-input');
        const desc = section.querySelector('#budget-desc');
        const category = section.querySelector('#budget-category');
        const value = parseFloat(input.value);
        if (!isNaN(value) && value > 0) {
            items.push({
                amount: value,
                desc: desc.value.trim(),
                category: category.value
            });
            input.value = '';
            desc.value = '';
            category.value = 'General';
            saveAndRender();
        }
    };

    // Clear all
    section.querySelector('#budget-clear-btn').onclick = () => {
        if (confirm('Clear all budget items?')) {
            items = [];
            saveAndRender();
        }
    };

    // Initial render
    renderList();

    return section;
}