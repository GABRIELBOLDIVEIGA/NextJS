import React from 'react'

export default function AuthPageStatic(props) {
  return (
    <div>
      <h1>Auth Page Statics</h1>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  )
}
