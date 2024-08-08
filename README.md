## Community-Metrics-Dashboard

**Community-Metrics-Dashboard** is an interactive web application designed to visualize and analyze key metrics for community management. The project integrates a React frontend with a Node.js/Express backend and MongoDB database, providing a comprehensive dashboard to monitor community engagement and growth.

### Features

- **Real-Time Data Fetching:** Retrieves and displays community metrics from a backend API.
- **Dynamic Charts:** Visualizes growth rates and other metrics using interactive charts with Chart.js.
- **Metrics Display:** Shows important statistics including total members, engagement rates, active/inactive members, and top contributors.
- **Data Generation:** Generates realistic test data for users and messages using Faker.js.
- **Backend API:** Provides a RESTful API to fetch community metrics and manage data.

### Project Structure

- **Frontend:**
  - **React Components:** Main dashboard and chart components.
  - **Chart.js Integration:** For rendering dynamic line charts.
  - **CSS Styling:** Custom styles for the dashboard.

- **Backend:**
  - **Express Server:** Handles API requests and serves data.
  - **MongoDB Database:** Stores user and message data.
  - **Data Generation Scripts:** Uses Faker.js to create sample data for testing.

### Installation and Setup

**Frontend:**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/community-metrics-dashboard.git
   cd community-metrics-dashboard
   ```

2. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

**Backend:**

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   Ensure MongoDB is running on your local machine with:
   ```bash
   mongod
   ```

### Usage

Open your browser and go to `http://localhost:3000` to view the Community Metrics Dashboard. The frontend will fetch data from the backend API running at `http://localhost:3001`.

### Credits

- **React:** [React Documentation](https://reactjs.org/docs/getting-started.html)
- **Chart.js:** [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- **Express:** [Express Documentation](https://expressjs.com/)
- **Mongoose:** [Mongoose Documentation](https://mongoosejs.com/docs/)
- **Faker.js:** [Faker.js Documentation](https://fakerjs.dev/)
- **MongoDB:** [MongoDB Documentation](https://www.mongodb.com/docs/)

---
