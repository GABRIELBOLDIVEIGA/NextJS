import React from 'react'

export default function AuthPageSsr(props) {
  return (
    <div>
      <h1>Auth Page SSR</h1>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  )
}
