import daysToXmas from "./index";

describe("daysToXmas", () => {
  it("returns correct value for dates before Dec 25, 2021", () => {
    const date1 = new Date("Dec 1, 2021");
    expect(daysToXmas(date1)).toBe(24);

    const date2 = new Date("Dec 24, 2021 00:00:01");
    expect(daysToXmas(date2)).toBe(1);

    const date3 = new Date("Dec 24, 2021 23:59:59");
    expect(daysToXmas(date3)).toBe(1);

    const date4 = new Date("December 20, 2021 03:24:00");
    expect(daysToXmas(date4)).toBe(5);
  });

  it("returns correct value for dates after Dec 25, 2021", () => {
    const date = new Date("Dec 25, 2021");
    expect(daysToXmas(date)).toBe(0);

    const date1 = new Date("Dec 26, 2021");
    expect(daysToXmas(date1)).toBe(-1);

    const date2 = new Date("Dec 31, 2021");
    expect(daysToXmas(date2)).toBe(-6);

    const date3 = new Date("Jan 1, 2022 00:00:01");
    expect(daysToXmas(date3)).toBe(-7); // -7

    const date4 = new Date("Jan 1, 2022 23:59:59");
    expect(daysToXmas(date4)).toBe(-7);
  });
});
