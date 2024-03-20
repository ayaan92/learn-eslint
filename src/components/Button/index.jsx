import PropTypes from 'prop-types';

/**
 * A button component
 *
 * @function
 * @param {object} props The props for the component
 * @param {React.ReactNode} props.children The children of the button
 * @returns {JSX.Element} The button component
 */
export default function Button({ children }) {
  return <button>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
