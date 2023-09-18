import Linkify from 'react-linkify';
import '../Styles/component.css';

// const LineBreak = () => <br />;

const CustomLinkify = ({ children }) => (
  <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
    <a href={decoratedHref} 
       key={key} 
       target="_blank" 
       rel="noopener noreferrer"
       style={{ textDecoration: 'none' }} >
      {decoratedText}
    </a>
  )}>
    {children}
  </Linkify>
);

export default function RecipeItem(props) {
    const { _id, image, ingredients, instructions, title } = props;
    const imagePath =`http://localhost:5000/uploads/${image}`;

    return (
      <div key={_id} className="item-card">
        <h1 style={{color: "#452F38", marginBottom: "1.5rem"}}>{title}</h1>
        <div className="group-1">
          
          <img src={imagePath} alt={title} style={{ width: '400px', height: '300px' }} />
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index} style={{ listStyle: 'none' }}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'sans-serif', fontSize: '1rem', margin: "2rem 0"}}>
            <CustomLinkify >{instructions}</CustomLinkify>
          </pre>
        </div>
      </div>
    );
  }