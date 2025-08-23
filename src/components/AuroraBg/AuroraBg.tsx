'use client';
import { cn } from '@/utils/cn';
import React, { ReactNode } from 'react';

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
	children: ReactNode;
	showRadialGradient?: boolean;
}

export const AuroraBackground = ({
	className,
	children,
	showRadialGradient = true,
	...props
}: AuroraBackgroundProps) => {
	return (
		<main>
			<div
				className={cn(
					'transition-bg relative flex h-[100vh] flex-col bg-zinc-50 text-slate-950',
					className
				)}
				{...props}>
				<div
					className='absolute inset-0 overflow-hidden'
					style={
						{
							'--aurora':
								'repeating-linear-gradient(100deg, var(--blue-500) 10%, var(--indigo-300) 15%, var(--blue-300) 20%, var(--violet-200) 25%, var(--blue-400) 30%)',

							'--dark-gradient':
								'repeating-linear-gradient(100deg, var(--black) 0%, var(--black) 7%, var(--transparent) 10%, var(--transparent) 12%, var(--black) 16%)',

							'--white-gradient':
								'repeating-linear-gradient(100deg, var(--white) 0%, var(--white) 7%, var(--transparent) 10%, var(--transparent) 12%, var(--white) 16%)',
							'--blue-300': '#B3F0F9',
							'--blue-400': '#90F6D7',
							'--blue-500': '#62D8F9',
							'--indigo-300': '#86c2f5',
							'--violet-200': '#d2c9f9',
							'--black': '#aae2e7',
							'--white': '#fff',
							'--transparent': 'transparent',
						} as React.CSSProperties
					}>
					<div
						className={cn(
							`after:animate-aurora pointer-events-none absolute -inset-[10px]
							[background-image:var(--white-gradient),var(--aurora)]
							[background-size:300%,_200%]
							[background-position:50%_50%,50%_50%]
							blur-[12px] brightness-[1.1] will-change-transform

							after:absolute after:inset-0
							after:[background-image:var(--white-gradient),var(--aurora)]
							after:[background-size:200%,_100%]
							after:[background-attachment:fixed]
							after:opacity-80
							after:content-[""]
							dark:[background-image:var(--dark-gradient),var(--aurora)]
							dark:invert-0
							after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
							showRadialGradient &&
								`[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
						)}></div>
				</div>
				{children}
			</div>
		</main>
	);
};
