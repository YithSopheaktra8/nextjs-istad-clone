"use client";
import React from "react";
import Image from "next/image";
import {
	MapPinIcon,
	DevicePhoneMobileIcon,
	ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

export default function AboutUs() {
	return (
		<div className="flex flex-col gap-5 py-10">
			<div className="mx-[300px] bg-white p-10 rounded-lg">
				<h2 className="text-xl font-bold">
					What is Center of Science and Technology Advanced
					Development?
				</h2>
				<p>
					CSTAD is a noteworthy science and technology center in
					Cambodia. CSTAD has routed Cambodian students to advanced
					science and technology, research, and develop digital skills
					and our graduates have been guaranteed excellent job
					opportunities with the Top IT company. CSTAD will continue
					to provide high-quality training with the latest
					methodology, and roadmap as well as the best choice for
					those who want to be an IT expert in Cambodia.
				</p>
				<div className="grid place-content-center">
					<Image
						src="/images/cstad logo-no-bg.png"
						alt="cstad logo-no-bg"
						width={240}
						height={240}
					/>
				</div>
			</div>
			<div className="mx-[300px] bg-white p-10 rounded-lg">
				<h2 className="text-xl font-bold uppercase">Vision</h2>
				<p>Advanced IT Institute in Cambodia</p>
			</div>
			<div className="mx-[300px] bg-white p-10 rounded-lg">
				<h2 className="text-xl font-bold uppercase">Mission</h2>
				<ul className="list-disc list-inside">
					<li>
						Provide the latest methodology with high quality
						training and mentoring
					</li>
					<li>
						Build up the capacity and career of IT experts Cambodia
					</li>
					<li>
						Consult and connect CSTAD trainees to top IT careers
					</li>
				</ul>
			</div>
			<h2 className="text-[#253a95] mx-[300px] text-4xl font-bold tracking-[5px]  text-center">
				If you have any questions, please feel free to contact us.
			</h2>
			<address className="mx-[300px] bg-white p-10 rounded-lg flex flex-col gap-5">
				<div className="flex gap-3">
					<MapPinIcon className="h-6 w-6 text-[#253a95]" />
					<p>
						No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork,
						Phnom Penh, Cambodia
					</p>
				</div>
				<div className="flex gap-3">
					<DevicePhoneMobileIcon className="h-6 w-6 text-[#253a95]" />
					<p>(+855) 95 990 910 | (+855) 93 990 910</p>
				</div>
				<div className="flex gap-3">
					<ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-[#253a95]" />
					<a href="https://t.me/istadkh" target="_blank">
						Telegram Channel
					</a>
				</div>
			</address>
		</div>
	);
}
