import React from 'react'
import './Featured.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img src='https://cf.bstatic.com/xdata/images/city/600x600/619932.jpg?k=81c20cf1191a1d05472b45413bed3cee67dc92b8c1387c60a960beb5629f109d&o=https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&0='
            alt='img' className='featuredImg'/>
        <div className='featuredTitles'>
          <h1> Dubai</h1>
          <h2>UAE</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img src='https://cf.bstatic.com/xdata/images/city/600x600/685399.jpg?k=4410d3272c0ccbc1dd11f53d70243ad7f59ecd89f23a71eb7a93b89382a288da&o='
            alt='img' className='featuredImg'/>
        <div className='featuredTitles'>
          <h1> Greece</h1>
          <h2>Santorini</h2>
        </div>
      </div>
      <div className='featuredItem'>
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/685406.jpg?k=fb02ffb273110d269bc5603a6c662f36fc5ec76b877f68d5de90c0ffbdd3f475&o="
            alt='img' className='featuredImg'/>
        <div className='featuredTitles'>
          <h1>Kenya</h1>
          <h2>Nairobi</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured