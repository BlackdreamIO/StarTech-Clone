'use client'

import { Item } from "@/lib/type";
import { useState, useEffect } from "react";
export default function Home() {
    
    const [items, setItems] = useState<Item>();

    useEffect(() => {
        const getItems = async () => {
            const res : any = await fetch('/api', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            const jsonResponse = await res.json();
 

            console.log({
                cpus : jsonResponse.cpu,
                filters : jsonResponse.cpu.filter
            });
            
        }

        getItems();
    }, [])
    

    return (
        <div className="bg-black">

        </div>
    );
}
