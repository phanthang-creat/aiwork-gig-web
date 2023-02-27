import { Banner } from '../../components/Banner';
import { Jobs } from '../../components/Jobs';
import { JobsWithThemed } from '../../components/JobsWithThemed';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
	return (
		<div className="flex flex-col gap-10 py-10">
			<Banner />
			<Jobs />
			<JobsWithThemed />
		</div>
	);
};

export default Home;
