Kenya Hospital Management System
A comprehensive healthcare management solution built for Kenyan healthcare facilities, featuring patient management, appointments, inventory tracking, and NHIF billing integration.
Features
🏥 Dashboard
•	Real-time statistics overview
•	Recent patients and upcoming appointments
•	Low stock alerts
•	Pending bills summary
👥 Patient Management
•	Complete patient registration with Kenyan-specific fields (ID Number, NHIF Number, County)
•	Medical history tracking
•	Next of kin information
•	Advanced search functionality
📅 Appointment Scheduling
•	Doctor and department assignment
•	Multiple appointment statuses (Scheduled, Confirmed, Completed, Cancelled)
•	Date and time management
•	Reason for visit tracking
📦 Inventory Management
•	Medical supplies and equipment tracking
•	Low stock alerts
•	Supplier management
•	Expiry date monitoring
•	Price tracking in KES
💰 Billing & NHIF Integration
•	NHIF coverage calculation
•	Patient payment tracking
•	Service billing
•	Payment status management
💾 Data Management
•	Local storage persistence
•	Data export functionality
•	Bulk data operations
•	Automatic backup suggestions
Technology Stack
•	Frontend: React 18
•	Styling: Tailwind CSS
•	Icons: Lucide React
•	Build Tool: Vite
•	State Management: React Hooks + Local Storage
Getting Started
Prerequisites
•	Node.js (version 16 or higher)
•	npm or yarn
Installation
1.	Clone the repository:
bash
git clone [your-repository-url]
cd kenya-hospital-management
2.	Install dependencies:
bash
npm install
3.	Start the development server:
bash
npm run dev
4.	Open your browser and navigate to https://github.com/Paul-Karonji/kenya_Hospital_Management
Build for Production
bash
npm run build
The built files will be in the dist directory.
Project Structure
kenya-hospital-management/
├── public/
├── src/
│   ├── components/
│   │   ├── common/           # Reusable UI components
│   │   │   ├── DataManagement.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── SearchInput.jsx
│   │   │   ├── StatCard.jsx
│   │   │   └── StatusBadge.jsx
│   │   ├── forms/            # Form components
│   │   │   ├── AppointmentForm.jsx
│   │   │   ├── InventoryForm.jsx
│   │   │   └── PatientForm.jsx
│   │   ├── layout/           # Layout components
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Navigation.jsx
│   │   ├── views/            # Main view components
│   │   │   ├── AppointmentView.jsx
│   │   │   ├── BillingView.jsx
│   │   │   ├── DashboardView.jsx
│   │   │   ├── InventoryView.jsx
│   │   │   └── PatientView.jsx
│   │   └── HospitalManagement.jsx
│   ├── hooks/                # Custom React hooks
│   │   └── useLocalStorage.js
│   ├── utils/                # Utility functions
│   │   └── sampleData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
Key Features for Kenyan Healthcare
Localized Data Fields
•	Kenyan counties dropdown
•	NHIF number integration
•	Kenyan phone number format (07xxxxxxxx)
•	Kenya Shilling (KES) currency formatting
Healthcare-Specific Features
•	Medical department management
•	Comprehensive patient medical history
•	Next of kin tracking (important in Kenyan culture)
•	Emergency contact information
Data Persistence
•	All data is automatically saved to browser's local storage
•	Export functionality for data backup
•	Persistent data across browser sessions
Contributing
1.	Fork the repository
2.	Create a feature branch (git checkout -b feature/amazing-feature)
3.	Commit your changes (git commit -m 'Add amazing feature')
4.	Push to the branch (git push origin feature/amazing-feature)
5.	Open a Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details.
Support
For support, email karonjipaul.w@gmail.com or create an issue in the repository.
Roadmap
•	 Multi-user authentication
•	 Role-based access control
•	 Advanced reporting and analytics
•	 SMS appointment reminders
•	 Integration with Kenya's health systems
•	 Mobile responsive improvements
•	 Offline mode capabilities
Author
Paul Karonji
Email: karonjipaul.w@gmail.com

Built with ❤️ for Kenyan healthcare facilities

