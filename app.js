// function createAdder(num) {
//     return function (x) {
//       return x + num;
//     };
//   }
//   const add5 = createAdder(5);
//   console.log(add5(10)); // output: 15
//   console.log(add5(20)); // output: 25

// //////////////////////////////////////////////////////////////////////////////////

// function Array(arr, value) {
//     if (arr.length === 0) {
//         return false;
//     }
//     if (arr[0] === value) {
//         return true;
//     }
//     return searchArray(arr.slice(1), value);
// }
// const arr1 = [1, 2, 3, 4, 5];
// console.log(searchArray(arr1, 3)); // output: true
// console.log(searchArray(arr1, 6)); // output: false

// const arr2 = ['apple', 'banana', 'orange'];
// console.log(searchArray(arr2, 'banana')); // output: true
// console.log(searchArray(arr2, 'grape')); // output: false

// //////////////////////////////////////////////////////////////////////////////////////////

// function addNewParagraph(text) {
//     const newPara = document.createElement('p');
//     newPara.textContent = text;
//     document.body.appendChild(newPara);
// }

// addNewParagraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

// /////////////////////////////////////////////////////////////////////////////////////////////

// function addNewListItem(textContent) {
//     // Find the unordered list element in the HTML document
//     const ul = document.querySelector('ul');

//     // Create a new list item element
//     const li = document.createElement('li');

//     // Set the text content of the new list item
//     li.textContent = textContent;

//     // Add the new list item to the unordered list
//     ul.appendChild(li);
// }
// addNewListItem('Item 1');
// addNewListItem('Item 2');
// addNewListItem('Item 3');

// ////////////////////////////////////////////////////////////////////////////////////////////////

// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }

//   const myDiv = document.getElementById("myDiv");
// changeBackgroundColor(myDiv, "red");


// const myButton = document.getElementById("myButton");
// changeBackgroundColor(myButton, "blue");


// ////////////////////////////////////////////////////////////////////////////////////////////////////////

// function saveObjectToLocalStorage(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
//   }

//   const user = { name: "John", age: 30, email: "john@example.com" };
// saveObjectToLocalStorage("user", user);

// const settings = { theme: "light", language: "en" };
// saveObjectToLocalStorage("settings", settings);

// const cart = { items: ["book", "pen", "paper"], total: 15.99 };
// saveObjectToLocalStorage("cart", cart);

// const storedUser = JSON.parse(localStorage.getItem("user"));
// console.log(storedUser); 

// //////////////////////////////////////////////////////////////////////////////////////////

// function getObjectFromLocalStorage(key) {
//     const data = localStorage.getItem(key);
//     if (!data) {
//       return null;
//     }
//     return JSON.parse(data);
//   }
//   const user = getObjectFromLocalStorage('user');
//   console.log(user);

//   const settings = getObjectFromLocalStorage('settings');
//   if (!settings) {
//     console.log('No settings found.');
//   } else {
//     console.log(`Settings: ${JSON.stringify(settings)}`);
//   }

// ////////////////////////////////////////////////////////////////////////////////////////////////

function saveObjectToLocalStorage(obj) {
    // Loop through each property of the object
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        // Save each property to localStorage using the property name as the key and the property value as the value
        localStorage.setItem(key, JSON.stringify(obj[key]));
      }
    }
  
    // Create a new object to return
    const newObj = {};
  
    // Loop through each item in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      // Get the key and value of each item
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
  
      // Add the key-value pair to the new object
      newObj[key] = value;
    }
  
    // Return the new object
    return newObj;
  }

  const myObj = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };
  
  // Save the object to localStorage and retrieve it as a new object
  const newObject = saveObjectToLocalStorage(myObj);
  
  console.log(newObject); // output: {name: "John Doe", age: 30, city: "New York"}

  
  const myObj2 = {
    fruit: 'apple',
    color: 'red',
    price: 1.99
  };
  
  // Save the object to localStorage and retrieve it as a new object
  const newObject2 = saveObjectToLocalStorage(myObj2);
  
  console.log(newObject2); // output: {fruit: "apple", color: "red", price: 1.99}
  
  
      

