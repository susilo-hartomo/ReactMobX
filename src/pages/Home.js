import React, { useContext } from 'react'

// reactive or use "observer"
import { useObserver } from 'mobx-react'

//get store
import { Store } from '../stores'

export default function Home() {
    const { counter, user } = useContext(Store)
    return useObserver(() => (
        <>
            {/* <div style={{ width: '100vw', height: '500px', backgroundColor: 'GrayText' }}> */}
            <p style={{ textAlign: "center", color: "brown" }}>created by: {user.name}</p>
            <div style={{ display: "flex", width: '100vw', height: '50px', justifyContent: "center", alignItems: "center" }}>
                <button onClick={() => counter.decrement()}>--</button>
                <h1 style={{ textAlign: "center", margin: 10, width: 100 }}>{counter.count}</h1>
                <button onClick={() => counter.increment()}>++</button>
            </div>
            {/* </div> */}
        </>
    ))
}
