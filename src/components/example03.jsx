import PropTypes from 'prop-types';

/**
 * Example03 component
 *
 * @param {object} props The props for the component
 * @param {React.ReactNode} props.children The children
 * @returns {JSX.Element} The children
 */
export default function Example03({ children }) {
  console.log('### Example03 re-rendered');

  return <div>{children}</div>;
}

Example03.propTypes = {
  children: PropTypes.node.isRequired,
};
