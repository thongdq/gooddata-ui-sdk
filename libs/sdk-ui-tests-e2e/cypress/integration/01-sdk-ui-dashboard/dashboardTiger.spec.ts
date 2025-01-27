// (C) 2021 GoodData Corporation

import * as Navigation from "../../tools/navigation";
import { Dashboard, FilterBar, TopBar } from "../../tools/dashboards";

Cypress.Cookies.defaults({
    preserve: ["GDCAuthTT", "GDCAuthSTT", "_csrfToken"],
});

Cypress.on("uncaught:exception", (error) => {
    // eslint-disable-next-line no-console
    console.error("Uncaught excepton cause", error);
    return false;
});

Cypress.Cookies.debug(true);

describe("Dashboard", { tags: ["pre-merge_isolated_tiger"] }, () => {
    describe("TopBar rendering", () => {
        beforeEach(() => {
            cy.login();

            Navigation.visit("dashboard/dashboard-tiger");
        });

        it("should render topBar", () => {
            const dashboard = new Dashboard();

            dashboard.topBarExist();
        });

        // eslint-disable-next-line jest/no-disabled-tests
        it.skip("should render title", () => {
            const topBar = new TopBar();

            topBar.dashboardTitleExist().dashboardTitleHasValue("Test dashboard");
        });

        it("should not render edit button", () => {
            const topBar = new TopBar();
            const dashboard = new Dashboard();

            dashboard.topBarExist();
            topBar.editButtonIsVisible(false);
        });

        it("should menu button render", () => {
            const topBar = new TopBar();

            topBar.menuButtonIsVisible();
        });

        // eslint-disable-next-line jest/no-disabled-tests
        it.skip("should open menu button and contain items", () => {
            const topBar = new TopBar();

            topBar
                .menuButtonIsVisible()
                .clickMenuButton()
                .topBarMenuItemExist(".s-export_to_pdf")
                .topBarMenuItemExist(".s-schedule_emailing");
        });
    });

    describe("FilterBar rendering", () => {
        beforeEach(() => {
            cy.login();

            Navigation.visit("dashboard/dashboard-tiger");
        });

        it("should render filter bar", () => {
            const dashboard = new Dashboard();

            dashboard.filterBarExist();
        });

        it("should render date filter", () => {
            const filterBar = new FilterBar();

            filterBar
                .dateFilterExist()
                .dateFilterHasTitle("Date range")
                .clickDateFilter()
                .dateFilterHasElements([
                    ".s-all-time",
                    ".s-exclude-current-perod-disabled",
                    ".s-date-filter-cancel",
                    ".s-date-filter-apply",
                ]);
        });

        // eslint-disable-next-line jest/no-disabled-tests
        it.skip("should change the filter", () => {
            const filterBar = new FilterBar();

            filterBar
                .dateFilterExist()
                .dateFilterHasSubtitle("All time")
                .clickDateFilter()
                .selectDateFilterOption(".s-relative-preset-relative-last-7-days")
                .clickApply()
                .dateFilterHasSubtitle("Last 7 days");
        });
    });

    describe("Dashboard body rendering", () => {
        beforeEach(() => {
            cy.login();

            Navigation.visit("dashboard/dashboard");
        });

        // eslint-disable-next-line jest/no-disabled-tests
        it.skip("should render single insight", () => {
            const dashboard = new Dashboard();

            dashboard.dashboardBodyExist();
        });
    });
});
