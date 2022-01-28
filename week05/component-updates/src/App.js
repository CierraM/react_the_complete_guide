import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';

//useCallback  - store a function across executions so you can use react memo to detect changes. Don't recreate the function everytime the component runs.

import './App.css';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prev => !prev)

    }
  }, [allowToggle])

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={toggleParagraphHandler}>Toggle</Button>
      <Button onClick={allowToggleHandler}> Allow Toggle</Button>

    </div>
  );
}

export default App;
