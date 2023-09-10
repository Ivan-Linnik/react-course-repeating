import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import styles from './Courses.module.css';
import courses from '../../data/courses';

const SORT_KEYS = ['name', 'duration', 'price'];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];

  if (!key || !SORT_KEYS.includes(key)) return sortedCourses;

  return sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
}

function Courses() {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigation = useNavigate();

  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigation('.', { relative: 'path' });
      setSortKey();
      setSortedCourses([...courses]);
    }
  }, [navigation, sortKey]);

  const [select, setSelect] = useState('default');

  function selectHandler(event) {
    event.preventDefault();
    setSelect(event.target.value);

    setSortedCourses(sortCourses(courses, event.target.value));
    setSortKey(event.target.value);

    navigation(
      event.target.value === 'default' ? '.' : `?sort=${event.target.value}`,
      { relative: 'path' }
    );
  }

  return (
    <>
      <h1>Courses</h1>
      <label>
        Sort by
        <select value={select} onChange={selectHandler}>
          <option value="default">Default</option>
          <option value="name">Name</option>
          <option value="duration">Duration</option>
          <option value="price">Price</option>
        </select>
      </label>
      <div className={styles.coursesBlock}>
        {sortedCourses.map((course) => {
          return (
            <Link
              key={course.id}
              to={course.name.substring(0, 3)}
              relative="path"
            >
              {course.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Courses;
