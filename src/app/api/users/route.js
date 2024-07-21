import { NextResponse } from "next/server";
export function GET(request) {
    const users = [
        {
            name: "Sumukh",
            age: 24,
            occupation: "Coder",
        },
        {
            name: "Supriya",
            age: 24,
            occupation: "Fashion Influencer",
        },
        {
            name: "Tarun",
            age: 23,
            occupation: "God Father",
        },
    ];
    return NextResponse.json(users);
}
export function POST() { }
export function DELETE(request) {
    return NextResponse.json({
        message: "Deleted",
        status: true,
    });
}
