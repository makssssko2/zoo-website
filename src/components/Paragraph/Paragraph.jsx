import './Paragraph.scss';
const Paragraph = ({ level, children, type }) => {
  return (
    <p className={`paragraph paragraph_level-${level} paragraph_${type}`}>
      {children}
    </p>
  );
};

export default Paragraph;
