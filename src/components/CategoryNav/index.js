import React from 'react';
import styles from './styles.module.css';
export default function CategoryNav({ categories }) {
    const scrollToCategory = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    return (<div className={styles.categoryNav}>
            <h3 className={styles.navTitle}>📚 Browse by Category</h3>
            <div className={styles.categories}>
                {categories.map((category) => (<button className={styles.categoryButton} key={category.id} onClick={() => scrollToCategory(category.id)} type="button">
                        <span className={styles.categoryIcon}>{category.icon}</span>
                        <span className={styles.categoryTitle}>{category.title}</span>
                    </button>))}
            </div>
        </div>);
}
