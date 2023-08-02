const html = `.body {
    display: flex;
    gap: 4px;
  }
  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  
  .logo {
    display: block;
  }
  
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }
  
  h3 {
    font-size: 1.2rem;
  }
  
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
  
  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
`;

export default html;