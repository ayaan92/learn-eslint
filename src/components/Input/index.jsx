import PropTypes from 'prop-types';

/**
 * Renders an input element.
 *
 * @param {object} props The props for the component.
 * @param {string} [props.type='text'] The type of the input. Default is `'text'`
 * @returns {JSX.Element} The input element.
 */
export default function Input({ type = 'text' }) {
  return <input type={type} />;
}

Input.propTypes = {
  type: PropTypes.string,
};
