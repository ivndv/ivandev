import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe("Header Component", () => {
	const renderHeader = () =>
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>,
		);

	it("renders the logo image", () => {
		renderHeader();

		const logo = screen.getByAltText(/logo/i);
		expect(logo).toBeInTheDocument();
	});

	it("renders navigation links", () => {
		renderHeader();

		const nav = screen.getAllByRole("navigation")[0];
		expect(nav).toBeInTheDocument();
	});

	it("toggles mobile menu when hamburger button is clicked", () => {
		renderHeader();

		const buttons = screen.getAllByRole("button");
		const menuButton = buttons[buttons.length - 1];

		const navLinks = document.querySelectorAll("nav a");
		const desktopCount = navLinks.length;

		fireEvent.click(menuButton);

		const allLinks = document.querySelectorAll("a");
		expect(allLinks.length).toBeGreaterThan(desktopCount);

		fireEvent.click(menuButton);

		const linksAfterClose = document.querySelectorAll("nav a");
		expect(linksAfterClose.length).toBe(desktopCount);
	});
});
