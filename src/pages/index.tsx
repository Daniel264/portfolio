import Header from "@/components/Header";
import SEO from "@/components/SEO";
import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <SEO title="Home" />
            {/* <Header /> */}
            <TopNavigation />

            <main className="flex min-h-screen flex-col items-center bg-[#31363F] p-5 ">
                {/* <div className="m-auto w-full max-w-8xl"> */}

                <div className="max-w-8xl md:m-auto text-white">
                    <div className="hero md:min-h-screen bg-inherit">
                        <div className="hero-content flex-col-reverse text-center lg:flex-row-reverse">
                            <div className="w-full">
                                <Image src="/assets/images/me.jpg" alt="my-profile-pic" width={450} height={40} className="h-[22rem] rounded-full shadow-2xl md:h-[29rem]" />
                            </div>
                            <div className="w-full">
                                <h3 className="my-5 text-5xl font-semibold">Hello, I&apos;m Daniel Olatinsu</h3>
                                <p className="text-2xl font-light">I&apos;m a Fullstack Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
