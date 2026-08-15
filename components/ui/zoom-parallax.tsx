'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface ImageItem {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: ImageItem[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const pictures = [
		{
			src: images[0]?.src || '/placeholder.svg',
			alt: images[0]?.alt || 'Center Parallax image',
			scale: scale4,
			style: { width: '25vw', height: '25vh', position: 'relative' as const },
			zIndex: 30, // Center image stays in front (aage aana chahiye)
		},
		{
			src: images[1]?.src || '/placeholder.svg',
			alt: images[1]?.alt || 'Parallax image 2',
			scale: scale5,
			style: { width: '35vw', height: '30vh', top: '-30vh', left: '5vw', position: 'relative' as const },
			zIndex: 10,
		},
		{
			src: images[2]?.src || '/placeholder.svg',
			alt: images[2]?.alt || 'Parallax image 3',
			scale: scale6,
			style: { width: '20vw', height: '45vh', top: '-10vh', left: '-25vw', position: 'relative' as const },
			zIndex: 10,
		},
		{
			src: images[3]?.src || '/placeholder.svg',
			alt: images[3]?.alt || 'Parallax image 4',
			scale: scale5,
			style: { width: '25vw', height: '25vh', top: '0', left: '27.5vw', position: 'relative' as const },
			zIndex: 10,
		},
		{
			src: images[4]?.src || '/placeholder.svg',
			alt: images[4]?.alt || 'Parallax image 5',
			scale: scale6,
			style: { width: '20vw', height: '25vh', top: '27.5vh', left: '5vw', position: 'relative' as const },
			zIndex: 10,
		},
		{
			src: images[5]?.src || '/placeholder.svg',
			alt: images[5]?.alt || 'Parallax image 6',
			scale: scale8,
			style: { width: '30vw', height: '25vh', top: '27.5vh', left: '-22.5vw', position: 'relative' as const },
			zIndex: 10,
		},
		{
			src: images[6]?.src || '/placeholder.svg',
			alt: images[6]?.alt || 'Parallax image 7',
			scale: scale9,
			style: { width: '15vw', height: '15vh', top: '22.5vh', left: '25vw', position: 'relative' as const },
			zIndex: 10,
		},
	];

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen overflow-hidden">
				{pictures.map(({ src, alt, scale, style, zIndex }, index) => {
					return (
						<motion.div
							key={index}
							style={{ scale, zIndex }}
							className="absolute top-0 left-0 flex h-full w-full items-center justify-center pointer-events-none"
						>
							<div
								style={style}
								className="overflow-hidden rounded-2xl border border-white/20 bg-neutral-900 shadow-2xl pointer-events-auto"
							>
								<img
									src={src}
									alt={alt}
									className="h-full w-full object-cover"
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
