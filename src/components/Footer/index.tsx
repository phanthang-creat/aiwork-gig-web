import Link from 'next/link';
import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
	return (
		<>
			<div className="h-[0.5px] w-full sm:w-full bg-gray-4"></div>
			<div className="my-7 flex justify-center items-center w-full">
				<div
					className="w-full max-w-container h-auto flex
    justify-between"
				>
					<div className="flex flex-col gap-2">
						<LazyLoadImage src={'/images/logo/logoH2.png'} className="w-[50px] h-[60px]" />
						<h3 className="text-blue-1 font-bold text-lg leading-6">Kết nối tài năng</h3>
						<p className="mt-4 text-xs leading-[18px] font-medium text-gray-2">
							Công ty TNHH AI Works <br />
							Địa chỉ: 79 Quốc Hương, P. Thảo Điền, Quận 2, TP HCM <br />
							Mã số doanh nghiệp: 0316848075 <br />
							Đại diện pháp luật: Kim Dongha <br />
							Chức vụ: Giám đốc
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="uppercase text-sm text-blue-1 font-bold leading-[18px]">
							Tải ứng dụng hi job
						</h3>
						<div className="flex gap-8">
							<LazyLoadImage src={'/images/linkapp/qrcode.png'} className="w-[100px] h-[100px]" />
							<div className="flex flex-col gap-4">
								<Link href={'/'}>
									<LazyLoadImage src={'/images/linkapp/app-store.png'} className="w-[84px] h-6" />
								</Link>
								<Link href={'/'}>
									<LazyLoadImage src={'/images/linkapp/google-play.png'} className="w-[84px] h-6" />{' '}
								</Link>
								<Link href={'/'}>
									<LazyLoadImage src={'/images/linkapp/app-gallery.png'} className="w-[84px] h-6" />{' '}
								</Link>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<h3 className="uppercase text-sm text-blue-1 font-bold leading-[18px]">LIÊN KẾT</h3>
							<div className="flex gap-4">
								<Link href={'/'}>
									<LazyLoadImage
										src={'/images/linkapp/facebook.png'}
										className="w-[25px] h-[25px]"
									/>
								</Link>
								<Link href={'/'}>
									<LazyLoadImage
										src={'/images/linkapp/linkedin.png'}
										className="w-[25px] h-[25px]"
									/>
								</Link>
								<Link href={'/'}>
									<LazyLoadImage
										src={'/images/linkapp/youtube.png'}
										className="w-[25px] h-[25px]"
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-px w-full sm:w-full bg-gray-4"></div>
			<div className="w-full flex justify-center items-center my-2">
				<div className="w-full max-w-container flex justify-between">
					<Link href={'/'}>
						<p className="text-xs text-blue-1 font-medium leading-[18px] underline">
							Chính sách sử dụng
						</p>
					</Link>
					<div className="flex gap-10">
						<p className="text-xs font-medium leading-[18px]">
							Tổng đài chăm sóc khách hàng:{' '}
							<span className="text-gray-3 text-sm font-bold">19001234</span> (1.000 đồng/phút)
						</p>
						<a className="text-xs font-medium leading-[18px]" href="mailto:aiwords@gmail.com">
							Email: aiwords@gmail.com
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
