import Button from "../../components/common/Button";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center">
      <h1 className="pt-40 text-6xl font-bold text-gray-700">404</h1>
      <p className="text-gray-500">Page not found</p>

      <Button variant="primary" size="large" className="mt-4" to="/">
        Go back to home
      </Button>
    </div>
  );
};

export default NotFound;
