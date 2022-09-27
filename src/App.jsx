import {useState} from 'react';

const db = [
  {
    id: 0,
    title: 'Przepis na naleśniki',
    desc: 'Na naturalnym mleku',
    content: 'Zmieszać jajko i mleko...',
  }, {
    id: 1,
    title: 'Przepis na hamburgera',
    desc: 'Na ostro',
    content: 'Hwdp test odwagi Rzeszów 2023',
  }, {
    id: 2,
    title: 'Przepis na kurczaka',
    desc: 'W sosie śmietanowym',
    content: 'Wróć synu wróć z daleka',
  },
];

const Post = ({desc, title, content}) => {
  const [showContent, setShowContent] = useState(false);
  const showMoreContent = () => setShowContent(!showContent);

  return (
    <div>
      <h2>{title}</h2>
      {showContent ? (
        <>
          <p>{desc}</p>
          <p>{content}</p>
        </>
      ) : (
        <>
          <p>{desc}</p>
          <button type="button" onClick={showMoreContent}>Czytaj więcej</button>
        </>
      )}
      <hr />
    </div>
  );
};

const Blog = () => {
  return (
    <>
      <h1>To jest blog o gotowaniu</h1>
      {db.map(({id, ...props}) => (
        <Post key={id} {...props} />
      ))}
    </>
  );
};

export default Blog;
