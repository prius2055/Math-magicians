import React, { useEffect, useState } from 'react';

import './Home.css';

export default function Quotes() {
  const [theQuote, setTheQuote] = useState('Loading quote');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: { 'X-Api-Key': 'd85ZkcUwc/fmyNR/KG6dYw==5TG9gbpPJ8eltGvx' },
          contentType: 'application/json',
        });
        const result = await response.json();
        setIsLoading(false);
        setTheQuote(result);
      } catch {
        setHasError(true);
        setIsLoading(false);
      }
    };
    fetchQuote();
  }, [setTheQuote, setIsLoading]);

  return (
    <div className='quotes'>
      {isLoading && <p>Loading quote...</p>}
      {hasError && (
        <p>Error Loading page at this time. Please check your network</p>
      )}
      {!isLoading && !hasError && (
        <p>
          {theQuote[0].quote} -[{theQuote[0].author}]
        </p>
      )}
    </div>
  );
}
