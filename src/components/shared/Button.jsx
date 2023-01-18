import React from 'react';
function Button({ children }) {
  return (
    <div>
      <button type='submit'>{children}</button>
    </div>
  );
}

export default Button;
