import { useEffect, useState } from 'react';
import { fetchRandomQuotes } from './apis/quote';
import { fetchRandomBgImage } from './apis/unsplash';
import useInterval from './hooks/useInterval';
import './App.css';

function App() {
  const [quote, setQuote] = useState(null);
  const [image, setImage] = useState(null);

  const response = useInterval(() =>
    Promise.all([
      fetchRandomQuotes(),
      fetchRandomBgImage()
    ]), 15000);

  useEffect(() => {
    if (response?.length) {
      const quote = response[0];
      const image = response[1];
      setQuote(quote);
      setImage(image);
    }
  }, [response])

  useEffect(() => {
    const fetchData = async () => {
      const result = await Promise.all([
        fetchRandomQuotes(),
        fetchRandomBgImage()
      ]);
      const quote = result[0];
      const image = result[1];
      setQuote(quote);
      setImage(image);
    }

    fetchData();
  }, []);

  return (
    <div className="app" style={{backgroundImage: `url(${image?.urls?.full})`}}>
      <div className="container">
        <p>{quote?.content}</p>
        <p>
          {quote?.originator && <span>author: {quote?.originator.name}</span>}
        </p>
      </div>
    </div>
  );
}

export default App;
