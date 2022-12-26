const add = (id:number) => {
    return (
        {
            type: "ADD",
            payload: {
                id : id
            }
        }
    )
}

export default add;