import PropTypes from 'prop-types';

const Card = ({ icon, title, amount, percentage, description, color }) => (
  <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
    <div className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr ${color} text-white shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center`}>
      {icon}
    </div>
    <div className="p-4 text-right">
      <p className="text-sm text-blue-gray-600">{title}</p>
      <h4 className="text-2xl font-semibold text-blue-gray-900">{amount}</h4>
    </div>
    <div className="border-t p-4">
      <p className="text-base text-blue-gray-600">
        <strong className={`${percentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>{percentage}%</strong> {description}
      </p>
    </div>
  </div>
);

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Card;
