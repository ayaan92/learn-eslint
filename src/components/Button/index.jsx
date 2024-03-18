import PropTypes from 'prop-types';

/**
 * A button component
 *
 * @param {React.ReactNode} children The children of the button
 * @returns {JSX.Element} The button component
 */
export default function Button({ children }) {
  return <button>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
