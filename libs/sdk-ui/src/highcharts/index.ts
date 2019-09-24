// (C) 2019 GoodData Corporation
export { IChartConfig } from "./Config";
import Chart from "./chart/Chart";
import ChartTransformation from "./chart/ChartTransformation";
export { Chart, ChartTransformation };
export { Visualization } from "./Visualization";

export { FLUID_LEGEND_THRESHOLD } from "./chart/HighChartsRenderer";
export { COMBO_SUPPORTED_CHARTS } from "./chart/chartOptions/comboChartOptions";

// TODO: SDK8: this should go away; its exported for drills
export { createDrillIntersectionElement } from "./utils/drilldownEventing";

// TODO: SDK8: this should go away; proptypes need to be generated and placed elsewhere
export { AfmPropTypesShape, ResultSpecPropTypesShape, FiltersPropTypesShape } from "./proptypes/execution";
