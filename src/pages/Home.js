import React from 'react'

// reactive or use "observer"
import { useObserver } from 'mobx-react'

//get store
import { useStores } from '../hooks/storeHook'

export default function Home() {
    const { counter } = useStores()
    return useObserver(() => (
        <>
            {/* <div style={{ width: '100vw', height: '500px', backgroundColor: 'GrayText' }}> */}
                <div style={{ display: "grid",width: '100vw', height: '500px',justifyContent: "center", alignItems: "center" }}>
                    <h1>{counter.count}</h1>
                    <button onClick={() => counter.increment()}>++</button>
                    <button onClick={() => counter.decrement()}>--</button>
                </div>
            {/* </div> */}
        </>
    ))
}
