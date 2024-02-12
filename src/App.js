import React, { useState } from 'react';
import ResourceList from './components/ResourceList';
import AddResourceForm from './components/AddResourceForm';

function App() {
  const [resources, setResources] = useState([]);

  const addResource = (newResource) => {
    setResources([...resources, newResource]);
  };

  const deleteResource = (resourceId) => {
    const updatedResources = resources.filter(
      (resource) => resource.id !== resourceId
    );
    setResources(updatedResources);
  };

  return (
    <div className="app">
      <h1>Source Management</h1>
      <AddResourceForm addResource={addResource} />
      <ResourceList resources={resources} deleteResource={deleteResource} />
    </div>
  );
}

export default App;