import PropTypes from 'prop-types';

import {
  StatisticWrapper,
  StatisticTitle,
  StatisticList,
  StatisticItem,
  StatisticText,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticWrapper>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticList>
        {stats.map(stat => {
          return (
            <StatisticItem key={stat.id}>
              <StatisticText>{stat.label}</StatisticText>
              <StatisticText>{stat.percentage}%</StatisticText>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </StatisticWrapper>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
