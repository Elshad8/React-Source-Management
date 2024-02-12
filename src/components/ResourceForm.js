import React, { useState } from 'react';

const ResourceForm = ({ addResource }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      const newResource = {
        id: Math.random().toString(),
        name: name,
      };
      addResource(newResource);
      setName('');
    }
  };

  return (
    <div>
      <h2>Add Source</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Kaynak Adı"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ResourceForm;