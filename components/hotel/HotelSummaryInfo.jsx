import Link from "next/link";
import HotelRating from "./HotelRating";
import HotelReviewNumber from "./HotelReviewNumber";

const HotelSummaryInfo = ({ fromListPage, hotel }) => {
    return (
        <>
            <div className={fromListPage ? "flex-1" : "flex-1 container"}>
                <h2
                    className={
                        fromListPage
                            ? "font-bold text-lg"
                            : "font-bold text-2xl"
                    }
                >
                    {hotel?.name}
                </h2>
                <p>📍 {hotel?.city}</p>
                <div className="flex gap-2 items-center my-4">
                    <HotelRating id={hotel?.id} />
                    <HotelReviewNumber id={hotel?.id} />
                </div>
                <div>
                    <span className="bg-yellow-300 py-1 px-2 rounded-md">
                        {hotel?.propertyCategory} Star Property
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-2 items-end justify-center">
                <h2 className="text-2xl font-bold text-right">
                    ${(hotel?.lowRate + hotel?.highRate) / 2}/night
                </h2>
                <p className=" text-right">Per Night for 4 Rooms</p>
                {fromListPage ? (
                    <Link
                        href={`/hotels/${hotel?.id}`}
                        className="btn-primary "
                    >
                        Details
                    </Link>
                ) : (
                    <Link href="" className="btn-primary ">
                        Book
                    </Link>
                )}
            </div>
        </>
    );
};

export default HotelSummaryInfo;
