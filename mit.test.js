var utils = require("course-utilities");
var mit = utils.load("./mit.js", "mit");

describe("MIT", () => {
	test("Object properties present", () => {
		expect(mit).toHaveProperty("city");
		expect(mit).toHaveProperty("colors");
		expect(mit).toHaveProperty("mascot");
	});

	test("City match", () => {
		expect(mit.city).toBe("Cambridge");
	});
	//initial mit.js has pink and red vice Silver Gray
	//adjust file to contain Silver Gray
	test("Colors match", () => {
		expect(mit.colors).toContain("Silver Gray");
	});
	//initial mit.js had 1900 which is outside the range tested for
	//adjust file to include 1900 in range tested for
	test("Founded range", () => {
		expect(mit.founded).toBeLessThanOrEqual(1875);
		expect(mit.founded).toBeGreaterThanOrEqual(1850);
	});
	//initial mit.js has carpe diem not "Mens"
	//adjust test to match carpe diem
	test("Motto", () => {
		expect(mit.motto).toMatch("Mens et Manus");
	});
});
