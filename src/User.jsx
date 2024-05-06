import React, { memo } from 'react'

export const User = memo(( provider, profile, onLogout ) => {

  return (
    <div className='card'>

      <h3 className='provider'>{provider.toUpperCase()}</h3>

      <div className='content'>
        <div className='data'>
          {Object.entries(profile).map(([key, value]) => (
            <div className='field' key={key}>
              <div className='label'>{key}: </div>
              <div className='value'>{JSON.stringify(value)}</div>
            </div>
          ))}
        </div>
        <button className='btnLogout' onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  )
})
