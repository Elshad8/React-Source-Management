import React from 'react';

const ResourceList = ({ resources }) => {
  return (
    <div>
      <h2>Source List</h2>
      {resources.map((resource) => (
        <div key={resource.id}>
          <p>{resource.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ResourceList;