import { formatDate } from "./date";

describe("formateDate", () => {
    it("check format", () => {
        expect(formatDate(1700169393236, "yyyy")).toBe("2023");
    });
});
