import React from 'react';
import logo from './logo.svg';
import './App.css';
import ModalBasic from './comp/ModalBasic';

function App() {
    const [isModal, setModal] = React.useState(false);

  return (
    <React.Fragment>
      <button onClick={() => setModal(true)}>Click Here</button>
      <ModalBasic
        isVisible={isModal}
        title="Modal Title"
        content={<p>Add your content here</p>}
        footer={<button onClick = { () => setModal(false)}>Cancel</button>}
        onClose={() => setModal(false)}
      />
    </React.Fragment>
  );
}

export default App;
