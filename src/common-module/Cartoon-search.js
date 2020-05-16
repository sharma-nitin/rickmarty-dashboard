
const Cartoonsearch = (searchData) => {
    return (
        searchData.shows.filter(function (show) {
            return show.name.toLowerCase().indexOf(searchData.search) !== -1; // returns true or false

        })
    );
}

export default Cartoonsearch;
