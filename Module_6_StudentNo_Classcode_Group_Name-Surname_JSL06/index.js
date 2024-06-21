// Callback function for adding an item to the order
function addToOrder(itemName, itemPrice) {
    // The order items list and the order total
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const listItem = document.createElement('li');

    // Set the text content of the list item to the item name
    listItem.textContent = itemName + ' - R' + itemPrice.toFixed(2);

    // Append the list item to the order items list
    orderItemsList.appendChild(listItem);

    // Calculate and update the total price
    let currentTotal = Number(orderTotalElement.textContent.replace('R', '')) || 0;
    currentTotal += itemPrice;

    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = currentTotal.toFixed(2);

}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Iterate through each category in the menu
    for (let category in menu) {
        const categoryItems = menu[category];

        // Iterate through each item in the category
        categoryItems.forEach(item => {
            // Append the list item to the list of items for this category
            const menuElement = document.getElementById('menu');

            const listItem = document.createElement('li');
            listItem.textContent = item.name + ' R' + item.price.toFixed(2);
            listItem.addEventListener('click', () => addToOrder(item.name, item.price));

            menuElement.appendChild(listItem);

        });
    }
}

// Example menu object
const menu = {
    'Appetizers': [
        { name: 'Spring Rolls', price: 20 },
        { name: 'Garlic Bread', price: 15 }
    ],
    'Main Course': [
        { name: 'Steak', price: 60 },
        { name: 'Pasta', price: 45 }
    ],
    'Desserts': [
        { name: 'Cheesecake', price: 20 },
        { name: 'Ice Cream', price: 10 }
    ]
};

// Call the init function to start the menu system
initMenuSystem(menu);
