function Section({title, children, ...props}) {

  return (
    <section {...props}> {/* forward all other attributes; good for wrapper elements */}
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

export default Section;
