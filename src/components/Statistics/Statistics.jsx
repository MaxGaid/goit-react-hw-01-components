import PropTypes from 'prop-types';
import {
  Statisctic,
  StatisticTitle,
  StatisticList,
  StatisticListItem,
  StatisticSpan,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Statisctic>
      <StatisticTitle>{title}</StatisticTitle>

      <StatisticList>
        {stats.map(stat => {
          const { label, percentage, id } = stat;
          return (
            <StatisticListItem key={id}>
              <StatisticSpan>{label}</StatisticSpan>
              <StatisticSpan>{percentage}%</StatisticSpan>
            </StatisticListItem>
          );
        })}
      </StatisticList>
    </Statisctic>
  );
};

Statisctic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
