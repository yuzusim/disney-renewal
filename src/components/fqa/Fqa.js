import { useState } from "react";
import { faqData } from "data/faqData";
import styles from "./Fqa.module.scss";

function Fqa() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className={styles.faqList}>
      {faqData.map((item, index) => (
        <li key={index} className={styles.faqItem}>
          {/* 질문 버튼 */}
          <button
            className={styles.question}
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <span className={styles.icon}>
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {/* 답변 영역 */}
          {openIndex === index && (
            <div className={styles.answer}>
              {/* 일반 설명 */}
              {item.description && <p>{item.description}</p>}

              {/* 리스트형 답변 */}
              {item.list && (
                <ul
                  className={`${styles.answerList} ${
                    item.marker ? styles.withMarker : ""
                  }`}
                >
                  {item.list.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              )}
              {/* {item.list && (
                <ul>
                  {item.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )} */}

              {/* 부분 링크 텍스트 */}
              {item.parts && (
                <p>
                  {item.parts.map((part, i) =>
                    typeof part === "string" ? (
                      part
                    ) : (
                      <a key={i} href={part.url} className={styles.link}>
                        {part.text}
                      </a>
                    )
                  )}
                </p>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Fqa;
