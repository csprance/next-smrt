/** getPageContext
 * project: eibot
 * author: Chris Sprance - csprance
 * description:
 */
import { SheetsRegistry } from 'jss';
import {
  createMuiTheme,
  createGenerateClassName
} from '@material-ui/core/styles';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  const { browser } = process as any;
  let { __INIT_MATERIAL_UI__ } = global as any;
  if (!browser) {
    return createPageContext();
  }
  // Reuse context on the client-side.
  if (!__INIT_MATERIAL_UI__) {
    __INIT_MATERIAL_UI__ = createPageContext();
  }
  return __INIT_MATERIAL_UI__;
}
