import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Courses.module.css';
import courses from '../../data/courses';

function Course() {
  const params = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (item) => item.name.substring(0, 3) === params.courseName
  );

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);

  return (
    <div className={styles.innerWrapper}>
      <div className={styles.singleCourse}>
        <span className={styles.name}>{course?.name}</span>
        <div className={styles.howLong}>
          <span className={styles.start_date}>{course?.start_date}</span>
          <span
            className={styles.duration}
          >{`${course?.duration} days long`}</span>
        </div>
        <span className={styles.description}>{course?.description}</span>
        <span className={styles.price}>{`${course?.price} $`}</span>
      </div>
      <NavLink to=".." relative="path">
        Back to courses
      </NavLink>
    </div>
  );
}

export default Course;
