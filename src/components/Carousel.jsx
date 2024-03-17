"use client";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
export default function CarouselWithContent() {
	return (
		<Carousel loop autoplay>
			<div className="relative h-[700px] w-full">
				<Image
					src="/images/slide-1.jpg"
					alt="image 1"
					width={1920}
					height={1080}
				/>
				<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
					<div className="w-3/4 text-center md:w-2/4">
						<Typography
							variant="h1"
							color="white"
							className="mb-4 text-3xl md:text-4xl lg:text-5xl">
							The Beauty of Nature
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80">
							It is not so much for its beauty that the forest
							makes a claim upon men&apos;s hearts, as for that
							subtle something, that quality of air that emanation
							from old trees, that so wonderfully changes and
							renews a weary spirit.
						</Typography>
						<div className="flex justify-center gap-2">
							<Button size="lg" color="white">
								Explore
							</Button>
							<Button size="lg" color="white" variant="text">
								Gallery
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="relative h-[700px] w-full">
				<Image
					src="/images/slide-2.jpg"
					alt="image 2"
					className="h-full w-full object-cover"
					width={1920}
					height={1080}
				/>
				<div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
					<div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
						<Typography
							variant="h1"
							color="white"
							className="mb-4 text-3xl md:text-4xl lg:text-5xl">
							The Beauty of Nature
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80">
							It is not so much for its beauty that the forest
							makes a claim upon men&apos;s hearts, as for that
							subtle something, that quality of air that emanation
							from old trees, that so wonderfully changes and
							renews a weary spirit.
						</Typography>
						<div className="flex gap-2">
							<Button size="lg" color="white">
								Explore
							</Button>
							<Button size="lg" color="white" variant="text">
								Gallery
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="relative h-[700px] w-full">
				<Image
					src="/images/slide-3.jpg"
					alt="image 2"
					className="h-full w-full object-cover"
					width={1920}
					height={1080}
				/>
				<div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
					<div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
						<Typography
							variant="h1"
							color="white"
							className="mb-4 text-3xl md:text-4xl lg:text-5xl">
							The Beauty of Nature
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80">
							It is not so much for its beauty that the forest
							makes a claim upon men&apos;s hearts, as for that
							subtle something, that quality of air that emanation
							from old trees, that so wonderfully changes and
							renews a weary spirit.
						</Typography>
						<div className="flex gap-2">
							<Button size="lg" color="white">
								Explore
							</Button>
							<Button size="lg" color="white" variant="text">
								Gallery
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Carousel>
	);
}
