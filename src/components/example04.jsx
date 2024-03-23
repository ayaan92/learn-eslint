import { useCallback, useContext } from 'react';
import { themeContext } from '../providers/ContextProvider';
import Button from './Button';

/**
 * Example04 component
 *
 * @returns {JSX.Element} The children
 */
export default function Example04() {
  const themeObj = useContext(themeContext);
  const onClick = useCallback(() => {
    themeObj.setTheme(themeObj.theme === 'light' ? 'dark' : 'light');
  }, [themeObj.setTheme]);

  console.log('### Example04 re-rendered');

  return (
    <div>
      <div>{themeObj.theme}</div>
      <Button onClick={onClick}>theme change button</Button>
    </div>
  );
}

Example04.propTypes = {};
