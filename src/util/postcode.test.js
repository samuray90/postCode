import { getLink } from ".";

describe("Postcode utility", () => {
	it("should generate the correct link", () => {
		const postcode = "ba23hh";
		const result = getLink(postcode);
		const expected = "/find/ba23hh";

		expect(result).toEqual(expected);
	});
});
