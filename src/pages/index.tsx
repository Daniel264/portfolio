import dynamic from "next/dynamic";
import Menu from "@/components/Menu";
import SEO from "@/components/SEO";
import Stats from "@/components/Stats";
import TopNavigation from "@/components/TopNavigation";
// import Typed from "@/components/Typed";
import Image from "next/image";
import { toast } from "react-toastify";

const Typed = dynamic(() => import("@/components/Typed"), { ssr: false });

export default function Home() {
    const handleLoading = () => {
        toast.loading("successful!");
    };
    return (
        <>
            <SEO title="Home" />
            {/* <Header /> */}
            <TopNavigation />

            <main className="flex min-h-screen flex-col items-center bg-[#101010] p-5 pt-28">
                <div className="max-w-8xl flex w-full text-white md:m-auto">
                    <div className="fixed left-10 lg:left-12 top-44 hidden h-full md:flex">
                        <Menu />
                    </div>
                    <div className="ml-0 flex h-full w-full flex-col items-center md:ml-20">
                        <div className="flex flex-col sm:flex-row">
                            <div className="hero bg-inherit">
                                <div className="hero-content flex-col-reverse text-center lg:flex-row-reverse">
                                    <div className="flex w-full justify-center">
                                        <Image src="/assets/images/me.jpg" alt="my-profile-pic" width={450} height={40} className="h-[22rem] rounded-full shadow-2xl sm:h-[29rem]" />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="my-5 text-5xl font-semibold">
                                            <span className="text-primary">Daniel</span> Olatinsu
                                        </h3>
                                        <p className="text-2xl font-light">
                                            <span className="text-primary">I&apos;m a</span> <Typed />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <Stats /> */}
                        </div>
                        <div className="ml-0 mt-8 space-y-4 md:ml-0 md:mr-44 md:space-x-5">
                            <button className="btn w-full rounded border-none bg-primary text-white shadow-2xl hover:animate-bounce hover:bg-slate-500 md:w-44">
                                Lets Talk <i className="fa-solid fa-message"></i>
                            </button>
                            <button onClick={handleLoading} className="btn w-full rounded border-none bg-primary text-white shadow-2xl hover:animate-bounce hover:bg-slate-500 md:w-44">
                                Download CV <i className="fa-solid fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
