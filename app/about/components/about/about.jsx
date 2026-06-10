import Image from "next/image";

import { motion } from "framer-motion";
import mee1 from "@/public/image/mee1.jpeg";
import mee2 from "@/public/image/mee2.jpeg";
import mee3 from "@/public/image/mee3.jpeg";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="relative w-full h-full">
								<Image
									src={mee1}
									alt="Shreepaada M C"
									fill
									sizes="(max-width: 768px) 80vw, 40vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="relative w-full h-full">
								<Image
									src={mee2}
									alt="Alvalens"
									fill
									sizes="(max-width: 768px) 60vw, 25vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="relative w-full h-full">
								<Image
									src={mee3}
									alt="Alvalens"
									fill
									sizes="(max-width: 768px) 80vw, 35vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
	Shreepaada M C
</h2>
<p className="text-gray-600 text-justify title text-lg leading-relaxed">
	I am an{" "}
	<span className="text-black font-medium">
		Entry-Level UX Designer{" "}
	</span>
	with hands-on experience designing mobile and web applications
	through the complete design process, from{" "}
	<span className="text-black font-medium">
		user research to high-fidelity prototypes
	</span>
	. I enjoy solving real user problems through simple, intuitive, and
	user-centered design solutions.
	<br />
	<br />
	I completed the{" "}
	<span className="text-black font-medium">
		Google UX Design Certificate
	</span>{" "}
	and gained professional experience as a{" "}
	<span className="text-black font-medium">
		UX Design Intern at KlartDigi (Klartopedia ERP)
	</span>
	, where I worked on improving ERP workflows, designing reusable UI
	components, and collaborating closely with developers during
	implementation. I contributed to certificate and report generation
	features while identifying usability issues and recommending
	improvements to enhance the overall user experience.
	<br />
	<br />
	My portfolio showcases projects including{" "}
	<span className="text-black font-medium">
		LifeLink
	</span>
	, a blood donation app created to help users find donors and blood
	banks during emergencies,{" "}
	<span className="text-black font-medium">
		Fam Manager
	</span>
	, a family management platform for organizing documents and schedules,
	and{" "}
	<span className="text-black font-medium">
		AgroVision
	</span>
	, a precision farming platform that leverages GIS, Google Earth
	Engine, and NDVI data to help farmers make informed decisions. I hold
	a{" "}
	<span className="text-black font-medium">
		B.Tech in Computer Science Engineering
	</span>{" "}
	from{" "}
	<span className="text-black font-medium">
		Dayananda Sagar University
	</span>{" "}
	and continue to grow my skills in UX research, interaction design,
	prototyping, and usability testing.
</p>

				</motion.div>
			</div>
		</>
	);
}
