import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { TabLink } from '../TabLink';

interface HeaderProps {}

const HEADER_LINKS = [
	{
		name: 'Việc làm',
		href: '/',
		isActive: (pathname: string) => pathname === '/',
	},
	{
		name: 'Giới thiệu',
		href: '/gioi-thieu',
		isActive: (pathname: string) => pathname.startsWith('/gioi-thieu'),
	},
	{
		name: 'Thông tin',
		href: '/thong-tin',
		isActive: (pathname: string) => pathname === '/thong-tin',
	},
];

const Tabs = () => {
	const router = useRouter();
	return (
		<div className="flex items-center justify-between w-full gap-12">
			{HEADER_LINKS.map((link, index) => (
				<TabLink
					href={link.href}
					name={link.name}
					active={link.isActive(router.pathname)}
					key={`links-${index}`}
				/>
			))}
		</div>
	);
};

const Header: React.FunctionComponent<HeaderProps> = () => {
	return (
		<>
			<div className="flex justify-center w-full bg-white">
				<div className="w-full max-w-container h-[100px] flex flex-col justify-center items-center">
					<div className="w-full">
						<div className="flex items-center justify-between">
							<Link href={'/'}>
								<div className="flex items-center gap-3">
									<LazyLoadImage src={'/images/logo/logoH2.png'} className="w-[50px] h-[60px]" />
									<div className="flex flex-col w-[263px]">
										<h3 className="text-blue-1 font-bold text-lg leading-6">Kết nối tài năng</h3>
										<p className="text-blue-1 text-[13px] font-normal leading-4 w-1/2">
											Đưa tài năng của bạn đến với doanh nghiệp
										</p>
									</div>
								</div>
							</Link>
							<div className="items-center hidden gap-8 lg:flex p-3">
								<Tabs />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
