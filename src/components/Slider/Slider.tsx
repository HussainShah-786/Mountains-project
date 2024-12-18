import Image from "next/image";
import flower from "../../../public/images/Flower.png"

export default function Slider() {
    return (
        <>
            <section className="h-[74vh] w-full bg-red-500">
                <div
                    style={{
                        backgroundImage: "url('/images/GIF.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "74vh",
                        width: "100%",
                    }}
                >
                    <div className="flex items-center h-full justify-center">
                        <div className=" h-auto w-[450px]  space-y-2 p-5  backdrop-blur-sm flex  justify-center items-center flex-col text-center  rounded-tr-3xl rounded-bl-3xl text-white border border-white">
                                <div>
                                    <Image
                                        src={flower}
                                        width={100}
                                        height={100}
                                        alt="logo"
                                        className="w-[140] h-[40px]"
                                    />
                                </div>
                                <h1 className="font-secondary text-[40px]">Wedding Venue</h1>
                                <h2 className="font-secondary text-2xl">RETREAT & EVENT CENTER</h2>
                                <h3 className="font-tertiary text-4xl">Clifton, jx.</h3>
                                <button className="border  p-2 w-40 rounded-md ">Book Now</button>
                        </div>
                    </div>
                </div> 
            </section>
        </>
    );
}