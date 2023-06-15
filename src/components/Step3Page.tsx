import React, { useState } from 'react';

const Step3Page = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Submit</button>
      </form>

      {isModalOpen && (
        <div>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Step3Page;
