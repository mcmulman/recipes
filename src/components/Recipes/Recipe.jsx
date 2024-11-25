import Showdown from 'showdown';
import DOMPurify from 'dompurify'

function Recipe({title, description}) {
  const descriptionConverter = new Showdown.Converter();
  const descriptionHTML = descriptionConverter.makeHtml(description);

  return (
    <div style={{'overflow': 'auto'}}>
      <h2>{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(descriptionHTML)}}></div>
    </div>
  );
}

export default Recipe;
