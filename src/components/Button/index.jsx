import PropTypes from 'prop-types';

/**
 * A button component
 *
 * @param {object} props The props for the component
 * @param {React.ReactNode} props.children The children of the button
 * @param {Function} props.onClick The click handler for the button
 * @returns {JSX.Element} The button component
 */
export default function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
