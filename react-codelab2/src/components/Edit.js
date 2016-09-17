import React from 'react'

export const Edit = (state, handleClick, handleChange, handleKeyPress) => (
  <div>
    <p>
      <input type='text' name='name' placeholder='name'
        value={state.name}
        onChange={handleChange}
      />
    </p>
    <p>
      <input
        type='text'
        name='phone'
        placeholder='phone'
        value={state.phone}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </p>
    <button onClick={handleClick}>Create</button>
  </div>
)

export const Detail = (props)=> (
      <div>
        <p>{props.contact.name}</p>
        <p>{props.contact.phone}</p>
      </div>
    );
