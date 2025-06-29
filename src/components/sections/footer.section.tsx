export const FooterSection = () => {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-screen-xl">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Corey Hines. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
