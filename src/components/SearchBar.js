function SearchBar() {
    
const handleFormSubmit = () =>{
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