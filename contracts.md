# Portfolio Website - API Contracts & Integration Plan

## Current Mock Data Status
The frontend currently uses mock data from `/app/frontend/src/data/mockData.js` including:
- Personal information and contact details
- About section content and highlights
- Skills data with categories and proficiency levels
- Professional experience with detailed achievements
- Project data with specific impact metrics
- Testimonials (placeholder testimonials currently)
- Contact form submission (mock success responses)

## Backend API Endpoints Required

### 1. Portfolio Content Management
```
GET /api/portfolio/personal-info
- Returns basic personal information (name, title, location, contact details)

GET /api/portfolio/about
- Returns about section content and highlights

GET /api/portfolio/skills
- Returns skills organized by categories with proficiency levels

GET /api/portfolio/experience
- Returns professional experience with companies, roles, and achievements

GET /api/portfolio/projects 
- Returns key projects with descriptions, technologies, and impact metrics
```

### 2. Contact Form Handling
```
POST /api/contact/message
- Accepts: { name, email, subject, message }
- Validates input data
- Stores contact message in database
- Returns success/error response
- Optionally sends email notification
```

### 3. Testimonials Management
```
GET /api/testimonials
- Returns list of testimonials with author details
- Should include real testimonials from LinkedIn profile
```

## Database Models Required

### 1. ContactMessage Model
```javascript
{
  id: ObjectId,
  name: String (required),
  email: String (required, validated),
  subject: String (required),
  message: String (required),
  timestamp: Date (default: now),
  status: String (default: 'unread') // unread, read, responded
}
```

### 2. PortfolioContent Model
```javascript
{
  id: ObjectId,
  section: String (required), // 'personal', 'about', 'skills', 'experience', 'projects'
  content: Object, // Flexible schema for different content types
  lastUpdated: Date (default: now),
  isActive: Boolean (default: true)
}
```

### 3. Testimonial Model
```javascript
{
  id: ObjectId,
  name: String (required),
  position: String (required),
  company: String (required),
  content: String (required),
  avatar: String, // URL to avatar image
  displayOrder: Number (default: 0),
  isActive: Boolean (default: true),
  dateAdded: Date (default: now)
}
```

## Frontend Integration Tasks

### 1. Replace Mock Data with API Calls
- Update `Portfolio.jsx` to fetch data from backend APIs
- Remove dependency on `mockData.js` 
- Add loading states for data fetching
- Add error handling for failed API calls

### 2. Contact Form Integration
- Update `Contact.jsx` to POST form data to `/api/contact/message`
- Replace mock toast success with real API response handling
- Add proper form validation
- Show loading state during submission

### 3. Error Handling & Loading States
- Add consistent error boundary components
- Implement loading skeletons for better UX
- Add retry mechanisms for failed requests

## Environment Variables Needed

### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017/portfolio_db
DB_NAME=portfolio_db
EMAIL_SERVICE_PROVIDER=gmail (optional, for contact form notifications)
EMAIL_USER=your.email@gmail.com (optional)
EMAIL_PASSWORD=your.app.password (optional)
```

### Frontend (.env)
```
REACT_APP_BACKEND_URL=http://localhost:8001 (already configured)
```

## Implementation Priority
1. **High Priority**: Contact form backend (user interaction feature)
2. **Medium Priority**: Portfolio content APIs (dynamic content management)
3. **Low Priority**: Testimonials API (currently has reasonable placeholders)

## Notes
- Real contact information placeholders need to be updated with actual email/phone
- LinkedIn testimonials extraction may require manual input due to LinkedIn's access restrictions
- Consider adding basic admin panel for content management in future iterations
- Contact form should include basic spam protection (rate limiting, field validation)