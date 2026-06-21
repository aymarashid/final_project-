// Book data stored in array of objects
const books = [
    {
        id: 1,
        title: "The Silent Library",
        author: "Ayesha Malik",
        category: "Fiction",
        description: "A mystery story set inside an old library full of secrets.",
        price: 950,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
        tag: "featured"
    },
    {
        id: 2,
        title: "Web Design Basics",
        author: "Hamza Ali",
        category: "Technology Books",
        description: "A beginner friendly guide for HTML, CSS and JavaScript.",
        price: 1450,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
        tag: "featured"
    },
    {
        id: 3,
        title: "Learn Smart",
        author: "Bilal Ahmed",
        category: "Educational",
        description: "Study skills and learning methods for students.",
        price: 1100,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        tag: "featured"
    },
    {
        id: 4,
        title: "Stories for Kids",
        author: "Sana Rauf",
        category: "Children's Books",
        description: "Short bedtime stories with simple moral lessons.",
        price: 750,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=80",
        tag: "featured"
    },
    {
        id: 5,
        title: "Road to Success",
        author: "Usman Tariq",
        category: "Non-Fiction",
        description: "Motivational ideas for building better habits.",
        price: 1250,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
        tag: "best"
    },
    {
        id: 6,
        title: "Islamic History Notes",
        author: "Dr. Farhan Qureshi",
        category: "Islamic Books",
        description: "A clear overview of important Islamic history topics.",
        price: 1350,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?auto=format&fit=crop&w=600&q=80",
        tag: "best"
    },
    {
        id: 7,
        title: "Python for Beginners",
        author: "Zain Iqbal",
        category: "Technology Books",
        description: "Learn Python programming with simple examples.",
        price: 1650,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80",
        tag: "best"
    },
    {
        id: 8,
        title: "The Mountain Dream",
        author: "Noor Fatima",
        category: "Fiction",
        description: "An emotional novel about hope, travel and courage.",
        price: 980,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=80",
        tag: "best"
    },
    {
        id: 9,
        title: "Exam Preparation Guide",
        author: "Mariam Shah",
        category: "Educational",
        description: "A helpful guide for planning and preparing for exams.",
        price: 900,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=600&q=80",
        tag: "new"
    },
    {
        id: 10,
        title: "Tiny Tales",
        author: "Nida Khan",
        category: "Children's Books",
        description: "Colorful stories for young readers and children.",
        price: 690,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=600&q=80",
        tag: "new"
    },
    {
        id: 11,
        title: "AI Made Simple",
        author: "Hassan Javed",
        category: "Technology Books",
        description: "Simple explanation of artificial intelligence concepts.",
        price: 1800,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=600&q=80",
        tag: "new"
    },
    {
        id: 12,
        title: "Life Lessons",
        author: "Rabia Noor",
        category: "Non-Fiction",
        description: "Practical life advice written in a simple style.",
        price: 1050,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=600&q=80",
        tag: "new"
    }
];

// Load cart and wishlist from localStorage
let cart = JSON.parse(localStorage.getItem("bookHavenCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("bookHavenWishlist")) || [];

// Helper function for selecting elements
function getElement(selector) {
    return document.querySelector(selector);
}

// Helper function for saving data
function saveData() {
    localStorage.setItem("bookHavenCart", JSON.stringify(cart));
    localStorage.setItem("bookHavenWishlist", JSON.stringify(wishlist));
}

// Create book card HTML
function createBookCard(book) {
    const isWishlisted = wishlist.some(item => item.id === book.id);
    return `
        <article class="book-card">
            <img src="${book.image}" alt="${book.title}">
            <div class="book-content">
                <h3>${book.title}</h3>
                <p class="author">By ${book.author}</p>
                <p class="category">${book.category}</p>
                <p class="desc">${book.description}</p>
                <div class="price-row">
                    <span class="price">Rs ${book.price}</span>
                    <span class="rating"><i class="fa-solid fa-star"></i> ${book.rating}</span>
                </div>
                <div class="card-actions">
                    <button class="add-cart" onclick="addToCart(${book.id})">Add to Cart</button>
                    <button class="add-wishlist ${isWishlisted ? "active" : ""}" onclick="toggleWishlist(${book.id})"><i class="fa-solid fa-heart"></i></button>
                </div>
            </div>
        </article>
    `;
}

// Render books on home and products pages
function renderBooks() {
    const featuredBox = getElement(".featured-books");
    const bestBox = getElement(".best-books");
    const newBox = getElement(".new-books");
    const allBooksBox = getElement("#allBooks");

    if (featuredBox) {
        featuredBox.innerHTML = books.filter(book => book.tag === "featured").map(createBookCard).join("");
    }

    if (bestBox) {
        bestBox.innerHTML = books.filter(book => book.tag === "best").map(createBookCard).join("");
    }

    if (newBox) {
        newBox.innerHTML = books.filter(book => book.tag === "new").map(createBookCard).join("");
    }

    if (allBooksBox) {
        allBooksBox.innerHTML = books.map(createBookCard).join("");
    }
}

// Add item to cart
function addToCart(bookId) {
    try {
        const selectedBook = books.find(book => book.id === bookId);
        const existingItem = cart.find(item => item.id === bookId);

        if (!selectedBook) {
            throw new Error("Book not found");
        }

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...selectedBook, quantity: 1 });
        }

        saveData();
        updateCartUI();
        alert("Book added to cart!");
    } catch (error) {
        alert("Something went wrong while adding to cart.");
        console.log(error.message);
    }
}

