import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/pages/Home';
import Todo from './components/pages/Todo';
import Courses from './components/pages/Courses';
import Contacts from './components/pages/Contacts';
import Course from './components/pages/Course';
import NotFound from './components/pages/NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="todo" element={<Todo />} />
            <Route path="courses" element={<Courses />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="courses/:courseName" element={<Course />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
