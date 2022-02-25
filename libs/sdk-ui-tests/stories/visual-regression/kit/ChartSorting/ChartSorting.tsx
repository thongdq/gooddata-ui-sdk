// (C) 2022 GoodData Corporation
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { InternalIntlWrapper } from "@gooddata/sdk-ui-ext/dist/internal/utils/internalIntlProvider";
import { ChartSortingWithIntl, IBucketItemNames } from "@gooddata/sdk-ui-kit";
import { measureLocalId, attributeLocalId } from "@gooddata/sdk-model";
import { ExperimentalMd } from "@gooddata/experimental-workspace";

import { UiKit } from "../../../_infra/storyGroups";
import { withMultipleScreenshots, withScreenshot } from "../../../_infra/backstopWrapper";
import { wrapWithTheme } from "../../themeWrapper";
import { BackstopConfig } from "../../../_infra/backstopScenario";

import {
    singleAttributeSortConfig,
    singleAttributeWithSingleMetricSortConfig,
    singleAttributeWithMultipleMetrics,
    multipleAttributesMultipleMetricsSortConfig,
} from "./ChartSortingMock";

const wrapperStyle = { width: 400, height: 800, padding: "1em 1em" };

const dropdownSingleAttributeScenario: BackstopConfig = {
    default: {},
    attributeDropdownOpen: { clickSelectors: [".s-alphabetical-dropdown-button", 200] },
};

const dropdownSingleAttributeSingleMetricScenario: BackstopConfig = {
    default: {},
    attributeDropdownOpen: { clickSelectors: [".s-numerical-dropdown-button", 200] },
};
const dropdownMultipleAttributesMultipleMetricsSencario: BackstopConfig = {
    default: {},
    measureDropdownOpen: { clickSelectors: [".s-snapshot__m1_", 200] },
};

const bucketItemNames: IBucketItemNames = {
    [measureLocalId(ExperimentalMd.SnapshotEOP)]: {
        name: "Snapshot",
        sequenceNumber: "M1",
    },
    [measureLocalId(ExperimentalMd.TimelineEOP)]: {
        name: "Timeline",
        sequenceNumber: "M2",
    },
    [measureLocalId(ExperimentalMd.NrOfOpportunities)]: {
        name: "NrOfOppor.",
        sequenceNumber: "M3",
    },
    [attributeLocalId(ExperimentalMd.Account.Name)]: {
        name: "Account",
    },
    [attributeLocalId(ExperimentalMd.Activity.Default)]: {
        name: "Activity",
    },
};

storiesOf(`${UiKit}/ChartSorting`, module)
    .add("dropdown single attribute", () => {
        return withMultipleScreenshots(
            <div style={wrapperStyle} className="screenshot-target">
                <InternalIntlWrapper>
                    <ChartSortingWithIntl
                        bucketItemNames={bucketItemNames}
                        sortConfig={singleAttributeSortConfig}
                        onApply={action("apply")}
                        onCancel={action("cancel")}
                        enableRenamingMeasureToMetric={true}
                    />
                </InternalIntlWrapper>
            </div>,
            dropdownSingleAttributeScenario,
        );
    })
    .add("dropdown single attribute single metric", () => {
        return withMultipleScreenshots(
            <div style={wrapperStyle} className="screenshot-target">
                <InternalIntlWrapper>
                    <ChartSortingWithIntl
                        bucketItemNames={bucketItemNames}
                        sortConfig={singleAttributeWithSingleMetricSortConfig}
                        onApply={action("apply")}
                        onCancel={action("cancel")}
                        enableRenamingMeasureToMetric={true}
                    />
                </InternalIntlWrapper>
            </div>,
            dropdownSingleAttributeSingleMetricScenario,
        );
    })
    .add("dropdown single attribute multiple metrics", () => {
        return withScreenshot(
            <div style={wrapperStyle} className="screenshot-target">
                <InternalIntlWrapper>
                    <ChartSortingWithIntl
                        bucketItemNames={bucketItemNames}
                        sortConfig={singleAttributeWithMultipleMetrics}
                        onApply={action("apply")}
                        onCancel={action("cancel")}
                        enableRenamingMeasureToMetric={true}
                    />
                </InternalIntlWrapper>
            </div>,
        );
    })
    .add("dropdown multiple attributes multiple metrics", () => {
        return withMultipleScreenshots(
            <div style={wrapperStyle} className="screenshot-target">
                <InternalIntlWrapper>
                    <ChartSortingWithIntl
                        bucketItemNames={bucketItemNames}
                        sortConfig={multipleAttributesMultipleMetricsSortConfig}
                        onApply={action("apply")}
                        onCancel={action("cancel")}
                        enableRenamingMeasureToMetric={true}
                    />
                </InternalIntlWrapper>
            </div>,
            dropdownMultipleAttributesMultipleMetricsSencario,
        );
    })
    .add("themed", () => {
        return withScreenshot(
            wrapWithTheme(
                <div style={wrapperStyle} className="screenshot-target">
                    <InternalIntlWrapper>
                        <ChartSortingWithIntl
                            bucketItemNames={bucketItemNames}
                            sortConfig={multipleAttributesMultipleMetricsSortConfig}
                            onApply={action("apply")}
                            onCancel={action("cancel")}
                            enableRenamingMeasureToMetric={true}
                        />
                    </InternalIntlWrapper>
                </div>,
            ),
        );
    });