import Header from "@/components/Header";
import SEO from "@/components/SEO";
import TopNavigation from "@/components/TopNavigation";
import Me from '../pub'

export default function Home() {
    return (
        <>
            <SEO title="Home" />
            {/* <Header /> */}
            <TopNavigation />

            <main className="flex min-h-screen flex-col items-center bg-[#31363F] p-5 ">
                {/* <div className="m-auto w-full max-w-8xl"> */}

                <div className="max-w-8xl m-auto text-white">
                    <div className="hero min-h-screen bg-inherit">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div>
                                <img src="/assets/images/me.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            </div>
                            <div>
                                <h3 className="my-5 text-5xl font-semibold">Hello, I&apos;m Daniel Olatinsu</h3>
                                <p className="text-2xl">I&apos;m a Fullstack Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
