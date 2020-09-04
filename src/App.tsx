import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Button href="https://www.google.com" btnType={ButtonType.Link} target="_blank"> Href </Button>
        <Button btnType={ButtonType.Primary} disabled>name</Button>
        <Button size={ButtonSize.Large} btnType={ButtonType.Danger}>type</Button>
        <Button size={ButtonSize.Small} autoFocus>type</Button>
        <h1>Hello World</h1>
        <h2>Hello World</h2>
        <h3>Hello World</h3>
      </header>
    </div>
  );
}

export default App;
