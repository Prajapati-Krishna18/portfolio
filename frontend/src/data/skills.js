import {
  FiCode,
  FiDatabase,
  FiTool,
  FiCpu,
  FiLayout,
  FiServer,
  FiGitBranch,
  FiBox,
  FiGlobe,
  FiTerminal,
  FiCloud,
  FiPackage,
} from 'react-icons/fi';

// Categories for filter tabs
export const skillCategories = ['All', 'Frontend', 'Backend', 'Tools', 'Languages'];

// Color accents per category
export const categoryColors = {
  Frontend: { from: '#818cf8', to: '#6366f1' },
  Backend: { from: '#f472b6', to: '#ec4899' },
  Tools: { from: '#34d399', to: '#10b981' },
  Languages: { from: '#fbbf24', to: '#f59e0b' },
};

// Skills data — proficiency: 1 (learning) to 5 (expert)
export const skills = [
  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 5, icon: FiCode },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 5, icon: FiLayout },
  { name: 'HTML5', category: 'Frontend', proficiency: 5, icon: FiGlobe },
  { name: 'CSS3', category: 'Frontend', proficiency: 4, icon: FiLayout },
  { name: 'Framer Motion', category: 'Frontend', proficiency: 4, icon: FiBox },
  // { name: 'JavaScript', category: 'Frontend', proficiency: 4, icon: FiCode },

  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 4, icon: FiServer },
  { name: 'Express.js', category: 'Backend', proficiency: 4, icon: FiServer },
  { name: 'MongoDB', category: 'Backend', proficiency: 4, icon: FiDatabase },
  { name: 'REST APIs', category: 'Backend', proficiency: 4, icon: FiCloud },

  // Tools
  { name: 'Git', category: 'Tools', proficiency: 4, icon: FiGitBranch },
  { name: 'Vite', category: 'Tools', proficiency: 4, icon: FiPackage },
  { name: 'Postman', category: 'Tools', proficiency: 4, icon: FiTool },
  { name: 'Vercel', category: 'Tools', proficiency: 4, icon: FiCloud },
  { name: 'Netlify', category: 'Tools', proficiency: 3, icon: FiCloud },
  { name: 'Render', category: 'Tools', proficiency: 3, icon: FiCloud },

  // Languages
  { name: 'JavaScript', category: 'Languages', proficiency: 5, icon: FiTerminal },
  { name: 'C++', category: 'Languages', proficiency: 4, icon: FiCpu },
  { name: 'C', category: 'Languages', proficiency: 4, icon: FiCpu },
  // { name: 'Python', category: 'Languages', proficiency: 3, icon: FiTerminal },
];
