import React from "react";

const Skills = () => {
    return (
        <main className="flex h-full w-full flex-col items-center text-white">
            <h1 className="text-center text-6xl font-bold text-white lg:text-7xl">Skills</h1>
            <p>DEVELOPMENT ARSENAL</p>
            <section>
                <article className="">
                    <h2 className="text-4xl font-semibold">Frontend</h2>
                    <ul>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>ViteTest</li>
                        <li>React</li>
                        <li>Next.js</li>
                    </ul>
                    <h2 className="text-4xl font-semibold">Backend</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Typescript</li>
                        <li>MongoDB</li>
                        <li>PostGreSQL</li>
                        <li>prisma</li>
                    </ul>
                    <h2 className="text-4xl font-semibold">UI Libraries</h2>
                    <ul>
                        <li>GSAP</li>
                        <li>Tailiwind</li>
                        <li>BootStrap</li>
                        <li>SCSS</li>
                        <li>CSS</li>
                        <li>ChakraUi</li>
                    </ul>
                </article>
            </section>
        </main>
    );
};

export default Skills;
