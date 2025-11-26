# The Wild Oasis 🏨

![The Wild Oasis](https://img.shields.io/badge/The%20Wild-Oasis-118122?style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)

**The Wild Oasis** is a modern, full-featured hotel management application designed to streamline internal hotel operations. Built with the latest web technologies, it offers a seamless experience for managing bookings, cabins, and guests.

---

## 🚀 Features

The application is packed with features to help hotel staff manage the property efficiently:

-   **📊 Dashboard**: Get a quick overview of hotel statistics, including recent bookings, sales, and occupancy rates.
-   **🏡 Cabin Management**: Create, update, and delete cabin details, including images and descriptions.
-   **📅 Booking Management**: View and manage all bookings, filter by status, and sort by date or amount.
-   **🔑 Check-in & Check-out**: Streamlined process for checking guests in and out, including payment confirmation.
-   **⚙️ Application Settings**: Configure hotel settings such as breakfast price, min/max booking length, and max guests per booking.
-   **🔐 Authentication**: Secure user authentication for hotel staff using Supabase.
-   **🌗 Dark Mode**: Toggle between light and dark themes for a comfortable viewing experience.

## 🛠️ Tech Stack

This project utilizes a robust stack of modern technologies:

| Category             | Technology                                                | Description                                      |
| :------------------- | :-------------------------------------------------------- | :----------------------------------------------- |
| **Frontend**         | [React](https://react.dev/)                               | The library for web and native user interfaces.  |
| **Build Tool**       | [Vite](https://vitejs.dev/)                               | Next Generation Frontend Tooling.                |
| **Backend / DB**     | [Supabase](https://supabase.com/)                         | The Open Source Firebase Alternative.            |
| **State Management** | [React Query](https://tanstack.com/query/latest)          | Powerful asynchronous state management.          |
| **Styling**          | [Styled Components](https://styled-components.com/)       | Visual primitives for the component age.         |
| **Forms**            | [React Hook Form](https://react-hook-form.com/)           | Performant, flexible and extensible forms.       |
| **Icons**            | [React Icons](https://react-icons.github.io/react-icons/) | Include popular icons in your React projects.    |
| **Charts**           | [Recharts](https://recharts.org/)                         | Redefined chart library built with React and D3. |
| **Dates**            | [date-fns](https://date-fns.org/)                         | Modern JavaScript date utility library.          |

## 🏃‍♂️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/the-wild-oasis.git
    cd the-wild-oasis
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env` file in the root directory and add your Supabase credentials:

    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_KEY=your_supabase_anon_key
    ```

4.  **Run the development server**

    ```bash
    npm run dev
    ```

5.  **Open the app**
    Visit `http://localhost:5173` (or the port shown in your terminal) to view the application.

## 📜 Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the app for production.
-   `npm run lint`: Runs ESLint to check for code quality issues.
-   `npm run preview`: Previews the production build locally.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
