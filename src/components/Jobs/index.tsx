import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { JobCard } from '../Jobcard';
import ReactPaginate from 'react-paginate';
import { IJob } from '../Jobcard/job.interface';

interface JobsProps {}
const Categories = [
	{
		id: 1,
		name: 'Tất cả',
		image: '/images/category/all.png',
	},
	{
		id: 2,
		name: 'Dịch vụ',
		image: '/images/category/dich-vu.png',
	},
	{
		id: 3,
		name: 'Làm đẹp',
		image: '/images/category/lam-dep.png',
	},
	{
		id: 4,
		name: 'Giao hàng',
		image: '/images/category/giao-hang.png',
	},
	{
		id: 5,
		name: 'Khách sạn',
		image: '/images/category/khach-san.png',
	},
	{
		id: 6,
		name: 'Soạn thảo',
		image: '/images/category/soan-thao.png',
	},
	{
		id: 7,
		name: 'Gia sư',
		image: '/images/category/gia-su.png',
	},
	{
		id: 8,
		name: 'Dịch thuật',
		image: '/images/category/dich-thuat.png',
	},
	{
		id: 9,
		name: 'Chuyển nhà/ Vệ	sinh',
		image: '/images/category/chuyen-nha.png',
	},
	{
		id: 10,
		name: 'Thiết kế nội thất',
		image: '/images/category/thiet-ke-noi-that.png',
	},
	{
		id: 11,
		name: 'Thiết kế',
		image: '/images/category/thiet-ke.png',
	},
	{
		id: 12,
		name: 'IT/Programing',
		image: '/images/category/it.png',
	},
	{
		id: 13,
		name: 'Marketing',
		image: '/images/category/marketing.png',
	},
	{
		id: 14,
		name: 'Chụp ảnh',
		image: '/images/category/video.png',
	},
	{
		id: 15,
		name: 'Sự kiện',
		image: '/images/category/su-kien.png',
	},
	{
		id: 16,
		name: 'Chăm sóc thú cưng',
		image: '/images/category/pet-care.png',
	},
	{
		id: 17,
		name: 'Thời trang & Làm đẹp',
		image: '/images/category/make-up.png',
	},
	{
		id: 18,
		name: 'Thể thao',
		image: '/images/category/the-thao.png',
	},
	{
		id: 19,
		name: 'Pháp luật',
		image: '/images/category/thiet-ke.png',
	},
	{
		id: 20,
		name: 'Tư vấn kỹ năng',
		image: '/images/category/psychology.png',
	},
	{
		id: 21,
		name: 'Nghề thủ công',
		image: '/images/category/thu-cong.png',
	},

	{
		id: 22,
		name: 'Sinh hoạt/ Giúp việc',
		image: '/images/category/giup-viec.png',
	},
];
const Items = ({ currentItems, filter }) => {
	return (
		<>
			<div className="w-full flex flex-col max-w-container justify-center items-center gap-4">
				<div className="grid grid-cols-3 gap-x-10 gap-y-6">
					{filter === 'Tất cả'
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
	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
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

export const Jobs: React.FunctionComponent<JobsProps> = () => {
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);

	const [filter, setFilter] = React.useState('Tất cả');

	const handleCategoryChange = (event: any) => {
		setFilter(event.target.value);
	};

	React.useEffect(() => {
		handleCategoryChange;
	}, [filter]);

	return (
		<>
			<div className="w-full flex flex-col justify-center items-center py-10">
				<div className="w-full flex flex-col max-w-container justify-center items-center gap-4">
					<Swiper
						slidesPerView={12}
						spaceBetween={0}
						slidesPerGroup={2}
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
						{Categories.map((item) => (
							<SwiperSlide
								key={item.id}
								className="flex flex-col justify-center items-center gap-1 w-10 h-28 group cursor-pointer"
								onClick={() => setFilter(item.name)}
							>
								<LazyLoadImage src={item.image} alt={item.name} className="w-12 h-12" />
								<h3 className="text-xs leading-6 font-medium	 text-center">{item.name}</h3>
								<span
									className={clsx(
										'block w-full h-1 bg-inherit group-hover:bg-blue-1',
										filter === item.name && 'bg-blue-1',
									)}
								></span>
							</SwiperSlide>
						))}
						<div
							ref={navigationPrevRef}
							className="absolute z-10 flex items-center justify-center transform -translate-y-6 bg-white rounded-full opacity-90 cursor-pointer h-6 w-6 left-0"
						>
							<span className="hidden sm:block">
								<ChevronLeftIcon className="w-4 h-4 text-gray-3" />
							</span>
						</div>
						<div
							ref={navigationNextRef}
							className="absolute z-10 flex items-center justify-center transform -translate-y-6 bg-white rounded-full opacity-90 cursor-pointer right-0 h-6 w-6"
						>
							<span className="hidden sm:block">
								<ChevronRightIcon className="w-4 h-4 text-gray-3" />
							</span>
						</div>
					</Swiper>
					<div className="h-px w-full sm:w-full bg-gray-4"></div>
				</div>
				<div className="w-full max-w-container justify-start">
					<div className="flex items-start py-7 px-0 gap-2 w-full">
						<div className="flex justify-center items-center py-1 px-4 border-[0.5px] border-solid border-blue-1 rounded-[10px]">
							<p className="text-base font-normal text-blue-1">Dịch vụ</p>
						</div>
						<select
							className="flex justify-center items-center py-1 px-8 border-[0.5px] border-solid border-blue-1 rounded-[10px] text-blue-1 focus:ring-blue-1 focus:border-blue-1 w-auto"
							name="category-list"
							id="category-list"
							value={filter}
							onChange={handleCategoryChange}
						>
							{Categories.map((item) => {
								return (
									<option key={item.id} className="text-base font-normal text-blue-1">
										{item.name}
									</option>
								);
							})}
						</select>
					</div>
				</div>
			</div>
			<div className="flex w-full justify-center">
				<div className="flex w-full max-w-container justify-center items-center">
					<PaginatedItems itemsPerPage={12} filter={filter} />
				</div>
			</div>
		</>
	);
};
