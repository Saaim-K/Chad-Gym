import React from 'react'
import ad_web from './assets/ad_web.webp'
import ad_mobile from './assets/ad_mobile.webp'


const App = () => {
  return (
    <>
      <div className='flex xs:hidden'>
        <img src={ad_mobile} />
      </div>
      <div className='hidden xs:flex'>
        <img src={ad_web} />
      </div>
    </>
  )
}

export default App