"use client";
import { useState, useEffect, use, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import jsonData from "@/json/data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import NotFound from "@/app/not-found";
import Image from "next/image";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function ProjectImage({ src, alt, mockup = false }) {
	if (!src || typeof src !== "string") return null;

	if (mockup) {
		return (
			<div className="mb-5 flex justify-center">
				<div className="bg-neutral-100 rounded-[40px] p-3 shadow-2xl">
					<Image
						src={src}
						alt={alt}
						width={1400}
						height={1400}
						className="max-w-[280px] w-full h-auto rounded-[28px]"
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="mb-5">
			<Image
				src={src}
				alt={alt}
				width={1400}
				height={1400}
				className="w-full h-auto rounded-2xl"
			/>
		</div>
	);
}

function ScrollDownButton() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop < document.documentElement.scrollHeight - document.documentElement.clientHeight) {

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
				setIsAtBottom(true);

    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
			setIsAtBottom(false);
    }
  };

  return (
    <div className="fixed bottom-5 left-0 right-0 flex justify-center items-center mb-10">
      <motion.div
        className="h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleScroll}
      >
        <FontAwesomeIcon
          icon={isAtBottom ? faChevronUp : faChevronDown}
          className="text-white text-2xl"
        />
      </motion.div>
    </div>
  );
}


