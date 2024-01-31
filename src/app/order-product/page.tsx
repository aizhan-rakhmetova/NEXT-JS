'use client';
import React from 'react';
import {useRouter} from "next/navigation";

const OrderProduct = () => {
    const router = useRouter();
    const handleClick = () => {
        console.log('successfully ordered')
        router.push("/");
    }
    return (
        <div>
            <button onClick = {handleClick}> Order Product</button>
        </div>
    );
};

export default OrderProduct;