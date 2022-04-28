import { useState } from "react"
import dynamic from 'next/dynamic'

const PDF = dynamic(
  () => import('../components/PDF'),
  {ssr:false}
)

export default () => {

  const [value, setValue] = useState('')

  return <div
    style={{
      height:'100vh',
      display:'flex',
      justifyContent:'space-evenly',
      alignItems:'flex-start',
      flexDirection:'row',
      padding:10
    }}
  >
    <div
      style={{
        width:'49%',
        borderRadius:10,
        border:'1px solid grey',
        height:'100%',
        padding:10
      }}
      >
        <input value={value} onChange={e=>setValue(e.target.value)} placeholder="Type Maadi..." multiple aria-rowcount={3} />
      </div>
    <div
      style={{
        width:'49%',
        borderRadius:10,
        border:'1px solid grey',
        height:'100%',
        padding:10
      }}
    >
      <PDF value={value} />
    </div>
  </div>
}