function Page(props) {
    const params = use(props.params);
    const router = useRouter();
    const [data, setData] = useState(null);
    useEffect(() => {
		const selectedData = jsonData.Projects.find(
			(item) => item.slug === params.slug
		);
		if (selectedData === undefined) {
			setData("404");
		} else {
			setData(selectedData);
		}
	}, [params.slug]);

    if (data === "404") {
		return (
			<>
				<NotFound />
			</>
		);
	} else if (!data) {
		return (
			<div className="relative min-h-screen w-full  gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
				<div className="min-h-screen flex justify-center items-center w-full">
					<div className="mx-auto grid grid-cols-1 md:grid-cols-2  w-full">
						<div className="flex justify-center items-start flex-col mb-5 space-y-10 w-ful p-4">
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
						</div>
						<div className="flex justify-start items-start flex-col mb-5 w-full p-4">
							<div className="animate-pulse duration-500 shadow-lg bg-neutral-400 rounded  w-full h-full "></div>
						</div>
					</div>
				</div>
				{/* images */}
				<div className="mx-auto grid grid-cols-1 p-5 md:p-20  w-full h-auto">
					<div className="w-full h-auto aspect-video">
						<div className="animate-pulse duration-500 shadow-lg bg-neutral-400 h-full w-full rounded"></div>
					</div>
				</div>
			</div>
		);
	}
    return (
		<div className="relative min-h-screen w-full gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
			<button
				onClick={() => router.back()}
				className="fixed top-2 -left-2 md:left-10 flex justify-center items-center rounded-full p-4 transition duration-300 ease-in-out z-50"
				aria-label="Go back">
				<FontAwesomeIcon
					icon={faChevronLeft}
					className="text-black pr-10"
				/>
			</button>
			<ScrollDownButton />
			<div className="min-h-screen flex justify-center items-center">
				<div className="mx-auto grid grid-cols-1 md:grid-cols-2  mt-10 md:mt-0">
					<div className="min-h-screen sm:min-h-0 flex justify-center items-start flex-col mb-5 space-y-10 mx-auto">
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Project
							</h2>
							<h1 className="text-4xl font-medium text-neutral-900">
	{data.title}
</h1>

<p className="text-lg text-neutral-500 mt-2 uppercase tracking-wider">
	UX Case Study
</p>
						</div>
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
	Skills & Methods
</h2>
							<p className="text-2xl font-normal text-neutral-900">
								{data.tech.join(", ")}
							</p>
						</div>
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Year
							</h2>
							<p className="text-2xl font-normal text-neutral-900">
								{data.year}
							</p>
						</div>
						{data.role && (
	<div>
		<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
			Role
		</h2>

		<p className="text-2xl font-normal text-neutral-900">
			{data.role}
		</p>
	</div>
	
)}
{data.duration && (
	<div>
		<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
			Duration
		</h2>
		<p className="text-2xl font-normal text-neutral-900">
			{data.duration}
		</p>
	</div>
)}
						{data.preview && (
	<div>
		<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
			Links
		</h2>

		<div className="flex flex-col gap-3 text-2xl font-normal text-neutral-900">

			<a
				href={data.preview}
				target="_blank"
				rel="noopener noreferrer"
			>
				Open Prototype
				<FontAwesomeIcon
					icon={faArrowUpRightFromSquare}
					className="ml-3"
				/>
			</a>

			{data.pdf && (
				<a
					href={data.pdf}
					target="_blank"
					rel="noopener noreferrer"
				>
					Download Case Study
					<FontAwesomeIcon
						icon={faArrowUpRightFromSquare}
						className="ml-3"
					/>
				</a>
			)}

		</div>
	</div>
)}
						{/* {data.code && (
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
									Source Code
								</h2>
								<p className="text-2xl font-normal text-neutral-900">
									<a
										href={data.code}
										target="_blank"
										rel="noopener noreferrer">
										Github{" "}
										<FontAwesomeIcon
											icon={faGithub}
											className="ml-3"
										/>
									</a>
								</p>
							</div>
						)} */}
					</div>
					<div className="flex justify-start items-start flex-col mb-5 ">
						<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
	Overview
</h2>
						{data.desc.map((desc, index) => (
							<p
								key={index}
								className="text-xl text-justify tracking-wide font-normal text-gray-500 mb-5">
								{desc}
							</p>
						))}
					</div>
				</div>
			</div>
			{/* Case Study */}
<div className="w-full max-w-6xl mx-auto px-6 md:px-12">

  {data.caseStudy?.map((section, index) => {

    // TEXT SECTION
    if (section.type === "text") {
      return (
        <section key={index} className="mb-32">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            {section.title}
          </h2>

          {section.content.map((paragraph, i) => (
            <p
              key={i}
              className="text-xl text-gray-500 leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}
        </section>
      );
    }

    // SINGLE IMAGE
    if (section.type === "image") {
  return (
    <motion.section
      key={index}
      className="mb-40"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl md:text-5xl font-semibold mb-10">
        {section.title}
      </h2>

      <ProjectImage
        src={section.image}
        alt={section.title}
      />
    </motion.section>
  );
}
	if (section.type === "gallery") {
  return (
    <section key={index} className="mb-32">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">
        {section.title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {section.images.map((img, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.15 }}
  >
    <ProjectImage
      src={img}
      alt={`${section.title}-${i}`}
    />
  </motion.div>
))}
      </div>
    </section>
  );
}

    
	if (section.type === "feature") {
  return (
    <section key={index} className="mb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

        <motion.div
  className="md:col-span-4 md:sticky md:top-24"
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-semibold mb-4">
    {section.title}
  </h2>

  <p className="text-lg text-neutral-600 leading-8">
    {section.content}
  </p>
</motion.div>

<div className="md:col-span-8">
  <ProjectImage
  src={section.image}
  alt={section.title}
  mockup={true}
/>
</div>

      </div>
    </section>
  );
}

    // LOFI → HIFI
    if (section.type === "comparison") {
      return (
        <section key={index} className="mb-32">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            {section.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                Low Fidelity
              </h3>

              <ProjectImage
                src={section.left}
                alt="Low Fidelity"
                index={0}
              />
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-center">
                High Fidelity
              </h3>

              <ProjectImage
                src={section.right}
                alt="High Fidelity"
                index={0}
              />
            </div>

          </div>
        </section>
      );
    }

    
	

    return null;
  })}

</div>
		</div>
	);
}

export default Page;
