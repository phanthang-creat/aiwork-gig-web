import { ClockIcon, CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IJob } from './job.interface';

interface JobCardProps {
	jobs?: IJob[];
}

export const JobCard: React.FunctionComponent<JobCardProps> = ({ jobs = [] }) => {
	return (
		<>
			<div className="flex flex-col items-start w-full max-w-[344px] h-[120px] filter rounded-[5px] drop-shadow">
				{jobs.map((item) => (
					<div
						key={`job-${item.id}`}
						className="flex items-center p-[10px] gap-[18px] w-[344px] h-full bg-white rounded-[5px]"
					>
						<LazyLoadImage
							src={item.image}
							alt={item.nameJob}
							className="w-[100px] h-[100px] rounded-[5px]"
						/>
						<div className="flex flex-col items-start gap-[2px] leading-[18px]">
							<h4 className="text-black text-base font-bold ">{item.nameJob}</h4>
							<h5 className="text-xs text-gray-2 ">{item.nameCompany}</h5>
							<div className="flex gap-1 justify-center items-center">
								<MapPinIcon className="w-3 h-3" />
								<p className="text-xs text-gray-2">{item.location}</p>
							</div>
							<div className="flex gap-1 justify-center items-center">
								<ClockIcon className="w-3 h-3" />
								<p className="text-xs text-gray-2">{item.time}</p>
							</div>
							<div className="flex gap-1 justify-center items-center">
								<CurrencyDollarIcon className="w-3 h-3" />
								<p className="text-xs text-gray-2">
									{item.salary}
									<span>VND</span>
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
