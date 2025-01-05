# Event Sync

## Introduction

Event Sync is a full-stack web app built using the tech stack (MongoDB, Express.js, React, and Node.js). This application allows users to create, manage, and participate in events. Users can add new events, edit existing ones, delete events, and view a list of all events. Additionally, reminders can be toggled for each event, ensuring users never miss an important date.

## Approach to Create Event Sync

1. Define the structure of an event:

- Use Mongoose schemas in a model file (e.g., Event.js).

2. Develop routes for CRUD operations:

- Create a dedicated eventRoutes.js file for handling Create, Read, Update, and Delete operations.

3. Set up MongoDB database:

- Establish a connection in your Express application.

4. Create a server file:

- Configure Express to listen on a specific port in a server.js file.

5. Design and implement a form component:

- Use EventForm.js for adding new events.

6. Develop a component to display events:

- Use EventList.js to fetch and display a list of events from the server.

7. Create a detailed event display component:

- Use EventItem.js with features like editing, toggling reminders, and deleting.

8. Style your components:

- Utilize CSS to create an engaging user interface.

## Technologies Used

- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/bushra-naeem/event-sync.git
   ```

2. Navigate to the project directory:
   ```bash
   cd event-sync
   ```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the backend directory and add your environment variables:

   ```bash
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

- Navigate to http://localhost:3000 to access the frontend.
- Backend runs on http://localhost:5000.
- Create, view, and manage events.

## Deployment

### Frontend

1. Build the frontend for production:

   ```bash
   npm run build
   ```

2. Deploy the build folder to Netlify or any static hosting service.

### Backend

1. Deploy the backend to Heroku or any Node.js hosting service.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## Let's Connect

Have questions or feedback? I'd love to hear from you! Feel free to reach out through the following social accounts:

- **Email:** bushranaeem941@gmail.com
- **LinkedIn:** [Bushra Naeem](https://www.linkedin.com/in/bushra-naeem-5b9329246/)
- **Instagram:** [Bushra Naeem](https://www.instagram.com/_.bushra.00/)

Looking forward to collaborating and building amazing things together!🤍