// Toggle wishlist item
function toggleWishlist(bookId) {
    const selectedBook = books.find(book => book.id === bookId);
    const exists = wishlist.find(item => item.id === bookId);

    if (exists) {
        wishlist = wishlist.filter(item => item.id !== bookId);
    } else if (selectedBook) {
        wishlist.push(selectedBook);
    }

    saveData();
    renderBooks();
    updateWishlistUI();
}

// Increase cart quantity
function increaseQuantity(bookId) {
    const item = cart.find(book => book.id === bookId);
    if (item) {
        item.quantity += 1;
    }
    saveData();
    updateCartUI();
}

// Decrease cart quantity
function decreaseQuantity(bookId) {
    const item = cart.find(book => book.id === bookId);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart = cart.filter(book => book.id !== bookId);
    }
    saveData();
    updateCartUI();
}

// Remove item from cart
function removeFromCart(bookId) {
    cart = cart.filter(book => book.id !== bookId);
    saveData();
    updateCartUI();
}

// Remove item from wishlist
function removeFromWishlist(bookId) {
    wishlist = wishlist.filter(book => book.id !== bookId);
    saveData();
    renderBooks();
    updateWishlistUI();
}

// Update cart sidebar and count
function updateCartUI() {
    const cartItems = getElement("#cartItems");
    const cartTotal = getElement("#cartTotal");
    const cartCount = getElement("#cartCount");

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartCount) {
        cartCount.textContent = totalItems;
    }

    if (cartTotal) {
        cartTotal.textContent = `Rs ${totalPrice}`;
    }

    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `<p class="empty-text">Your cart is empty.</p>`;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-row">
                    <img src="${item.image}" alt="${item.title}">
                    <div>
                        <h4>${item.title}</h4>
                        <p>Rs ${item.price}</p>
                        <div class="qty-controls">
                            <button onclick="decreaseQuantity(${item.id})">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="increaseQuantity(${item.id})">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `).join("");
        }
    }
}

// Update wishlist sidebar and count
function updateWishlistUI() {
    const wishlistItems = getElement("#wishlistItems");
    const wishlistCount = getElement("#wishlistCount");

    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }

    if (wishlistItems) {
        if (wishlist.length === 0) {
            wishlistItems.innerHTML = `<p class="empty-text">Your wishlist is empty.</p>`;
        } else {
            wishlistItems.innerHTML = wishlist.map(item => `
                <div class="wishlist-row">
                    <img src="${item.image}" alt="${item.title}">
                    <div>
                        <h4>${item.title}</h4>
                        <p>Rs ${item.price}</p>
                        <button class="remove-btn" onclick="removeFromWishlist(${item.id})">Remove</button>
                    </div>
                </div>
            `).join("");
        }
    }
}

// Open and close side panels
function setupPanels() {
    const cartPanel = getElement("#cartPanel");
    const wishlistPanel = getElement("#wishlistPanel");
    const checkoutModal = getElement("#checkoutModal");

    getElement("#cartOpen")?.addEventListener("click", () => cartPanel.classList.add("open"));
    getElement("#cartClose")?.addEventListener("click", () => cartPanel.classList.remove("open"));
    getElement("#wishlistOpen")?.addEventListener("click", () => wishlistPanel.classList.add("open"));
    getElement("#wishlistClose")?.addEventListener("click", () => wishlistPanel.classList.remove("open"));

    getElement("#checkoutOpen")?.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }
        updateCheckoutSummary();
        checkoutModal.classList.add("show");
    });

    getElement("#checkoutClose")?.addEventListener("click", () => checkoutModal.classList.remove("show"));
}

// Update checkout order summary
function updateCheckoutSummary() {
    const checkoutSummary = getElement("#checkoutSummary");
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = subtotal > 0 ? 200 : 0;
    const grandTotal = subtotal + delivery;

    if (checkoutSummary) {
        checkoutSummary.innerHTML = `
            <h3>Order Summary</h3>
            ${cart.map(item => `<p>${item.title} x ${item.quantity} - Rs ${item.price * item.quantity}</p>`).join("")}
            <hr>
            <p>Subtotal: Rs ${subtotal}</p>
            <p>Delivery Charges: Rs ${delivery}</p>
            <h3>Grand Total: Rs ${grandTotal}</h3>
        `;
    }
}

// Validate checkout form
function setupCheckoutForm() {
    const checkoutForm = getElement("#checkoutForm");
    const checkoutMessage = getElement("#checkoutMessage");
    const checkoutModal = getElement("#checkoutModal");

    checkoutForm?.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = getElement("#customerName").value.trim();
        const phone = getElement("#customerPhone").value.trim();
        const email = getElement("#customerEmail").value.trim();
        const address = getElement("#customerAddress").value.trim();
        const city = getElement("#customerCity").value.trim();
        const payment = document.querySelector("input[name='payment']:checked");
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!name || !phone || !email || !address || !city || !payment) {
            checkoutMessage.style.color = "#b3261e";
            checkoutMessage.textContent = "Please fill all fields and select payment method.";
            return;
        }

        if (!emailPattern.test(email)) {
            checkoutMessage.style.color = "#b3261e";
            checkoutMessage.textContent = "Please enter a valid email address.";
            return;
        }

        cart = [];
        saveData();
        updateCartUI();
        updateCheckoutSummary();
        checkoutMessage.style.color = "green";
        checkoutMessage.textContent = "Order confirmed successfully! Thank you for shopping with Book Haven.";
        checkoutForm.reset();

        setTimeout(() => {
            checkoutModal.classList.remove("show");
            checkoutMessage.textContent = "";
        }, 2200);
    });
}

// Search and filter products on products page
function setupProductFilters() {
    const searchInput = getElement("#searchInput");
    const categoryFilter = getElement("#categoryFilter");
    const allBooksBox = getElement("#allBooks");

    function filterBooks() {
        const searchText = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        const filteredBooks = books.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchText) || book.author.toLowerCase().includes(searchText) || book.category.toLowerCase().includes(searchText);
            const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        allBooksBox.innerHTML = filteredBooks.length ? filteredBooks.map(createBookCard).join("") : `<p class="empty-text">No books found.</p>`;
    }

    searchInput?.addEventListener("input", filterBooks);
    categoryFilter?.addEventListener("change", filterBooks);
}

// Validate contact form
function setupContactForm() {
    const contactForm = getElement("#contactForm");
    const contactMessageBox = getElement("#contactFormMessage");

    contactForm?.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = getElement("#contactName").value.trim();
        const email = getElement("#contactEmail").value.trim();
        const subject = getElement("#contactSubject").value.trim();
        const message = getElement("#contactMessage").value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!name || !email || !subject || !message) {
            contactMessageBox.style.color = "#b3261e";
            contactMessageBox.textContent = "Please fill all contact form fields.";
            return;
        }

        if (!emailPattern.test(email)) {
            contactMessageBox.style.color = "#b3261e";
            contactMessageBox.textContent = "Please enter a valid email address.";
            return;
        }

        contactMessageBox.style.color = "green";
        contactMessageBox.textContent = "Your message has been sent successfully.";
        contactForm.reset();
    });
}

// Validate newsletter form
function setupNewsletterForm() {
    const newsletterForm = getElement("#newsletterForm");
    const newsletterMessage = getElement("#newsletterMessage");

    newsletterForm?.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = getElement("#newsletterEmail").value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!emailPattern.test(email)) {
            newsletterMessage.style.color = "#ffb4ab";
            newsletterMessage.textContent = "Please enter a valid email.";
            return;
        }

        newsletterMessage.style.color = "#b6ffb6";
        newsletterMessage.textContent = "Thank you for subscribing!";
        newsletterForm.reset();
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const menuBtn = getElement("#menuBtn");
    const navLinks = getElement("#navLinks");

    menuBtn?.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Run all functions after page loads
window.addEventListener("DOMContentLoaded", function() {
    renderBooks();
    updateCartUI();
    updateWishlistUI();
    setupPanels();
    setupCheckoutForm();
    setupProductFilters();
    setupContactForm();
    setupNewsletterForm();
    setupMobileMenu();
});
