// Copyright (C) 2025 Alvalen Bilyunazra
// This file is part of Alvalens-porto-2-nextJs.
// Licensed under the GNU GPL v3.0. See LICENSE for details.

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FullPageWrapper, Section, useFullPage } from "@alvalens/react-fullpage-snap";

// components
import Button from "@/components/Button";




import Hr from "@/components/Hr";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ScrollIndicator() {
	const { activeIndex } = useFullPage();
	const [dismissed, setDismissed] = useState(false);

	useEffect(() => {
		if (activeIndex !== 0) setDismissed(true);
	}, [activeIndex]);

	return (
		<AnimatePresence>
			{activeIndex === 0 && !dismissed && (
				<motion.div
					className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.2 } }}
					exit={{ opacity: 0, transition: { duration: 0.4 } }}>
					<span className="text-[10px] uppercase tracking-[4px] text-gray-500 font-medium">
						Scroll
					</span>
					<motion.div
						className="w-[1.5px] h-14 bg-gray-500 origin-top"
						animate={{
							scaleY: [0, 1, 1],
							opacity: [0, 1, 0],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
							times: [0, 0.5, 1],
						}}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

const MyPage = () => {
	return (
		<FullPageWrapper>
			<Section>
				<div className="mx-auto w-[82%] max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden">
					<motion.div
						className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							type: "spring",
						}}>
						
						<motion.h3
							className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								type: "spring",
							}}>
							Shreepaada M C
						</motion.h3>
						<motion.h1
							className="text-black text-4xl md:text-6xl lg:text-6xl 2xl:text-8xl font-bold my-2 md:my-5"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.3,
								type: "spring",
							}}>
							UX Designer
						</motion.h1>
						<motion.p
							className="title text-md 2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.4,
								type: "spring",
							}}>
							Hi! I’m Shreepaada, a UX Designer passionate about
creating intuitive and user-centered digital
experiences. I enjoy solving real user problems
through research, wireframing, prototyping, and
usability testing while designing products that are
simple, accessible, and meaningful.
						</motion.p>
						<motion.div
							className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.5,
								type: "spring",
							}}>
							<Button variation="primary">
								<Link
									href={"/docs/cv.pdf"}
									target="_blank"
									rel="noopener noreferrer"
									download>
									Download CV
								</Link>
							</Button>
							<Button variation="secondary">
								<a href="#contact">Contact Me</a>
							</Button>
						</motion.div>
					</motion.div>
					<motion.div
						className="hidden md:flex col-span-1 mx-auto justify-center items-center "
						initial={{ x: 100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							delay: 0.7,
							type: "spring",
						}}>
						
					</motion.div>
				</div>
			</Section>
			<Section>
				<div className="relative md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden">
					
					<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
						<motion.h1
							className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.1,
								type: "spring",
							}}>
							About Me
						</motion.h1>
						<Hr />
						<motion.p
							className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								type: "spring",
							}}>
							A brief introduction to my journey as a UX Designer.
						</motion.p>
						<motion.div
							initial={{ y: 40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{
								delay: 0.3,
								type: "spring",
							}}>
							<Button variation="primary">
								<Link href="/about">Learn More</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</Section>
			<Section>
				<div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
					
					<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
						<motion.h1
							className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.1,
								type: "spring",
							}}>
							My Projects
						</motion.h1>
						<Hr />
						<motion.p
							className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								type: "spring",
							}}>
							Explore my UX case studies and projects,
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								including LifeLink, Fam Manager, and AgroVision and so on.
							</span>
						</motion.p>
						<motion.div
							initial={{ y: 40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{
								delay: 0.3,
								type: "spring",
							}}>
							<Button variation="primary">
								<Link href="/projects">Learn More</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</Section>
			<Section>
				<div className="relative md:h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
					
					<div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
						<motion.h1
							className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold mb-3"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.1,
								type: "spring",
							}}>
							Get In Touch
						</motion.h1>
						<Hr />
						<motion.p
							className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] md:mb-5"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								type: "spring",
							}}>
							Feel free to contact me if you have any{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								questions or just want to say hi.
							</span>
						</motion.p>
						<motion.p
							className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.3,
								type: "spring",
							}}>
							<a href="mailto:shreepaadamc2003@gmail.com">
	shreepaadamc2003@gmail.com
</a>
						</motion.p>
						{/* icons */}
						<div className="flex justify-center items-center space-x-4">
							<motion.a
								href="mailto:shreepaadamc2003@gmail.com?subject=Hello&body=Hello Alvalens,"
								aria-label="Send email"
								className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
								initial={{ y: 40, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{
									y: { delay: 0.1 },
									opacity: { delay: 0.2 },
								}}>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="text-3xl"
								/>
							</motion.a>

							<motion.a
								href="https://github.com/shreepaada"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub profile"
								className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									y: { delay: 0.2 },
									opacity: { delay: 0.3 },
								}}>
								<FontAwesomeIcon
									icon={faGithub}
									className="text-3xl"
								/>
							</motion.a>
							
							<motion.a
								href="https://www.linkedin.com/in/shreepaada-m-c-520702285/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn profile"
								className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									y: { delay: 0.4 },
									opacity: { delay: 0.5 },
								}}>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="text-3xl"
								/>
							</motion.a>
							
						</div>
					</div>
				</div>
			</Section>
			<ScrollIndicator />
		</FullPageWrapper>
	);
};

export default MyPage;
