"use client";
import React from "react";
import Image from "next/image";
import { TagIcon } from "@heroicons/react/24/solid";

export default function NewsCard({ title, image, alt }) {
	return (
		<div className="w-[220px]  bg-white rounded-lg overflow-hidden cursor-pointer">
			<Image src={image} alt={alt} width={1920} height={1080} />
			<div className="p-5">
				<div className="flex justify-between text-gray-500 text-sm">
					<div className="flex gap-2">
						<TagIcon width={15} />
						<p>Job Announcement</p>
					</div>
					<p>3 days ago</p>
				</div>
				<p className="mt-3 font-semibold line-clamp-2">{title}</p>
			</div>
		</div>
	);
}
