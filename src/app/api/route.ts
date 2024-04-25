import { NextRequest, NextResponse } from "next/server";
import { Item } from "@/lib/type";

export async function GET(req : NextRequest, res : NextResponse) {
    const items = 
        {
            cpu : {
                
                    items : [
                        {
                            "name": 'amd ryzan 9 100g',
                            "brand": "amd",
                            "clockspeed": "100tz"
                        },
                        {
                            "name": 'item 100k',
                            "brand": "intel",
                            "clockspeed": "10"
                        },
                        {
                            "name": 'snapdragon qualqol',
                            "brand": "qualcomer",
                            "clockspeed": "2ghz"
                        },
                    ],
                    filter : [
                        {
                            cpuName : ['AMD', 'INTEL', 'SNAPDREAGON'],
                            cpuClock : ['2', '5', '100']
                        }
                    ]
                }
            ,
            motherboad : [
                {
                    items : [
                        {
                            "name": 'asus rl450',
                            "brand": "asus",
                            "feature": "Description 1wdaiwdiadwijodaw"
                          },
                          {
                            "name": 'gigabyte 100x motherboard',
                            "brand": "gigabyte",
                            "feature": "Description 12222"
                          },
                          {
                            "name": 'intel motherboad',
                            "brand": "intel arch",
                            "feature": "Description wifi"
                          },
                    ],
                    filters :{
                        "brand" : ['models asuss', 'GIGABYTE', 'AMD'],
                        "cpuSocket" : ['A4M', 'B4M', 'D4M']
                    }
                }
            ]
        }
        
    

    return NextResponse.json(items);
}