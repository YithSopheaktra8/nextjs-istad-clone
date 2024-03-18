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
					className="h-[700px]"
					width={1920}
					height={1080}
				/>
				<div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
					<div className="w-3/4 text-center md:w-2/4">
						<Typography
							variant="h1"
							color="white"
							className="mb-4 text-3xl md:text-4xl lg:text-5xl">
							Center of Science and Technology Advanced
							Development
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80">
							CSTAD is a noteworthy science and technology center
							in Cambodia. CSTAD has routed Cambodian students to
							advanced science and technology, research, and
							develop digital skills and our graduates have been
							guaranteed excellent job opportunities with the Top
							IT company.
						</Typography>
						<div className="flex justify-center gap-2">
							<Button size="lg" className="bg-[#253a95]">
								Enroll Now
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
							Vision
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80">
							Advanced IT Center in Cambodia
						</Typography>
						<div className="flex gap-2">
							<Button size="lg" className="bg-[#253a95]">
								Enroll Now
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
							Mission
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="opacity-80">
							Provide the latest methodology with high-quality
							training and mentoring
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="opacity-80">
							Consult and connect CSTAD trainees to top IT careers
						</Typography>
						<Typography
							variant="lead"
							color="white"
							className="mb-12 opacity-80">
							Build up the capacity and career of IT experts
							Cambodia
						</Typography>
						<div className="flex gap-2">
							<Button size="lg" className="bg-[#253a95]">
								Enroll Now
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Carousel>
	);
}
