export const FooterSection = () => {
	return (
		<footer className="py-12">
			<div className="max-w-screen-xl mx-auto">
				<p className="text-sm text-gray-500 text-center">
					© {new Date().getFullYear()} Corey Hines. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};
