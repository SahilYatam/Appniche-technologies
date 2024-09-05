import './HeadingWithText.css'
const HeadingWithText = ({ headingText, paraText, textContainerClass='',headingClass = '', paraClass=''}) => {
  return (
    <div className={textContainerClass}>
      <h1 className={headingClass}>{headingText}</h1>
      <p className={paraClass}>{paraText}</p>
    </div>
  );
}

export default HeadingWithText;
