async function takeTime() {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000)
    })
}
async function page() {
    await takeTime()
    return (
        <div>
            <h1>This is about page</h1>
        </div>
    )
}

export default page