"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
	const [searchText, setSearchtext] = useState("");

	const handleSearchChange = () => {};

	return (
		<section className="feed">
			<form className="relative w-full flex-center">
				<input
					type="text"
					onChange={handleSearchChange}
					value={searchText}
					placeholder="Search"
					className="search_input peer"
					required
				/>
			</form>
		</section>
	);
};

export default Feed;
