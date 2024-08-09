// Example data for events (replace with actual data or fetch from backend)
const eventsData = [
    { 
        id: 1, 
        name: 'Brushstroke Brilliance', 
        date: '2024-08-15', 
        venue: 'Central Park', 
        price: 50 ,
        image: 'https://picsum.photos/500/200?random=1' ,
    },
    { 
        id: 2, 
        name: 'Tech Conference', 
        date: '2024-09-20', 
        venue: 'Convention Center', 
        price: 100,
        image: 'https://picsum.photos/500/200?random=2' ,
    },
    { 
        id: 3, 
        name: 'Art Exhibition', 
        date: '2024-10-10', 
        venue: 'Art Gallery', 
        price: 0 ,
        image: 'https://picsum.photos/500/200?random=3' ,
    },
    { 
        id: 4, 
        name: 'Palette Parade', 
        date: '2024-08-15', 
        venue: 'Central Park', 
        price: 50 ,
        image: 'https://picsum.photos/500/200?random=4' ,
    },
    { 
        id: 5, 
        name: 'Canvas & Creativity', 
        date: '2024-09-20', 
        venue: 'Convention Center', 
        price: 100,
        image: 'https://picsum.photos/500/200?random=5' ,
    },
    { 
        id: 6, 
        name: 'Visual Vibes', 
        date: '2024-10-10', 
        venue: 'Art Gallery', 
        price: 70,
        image: 'https://picsum.photos/2500/200?random=6' ,
    },
    { 
        id: 7, 
        name: 'Music Festival', 
        date: '2024-08-15', 
        venue: 'Central Park', 
        price: 50,
        image: 'https://picsum.photos/500/200?random=7' , 
    },
    { 
        id: 8, 
        name: 'Spectrum Showcase', 
        date: '2024-09-20', 
        venue: 'Convention Center', 
        price: 120,
        image: 'https://picsum.photos/500/200?random=1' , 
    }
];

// Function to populate events
function populateEvents() {
    const eventList = document.querySelector('.event-list');
    eventList.innerHTML = '';

    eventsData.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event');
        eventCard.innerHTML = `
          <img src="${event.image}" alt="${event.name} image" class="event-image">  <!-- Image added -->
            <h3>${event.name}</h3>
            <h5><i class="fa-solid fa-calendar-days"></i> Date: ${event.date}</h5>
           <p><i class="fa-solid fa-location-dot"></i> Venue: ${event.venue}</p>
            <p><i class="fa-solid fa-ticket"></i> Price: ${event.price === 0 ? 'Free' : '₹ ' + event.price.toFixed(2)}</p>
            <button class="book-event-btn" data-id="${event.id}">Book Event</button>
        `;
        eventList.appendChild(eventCard);
    });

    // Add event listeners for book event buttons
    const bookEventBtns = document.querySelectorAll('.book-event-btn');
    bookEventBtns.forEach(btn => {
        btn.addEventListener('click', bookEvent);
    });
}

// Function to handle booking event
function bookEvent(event) {
    const eventId = parseInt(event.target.getAttribute('data-id'));
    const selectedEvent = eventsData.find(event => event.id === eventId);

    // Show booking form
    document.getElementById('events').classList.add('hidden');
    document.getElementById('booking-form').classList.remove('hidden');

    // Populate selected event in booking form
    document.getElementById('selected-event-id').value = eventId;

    // Add event listener for booking form submission
    document.getElementById('event-booking-form').addEventListener('submit', handleEventBooking);
}

// Function to handle event booking form submission
function handleEventBooking(event) {
    event.preventDefault();

    // Retrieve form data
    const eventId = parseInt(document.getElementById('selected-event-id').value);
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tickets = parseInt(document.getElementById('tickets').value);

    // Simulate booking confirmation (replace with actual backend integration)
    const bookingDetails = {
        eventId: eventId,
        eventName: eventsData.find(event => event.id === eventId).name,
        date: new Date().toLocaleDateString(),
        venue: eventsData.find(event => event.id === eventId).venue,
        tickets: tickets,
        totalAmount: tickets * eventsData.find(event => event.id === eventId).price,
        bookedBy: name,
        email: email
    };

    // Display booking summary
    displayBookingSummary(bookingDetails);

    // Show booking summary section
    document.getElementById('booking-summary').classList.remove('hidden');

    // Hide booking form section
    document.getElementById('booking-form').classList.add('hidden');

    // Add event listener for booking another event button
    document.getElementById('new-booking-btn').addEventListener('click', bookAnotherEvent);
}

// Function to display booking summary
function displayBookingSummary(bookingDetails) {
    const bookingDetailsContainer = document.getElementById('booking-details');
    bookingDetailsContainer.innerHTML = `
        <p><strong>Event:</strong> ${bookingDetails.eventName}</p>
        <p><strong>Date:</strong> ${bookingDetails.date}</p>
        <p><strong>Venue:</strong> ${bookingDetails.venue}</p>
        <p><strong>Number of Tickets:</strong> ${bookingDetails.tickets}</p>
        <p><strong>Total Amount:</strong> ${bookingDetails.totalAmount === 0 ? 'Free' : '₹ ' + bookingDetails.totalAmount.toFixed(2)}</p>
        <p><strong>Booked by:</strong> ${bookingDetails.bookedBy}</p>
        <p><strong>Email:</strong> ${bookingDetails.email}</p>
    `;
}

// Function to handle booking another event
function bookAnotherEvent() {
    // Show events section
    document.getElementById('events').classList.remove('hidden');

    // Hide booking summary section
    document.getElementById('booking-summary').classList.add('hidden');

    // Clear booking form fields
    document.getElementById('event-booking-form').reset();
}

// Populate events on page load
document.addEventListener('DOMContentLoaded', populateEvents);
