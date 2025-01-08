import { useUserStore } from '@/store/system';

interface IAuthProps {
  type: '401' | '403';
}

const NoAuth: React.FC<IAuthProps> = (props) => {
  const { type } = props;

  const reset = useUserStore((state) => state.reset);

  const handleLogout = () => {
    reset();
    // logout()
    //   .then(() => null)
    //   .catch(() => {});
  };

  return (
    <div>
      <h1>403</h1>
      <p>Sorry, you are not authorized to access this page.</p>
      {type === '403' && <button>Back</button>}
      {type === '401' && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default NoAuth;
