// (C) 2022 GoodData Corporation
import React from "react";
import { IOptionsByDefinition } from "../types";
import { HeightSetting } from "./HeightSetting";
import { ToggleSwitch } from "./ToggleSwitch";

/**
 * @internal
 */
export interface IOptionsByDefinitionProps {
    option: IOptionsByDefinition;
    onChange: (opt: IOptionsByDefinition) => void;
}

/**
 * @internal
 */
export const OptionsByDefinition: React.VFC<IOptionsByDefinitionProps> = (props) => {
    const { option, onChange } = props;

    return (
        <div className="embed-insight-dialog-lang-selector">
            {/* // TODO text  */}
            <strong className="bottom-space">Other option</strong>

            <ToggleSwitch
                id={"include-configuration"}
                label={"Include configuration"} // TODO text
                questionMarkMessage={"Bla bla"} // TODO text
                checked={option.includeConfiguration}
                onChange={() => {
                    const opt = { ...option, includeConfiguration: !option.includeConfiguration };
                    onChange(opt);
                }}
            />

            <ToggleSwitch
                id={"custom-height"}
                label={"Custom height"} // TODO text
                checked={option.customHeight}
                onChange={() => {
                    const opt = { ...option, customHeight: !option.customHeight };
                    onChange(opt);
                }}
            />

            {option.customHeight && (
                <HeightSetting
                    value={option.height}
                    unit={option.unit}
                    onValueChange={(height, unit) => {
                        const opt = { ...option, height, unit };
                        onChange(opt);
                    }}
                />
            )}
        </div>
    );
};
