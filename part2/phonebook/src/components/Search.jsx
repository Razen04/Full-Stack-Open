

const Search = ({ search, setSeacrh }) => {
    return (
        <div>
            filter shown with <input type='text' onChange={(event) => setSeacrh(event.target.value)} value={search} />
        </div>
    )
}

export default Search
