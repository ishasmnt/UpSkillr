// Course data for the application

export const allCourses = [
  {
    id: 1,
    title: 'React Fundamentals',
    description: 'Learn the basics of React including components, props, and state management',
    category: 'Development',
    rating: 4.8,
    duration: '8h',
    students: 1234,
    instructor: 'Sarah Johnson',
    price: 49,
    lessons: [
      { title: 'Introduction to React', description: 'What is React and why use it?', resources: ['React Overview.pdf', 'Setup Guide.pdf'] },
      { title: 'Components and JSX', description: 'Building your first components', resources: ['JSX Cheat Sheet.pdf'] },
      { title: 'Props and State', description: 'Managing data in React', resources: ['State Management Guide.pdf'] },
      { title: 'Event Handling', description: 'Making components interactive', resources: ['Event Handling Examples.pdf'] }
    ]
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Master advanced JavaScript concepts including closures, prototypes, and async programming',
    category: 'Development',
    rating: 4.7,
    duration: '12h',
    students: 987,
    instructor: 'Mike Chen',
    price: 69,
    lessons: [
      { title: 'Closures and Scope', description: 'Understanding JavaScript scope', resources: ['Scope Diagram.pdf'] },
      { title: 'Prototypes and Inheritance', description: 'Object-oriented JavaScript', resources: ['Prototype Chain.pdf'] },
      { title: 'Async Programming', description: 'Promises and async/await', resources: ['Async Patterns.pdf'] },
      { title: 'ES6+ Features', description: 'Modern JavaScript features', resources: ['ES6 Cheat Sheet.pdf'] }
    ]
  },
  {
    id: 3,
    title: 'UI/UX Design Principles',
    description: 'Learn essential design principles and create beautiful user interfaces',
    category: 'Design',
    rating: 4.6,
    duration: '6h',
    students: 756,
    instructor: 'Emma Davis',
    price: 39,
    lessons: [
      { title: 'Design Fundamentals', description: 'Color, typography, and layout', resources: ['Design Basics.pdf'] },
      { title: 'User Research', description: 'Understanding your users', resources: ['Research Methods.pdf'] },
      { title: 'Wireframing', description: 'Creating user flows', resources: ['Wireframe Templates.pdf'] },
      { title: 'Prototyping', description: 'Bringing designs to life', resources: ['Prototype Tools.pdf'] }
    ]
  },
  {
    id: 4,
    title: 'Digital Marketing Strategy',
    description: 'Build comprehensive marketing campaigns that drive real business results',
    category: 'Marketing',
    rating: 4.6,
    duration: '10h',
    students: 1543,
    instructor: 'Lisa Anderson',
    price: 44,
    lessons: [
      { title: 'Marketing Fundamentals', description: 'Understanding digital marketing', resources: ['Marketing Basics.pdf'] },
      { title: 'SEO and SEM', description: 'Search engine optimization', resources: ['SEO Guide.pdf'] },
      { title: 'Social Media Marketing', description: 'Building presence online', resources: ['Social Strategy.pdf'] },
      { title: 'Analytics and ROI', description: 'Measuring campaign success', resources: ['Analytics Dashboard.pdf'] }
    ]
  },
  {
    id: 5,
    title: 'Full-Stack Web Development',
    description: 'Build complete web applications from frontend to backend and deployment',
    category: 'Development',
    rating: 4.9,
    duration: '20h',
    students: 4231,
    instructor: 'Michael Torres',
    price: 79,
    lessons: [
      { title: 'Frontend Development', description: 'HTML, CSS, JavaScript basics', resources: ['Frontend Guide.pdf'] },
      { title: 'Backend with Node.js', description: 'Server-side programming', resources: ['Node.js Setup.pdf'] },
      { title: 'Database Design', description: 'Working with databases', resources: ['Database Schema.pdf'] },
      { title: 'Deployment', description: 'Getting your app online', resources: ['Deployment Guide.pdf'] }
    ]
  },
  {
    id: 6,
    title: 'Business Strategy & Leadership',
    description: 'Develop strategic thinking and leadership skills for modern business',
    category: 'Business',
    rating: 4.5,
    duration: '6h',
    students: 987,
    instructor: 'Robert Chen',
    price: 34,
    lessons: [
      { title: 'Strategic Planning', description: 'Creating business strategies', resources: ['Strategy Framework.pdf'] },
      { title: 'Leadership Skills', description: 'Leading teams effectively', resources: ['Leadership Guide.pdf'] },
      { title: 'Change Management', description: 'Managing organizational change', resources: ['Change Models.pdf'] },
      { title: 'Decision Making', description: 'Making better business decisions', resources: ['Decision Tools.pdf'] }
    ]
  },
];

export const getInitialEnrolledCourses = (courses) => [
  {
    ...courses[0],
    progress: 68,
    currentLesson: 2,
    totalLessons: 4,
    nextLesson: 'Context API Mastery'
  },
  {
    ...courses[1],
    progress: 45,
    currentLesson: 2,
    totalLessons: 3,
    nextLesson: 'User Research Methods'
  }
];

export const getInitialInstructorCourses = (courses) => [
  {
    ...courses[0],
    status: 'Published'
  },
  {
    ...courses[4],
    status: 'Published'
  },
  {
    id: 7, // Next available ID
    title: 'Web Performance Optimization',
    description: 'Make your websites blazing fast',
    category: 'Development',
    duration: '8h',
    price: 44,
    students: 0,
    rating: 0,
    instructor: 'You',
    status: 'Draft',
    lessons: []
  }
];