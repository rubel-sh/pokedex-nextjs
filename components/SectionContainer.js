const SectionContainer = ({ children, className }) => {
  return (
    <section className={`container mx-auto ${className}`}>{children}</section>
  );
};

export default SectionContainer;
