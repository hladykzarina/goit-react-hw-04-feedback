import { TitleFeedback } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <section>
      <TitleFeedback>
        {title && <h2>{title}</h2>}
        {children}
      </TitleFeedback>
    </section>
  );
};

export default Section;
