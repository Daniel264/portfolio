import Header from "@/components/Header";
import Menu from "@/components/Menu";
import SEO from "@/components/SEO";
import Stats from "@/components/Stats";
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

                <div className="max-w-8xl text-white md:m-auto flex">
                    <Menu />
                    <div className="flex flex-col md:flex-row">
                        <div className="hero bg-inherit md:min-h-screen">
                            <div className="hero-content flex-col-reverse text-center lg:flex-row-reverse">
                                <div className="flex w-full justify-center">
                                    <Image
                                        src="/assets/images/me.jpg"
                                        alt="my-profile-pic"
                                        width={450}
                                        height={40}
                                        className="h-[22rem] rounded-full shadow-2xl
                                    sm:h-[29rem]"
                                    />
                                </div>
                                <div className="w-full">
                                    <h3 className="my-5 text-5xl font-semibold">Hello, I&apos;m Daniel Olatinsu</h3>
                                    <p className="text-2xl font-light">I&apos;m a Fullstack Developer</p>
                                </div>
                            </div>
                        </div>
                        <Stats />
                    </div>
                </div>
            </main>
        </>
    );
}
