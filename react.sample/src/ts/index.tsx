import * as React from 'react';
import ReactDOM from 'react-dom';

const Hello: React.FC = () => {
  return <div className="greeting">Hello</div>;
};

ReactDOM.render(<Hello />, document.body.firstElementChild);
