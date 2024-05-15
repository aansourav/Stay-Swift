const SortHotel = () => {
    return (
        <div>
            <h3 className="font-bold text-lg">Sort By</h3>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label htmlFor="highToLow">
                    <input
                        type="radio"
                        name="priceOrder"
                        id="highToLow"
                        className="mr-2"
                    />
                    Price High to Low
                </label>

                <label htmlFor="lowToHigh">
                    <input
                        type="radio"
                        name="priceOrder"
                        id="lowToHigh"
                        className="mr-2"
                    />
                    Price Low to High
                </label>
            </form>
        </div>
    );
};

export default SortHotel;
