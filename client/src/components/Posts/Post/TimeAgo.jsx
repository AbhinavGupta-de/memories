import { formatDistanceToNow } from 'date-fns';

const TimeAgo = ({ date }) => {
	const formattedDate = formatDistanceToNow(new Date(date), {
		addSuffix: true,
	});

	return <span>{formattedDate}</span>;
};

export default TimeAgo;
