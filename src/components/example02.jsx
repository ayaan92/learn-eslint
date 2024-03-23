import PropTypes from 'prop-types';

/**
 * Example02 component
 *
 * @param {object} props The props for the component
 * @param {React.ReactNode} props.children The children
 * @returns {JSX.Element} The children
 */
export default function Example02({ children }) {
  console.log('### Example02 re-rendered');

  return <div>{children}</div>;
}

Example02.propTypes = {
  children: PropTypes.node.isRequired,
};
