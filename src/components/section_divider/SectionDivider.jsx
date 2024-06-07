import React from 'react';

const SectionDivider = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30px',
        marginBottom: '30px',
      }}
    >
      <img
        src="../src/assets/icons/separatorBlack.svg"
        alt=""
        style={{ width: '100px' }}
      />
    </div>
  );
};

export default SectionDivider;
