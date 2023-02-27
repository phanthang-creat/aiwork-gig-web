import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { JobCard } from '../Jobcard';
import ReactPaginate from 'react-paginate';
import { IJob } from '../Jobcard/job.interface';

interface JobsWithThemedProps {}

const Themes = [
	{
		id: 1,
		name: 'Chợ Bến Thành',
		image: '/images/themes/cho-ben-thanh.png',
		quantity: 1200,
	},
	{
		id: 2,
		name: 'Landmark 81',
		image: '/images/themes/landmark-81.png',
		quantity: 1200,
	},
	{
		id: 3,
		name: 'Thảo Điền',
		image: '/images/themes/thao-dien.png',
		quantity: 1200,
	},
	{
		id: 4,
		name: 'Đường Nguyễn Huệ',
		image: '/images/themes/duong-nguyen-hue.png',
		quantity: 1200,
	},
	{
		id: 5,
		name: 'Đường Bùi Viện',
		image: '/images/themes/bui-vien.png',
		quantity: 1200,
	},
	{
		id: 6,
		name: 'Phú Mỹ Hưng',
		image: '/images/themes/phu-my-hung.png',
		quantity: 1200,
	},
	{
		id: 7,
		name: 'Nhà thờ Đức Bà',
		image: '/images/themes/nha-tho-duc-ba.png',
		quantity: 1200,
	},
	{
		id: 8,
		name: 'KCN Quang Trung',
		image: '/images/themes/quang-trung.png',
		quantity: 1200,
	},
	{
		id: 9,
		name: 'KCN Công Nghệ Cao',
		image: '/images/themes/kcnc.png',
		quantity: 1200,
	},
];

const Items = ({ currentItems, filter }) => {
	return (
		<>
			<div className="w-full flex flex-col max-w-container justify-center items-center gap-4">
				<div className="grid grid-cols-3 gap-x-10 gap-y-6">
					{filter === ''
						? currentItems.map((item: Array<IJob>, index: number) => (
								<JobCard key={index} jobs={item} />
						  ))
						: currentItems
								.filter((item: Array<IJob>) => item[0].category === filter)
								.map((item: Array<IJob>, index: number) => <JobCard key={index} jobs={item} />)}
				</div>
			</div>
		</>
	);
};

const items = [
	[
		{
			id: 1,
			image: '/images/job/job1.png', // 100x100
			nameJob: 'Phục vụ bàn nhà hàng',
			nameCompany: 'NHÀ HÀNG AI WORKS',
			location: 'Quận 1, HCM',
			time: '20/10/2022 - 20/10/2023',
			salary: '10.000.000 - 15.000.000',
			category: 'Dịch vụ',
		},
	],
	[
		{
			id: 2,
			image: '/images/job/job1.png', // 100x100
			nameJob: 'Phục vụ bàn nhà hàng',
			nameCompany: 'NHÀ HÀNG AI WORKS',
			location: 'Quận 1, HCM',
			time: '20/10/2022 - 20/10/2023',
			salary: '10.000.000 - 15.000.000',
			category: 'Dịch vụ',
		},
	],
	[
		{
			id: 3,
			image: '/images/job/job1.png', // 100x100
			nameJob: 'Phục vụ bàn nhà hàng',
			nameCompany: 'NHÀ HÀNG AI WORKS',
			location: 'Quận 1, HCM',
			time: '20/10/2022 - 20/10/2023',
			salary: '10.000.000 - 15.000.000',
			category: 'Dịch vụ',
		},
	],
	[
		{
			id: 4,
			image: '/images/job/job1.png', // 100x100
			nameJob: 'Phục vụ bàn nhà hàng',
			nameCompany: 'NHÀ HÀNG AI WORKS',
			location: 'Quận 1, HCM',
			time: '20/10/2022 - 20/10/2023',
			salary: '10.000.000 - 15.000.000',
			category: 'Dịch vụ',
		},
	],
	[
		{
			id: 5,
			image: '/images/job/job1.png', // 100x100
			nameJob: 'Phục vụ bàn nhà hàng',
			nameCompany: 'NHÀ HÀNG AI WORKS',
			location: 'Quận 1, HCM',
			time: '20/10/2022 - 20/10/2023',
			salary: '10.000.000 - 15.000.000',
			category: 'Dịch vụ',
		},
	],
	[
		{
			id: 6,
			image: '/images/job/job1.png', // 100x100
			nameJob: 'Phục vụ bàn nhà hàng',
			nameCompany: 'NHÀ HÀNG AI WORKS',
			location: 'Quận 1, HCM',
			time: '20/10/2022 - 20/10/2023',
			salary: '10.000.000 - 15.000.000',
			category: 'Dịch vụ',
		},
	],
	[
		{
			id: 7,
			image: '/images/job/job1.png', // 100x100
			nameJob: 'Phục vụ bàn nhà hàng',
			nameCompany: 'NHÀ HÀNG AI WORKS',
			location: 'Quận 1, HCM',
			time: '20/10/2022 - 20/10/2023',
			salary: '10.000.000 - 15.000.000',
			category: 'Dịch vụ',
		},
	],
	[
		{
			id: 8,
			image: '/images/job/job1.png', // 100x100
			nameJob: 'Phục vụ bàn nhà hàng',
			nameCompany: 'NHÀ HÀNG AI WORKS',
			location: 'Quận 1, HCM',
			time: '20/10/2022 - 20/10/2023',
			salary: '10.000.000 - 15.000.000',
			category: 'Dịch vụ',
		},
	],
	[
		{
			id: 9,
			image: '/images/job/job1.png', // 100x100
			nameJob: 'Phục vụ bàn nhà hàng',
			nameCompany: 'NHÀ HÀNG AI WORKS',
			location: 'Quận 1, HCM',
			time: '20/10/2022 - 20/10/2023',
			salary: '10.000.000 - 15.000.000',
			category: 'Dịch vụ',
		},
	],
	[
		{
			id: 10,
			image: '/images/job/job1.png', // 100x100
			nameJob: 'Phục vụ bàn nhà hàng',
			nameCompany: 'NHÀ HÀNG AI WORKS',
			location: 'Quận 1, HCM',
			time: '20/10/2022 - 20/10/2023',
			salary: '10.000.000 - 15.000.000',
			category: 'Dịch vụ',
		},
	],
	[
		{
			id: 11,
			image: '/images/job/job1.png', // 100x100
			nameJob: 'Phục vụ bàn nhà hàng',
			nameCompany: 'NHÀ HÀNG AI WORKS',
			location: 'Quận 1, HCM',
			time: '20/10/2022 - 20/10/2023',
			salary: '10.000.000 - 15.000.000',
			category: 'Dịch vụ',
		},
	],
	[
		{
			id: 12,
			image: '/images/job/job1.png', // 100x100
			nameJob: 'Phục vụ bàn nhà hàng',
			nameCompany: 'NHÀ HÀNG AI WORKS',
			location: 'Quận 1, HCM',
			time: '20/10/2022 - 20/10/2023',
			salary: '10.000.000 - 15.000.000',
			category: 'Làm đẹp',
		},
	],
	[
		{
			id: 13,
			image: '/images/job/job1.png', // 100x100
			nameJob: 'Phục vụ bàn nhà hàng',
			nameCompany: 'NHÀ HÀNG AI WORKS',
			location: 'Quận 1, HCM',
			time: '20/10/2022 - 20/10/2023',
			salary: '10.000.000 - 15.000.000',
			category: 'Làm đẹp',
		},
	],
];

