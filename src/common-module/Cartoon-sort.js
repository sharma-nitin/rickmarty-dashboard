
const Cartoonsort = (sortData) => {
    return (
        sortData.shows.sort((a, b) => {
            const isReversed = sortData.sort === 'asc' ? 1 : -1;
            return isReversed * a.name.localeCompare(b.name)
        })
    );
}

export default Cartoonsort;