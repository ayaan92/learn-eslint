import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const themeContext = createContext(null);

/**
 * ContextProvider component
 *
 * @param {object} props The props for the component
 * @param {React.ReactNode} props.children The children of the button
 * @returns {JSX.Element} ContextProvider component
 */
export default function ContextProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const themeObj = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <themeContext.Provider value={themeObj}>{children}</themeContext.Provider>;
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
