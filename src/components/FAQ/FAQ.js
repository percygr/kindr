import React, { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.faqContainer}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${styles.faqItem} ${
            activeIndex === index ? styles.active : ""
          }`}
        >
          <div
            className={styles.question}
            onClick={() => handleClick(index)}
          >
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className={styles.answer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
