import React from 'react'
import { useObserver } from 'mobx-react'
import { useStores } from '../hooks/hookStore'

function Home() {
    const { counter } = useStores()
    return useObserver(() => (
        <div>
            <div>{counter.count}</div>
            <button onClick={() => counter.increment()}>Increment</button>
        </div>
    ))
}

export default Home
