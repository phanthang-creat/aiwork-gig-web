import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Import Swiper styles

import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

interface BannerProps {}
const sliderItem = [
	{
		id: 1,
		image: '/images/banner/banner.png',
	},
	{
		id: 2,
		image: '/images/banner/banner.png',
	},
	{
		id: 3,
		image: '/images/banner/banner.png',
	},
	{
		id: 4,
		image: '/images/banner/banner.png',
	},
];

export const Banner: React.FunctionComponent<BannerProps> = () => {
	return (
		<div className="w-full">
			<Swiper
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination]}
				// autoplay={{
				// 	delay: 5000,
				// 	disableOnInteraction: false,
				// }}
				className="mySwiper"
			>
				{sliderItem.map((item) => (
					<SwiperSlide key={`slider-${item.id}}`} className="w-full h-full">
						<LazyLoadImage src={item.image} alt={item.image} className="w-full" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
