import { getAllHotels } from "@/database/queries";
import HotelCard from "./HotelCard";

const HotelList = async ({ destination, checkin, checkout, category }) => {
    const hotels = await getAllHotels(destination, checkin, checkout, category);

    return (
        <div className="col-span-9">
            <div className="space-y-4">
                {hotels.map((hotel) => (
                    <HotelCard
                        key={hotel.id}
                        hotel={hotel}
                        checkin={checkin}
                        checkout={checkout}
                    />
                ))}
            </div>
        </div>
    );
};

export default HotelList;
