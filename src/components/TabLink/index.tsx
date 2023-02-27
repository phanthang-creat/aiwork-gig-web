import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface TabLinkProps extends LinkProps {
	href: string;
	name: string;
	active: boolean;
}

export const TabLink: React.FunctionComponent<TabLinkProps> = ({
	href,
	active = false,
	name,
	onClick,
	...restProps
}) => {
	return (
		<Link href={href} {...restProps} legacyBehavior>
			<a className="flex flex-col items-center group" onClick={onClick}>
				{name === 'Việc làm' ? (
					<p className="py-3 cursor-pointer text-button-medium group-hover:text-blue-2 duration-300 font-bold flex justify-center items-center gap-2">
						{name}
						<ChevronDownIcon className="w-4 h-4 " />
					</p>
				) : (
					<p
						className={clsx(
							'py-3 cursor-pointer text-button-medium group-hover:text-blue-2 duration-300 font-bold',
						)}
					>
						{name}
					</p>
				)}

				<span
					className={clsx(
						'block w-full h-1 bg-inherit group-hover:bg-blue-1',
						active && 'bg-blue-1',
					)}
				></span>
			</a>
		</Link>
	);
};
