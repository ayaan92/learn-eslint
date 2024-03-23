import PropTypes from 'prop-types';

/**
 * Example01 component
 *
 * @param {object} props The props for the component
 * @param {React.ReactNode} props.children The children
 * @returns {JSX.Element} The children
 */
export default function Example01({ children }) {
  console.log('### Example01 re-rendered');

  return <div>{children}</div>;
}

Example01.propTypes = {
  children: PropTypes.node.isRequired,
};
