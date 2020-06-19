import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal';

function App() {
    const [isModal, setModal] = React.useState(false);

  return (
    <React.Fragment>
      <button onClick={() => setModal(true)}>Click Here</button>
      <Modal
        isVisible={isModal}
        title="Modal Title"
        content={<p>Add your content here</p>}
        footer={<button>Cancel</button>}
        onClose={() => setModal(false)}
      />
    </React.Fragment>
  );
}

export default App;
