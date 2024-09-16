import React from "react";

const Skills = () => {
    return (
        <main className="flex h-full w-full flex-col items-center text-white">
            <h1 className="text-center text-6xl font-bold text-white lg:text-7xl">Skills</h1>
            <p>DEVELOPMENT ARSENAL</p>
            <section className="grid grid-cols-3 grid-rows-3 space-x-10">
                {" "}
                {/* Increased gap from 4 to 8 */}
                <article className="col-start-1 row-start-1">
                    <h2 className="text-4xl font-semibold">Frontend</h2>
                    <ul>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>ViteTest</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <progress className="progress w-56 progress-primary bg-white" value="95" max="100"></progress>
                    </ul>
                </article>
                <article className="col-start-2 row-start-2">
                    <h2 className="text-4xl font-semibold">Backend</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Typescript</li>
                        <li>MongoDB</li>
                        <li>PostGreSQL</li>
                        <li>prisma</li>
                        <progress className="progress w-56 progress-primary bg-white" value="80" max="100"></progress>
                    </ul>
                </article>
                <article className="col-start-3 row-start-3">
                    <h2 className="text-4xl font-semibold">UI Libraries</h2>
                    <ul>
                        <li>GSAP</li>
                        <li>Tailiwind</li>
                        <li>BootStrap</li>
                        <li>SCSS</li>
                        <li>CSS</li>
                        <li>ChakraUi</li>
                        <progress className="progress w-56 progress-primary bg-white" value="100" max="100"></progress>
                    </ul>
                </article>
            </section>
        </main>
    );
};

export default Skills;
