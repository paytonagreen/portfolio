export default function WorkCard({image, link, title, description, frontend, backend, styledWith, testedWith }) {
  return (
    <div>
      <img src={image} alt='' />
      <div className='divider' />
      <div className='content'>
        <a target='blank' href={link}>
          {title && (<h1>{title}</h1>)}
        </a>
        {description && (<p>{description}</p>)}
        <ul>
          {frontend && (<li>Frontend: {frontend}</li>)}
          {backend && (<li>Backend: {backend}</li>)}
          {styledWith && (<li>Styled with {styledWith}</li>)}
          {testedWith && (<li>Tested with {testedWith}</li>)}
        </ul>
      </div>
    </div>
  );
}
