function SearchBar() {

const handleFormSubmit = (event) =>{
    event.preventDefault()
    console.log('now you see me')
}

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input />
            </form>
        </div>
    )
}

export default SearchBar;