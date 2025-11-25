import '../styles/globalStyles.scss';
import { ChildrenFC } from '../utils/types';

const RootLayout: ChildrenFC = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