function PaginatedItems({ itemsPerPage, filter }) {
	const [itemOffset, setItemOffset] = React.useState(0);

	const endOffset = itemOffset + itemsPerPage;
	const currentItems = items.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(items.length / itemsPerPage);

	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		setItemOffset(newOffset);
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<Items currentItems={currentItems} filter={filter} />
			<br />
			<ReactPaginate
				nextLabel=">"
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				marginPagesDisplayed={2}
				pageCount={pageCount}
				previousLabel="<"
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				breakLabel="..."
				breakClassName="page-item"
				breakLinkClassName="page-link"
				containerClassName="pagination"
				activeClassName="active"
			/>
		</div>
	);
}

export const JobsWithThemed: React.FunctionComponent<JobsWithThemedProps> = () => {
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);

	const [filter, setFilter] = React.useState('');

	const handleCategoryChange = (event: any) => {
		setFilter(event.target.value);
	};

	React.useEffect(() => {
		handleCategoryChange;
	}, [filter]);

	return (
		<>
			<h1></h1>
			<div className="w-full flex flex-col justify-center items-center py-10">
				<div className="w-full flex justify-start max-w-container pb-6">
					<h1 className="text-2xl font-semibold">Công việc theo chủ đề</h1>
				</div>
				<div className="w-full flex flex-col max-w-container justify-center items-center gap-4">
					<Swiper
						slidesPerView={6}
						spaceBetween={-20}
						slidesPerGroup={1}
						loop={true}
						loopFillGroupWithBlank={true}
						modules={[Navigation]}
						navigation={{
							prevEl: navigationPrevRef.current,
							nextEl: navigationNextRef.current,
						}}
						onBeforeInit={(swiper: any) => {
							swiper.params.navigation.prevEl = navigationPrevRef.current;
							swiper.params.navigation.nextEl = navigationNextRef.current;
						}}
						className="w-full flex justify-center items-center"
					>
						{Themes.map((item) => (
							<SwiperSlide
								key={item.id}
								className="flex flex-col justify-center items-center group cursor-pointer"
							>
								<LazyLoadImage
									src={item.image}
									alt={item.name}
									className="w-[158px] h-[158px] relative"
								/>
								<div className="absolute text-white bottom-2">
									<h3 className="text-sm leading-6 font-medium	text-center">{item.name}</h3>
									<p className="text-[10px] leading-6 font-medium	text-center">
										{item.quantity} việc làm
									</p>
								</div>
							</SwiperSlide>
						))}
						<div
							ref={navigationPrevRef}
							className="absolute z-10 flex items-center justify-center transform -translate-y-2 bg-white rounded-full opacity-75 cursor-pointer left-0 h-[50px] w-[50px] "
						>
							<span className="hidden sm:block">
								<ChevronLeftIcon className="w-7 h-7 text-gray-3" />
							</span>
						</div>
						<div
							ref={navigationNextRef}
							className="absolute z-10 flex items-center justify-center transform -translate-y-2 bg-white rounded-full opacity-75 cursor-pointer right-0 h-[50px] w-[50px]"
						>
							<span className="hidden sm:block">
								<ChevronRightIcon className="w-7 h-7 text-gray-3" />
							</span>
						</div>
					</Swiper>
					<div className="h-px w-full sm:w-full bg-gray-4"></div>
				</div>
			</div>
			<div className="flex w-full justify-center">
				<div className="flex w-full max-w-container justify-center items-center">
					<PaginatedItems itemsPerPage={12} filter={''} />
				</div>
			</div>
		</>
	);
};
