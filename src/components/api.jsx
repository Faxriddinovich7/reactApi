import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counterSlice.js'
import { useGetProductsQuery } from '../services/api.js'


export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const name = useSelector((state) => state.counter.name)
    const fullName = useSelector((state) => state.counter.fullName)
    const dispatch = useDispatch()
    const {data , isLoading} = useGetProductsQuery()

    if (isLoading) return  <p>Malumot  kelopti brat...</p>

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <p>{name}</p>
                <p>{fullName}</p>
            </div>
            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}