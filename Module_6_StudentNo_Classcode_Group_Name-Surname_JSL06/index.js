// // Sample menu data (Consider fetching this data from a server in a real-world scenario)
// const menu = {
//     Starters: ["Garlic Bread", "Bruschetta"],
//     MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
//     Desserts: ["Tiramisu", "Cheesecake"]
// };

// // Function to display menu items by category
// function displayMenuItems(menu) {
//     // Get the menu container element from the HTML

//     // Loop through each category and its items in the menu object

//         // Create an element to represent the category

//         // Set the text content of the category element to the category name

//         // Append the category element to the menu container

//         // Create an element to represent a list of items

//         // Append a list of items element to the menu container

//         // Loop through the items in the category and create list items

//             // Create a list item element

//             // Set the text content of the list item element to the item name

//             // Attach a click event listener to the list item to add it to the order

//             // Append the list item to the list of items


// }

// // Callback function for adding an item to the order
// function addToOrder(itemName) {
//     // Get the order items list and the order total element from the HTML

//     // Create a list item for the order

//     // Set the text content of the list item to the item name

//     // Append the list item to the order items list

//     // Calculate and update the total price

//     // Update the text content of the order total element with the new total
// }

// // Function to initialize the menu system
// function initMenuSystem(menu) {
//     // Call the function to display menu items
// }

// // Start the menu system by calling the init function
// initMenuSystem(menu);

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
