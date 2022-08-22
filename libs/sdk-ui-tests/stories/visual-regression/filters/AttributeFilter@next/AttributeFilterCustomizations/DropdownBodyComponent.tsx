// (C) 2022 GoodData Corporation
import React from "react";
import { ReferenceMd } from "@gooddata/reference-workspace";
import { newNegativeAttributeFilter } from "@gooddata/sdk-model";
import { AttributeFilterV2, IAttributeFilterDropdownBodyProps } from "@gooddata/sdk-ui-filters";
import { action } from "@storybook/addon-actions";

import { storiesOf } from "../../../../_infra/storyRepository";
import { FilterStories } from "../../../../_infra/storyGroups";
import { ReferenceWorkspaceId, StorybookBackend } from "../../../../_infra/backend";

import "@gooddata/sdk-ui-filters/styles/css/attributeFilterNext.css";

const wrapperStyle = { width: 400, height: 800, padding: "1em 1em" };
const backend = StorybookBackend();

const CustomDropdownBody = (_props: IAttributeFilterDropdownBodyProps) => {
    return (
        <div
            style={{
                border: "2px solid black",
                display: "flex",
                margin: 0,
                justifyContent: "center",
                background: "cyan",
                alignItems: "center",
                padding: 10,
            }}
        >
            Custom dropdown body content
        </div>
    );
};

storiesOf(`${FilterStories}@next/Customization/DropdownBodyComponent`).add("Custom component", () => {
    return (
        <div style={wrapperStyle} className="screenshot-target">
            <AttributeFilterV2
                backend={backend}
                workspace={ReferenceWorkspaceId}
                filter={newNegativeAttributeFilter(ReferenceMd.Product.Name, [])}
                onApply={action("onApply")}
                DropdownBodyComponent={CustomDropdownBody}
            />
        </div>
    );
});