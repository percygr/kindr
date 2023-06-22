import React, { useState } from "react";
import styles from "./FAQ.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq">
      <div className={styles.faqContainer}>
        <h2 className="FAQ-title">Use this page to learn more about Kindr, click the boxes to expand the answer:</h2>
        <br></br>
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
              {activeIndex === index ? (
                <FaAngleUp className={`${styles.arrow} ${styles.arrowUp}`} />
              ) : (
                <FaAngleDown className={`${styles.arrow} ${styles.arrowDown}`} />
              )}
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;