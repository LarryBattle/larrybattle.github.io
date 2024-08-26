// Function to create day selector
function createDaySelector() {
    const daySelector = document.getElementById('daySelector');
    mealPlanData.weeklyMealPlan.forEach((dayPlan, index) => {
        const button = document.createElement('button');
        button.textContent = dayPlan.day;
        button.addEventListener('click', () => showMealPlan(index));
        daySelector.appendChild(button);
    });
}

// Function to show meal plan for a specific day
function showMealPlan(dayIndex) {
    const mealPlanContainer = document.getElementById('mealPlan');
    mealPlanContainer.innerHTML = '';

    const dayPlan = mealPlanData.weeklyMealPlan[dayIndex];
    
    // Update active button
    const buttons = document.querySelectorAll('.day-selector button');
    buttons.forEach((button, index) => {
        if (index === dayIndex) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    dayPlan.meals.forEach(meal => {
        const mealElement = document.createElement('div');
        mealElement.classList.add('meal');
        mealElement.innerHTML = `
            <h2>${meal.type}</h2>
            ${meal.options.map(option => `
                <div class="meal-option">
                    <h3>${option.name}</h3>
                    <p><strong>Ingredients:</strong> ${option.ingredients.join(', ')}</p>
                    <p><strong>Prep Time:</strong> ${option.prepTime}</p>
                    <p><strong>Difficulty:</strong> ${option.difficulty}</p>
                    <p><strong>Tags:</strong> ${option.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</p>
                </div>
            `).join('')}
        `;
        mealPlanContainer.appendChild(mealElement);
    });
}

// Function to get all unique ingredients
function getAllIngredients() {
    const ingredients = new Set();
    mealPlanData.weeklyMealPlan.forEach(dayPlan => {
        dayPlan.meals.forEach(meal => {
            meal.options.forEach(option => {
                option.ingredients.forEach(ingredient => ingredients.add(ingredient));
            });
        });
    });
    return Array.from(ingredients).sort();
}

// Add this function for fuzzy search
function fuzzySearch(str, pattern) {
    pattern = pattern.split("").reduce((a, b) => `${a}.*${b}`);
    return new RegExp(pattern).test(str);
}

// Update the searchMeals function
function searchMeals() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const selectedIngredients = Array.from(document.querySelectorAll('#ingredientFilters input:checked')).map(checkbox => checkbox.value);
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    let results = [];

    mealPlanData.weeklyMealPlan.forEach(dayPlan => {
        dayPlan.meals.forEach(meal => {
            meal.options.forEach(option => {
                const nameMatch = fuzzySearch(option.name.toLowerCase(), searchInput);
                const ingredientMatch = selectedIngredients.length === 0 || selectedIngredients.every(ingredient => option.ingredients.includes(ingredient));
                const tagMatch = option.tags.some(tag => fuzzySearch(tag.toLowerCase(), searchInput));

                if ((nameMatch || tagMatch) && ingredientMatch) {
                    results.push({
                        day: dayPlan.day,
                        mealType: meal.type,
                        ...option
                    });
                }
            });
        });
    });

    if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found.</p>';
    } else {
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('search-result');
            resultElement.innerHTML = `
                <h3>${result.name}</h3>
                <p><strong>Day:</strong> ${result.day}</p>
                <p><strong>Meal Type:</strong> ${result.mealType}</p>
                <p><strong>Ingredients:</strong> ${result.ingredients.join(', ')}</p>
                <p><strong>Prep Time:</strong> ${result.prepTime}</p>
                <p><strong>Difficulty:</strong> ${result.difficulty}</p>
                <p><strong>Tags:</strong> ${result.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</p>
            `;
            searchResults.appendChild(resultElement);
        });
    }
}

// Update the createIngredientFilters function
function createIngredientFilters() {
    const ingredientFilters = document.getElementById('ingredientFilters');
    const allIngredients = getAllIngredients();
    
    const categories = {
        'Proteins': ['chicken', 'beef', 'fish', 'eggs', 'turkey'],
        'Grains': ['oats', 'bread', 'pasta', 'rice', 'quinoa'],
        'Fruits': ['banana', 'berries', 'apple', 'pineapple'],
        'Vegetables': ['spinach', 'carrot', 'broccoli', 'peas'],
        'Dairy': ['milk', 'cheese', 'yogurt'],
        'Others': []
    };
    
    for (const [category, ingredients] of Object.entries(categories)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'ingredient-category';
        categoryDiv.innerHTML = `<h4>${category}</h4>`;
        
        allIngredients.forEach(ingredient => {
            if (ingredients.some(i => ingredient.includes(i)) || (category === 'Others' && !Object.values(categories).flat().some(i => ingredient.includes(i)))) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `ingredient-${ingredient}`;
                checkbox.value = ingredient;

                const label = document.createElement('label');
                label.htmlFor = `ingredient-${ingredient}`;
                label.textContent = ingredient;

                categoryDiv.appendChild(checkbox);
                categoryDiv.appendChild(label);
            }
        });
        
        ingredientFilters.appendChild(categoryDiv);
    }
}

// Add these functions to handle view switching
function showDayView() {
    document.getElementById('dayView').style.display = 'block';
    document.getElementById('searchView').style.display = 'none';
}

function showSearchView() {
    document.getElementById('dayView').style.display = 'none';
    document.getElementById('searchView').style.display = 'block';
}

// Update the event listeners
document.getElementById('searchButton').addEventListener('click', () => {
    searchMeals();
    showSearchView();
});
document.getElementById('searchInput').addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        searchMeals();
        showSearchView();
    }
});
document.getElementById('dayViewButton').addEventListener('click', showDayView);
document.getElementById('searchViewButton').addEventListener('click', showSearchView);

// Initialize the app
createDaySelector();
createIngredientFilters();
showMealPlan(0);  // Show Monday by default
showDayView();  // Start with the day view