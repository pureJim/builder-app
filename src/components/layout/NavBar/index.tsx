import { Link } from 'react-router';

import { usePlatformStore } from '@/store/system';
import { NavbarWrapper } from './style';

const GlobalHeaderRight: React.FC = () => {
  const breadcrumbList = usePlatformStore((state) => state.breadcrumbList);

  return (
    <NavbarWrapper>
      <div>
        {breadcrumbList.map((item) => {
          return (
            <Link to={item.routePath} key={item.key}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </NavbarWrapper>
  );
};
export default GlobalHeaderRight;
