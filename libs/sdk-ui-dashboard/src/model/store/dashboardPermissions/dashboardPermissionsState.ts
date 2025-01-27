// (C) 2022-2023 GoodData Corporation

import { IDashboardPermissions } from "@gooddata/sdk-model";

/**
 * @alpha
 */
export interface DashboardPermissionsState {
    dashboardPermissions?: IDashboardPermissions;
}

export const dashboardPermissionsInitialState: DashboardPermissionsState = {
    dashboardPermissions: undefined,
};
