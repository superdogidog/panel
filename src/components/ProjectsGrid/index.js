import React from 'react';
import styles from './styles.module.css';
export default function ProjectsGrid({ children, columns = 3 }) {
    return (<div className={styles.projectsGrid} data-columns={columns}>
            {children}
        </div>);
}
