import { PrismicRichText } from '@prismicio/react';
import styles from './styles.module.scss';

const BrunoTextDefault = ({ slice }) => {
  const renderRichText = (richText) => {
    let isFirstParagraph = true;

    return richText.map((textItem, index) => {
      if (textItem.type === 'heading2') {
        return (
          <h2 key={index} className={styles.h2}>
            {textItem.text}
          </h2>
        );
      } else if (textItem.type === 'heading3') {
        return (
          <h3 key={index} className={styles.h3}>
            {textItem.text}
          </h3>
        );
      } else if (textItem.type === 'paragraph') {

        if (!isFirstParagraph && richText[index - 1]?.type === 'paragraph' && richText[index - 1]?.text.trim() !== "") {
          return (
            <>
              <br />
              <p key={index} className={styles.paragraph}>
                {textItem.text}
              </p>
            </>
          );
        } else {
          isFirstParagraph = false; 
          return (
            <p key={index} className={styles.paragraph}>
              {textItem.text}
            </p>
          );
        }
      } else if (textItem.type === 'list-item') {
        return (
          <li key={index} className={styles.listItem}>
            {textItem.text}
          </li>
        );
      } else if (textItem.type === 'hyperlink') {
        return (
          <a key={index} href={textItem.url} className={styles.link}>
            {textItem.text}
          </a>
        );
      } else {
        return null;
      }
    });
  };
  
  console.log(slice.primary);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_brunotext_default}
    >
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className={styles.container}>
          <div className={styles.text}>
            {renderRichText(slice.primary.txt)}
          </div>
          <div className={styles.LastUpdate}>
            <PrismicRichText field={slice.primary.lastupdate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrunoTextDefault;
