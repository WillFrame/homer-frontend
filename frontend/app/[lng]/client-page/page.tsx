'use client'

import React from 'react'
import { useT } from '../../i18n/client'
import { useState } from 'react'

export default function Page() {
  const { t } = useT('client-page')
  const [counter, setCounter] = useState(0)

  return (
    <>
      <main>
        <p>{t('hello')}</p>
        <p>{counter}</p>
        <div>
          <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
          <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
        </div>
      </main>
    </>
  )
}